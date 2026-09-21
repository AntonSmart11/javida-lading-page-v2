<template>
  <div :class="modoSplit ? 'w-full' : 'py-20 bg-javida-light'">
    <div :class="modoSplit ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'">
      <!-- Encabezado condicional (solo cuando no está en modo split) -->
      <div v-if="mostrarEncabezado && !modoSplit" class="text-center mb-12">
        <h2
          class="text-3xl font-bold uppercase tracking-wider text-javida-primary mb-2"
        >
          Contáctanos
        </h2>
        <p class="text-javida-muted text-base">
          Envíanos un mensaje y un especialista técnico se comunicará a la
          brevedad.
        </p>
      </div>

      <!-- Contenedor del Formulario -->
      <div
        :class="
          modoSplit
            ? 'w-full'
            : 'max-w-3xl mx-auto bg-white rounded-2xl border border-javida-border p-8 sm:p-10 shadow-xs'
        "
      >
        <form
          @submit.prevent="enviarFormulario"
          novalidate
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
        >
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Nombre *</label
            >
            <input
              v-model="contacto.nombre"
              @input="limpiarError('nombre')"
              type="text"
              placeholder="Tu nombre"
              :class="[
                'w-full px-3.5 py-2.5 bg-javida-light border rounded-lg text-sm transition-all focus:outline-hidden focus:bg-white',
                errores.nombre
                  ? 'border-red-500 ring-2 ring-red-500/10'
                  : 'border-javida-border focus:border-javida-accent focus:ring-3 focus:ring-blue-500/10',
              ]"
            />

            <p
              v-if="errores.nombre"
              class="text-red-500 text-xs mt-1.5 font-medium"
            >
              {{ errores.nombre }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Apellido(s) *</label
            >
            <input
              v-model="contacto.apellido"
              @input="limpiarError('apellido')"
              type="text"
              placeholder="Tu apellido"
              :class="[
                'w-full px-3.5 py-2.5 bg-javida-light border rounded-lg text-sm transition-all focus:outline-hidden focus:bg-white',
                errores.apellido
                  ? 'border-red-500 ring-2 ring-red-500/10'
                  : 'border-javida-border focus:border-javida-accent focus:ring-3 focus:ring-blue-500/10',
              ]"
            />

            <p
              v-if="errores.apellido"
              class="text-red-500 text-xs mt-1.5 font-medium"
            >
              {{ errores.apellido }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Empresa *</label
            >
            <input
              v-model="contacto.empresa"
              @input="limpiarError('empresa')"
              type="text"
              placeholder="Nombre de la compañía"
              :class="[
                'w-full px-3.5 py-2.5 bg-javida-light border rounded-lg text-sm transition-all focus:outline-hidden focus:bg-white',
                errores.empresa
                  ? 'border-red-500 ring-2 ring-red-500/10'
                  : 'border-javida-border focus:border-javida-accent focus:ring-3 focus:ring-blue-500/10',
              ]"
            />

            <p
              v-if="errores.empresa"
              class="text-red-500 text-xs mt-1.5 font-medium"
            >
              {{ errores.empresa }}
            </p>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Teléfono *</label
            >
            <input
              v-model="contacto.telefono"
              @input="limpiarError('telefono')"
              type="tel"
              placeholder="(993) 000 0000"
              :class="[
                'w-full px-3.5 py-2.5 bg-javida-light border rounded-lg text-sm transition-all focus:outline-hidden focus:bg-white',
                errores.telefono
                  ? 'border-red-500 ring-2 ring-red-500/10'
                  : 'border-javida-border focus:border-javida-accent focus:ring-3 focus:ring-blue-500/10',
              ]"
            />

            <p
              v-if="errores.telefono"
              class="text-red-500 text-xs mt-1.5 font-medium"
            >
              {{ errores.telefono }}
            </p>
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Correo Electrónico *</label
            >
            <input
              v-model="contacto.correo"
              @input="limpiarError('correo')"
              type="email"
              placeholder="correo@ejemplo.com"
              :class="[
                'w-full px-3.5 py-2.5 bg-javida-light border rounded-lg text-sm transition-all focus:outline-hidden focus:bg-white',
                errores.correo
                  ? 'border-red-500 ring-2 ring-red-500/10'
                  : 'border-javida-border focus:border-javida-accent focus:ring-3 focus:ring-blue-500/10',
              ]"
            />

            <p
              v-if="errores.correo"
              class="text-red-500 text-xs mt-1.5 font-medium"
            >
              {{ errores.correo }}
            </p>
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Servicio *</label
            >

            <div class="relative">
              <select
                v-model="contacto.servicio"
                @change="limpiarError('servicio')"
                :class="[
                  'w-full px-3.5 pr-10 py-2.5 bg-javida-light border rounded-lg text-sm transition-all focus:outline-hidden focus:bg-white appearance-none cursor-pointer',
                  !contacto.servicio ? 'text-slate-400' : 'text-slate-700',
                  errores.servicio
                    ? 'border-red-500 ring-2 ring-red-500/10'
                    : 'border-javida-border focus:border-javida-accent focus:ring-3 focus:ring-blue-500/10',
                ]"
              >
                <option value="" disabled selected class="text-slate-400">
                  Selecciona un servicio de interés
                </option>

                <!-- SERVICIOS TÉCNICOS ESPECÍFICOS -->
                <optgroup
                  label="Servicios Especializados"
                  class="text-slate-800 font-semibold bg-white"
                >
                  <option
                    value="hidrostatica"
                    class="text-slate-700 font-normal"
                  >
                    Pruebas Hidrostáticas
                  </option>
                  <option value="neumatica" class="text-slate-700 font-normal">
                    Pruebas Neumáticas
                  </option>
                  <option value="vacio" class="text-slate-700 font-normal">
                    Pruebas de Vacío
                  </option>
                  <option
                    value="mantenimiento"
                    class="text-slate-700 font-normal"
                  >
                    Mantenimiento a Válvulas y Equipos
                  </option>
                  <option value="torques" class="text-slate-700 font-normal">
                    Torque Controlado
                  </option>
                  <option value="spools" class="text-slate-700 font-normal">
                    Fabricación e Instalación de Spools
                  </option>
                  <option value="corte-frio" class="text-slate-700 font-normal">
                    Corte en Frío
                  </option>
                  <option
                    value="diablos-ductos"
                    class="text-slate-700 font-normal"
                  >
                    Corridas de Diablos y Mantenimiento a Trampas
                  </option>
                </optgroup>

                <optgroup
                  label="¿Duda con tu requerimiento o no aparece en la lista?"
                  class="text-slate-800 font-semibold bg-white"
                >
                  <option
                    value="asesoria"
                    class="text-javida-accent font-medium"
                  >
                    Asesoría Técnica Sin Costo (Te ayudamos a definirlo)
                  </option>
                </optgroup>
              </select>

              <p
                v-if="errores.servicio"
                class="text-red-500 text-xs mt-1.5 font-medium"
              >
                {{ errores.servicio }}
              </p>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Detalles del Requerimiento *</label
            >
            <textarea
              v-model="contacto.mensaje"
              @input="limpiarError('mensaje')"
              rows="4"
              placeholder="Indica detalles relevantes (ej. tipo de prueba, diámetros, presión de trabajo, ubicación del proyecto o problemática a resolver)..."
              :class="[
                'w-full px-3.5 py-2.5 bg-javida-light border rounded-lg text-sm transition-all focus:outline-hidden focus:bg-white',
                errores.mensaje
                  ? 'border-red-500 ring-2 ring-red-500/10'
                  : 'border-javida-border focus:border-javida-accent focus:ring-3 focus:ring-blue-500/10',
              ]"
            ></textarea>

            <p
              v-if="errores.mensaje"
              class="text-red-500 text-xs mt-1.5 font-medium"
            >
              {{ errores.mensaje }}
            </p>
          </div>

          <div
            class="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2"
          >
            <!-- Mock / Widget Captcha -->
            <div>
              <div
                id="google-recaptcha-container"
                class="min-h-[78px] flex items-center"
              ></div>

              <p
                v-if="errores.recaptcha"
                class="text-red-500 text-xs mt-1 font-medium"
              >
                {{ errores.recaptcha }}
              </p>
            </div>

            <!-- Botón Submit -->
            <button
              type="submit"
              :disabled="enviando"
              class="w-full sm:w-auto min-w-[170px] inline-flex items-center justify-center gap-2.5 bg-javida-accent hover:bg-javida-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-all shadow-sm disabled:opacity-60 cursor-pointer"
            >
              <svg
                v-if="enviando"
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>

              <span>{{ enviando ? "Enviando..." : "Enviar" }}</span>
              <font-awesome-icon
                v-if="!enviando"
                icon="fa-solid fa-paper-plane"
              />
            </button>
          </div>
        </form>

        <p class="text-[11px] text-javida-muted mt-4 text-left">
          * Campos obligatorios
        </p>
      </div>
    </div>

    <Transition name="notificacion-slide">
      <div
        v-if="notificacion.visible"
        class="fixed top-6 right-6 z-50 flex items-start gap-3.5 w-80 sm:w-96 p-4 bg-white rounded-xl shadow-xl border border-slate-100"
      >
        <div class="shrink-0 mt-5">
          <div
            v-if="notificacion.tipo === 'success'"
            class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm"
          >
            <font-awesome-icon icon="fa-solid fa-circle-check" />
          </div>
          <div
            v-else
            class="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm"
          >
            <font-awesome-icon icon="fa-solid fa-circle-xmark" />
          </div>
        </div>

        <div class="flex-1 pr-2">
          <h4 class="text-sm font-bold text-slate-800">
            {{ notificacion.titulo }}
          </h4>

          <p class="text-xs text-slate-600 mt-1 leading-relaxed">
            {{ notificacion.mensaje }}
          </p>
        </div>

        <button
          @click="notificacion.visible = false"
          class="shrink-0 text-slate-400 hover:text-slate-600 text-sm cursor-pointer p-1"
        >
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, Transition } from "vue";

