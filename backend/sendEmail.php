<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

date_default_timezone_set('America/Merida');

// CONFIGURATION
$recaptchaSecretKey = '6LcnGxsrAAAAAJTdoAOSOBduCjX-Vu7E-vqWJFkm';
$smtpHost = 'mail.javida.com.mx';
$smtpUser = 'javidagmail@javida.com.mx';
$smtpPass = 'javid@2025!!';
$smtpPort = 587;
$destEmail = 'aovando@javida.com.mx'; // ventas@javida.com.mx

$urlGoogleSheets = 'https://script.google.com/macros/s/AKfycbysvfyp0WZzKXlW3G7QzhvvsZQEEIeYRLFB14DMgmGs1XQGoq7nNsJ7vC6qomJifl7s/exec';

// HEADER
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'mensaje' => 'Método no permitido.']);
    exit();
}

// FRONTEND DATA
applyRateLimit(3, 86400);

$raw_input = file_get_contents('php://input');
$data = json_decode($raw_input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'mensaje' => 'Formato JSON inválido.']);
    exit();
}

// RECAPTCHA TOKEN
if (empty($data['g-recaptcha-response'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'mensaje' => 'Por favor completa el reCAPTCHA.']);
    exit();
}

$recaptchaResponse = $data['g-recaptcha-response'];

$postFields = [
    'secret' => $recaptchaSecretKey,
    'response' => $recaptchaResponse,
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
];

// Verification with Google
$ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postFields));
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

$verifyResponse = curl_exec($ch);
$curlError = curl_error($ch);

if ($verifyResponse === false) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'mensaje' => 'Error de conexión con Google reCaptcha',
        'debug_curl' => $curlError,
    ]);
    exit();
}

$recaptchaResult = json_decode($verifyResponse, true);

if (empty($recaptchaResult['success'])) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'mensaje' => 'La verificación del reCAPTCHA falló.',
        'google_error_codes' => $recaptchaResult['error-codes'] ?? [],
    ]);
    exit();
}

$requiredFields = ['nombre', 'apellido', 'empresa', 'correo', 'telefono', 'servicio', 'mensaje'];
foreach ($requiredFields as $field) {
    if (empty(trim($data[$field] ?? ''))) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'mensaje' => 'Por favor completa todos los campos obligatorios.']);
        exit();
    }
}

$nombre = htmlspecialchars(trim($data['nombre']));
$apellido = htmlspecialchars(trim($data['apellido']));
$empresa = htmlspecialchars(trim($data['empresa']));
$correo = filter_var(trim($data['correo']), FILTER_SANITIZE_EMAIL);
$telefono = htmlspecialchars(trim($data['telefono']));
$mensaje  = htmlspecialchars(trim($data['mensaje']), ENT_QUOTES, 'UTF-8');

$servicioClave = trim($data['servicio']);
$catalogoServicios = [
    'hidrostatica' => 'Pruebas Hidrostáticas',
    'neumatica' => 'Pruebas Neumáticas',
    'vacio' => 'Pruebas de Vacío',
    'mantenimiento' => 'Mantenimiento a Válvulas y Equipos',
    'torques' => 'Torque Controlado',
    'spools' => 'Fabricación e Instalación de Spools',
    'corte-frio' => 'Corte en Frío',
    'diablos-ductos' => 'Corridas de Diablos y Mantenimiento a Trampas',
    'asesoria' => 'Asesoría Técnica Sin Costo (Orientación de Proyecto)',
];

$servicioNombreCompleto = $catalogoServicios[$servicioClave] ?? htmlspecialchars($servicioClave, ENT_QUOTES, 'UTF-8');

function obtenerIP()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) return $_SERVER['HTTP_CLIENT_IP'];
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $partes = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        return trim($partes[0]);
    }
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

$ipUsuario = obtenerIP();

$fechaEnvio = date('d/m/Y');
$horaEnvio = date('h:i a');

