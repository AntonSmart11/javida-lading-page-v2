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
        <!-- Feedback de respuesta -->
        <div
          v-if="mensajeFeedback"
          :class="[
            'p-4 mb-6 rounded-lg text-sm font-medium border',
            esError
              ? 'bg-red-50 text-red-700 border-red-200'
              : 'bg-green-50 text-green-700 border-green-200',
          ]"
        >
          {{ mensajeFeedback }}
        </div>

        <form
          @submit.prevent="enviarFormulario"
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
        >
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Nombre *</label
            >
            <input
              v-model="contacto.nombre"
              type="text"
              placeholder="Tu nombre"
              required
              class="w-full px-3.5 py-2.5 bg-javida-light border border-javida-border rounded-lg text-sm focus:outline-hidden focus:border-javida-accent focus:bg-white focus:ring-3 focus:ring-blue-500/10 transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Apellido *</label
            >
            <input
              v-model="contacto.apellido"
              type="text"
              placeholder="Tu apellido"
              required
              class="w-full px-3.5 py-2.5 bg-javida-light border border-javida-border rounded-lg text-sm focus:outline-hidden focus:border-javida-accent focus:bg-white focus:ring-3 focus:ring-blue-500/10 transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Empresa *</label
            >
            <input
              v-model="contacto.empresa"
              type="text"
              placeholder="Nombre de la compañía"
              required
              class="w-full px-3.5 py-2.5 bg-javida-light border border-javida-border rounded-lg text-sm focus:outline-hidden focus:border-javida-accent focus:bg-white focus:ring-3 focus:ring-blue-500/10 transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Teléfono *</label
            >
            <input
              v-model="contacto.telefono"
              type="tel"
              placeholder="(993) 000 0000"
              required
              class="w-full px-3.5 py-2.5 bg-javida-light border border-javida-border rounded-lg text-sm focus:outline-hidden focus:border-javida-accent focus:bg-white focus:ring-3 focus:ring-blue-500/10 transition-all"
            />
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Correo Electrónico *</label
            >
            <input
              v-model="contacto.correo"
              type="email"
              placeholder="correo@ejemplo.com"
              required
              class="w-full px-3.5 py-2.5 bg-javida-light border border-javida-border rounded-lg text-sm focus:outline-hidden focus:border-javida-accent focus:bg-white focus:ring-3 focus:ring-blue-500/10 transition-all"
            />
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-semibold text-slate-700 mb-1"
              >Mensaje</label
            >
            <textarea
              v-model="contacto.mensaje"
              rows="4"
              placeholder="¿En qué servicio o prueba estás interesado?"
              class="w-full px-3.5 py-2.5 bg-javida-light border border-javida-border rounded-lg text-sm focus:outline-hidden focus:border-javida-accent focus:bg-white focus:ring-3 focus:ring-blue-500/10 transition-all"
            ></textarea>
          </div>

          <div
            class="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2"
          >
            <!-- Mock / Widget Captcha -->
            <div
              class="flex items-center gap-3 border border-slate-300 rounded px-4 py-2.5 bg-slate-50 text-xs text-slate-700 w-full sm:w-auto"
            >
              <input
                type="checkbox"
                id="captcha-check-component"
                v-model="contacto.captchaValido"
                class="w-5 h-5 rounded cursor-pointer"
              />
              <label for="captcha-check-component" class="cursor-pointer"
                >No soy un robot</label
              >
              <font-awesome-icon
                icon="fa-solid fa-rotate"
                class="ml-4 text-javida-muted"
              />
            </div>

            <!-- Botón Submit -->
            <button
              type="submit"
              :disabled="enviando"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-javida-accent hover:bg-javida-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-all shadow-sm disabled:opacity-50 cursor-pointer"
            >
              <span>{{ enviando ? "Enviando..." : "Enviar Mensaje" }}</span>
              <font-awesome-icon icon="fa-solid fa-paper-plane" />
            </button>
          </div>
        </form>

        <p class="text-[11px] text-javida-muted mt-4 text-left">
          * Campos obligatorios
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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

const contacto = ref({
  nombre: "",
  apellido: "",
  empresa: "",
  telefono: "",
  correo: "",
  mensaje: "",
  captchaValido: false,
});

const enviando = ref(false);
const mensajeFeedback = ref(null);
const esError = ref(false);

const enviarFormulario = async () => {
  enviando.value = true;
  mensajeFeedback.value = null;
  esError.value = false;

  try {
    console.log("Enviando datos:", contacto.value);
    mensajeFeedback.value =
      "Mensaje enviado exitosamente. Nos comunicaremos a la brevedad.";
    emit("submit-success", contacto.value);

    contacto.value = {
      nombre: "",
      apellido: "",
      empresa: "",
      telefono: "",
      correo: "",
      mensaje: "",
      captchaValido: false,
    };
  } catch (error) {
    esError.value = true;
    mensajeFeedback.value =
      "Hubo un error al enviar el formulario. Intenta nuevamente.";
    console.error(error);
  } finally {
    enviando.value = false;
  }
};
</script>

<style scoped></style>
