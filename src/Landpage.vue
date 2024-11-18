<template>
    <!--Page 1-->
    <div class="flex flex-col items-center min-h-screen bg-white">
      <!-- Header Section -->
      <header class="w-full p-0 pb-10 text-left ml-40">
        <img src="./images/solyteclogo.png" alt="Solytec Logo" class="mx-auto mr-20" style="width:200px"/>
        <h1 class="text-5xl font-bold mt-4 text-gray-500 pt-4">
          Bienvenido a los <br> Servicios Electrónicos de <br> Gobierno
        </h1>
      </header>
  
      <main class="flex flex-col mt-15 text-gray-600">
        <!-- Wrapper for Nacimiento (Left) -->
        <div class="w-full flex justify-start" style="margin-right: 450px">
          <div
            @click="goToPage('ActaDeNacimiento')"
            class="option-circle flex flex-col items-center justify-center rounded-full w-40 h-40 text-center"
          >
            <img src="./images/diploma.png" alt="Nacimiento Icon" class="mx-auto w-40" />
            <p class="mt-2 font-semibold">NACIMIENTO</p>
          </div>
        </div>
  
        <!-- Wrapper for Placas (Right) -->
        <div class="w-full flex justify-end" style="margin-top: -120px">
          <div
            @click="goToPage('Placas')"
            class="option-circle flex flex-col items-center justify-center rounded-full w-40 h-40 text-center"
          >
            <img src="./images/placas.png" alt="Placas Icon" class="mx-auto w-40" />
            <p class="mt-2 font-semibold">PLACAS</p>
          </div>
        </div>
  
        <!-- Wrapper for Predial (Left) -->
        <div class="w-full flex justify-start" style="margin-top: -120px">
          <div
            @click="goToPage('Predial')"
            class="option-circle flex flex-col items-center justify-center rounded-full w-40 h-40 text-center"
          >
            <img src="./images/contract.png" alt="Predial Icon" class="mx-auto w-40" />
            <p class="mt-2 font-semibold">PREDIAL</p>
          </div>
        </div>
      </main>
  
      <p class="mt-20 text-3xl text-gray-400 mt-4">Línea de ayuda: +52 (312) 107 2845</p>
  
      <footer class="w-full text-center">
        <img src="./images/footer.png" alt="Solytec Logo" class="mx-auto" style="margin-right: 0px; width: 100% "/>
      </footer>
    </div>
  </template>
  
<script>
  export default {
    methods: {
      goToPage(pageName) {
        this.$router.push({ name: pageName });
      }
    }
  }
  </script>
  