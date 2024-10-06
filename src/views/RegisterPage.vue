<template>
  <div>
    <h1>Registro de Usuario</h1>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage', // Asegúrate de que el nombre sea descriptivo
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    registerUser() {
      // Aquí puedes implementar la lógica para registrar al usuario
      console.log('Usuario registrado:', {
        username: this.username,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para la página de registro */
h1 {
  color: #2c3e50;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 10px;
}
</style>
