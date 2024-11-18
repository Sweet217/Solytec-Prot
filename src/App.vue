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
              @click="scrollToSection('nacimiento')"
              class="option-circle flex flex-col items-center justify-center rounded-full w-40 h-40 text-center"
          >
              <img src="./images/diploma.png" alt="Nacimiento Icon" class="mx-auto w-40" />
              <p class="mt-2 font-semibold">NACIMIENTO</p>
          </div>
      </div>
  
      <!-- Wrapper for Placas (Right) -->
      <div class="w-full flex justify-end" style="margin-top: -120px">
          <div
              @click="scrollToSection('placas')"
              class="option-circle flex flex-col items-center justify-center rounded-full w-40 h-40 text-center"
          >
              <img src="./images/placas.png" alt="Placas Icon" class="mx-auto w-40" />
              <p class="mt-2 font-semibold">PLACAS</p>
          </div>
      </div>
  
      <!-- Wrapper for Predial (Left) -->
      <div class="w-full flex justify-start" style="margin-top: -120px">
          <div
              @click="scrollToSection('predial')"
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


<!--Page 2-->
<div class="flex flex-col items-center min-h-screen bg-white" id="nacimiento">
  <!-- Header Section -->
  <header class="w-full p-0 pb-10 text-left ml-40">
    <img src="./images/solyteclogo.png" alt="Solytec Logo" class="mx-auto mr-20" style="width:200px"/>
  </header>

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
      <h1 class="text-3xl font-bold text-gray-500">Acta de Nacimiento</h1>
    </div>

    <!-- CURP Input -->
    <div class="mb-4">
      <label class="text-lg font-semibold">CURP</label>
      <input
        type="text"
        v-model="curp"
        class="w-full p-2 mt-1 border border-gray-300 rounded"
        placeholder="Ingrese CURP"
      />
    </div>

    <!-- Número de Copias and Total -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center">
        <label class="text-lg font-semibold mr-2">Número de Copias</label>
        <button @click="decrementCopies" class="p-2 bg-gray-200 rounded">-</button>
        <span class="px-4">{{ numberOfCopies }}</span>
        <button @click="incrementCopies" class="p-2 bg-gray-200 rounded">+</button>
      </div>
      <div class="text-right">
        <p class="text-2xl font-bold">TOTAL</p>
        <p class="text-3xl font-bold text-red-500">${{ total }}</p>
      </div>
    </div>

    <!-- Datos de la Persona Registrada -->
    <div class="border-t border-gray-300 pt-4 mb-4">
      <h2 class="text-lg font-semibold text-gray-500">Datos de la Persona Registrada</h2>
      <div class="grid grid-cols-3 gap-4 mt-3">
        <input type="text" v-model="nombre" placeholder="Nombre(s)" class="p-2 border border-gray-300 rounded" />
        <input type="text" v-model="primerApellido" placeholder="Primer Apellido" class="p-2 border border-gray-300 rounded" />
        <input type="text" v-model="segundoApellido" placeholder="Segundo Apellido" class="p-2 border border-gray-300 rounded" />
      </div>
    </div>

    <!-- Datos de Filiación de la Persona Registrada -->
    <div class="border-t border-gray-300 pt-4 mb-4">
      <h2 class="text-lg font-semibold text-gray-500">Datos de Filiación de la Persona Registrada</h2>
      <div class="grid grid-cols-5 gap-4 mt-3">
        <input type="text" placeholder="Nombre(s)" class="p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Primer Apellido" class="p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Segundo Apellido" class="p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Nacionalidad" class="p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="CURP" class="p-2 border border-gray-300 rounded" />
      </div>
      <div class="grid grid-cols-5 gap-4 mt-3">
        <input type="text" placeholder="Nombre(s)" class="p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Primer Apellido" class="p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Segundo Apellido" class="p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Nacionalidad" class="p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="CURP" class="p-2 border border-gray-300 rounded" />
      </div>
    </div>

    <!-- Printing Section -->
    <div class="flex items-center justify-center mt-5">
      <p class="text-lg font-semibold">Imprimir Documento</p>
      <img src="./images/printer.png" alt="Printing Icon" class="ml-3 w-10" />
    </div>
  </main>

  <p class="mt-40 text-3xl text-gray-400 mt-10 mb-6">Línea de ayuda: +52 (312) 107 2845</p>

  <footer class="w-full text-center mt-40">
      <img src="./images/footer.png" alt="Solytec Logo" class="mx-auto" style="margin-right: 0px; width: 100% "/>
  </footer>
</div>

