<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Cuisine</a>
      <ul id="nav" class="right hide-on-med-and-down">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="AjouterPlat"> Ajouter Plat </router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'header',
  components: {

  },
};
</script>