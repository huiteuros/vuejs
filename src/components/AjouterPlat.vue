<template>
  <div>
    <h4>Ajouter un plat</h4>
    <div class="add">
      <form @submit="onSubmit">
        <label> Nom </label>
          <input type="text" v-model="plat.nom_plat" placeholder="nom_plat" />
        <label>  Recette </label>
        <input type="text" v-model="plat.recette_plat" placeholder="recette_plat" />

        <input type="submit" value="Submit" />

      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "addPlat",
  data() {
    return {
      plat: {
        name: "",
        steps: "",
      },
    };
  },
  methods: {
    ...mapActions(["addPlat"]),
    onSubmit(event) {
      event.preventDefault();
      this.addPlat(this.plat);
    },
  },
  created() {
    this.plat = {
      ...this.$route.params.plat,
    };
  },
};
</script>
