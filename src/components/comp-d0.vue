<template>
  <div class="cadastro">
    <h1>Cadastro</h1>
    <form>
      <div>
        <label for="name">Nome:</label>
        <input id="name" type="text" v-model="name" required />
      </div>
      <div>
        <label for="nickname">Nickname:</label>
        <input id="nickname" type="text" v-model="nickname" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input id="password" type="password" v-model="password" required />
      </div>
      <div>
        <label for="confirmPassword">Confirmar Senha:</label>
        <input
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
          required
        />
      </div>
      <div>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "compD0",
  data() {
    return {
      name: "",
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-weight: bolder;
  color: #44475a;
}
</style>