<!--Page 3-->
<div class="flex flex-col items-center min-h-screen bg-white" id="predial">
  <!-- Header Section -->
  <header class="w-full p-0 pb-10 text-left ml-40">
    <img src="./images/solyteclogo.png" alt="Solytec Logo" class="mx-auto mr-20" style="width:200px"/>
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
        @input="checkClaveCatastral"
        class="w-full p-2 mt-2 border border-gray-300 rounded"
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
            <td class="border border-gray-300 p-2">{{ mostrarInformacion ? "$800" : "----" }}</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Recargos</td>
            <td class="border border-gray-300 p-2">{{ mostrarInformacion ? "$125" : "----" }}</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Multas</td>
            <td class="border border-gray-300 p-2">{{ mostrarInformacion ? "$200" : "----" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>

  <!-- Footer -->
  <p class="text-xl text-gray-500 mt-40">Línea de ayuda: +52 (312) 107 2845</p>
  <footer class="w-full mt-20">
    <img src="./images/footer.png" alt="Footer Image" class="w-full"/>
  </footer>
</div>

  <!--Page 4-->
  <div class="flex flex-col items-center min-h-screen bg-white" id="placas">
    <!-- Header Section -->
    <header class="w-full p-0 pb-10 text-left ml-40">
      <img src="./images/solyteclogo.png" alt="Solytec Logo" class="mx-auto mr-20" style="width:200px"/>
    </header>

    <div class="w-full p-0 pb-10 flex flex-col items-end text-right mr-20">
      <p class="text-lg font-semibold">Pagar con</p>
      <div class="flex space-x-2 mt-2">
        <img src="./images/image-removebg-preview.png" alt="Efectivo" class="w-20" />
        <img src="./images/card1.png" alt="Tarjeta" class="w-20" />
      </div>
    </div>

    <!-- Main Content Section -->
    <main class="w-full max-w-3xl bg-gray-100 p-8 rounded shadow mt-20" >
      <!-- Title -->
      <div class="flex justify-between items-center mb-5">
        <h1 class="text-3xl font-bold text-gray-500">Placas</h1>

        <!-- Total Amount -->
        <div class="text-right">
          <p class="text-2xl font-bold">TOTAL</p>
          <p class="text-4xl font-bold text-red-500">
            {{ mostrarInformacion ? "$2,200" : "----" }}
          </p>
        </div>
      </div>

      <!-- Placa Input -->
      <div class="mb-6">
        <label class="block text-lg font-semibold">Placas</label>
        <input
          type="text"
          v-model="placa"
          @input="checkPlaca"
          class="w-full p-2 mt-2 border border-gray-300 rounded"
          placeholder="Ingrese número de placa o Número de Identificación Vehicular"
        />
      </div>

      <!-- Información del Vehículo (Structure always visible, data shown only when correct placa is entered) -->
      <div class="border-t border-gray-300 pt-4 mb-4">
        <h2 class="text-lg font-semibold text-gray-500">Información del Vehículo</h2>
        <div class="grid grid-cols-2 gap-4 mt-3 text-center">
          <p class="font-semibold">Nombre del Propietario</p>
          <p>{{ mostrarInformacion ? "Carlos Perez" : "----" }}</p>
          <p class="font-semibold">Número de Identificación Vehicular</p>
          <p>{{ mostrarInformacion ? "15928123945" : "----" }}</p>
          <p class="font-semibold">Placas</p>
          <p>{{ mostrarInformacion ? "M1G-3T8" : "----" }}</p>
          <p class="font-semibold">Marca</p>
          <p>{{ mostrarInformacion ? "Toyota" : "----" }}</p>
          <p class="font-semibold">Tipo</p>
          <p>{{ mostrarInformacion ? "Sedan" : "----" }}</p>
          <p class="font-semibold">Modelo</p>
          <p>{{ mostrarInformacion ? "Corolla" : "----" }}</p>
          <p class="font-semibold">Cilindrada</p>
          <p>{{ mostrarInformacion ? "1.8L" : "----" }}</p>
          <p class="font-semibold">Número de Motor</p>
          <p>{{ mostrarInformacion ? "A4KRM42J123K2" : "----" }}</p>
          <p class="font-semibold">Número de Serie</p>
          <p>{{ mostrarInformacion ? "A4KRM42J123K2" : "----" }}</p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <p class="text-xl text-gray-500 mt-40">Línea de ayuda: +52 (312) 107 2845</p>
    <footer class="w-full mt-20">
      <img src="./images/footer.png" alt="Footer Image" class="w-full"/>
    </footer>
  </div>

</template>

<script>
export default {
  data() {
    return {
      curp: '',
      nombre: '',
      primerApellido: '',
      segundoApellido: '',
      numberOfCopies: 1,
      pricePerCopy: 125,
      claveCatastral: '',
      placa: '',
      mostrarInformacion: false,
    };
  },
  computed: {
    total() {
      return this.numberOfCopies * this.pricePerCopy;
    },
  },
  methods: {
    scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    },
    incrementCopies() {
      this.numberOfCopies++;
    },
    decrementCopies() {
      if (this.numberOfCopies > 1) {
        this.numberOfCopies--;
      }
    },
    checkClaveCatastral() {
      if (this.claveCatastral === "1234-5678-9012") {
        this.mostrarInformacion = true;
      } else {
        this.mostrarInformacion = false;
      }
    },
    checkPlaca() {
      if (this.placa === 'M1G-3T8' || this.placa === "15928123945") {
        this.mostrarInformacion = true;
      } else {
        this.mostrarInformacion = false;
      }
    },
  },
};
</script>
