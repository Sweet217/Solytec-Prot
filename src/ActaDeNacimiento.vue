<template>
  <!--Page 2-->
  <div class="flex flex-col items-center min-h-screen bg-white" id="nacimiento">
    <!-- Header Section -->
    <HeaderComponent></HeaderComponent>

    <div class="w-full p-0 pb-10 flex flex-col items-end text-right mr-20">
      <p class="text-lg font-semibold">Pagar con</p>
      <div class="flex space-x-2 mt-2">
        <img src="./images/image-removebg-preview.png" alt="Efectivo" class="w-20" />
        <img src="./images/card1.png" alt="Tarjeta" class="w-20" />
      </div>
    </div>

    <!-- Main Content Section -->
    <main class="w-full max-w-4xl px-8 py-5 bg-gray-50 rounded shadow mt-10">
      <div class="text-left mb-5">
        <h1 class="text-4xl font-bold text-gray-500">Acta de Nacimiento</h1>
      </div>

      <!-- CURP Input -->
      <div class="mb-4">
        <label class="text-xl font-semibold">CURP</label>
        <input
          type="text"
          v-model="curp"
          class="text-xl w-full p-2 mt-1 border border-gray-300 rounded placeholder-blue-500"
          placeholder="Ingrese CURP"
        />
      </div>

      <!-- Número de Copias and Total -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <label class="text-xl font-semibold mr-2">Número de Copias</label>
          <button @click="decrementCopies" class="p-2 bg-gray-200 rounded">-</button>
          <span class="text-xl px-4">{{ numberOfCopies }}</span>
          <button @click="incrementCopies" class="p-2 bg-gray-200 rounded">+</button>
        </div>
        <div class="text-right">
          <p class="text-3xl font-bold">TOTAL</p>
          <p class="text-4xl font-bold text-red-500">${{ total }}</p>
        </div>
      </div>

      <!-- Datos de la Persona Registrada -->
      <div class="border-t border-gray-300 pt-4 mb-4">
        <h2 class="text-lg font-semibold text-gray-500">
          Datos de la Persona Registrada
        </h2>
        <div class="grid grid-cols-3 gap-4 mt-3">
          <div>
            <label class="text-sm font-semibold block">Nombre(s):</label>
            <span class="block text-gray-600">---</span>
          </div>
          <div>
            <label class="text-sm font-semibold block">Primer Apellido:</label>
            <span class="block text-gray-600">---</span>
          </div>
          <div>
            <label class="text-sm font-semibold block">Segundo Apellido:</label>
            <span class="block text-gray-600">---</span>
          </div>
        </div>
      </div>

      <!-- Datos de Filiación de la Persona Registrada -->
      <div class="border-t border-gray-300 pt-4 mb-4">
        <h2 class="text-lg font-semibold text-gray-500">
          Datos de Filiación de la Persona Registrada
        </h2>
        <div class="grid grid-cols-5 gap-4 mt-3">
          <div>
            <label class="text-sm font-semibold block">Nombre(s):</label>
            <span class="block text-gray-600">---</span>
          </div>
          <div>
            <label class="text-sm font-semibold block">Primer Apellido:</label>
            <span class="block text-gray-600">---</span>
          </div>
          <div>
            <label class="text-sm font-semibold block">Segundo Apellido:</label>
            <span class="block text-gray-600">---</span>
          </div>
          <div>
            <label class="text-sm font-semibold block">Nacionalidad:</label>
            <span class="block text-gray-600">---</span>
          </div>
          <div>
            <label class="text-sm font-semibold block">CURP:</label>
            <span class="block text-gray-600">---</span>
          </div>
        </div>
        <div class="grid grid-cols-5 gap-4 mt-3">
          <div>
            <label class="text-sm font-semibold block">Nombre(s):</label>
            <span class="block text-gray-600">---</span>
          </div>
          <div>
            <label class="text-sm font-semibold block">Primer Apellido:</label>
            <span class="block text-gray-600">---</span>
          </div>
          <div>
            <label class="text-sm font-semibold block">Segundo Apellido:</label>
            <span class="block text-gray-600">---</span>
          </div>
          <div>
            <label class="text-sm font-semibold block">Nacionalidad:</label>
            <span class="block text-gray-600">---</span>
          </div>
          <div>
            <label class="text-sm font-semibold block">CURP:</label>
            <span class="block text-gray-600">---</span>
          </div>
        </div>
      </div>

      <!-- Printing Section -->
      <div class="flex items-center justify-center mt-5">
        <p class="text-lg font-semibold">Imprimir Documento</p>
        <img src="./images/printer.png" alt="Printing Icon" class="ml-3 w-10" />
      </div>
    </main>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      curp: "",
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      numberOfCopies: 1,
      pricePerCopy: 125,
    };
  },
  computed: {
    total() {
      return this.numberOfCopies * this.pricePerCopy;
    },
  },
  methods: {
    scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    },
    incrementCopies() {
      this.numberOfCopies++;
    },
    decrementCopies() {
      if (this.numberOfCopies > 1) {
        this.numberOfCopies--;
      }
    },
  },
};
</script>