$ubicacionTexto = "No disponible";
if ($ipUsuario !== '127.0.0.1' && $ipUsuario !== '::1' && !str_starts_with($ipUsuario, '192.168.')) {
    $urlApi = "https://ipapi.co/{$ipUsuario}/json/";

    $chGeo = curl_init($urlApi);
    curl_setopt($chGeo, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($chGeo, CURLOPT_TIMEOUT, 3);
    curl_setopt($chGeo, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($chGeo, CURLOPT_SSL_VERIFYPEER, false);

    curl_setopt($chGeo, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) JavidaForm/1.0');

    $rawGeo = curl_exec($chGeo);
    $errorGeo = curl_error($chGeo);
    $httpGeo  = curl_getinfo($chGeo, CURLINFO_HTTP_CODE);

    if ($rawGeo) {
        $dataGeo = json_decode($rawGeo, true);
        if (!empty($dataGeo) && empty($dataGeo['error'])) {
            $ciudad = $dataGeo['city'] ?? '';
            $estado = $dataGeo['region'] ?? '';
            $pais = $dataGeo['country_name'] ?? '';
            $postal = $dataGeo['postal'] ?? '';

            $partesUbicacion = array_filter([$ciudad, $estado, $pais, $postal]);
            $ubicacionTexto  = implode(', ', $partesUbicacion);
        }
    }
}

$rutaLogo = __DIR__ . '/assets/logo-javida.png';

// PHPMAILER
$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = SMTP::DEBUG_OFF;
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $smtpPort;

    $mail->setFrom($smtpUser, $nombre . ' ' . $apellido);
    $mail->addAddress($destEmail, 'Departamento de Ventas');
    $mail->addReplyTo($correo, $nombre . ' ' . $apellido);

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'Nuevo contacto: ' . $servicioNombreCompleto . ' - ' . $empresa;

    if (file_exists($rutaLogo)) {
        $mail->addEmbeddedImage($rutaLogo, 'logo_javida', 'logo-javida.png');
    }

    $mail->Body = '
        <!DOCTYPE html>
        <html>
            <head><meta charset="UTF-8"></head>
            <body style="margin: 0; padding: 30px 15px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">

                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                    <tr>
                        <td style="padding-bottom: 20px; text-align: left;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td>
                                        <a href="https://javida.com.mx" target="_blank" style="text-decoration: none;">
                                            <img 
                                                src="cid:logo_javida" 
                                                alt="Grupo Javida" 
                                                width="100" 
                                                style="display: block; width: 100px; max-width: 100px; height: auto; border: 0; outline: none;"
                                            />
                                        </a>
                                    </td>
                                    <td align="right">
                                        <span style="display: inline-block; padding: 4px 10px; background-color: #e0f2fe; color: #0369a1; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Nuevo Prospecto
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); overflow: hidden;">
                                
                                <tr>
                                    <td style="padding: 24px 28px; background: linear-gradient(135deg, #1e3a5f 0%, #152942 100%); color: #ffffff;">
                                        <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #60a5fa; display: block; margin-bottom: 4px;">
                                            Notificación Web
                                        </span>
                                        <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #64748b; line-height: 1.3;">
                                            Solicitud de Información / Cotización
                                        </h1>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding: 16px 28px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                                        <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 2px;">
                                            Servicio Solicitado:
                                        </span>
                                        <span style="font-size: 15px; font-weight: 700; color: #2563eb;">
                                            ' . $servicioNombreCompleto . '
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding: 24px 28px;">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                            
                                            <!-- FILA: CONTACTO Y EMPRESA -->
                                            <tr>
                                                <td width="50%" valign="top" style="padding-bottom: 18px; padding-right: 10px;">
                                                    <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px;">
                                                        Nombre del Contacto:
                                                    </span>
                                                    <span style="font-size: 14px; font-weight: 600; color: #0f172a;">
                                                        ' . $nombre . ' ' . $apellido . '
                                                    </span>
                                                </td>
                                                <td width="50%" valign="top" style="padding-bottom: 18px; padding-left: 10px;">
                                                    <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px;">
                                                        Empresa:
                                                    </span>
                                                    <span style="font-size: 14px; font-weight: 600; color: #0f172a;">
                                                        ' . $empresa . '
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td width="50%" valign="top" style="padding-bottom: 22px; padding-right: 10px;">
                                                    <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px;">
                                                        Correo Electrónico:
                                                    </span>
                                                    <a href="mailto:' . $correo . '" style="font-size: 13px; font-weight: 500; color: #2563eb; text-decoration: none; word-break: break-all;">
                                                        ' . $correo . '
                                                    </a>
                                                </td>
                                                <td width="50%" valign="top" style="padding-bottom: 22px; padding-left: 10px;">
                                                    <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px;">
                                                        Teléfono:
                                                    </span>
                                                    <a href="tel:' . $telefono . '" style="font-size: 13px; font-weight: 500; color: #0f172a; text-decoration: none;">
                                                        ' . $telefono . '
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colspan="2" style="padding-top: 6px;">
                                                    <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 6px;">
                                                        Detalles del Requerimiento:
                                                    </span>
                                                    <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; border-radius: 4px; padding: 14px 16px; font-size: 13px; line-height: 1.6; color: #334155; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                                                        ' . nl2br($mensaje) . '
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                    <!-- FOOTER DISCRETO -->
                    <tr>
                        <td style="padding-top: 20px; text-align: center; font-size: 11px; color: #94a3b8;">
                            Mensaje generado automáticamente desde el formulario web de <strong style="color: #64748b;">Grupo Javida</strong>.
                        </td>
                    </tr>

                </table>

            </body>
        </html>';

    $mail->AltBody = "Nuevo contacto recibido:\n\n" .
        "Nombre: {$nombre} {$apellido}\n" .
        "Empresa: {$empresa}\n" .
        "Correo: {$correo}\n" .
        "Teléfono: {$telefono}\n" .
        "Servicio: {$servicioNombreCompleto}\n\n" .
        "Detalles del Requerimiento:\n{$mensaje}";

    $mail->send();

    // REGISTRO AUTOMÁTICO EN GOOGLE SHEETS
    if (!empty($urlGoogleSheets)) {
        $payloadSheets = [
            'fecha'     => $fechaEnvio,
            'hora'      => $horaEnvio,
            'nombre'    => $nombre . ' ' . $apellido,
            'empresa'   => $empresa,
            'correo'    => $correo,
            'telefono'  => $telefono,
            'servicio'  => $servicioNombreCompleto,
            'mensaje'   => $mensaje,
            'ubicacion' => $ubicacionTexto,
            'ip'        => $ipUsuario
        ];

        $chSheet = curl_init($urlGoogleSheets);
        curl_setopt($chSheet, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($chSheet, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($chSheet, CURLOPT_POST, true);
        curl_setopt($chSheet, CURLOPT_POSTFIELDS, json_encode($payloadSheets));
        curl_setopt($chSheet, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($chSheet, CURLOPT_TIMEOUT, 6);
        curl_setopt($chSheet, CURLOPT_SSL_VERIFYPEER, false);

        $responseSheet = curl_exec($chSheet);
        $errorSheet = curl_error($chSheet);
        $httpCodeSheet = curl_getinfo($chSheet, CURLINFO_HTTP_CODE);
    }

    http_response_code(200);
    echo json_encode([
        'status' => 'success',
        'mensaje' => 'Correo enviado exitosamente.'
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => "error",
        'mensaje' => "Error al enviar el correo: {$mail->ErrorInfo}"
    ]);
}


// FUNCTION RATE LIMIT
function applyRateLimit($maxIntents = 3, $secondsPeriod = 86400)
{
    $fileTracking = __DIR__ . '/rate_limit.json';

    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $now = time();

    $records = [];
    if (file_exists($fileTracking)) {
        $content = file_get_contents($fileTracking);
        $records = json_decode($content, true) ?: [];
    }

    foreach ($records as $ipKey => $intents) {
        $records[$ipKey] = array_filter($intents, function ($timestamp) use ($now, $secondsPeriod) {
            return ($now - $timestamp) < $secondsPeriod;
        });

        if (empty($records[$ipKey])) {
            unset($records[$ipKey]);
        }
    }

    // Eval IP
    if (isset($records[$ip]) && count($records[$ip]) >= $maxIntents) {
        http_response_code(429);
        echo json_encode([
            'status' => 'error',
            'mensaje' => 'Has superado el límite de 3 mensajes por día. Por favor inténtalo de nuevo mañana.',
        ]);
        exit();
    }

    $records[$ip][] = $now;
    file_put_contents($fileTracking, json_encode($records), LOCK_EX);
}