const props = defineProps({
  mostrarEncabezado: {
    type: Boolean,
    default: true,
  },
  modoSplit: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["submit-success"]);

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const API_URL = import.meta.env.VITE_API_URL || "/sendEmail.php";

const contacto = ref({
  nombre: "",
  apellido: "",
  empresa: "",
  telefono: "",
  correo: "",
  servicio: "",
  mensaje: "",
  recaptchaToken: "",
});

const errores = ref({
  nombre: "",
  apellido: "",
  empresa: "",
  telefono: "",
  correo: "",
  servicio: "",
  mensaje: "",
  recaptcha: "",
});

const enviando = ref(false);
const widgetId = ref(null);

const notificacion = ref({
  visible: false,
  tipo: "success",
  titulo: "",
  mensaje: "",
});

let timerNotificacion = null;

const mostrarNotificacion = (tipo, titulo, mensaje) => {
  if (timerNotificacion) clearTimeout(timerNotificacion);

  notificacion.value = {
    visible: true,
    tipo,
    titulo,
    mensaje,
  };

  timerNotificacion = setTimeout(() => {
    notificacion.value.visible = false;
  }, 5000);
};

const limpiarError = (campo) => {
  if (errores.value[campo]) {
    errores.value[campo] = "";
  }
};

// Cargar asíncrona de reCAPTCHA
const cargarScriptRecaptcha = () => {
  return new Promise((resolve) => {
    if (typeof window.grecaptcha !== "undefined" && window.grecaptcha.render) {
      resolve();
      return;
    }

    const idScript = "google-recaptcha-script";

    if (document.getElementById(idScript)) {
      const revisarIntervalo = setInterval(() => {
        if (
          typeof window.grecaptcha !== "undefined" &&
          window.grecaptcha.render
        ) {
          clearInterval();
          resolve();
        }
      }, 100);
      return;
    }

    const script = document.createElement("script");
    script.id = idScript;
    script.src =
      "https://www.google.com/recaptcha/api.js?render=explicit&hl=es";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const esperarObjeto = setInterval(() => {
        if (
          typeof window.grecaptcha !== "undefined" &&
          window.grecaptcha.render
        ) {
          clearInterval(esperarObjeto);
          resolve();
        }
      }, 100);
    };
    document.head.appendChild(script);
  });
};

