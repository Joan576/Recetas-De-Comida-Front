<template>
    <div class="tips-container">
      <!-- Título principal -->
      <div class="header">
        <h1>Tips y Consejos de Cocina</h1>
        <p class="subtitle">
          Algunos consejos personales dichos por muchos chefs profesionales para
          que mejores tu sazón como nunca.
        </p>
      </div>
  
      <!-- Contenedor de tarjetas -->
      <div class="cards-grid">
        <div
          class="tip-card"
          v-for="(tip, index) in tips"
          :key="index"
          @click="showTip(index)"
        >
          <h2>{{ index + 1 }}</h2>
        </div>
      </div>
  
      <!-- Tip desplegado -->
      <transition name="fade-in">
        <div class="tip-display" v-if="activeTip !== null">
          <p v-html="tips[activeTip]"></p>
          <button class="close-btn" @click="activeTip = null">Cerrar</button>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tips: [
  "Precalienta el horno antes de usarlo para resultados óptimos.",
  "Usa <b>hierbas frescas</b> para intensificar los sabores.",
  "Deja reposar la carne después de cocinarla para <b>mantener los jugos</b>.",
  "<center><b>Pelar huevos duros fácilmente</b></center><br>Si quieres pelar fácilmente los huevos duros, añade un buen chorro de <b>vinagre</b> al agua de cocción.<br>El ácido ablandará la cáscara y hará que los huevos se pelen más fácilmente.",
  "El truco para evitar que la mayonesa se corte es usar alimentos a la <b>misma temperatura</b>, como el huevo y el aceite.",
  "<b><center>Quitar la piel a las patatas hervidas de manera fácil</b> </center><br>Pásalas por agua fría durante 30 segundos tras hervirlas y haz cortes superficiales para que la piel salga sola.",
  "<center><b>Pelar cebollas sin llorar</b></center><br>Mete las cebollas en el congelador por 20 minutos antes de cortarlas.",
  "<center><b>Conservar hierbas aromáticas</b></center><br>Córtalas, ponlas en una cubitera, cúbrelas con aceite de oliva y congélalas.",
  "<center><b>Quitar el olor a ajo de las manos</b></center><br>Frota tus manos con una superficie de acero inoxidable bajo el agua durante 30 segundos.",
  "<center><b>Sacar más zumo de los cítricos</b></center><br>Presiónalos con la palma de la mano y hazlos rodar antes de exprimir.",
  "<center><b>Mantequilla lista para untar</b></center><br>Ralla la mantequilla sobre el pan en vez de intentar cortarla o untarla.",
  "<center><b>Preparar vinagretas con antelación</b></center><br>Ten tus vinagretas favoritas listas en la nevera para usarlas al momento.",
  "<center><b>Eliminar olores fuertes de tupper de plástico</b></center><br>Rellénalos con papel de periódico arrugado, ciérralos y déjalos un par de días."
],

        activeTip: null,
      };
    },
    methods: {
      showTip(index) {
        this.activeTip = index;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Contenedor principal */
  .tips-container {
    margin: 20px;
    text-align: center;
    margin-top: 40px;
  }
  
  /* Encabezado */
  .header h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #b80000;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 1rem;
    color: #edebeb;
    margin-bottom: 20px;
  }
  
  /* Tarjetas */
  .cards-grid {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .tip-card {
    width: 100px;
    height: 100px;
    background: #b80000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .tip-card:hover {
    transform: scale(1.1);
    background-color: #a00000;
  }
  
  /* Tip desplegado */
  .tip-display {
    margin-top: 20px;
    background: #f9f9f9;
    color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: inline-block;
  }
  
  .tip-display p {
    font-size: 1.2rem;
    margin-bottom: 10px;
    text-align: left;
  }
  
  .close-btn {
    background: #b80000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .close-btn:hover {
    background: #a00000;
  }
  
  /* Animación */
  .fade-in-enter-active,
  .fade-in-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-in-enter-from,
  .fade-in-leave-to {
    opacity: 0;
  }
  
  /* Responsividad */
  @media (max-width: 768px) {
    .cards-grid {
      flex-direction: column;
      align-items: center;
    }
  
    .tip-card {
      width: 80px;
      height: 80px;
    }
  
    .header h1 {
      font-size: 2rem;
    }
  
    .subtitle {
      font-size: 0.9rem;
    }
  }
  </style>
  