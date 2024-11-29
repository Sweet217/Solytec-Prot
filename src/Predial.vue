<template>
  <!--Page 3-->
  <div class="flex flex-col items-center min-h-screen bg-white" id="predial">
    <!-- Header Section -->
    <header class="w-full p-0 pb-10 flex items-center justify-between">
      <!-- Botón de retroceso -->
      <a href="/" class="ml-4 mr-4 text-gray-600 hover:text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </a>

      <!-- Logo de Solytec -->
      <img
        src="./images/solyteclogo.png"
        alt="Solytec Logo"
        class="ml-auto"
        style="width: 200px"
      />
    </header>

    <div class="w-full p-0 pb-10 flex flex-col items-end text-right mr-20">
      <p class="text-lg font-semibold">Pagar con</p>
      <div class="flex space-x-2 mt-2">
        <img src="./images/image-removebg-preview.png" alt="Efectivo" class="w-20" />
        <img src="./images/card1.png" alt="Tarjeta" class="w-20" />
      </div>
    </div>

    <!-- Main Content Section -->
    <main class="w-full max-w-3xl bg-gray-100 p-8 rounded shadow">
      <!-- Title -->
      <div class="flex justify-between items-center mb-5">
        <h1 class="text-3xl font-bold text-gray-500">Predial</h1>

        <!-- Total Amount (placeholder until claveCatastral is correct) -->
        <div class="text-right">
          <p class="text-2xl font-bold">TOTAL</p>
          <p class="text-4xl font-bold text-red-500">
            {{ mostrarInformacion ? "$1,125" : "----" }}
          </p>
        </div>
      </div>

      <!-- Clave Catastral Input -->
      <div class="mb-6">
        <label class="block text-lg font-semibold">Clave Catastral</label>
        <input
          type="text"
          v-model="claveCatastral"
          @change="handleClaveInput"
          class="w-full p-2 mt-2 border border-gray-300 rounded placeholder-blue-500"
          placeholder="Ingrese Clave Catastral"
        />
      </div>

      <!-- Información del Predio (Structure always visible, data shown only when correct claveCatastral is entered) -->
      <div class="border-t border-gray-300 pt-4 mb-4">
        <h2 class="text-lg font-semibold text-gray-500">Información del Predio</h2>
        <div class="grid grid-cols-4 gap-4 mt-3 text-center">
          <p class="font-semibold">Datos del Contribuyente</p>
          <p class="font-semibold">Domicilio</p>
          <p class="font-semibold">Cuenta Predial</p>
          <p class="font-semibold">Clave Catastral</p>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-3 text-center">
          <p>{{ mostrarInformacion ? "Juan Pérez" : "----" }}</p>
          <p>{{ mostrarInformacion ? "Av. Principal 123, Col. Centro" : "----" }}</p>
          <p>{{ mostrarInformacion ? "4567890123" : "----" }}</p>
          <p>{{ mostrarInformacion ? "1234-5678-9012" : "----" }}</p>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-3 text-center">
          <p class="font-semibold">Superficie</p>
          <p class="font-semibold">Construida</p>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-3 text-center">
          <p>{{ mostrarInformacion ? "300 m²" : "----" }}</p>
          <p>{{ mostrarInformacion ? "150 m²" : "----" }}</p>
        </div>
      </div>

      <!-- Detalle del Adeudo (Structure always visible, data shown only when correct claveCatastral is entered) -->
      <div class="border-t border-gray-300 pt-4 mb-4">
        <h2 class="text-lg font-semibold text-gray-500">Detalle del Adeudo</h2>
        <table class="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th class="border border-gray-300 p-2">CONCEPTO</th>
              <th class="border border-gray-300 p-2">MONTO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-2">Impuesto Predial</td>
              <td class="border border-gray-300 p-2">
                {{ mostrarInformacion ? "$800" : "----" }}
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">Recargos</td>
              <td class="border border-gray-300 p-2">
                {{ mostrarInformacion ? "$125" : "----" }}
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2">Multas</td>
              <td class="border border-gray-300 p-2">
                {{ mostrarInformacion ? "$200" : "----" }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

    <!-- Footer -->
    <footer class="mt-auto w-full">
      <p class="text-4xl text-gray-500 text-center py-4">
        Línea de ayuda: +52 (312) 107 2845
      </p>
      <img src="./images/footer.png" alt="Footer Image" class="w-full" />
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      claveCatastral: "",
      mostrarInformacion: false,
    };
  },
  computed: {},
  methods: {
    scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    },
    handleClaveInput() {
      this.checkClaveCatastral();
      this.playAudio10();
    },
    checkClaveCatastral() {
      if (this.claveCatastral === "1234-5678-9012") {
        this.mostrarInformacion = true;
        this.playAudio();
        this.playAudio3();
      } else {
        this.mostrarInformacion = false;
        this.playAudio11();
      }
    },
    playAudio() {
      const audio = new Audio("./public/audios/audio2.mp3");
      audio.play();
    },
    playAudio3() {
      const audio3 = new Audio("./public/audios/audio3.mp3");
      setTimeout(() => {
        audio3.play();
      }, 3000);
    },
    // playAudio10() {
    //   const audio10 = new Audio("./public/audios/audio10.mp3");
    //   audio10.play();
    // },
    playAudio11() {
      const audio10 = new Audio("./public/audios/audio11.mp3");
      audio10.play();
    },
  },
};
</script>
