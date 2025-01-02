<template>
  <!--Page 4-->
  <div class="flex flex-col items-center min-h-screen bg-white" id="placas">
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
    <main class="w-full max-w-3xl bg-gray-100 p-8 rounded shadow mt-20">
      <!-- Title -->
      <div class="flex justify-between items-center mb-5">
        <h1 class="text-4xl font-bold text-gray-500">Placas</h1>

        <!-- Total Amount -->
        <div class="text-right">
          <p class="text-3xl font-bold">TOTAL</p>
          <p class="text-5xl font-bold text-red-500">
            {{ mostrarInformacion ? "$2,200" : "----" }}
          </p>
        </div>
      </div>

      <!-- Placa Input -->
      <div class="mb-6">
        <label class="block text-xl font-semibold">Placas</label>
        <input
          type="text"
          v-model="placa"
          @change="handlePlacaInput"
          class="text-lg w-full p-2 mt-2 border border-gray-300 rounded placeholder-blue-500"
          placeholder="Ingrese número de placa o Número de Identificación Vehicular"
        />
      </div>

      <!-- Información del Vehículo (Structure always visible, data shown only when correct placa is entered) -->
      <div class="border-t border-gray-300 pt-4 mb-4">
        <h2 class="text-xl font-semibold text-gray-500">Información del Vehículo</h2>

        <!-- First Layer: Nombre del Propietario, Número de Identificación Vehicular, Placas -->
        <div class="grid grid-cols-3 gap-4 mt-3 text-center">
          <div>
            <p class="text-lg font-semibold">Nombre del Propietario</p>
            <p>{{ mostrarInformacion ? "Carlos Perez" : "----" }}</p>
          </div>
          <div>
            <p class="text-lg font-semibold">Número de Identificación Vehicular</p>
            <p>{{ mostrarInformacion ? "15928123945" : "----" }}</p>
          </div>
          <div>
            <p class="text-lg font-semibold">Placas</p>
            <p>{{ mostrarInformacion ? "M1G-3T8" : "----" }}</p>
          </div>
        </div>

        <!-- Second Layer: Marca, Tipo, Modelo, Cilindrada, Número de Motor, Número de Serie -->
        <div class="grid grid-cols-6 gap-4 mt-3 text-center">
          <div>
            <p class="text-lg font-semibold">Marca</p>
            <p>{{ mostrarInformacion ? "Toyota" : "----" }}</p>
          </div>
          <div>
            <p class="text-lg font-semibold">Tipo</p>
            <p>{{ mostrarInformacion ? "Sedan" : "----" }}</p>
          </div>
          <div>
            <p class="text-lg font-semibold">Modelo</p>
            <p>{{ mostrarInformacion ? "Corolla" : "----" }}</p>
          </div>
          <div>
            <p class="text-lg font-semibold">Cilindrada</p>
            <p>{{ mostrarInformacion ? "1.8L" : "----" }}</p>
          </div>
          <div>
            <p class="text-lg font-semibold">Número de Motor</p>
            <p>{{ mostrarInformacion ? "A4KR4J23K2" : "----" }}</p>
          </div>
          <div>
            <p class="text-lg font-semibold">Número de Serie</p>
            <p>{{ mostrarInformacion ? "AR42123K2" : "----" }}</p>
          </div>
        </div>
      </div>
    </main>
    <!-- Footer -->
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
      placa: "",
      mostrarInformacion: false,
    };
  },
  computed: {},
  methods: {
    scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    },
    handlePlacaInput() {
      this.checkPlaca();
      this.playAudio10();
    },
    checkPlaca() {
      if (this.placa === "M1G-3T8" || this.placa === "15928123945") {
        this.mostrarInformacion = true;
        this.playAudio();
        this.playAudio3();
      } else {
        this.mostrarInformacion = false;
        this.playAudio11();
      }
    },
    playAudio() {
      const audio = new Audio("./audios/audio2.mp3");
      audio.play();
    },
    playAudio3() {
      const audio3 = new Audio("./audios/audio3.mp3");
      setTimeout(() => {
        audio3.play();
      }, 3000);
    },
    // playAudio10() {
    //   const audio10 = new Audio("./public/audios/audio10.mp3");
    //   audio10.play();
    // },
    playAudio11() {
      const audio10 = new Audio("./audios/audio11.mp3");
      audio10.play();
    },
  },
};
</script>
