<template>
  <tr>
    <td>
      <div class="row">
        <div class="col s12">
         <div> <h4>{{ plat.nom_plat }} : </h4>
         Recette : {{plat.recette_plat}}
           <button v-on:click="deletePlat(plat._id)"> Supprimer </button></div>
        </div>
      </div>
    </td>
  </tr>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["deletePlat"]),
  },

  props: ["plat"],
};
</script>