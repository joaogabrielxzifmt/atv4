<template>
  <ul>
    <li><router-link to="/novo" rel="noopener">Novo Cadastro</router-link></li>
    <li>
      <router-link to="/editar" rel="noopener">Editar Cadastro</router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
export default {
  name: "comp-c1",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type:square ;
  padding: 0;
}
li { display:flexbox}
a {
  color:  #bd93f9;
}
</style>