const inicializarCaptcha = async () => {
  await cargarScriptRecaptcha();

  const contenedor = document.getElementById("google-recaptcha-container");
  if (contenedor && contenedor.children.length === 0) {
    widgetId.value = window.grecaptcha.render("google-recaptcha-container", {
      sitekey: SITE_KEY,
      callback: (token) => {
        contacto.value.recaptchaToken = token;
      },
      "expired-callback": () => {
        contacto.value.recaptchaToken = "";
      },
    });
  }
};

const validarCampos = () => {
  let valido = true;
  errores.value = {
    nombre: "",
    apellido: "",
    empresa: "",
    telefono: "",
    correo: "",
    recaptcha: "",
  };

  if (!contacto.value.nombre.trim()) {
    errores.value.nombre = "Este campo es obligatorio";
    valido = false;
  }

  if (!contacto.value.apellido.trim()) {
    errores.value.apellido = "Este campo es obligatorio";
    valido = false;
  }

  if (!contacto.value.empresa.trim()) {
    errores.value.empresa = "Este campo es obligatorio";
    valido = false;
  }

  if (!contacto.value.telefono.trim()) {
    errores.value.telefono = "Este campo es obligatorio";
    valido = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!contacto.value.correo.trim()) {
    errores.value.correo = "Este campo es obligatorio.";
    valido = false;
  } else if (!emailRegex.test(contacto.value.correo.trim())) {
    errores.value.correo = "Ingresa un correo electrónico válido.";
    valido = false;
  }

  if (!contacto.value.servicio.trim()) {
    errores.value.servicio = "Selecciona un servicio o solicita una asesoría.";
    valido = false;
  }

  if (!contacto.value.mensaje.trim()) {
    errores.value.mensaje = "Por favor describe el requerimiento.";
    valido = false;
  }

  if (!contacto.value.recaptchaToken) {
    errores.value.recaptcha = "Por favor resuelve el captcha";
    valido = false;
  }

  return valido;
};

