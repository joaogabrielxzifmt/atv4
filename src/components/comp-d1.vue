<template>
  <div class="editar">
    <h1>Editar Cadastro</h1>
    <form>
      <div>
        <label for="nickname">Novo Nickname:</label>
        <input id="nickname" type="text" v-model="nickname" required />
      </div>
      <div>
        <label for="password">Nova Senha:</label>
        <input id="password" type="password" v-model="password" required />
      </div>
      <div>
        <label for="confirmPassword">Confirmar Nova Senha:</label>
        <input
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
          required
        />
      </div>
      <div>
        <button type="submit">Atualizar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "compD1",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-weight: bolder;
  color: #44475a;
}
</style>