const enviarFormulario = async () => {
  if (!validarCampos()) {
    return;
  }

  enviando.value = true;

  const payload = {
    nombre: contacto.value.nombre,
    apellido: contacto.value.apellido,
    empresa: contacto.value.empresa,
    telefono: contacto.value.telefono,
    correo: contacto.value.correo,
    servicio: contacto.value.servicio,
    mensaje: contacto.value.mensaje,
    "g-recaptcha-response": contacto.value.recaptchaToken,
  };

  try {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await respuesta.json();

    if (!respuesta.ok || data.status !== "success") {
      throw new Error(data.mensaje || "Error al procesar el mensaje.");
    }

    mostrarNotificacion(
      "success",
      "¡Mensaje enviado!",
      data.mensaje || "Gracias por contactarnos, responderemos a la brevedad.",
    );

    emit("submit-success", payload);

    contacto.value = {
      nombre: "",
      apellido: "",
      empresa: "",
      telefono: "",
      correo: "",
      servicio: "",
      mensaje: "",
      recaptchaToken: "",
    };

    if (typeof window.grecaptcha !== "undefined" && widgetId.value !== null) {
      window.grecaptcha.reset(widgetId.value);
    }
  } catch (err) {
    mostrarNotificacion(
      "error",
      "Hubo un problema",
      err.message || "Error de comunicación con el servidor.",
    );

    console.error(err);
  } finally {
    enviando.value = false;
  }
};

onMounted(() => {
  nextTick(() => {
    inicializarCaptcha();
  });
});
</script>

<style scoped>
/* Animación de entrada y salida lateral para la notificación */
.notificacion-slide-enter-active,
.notificacion-slide-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.notificacion-slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notificacion-slide-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
