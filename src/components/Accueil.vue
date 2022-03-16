<template>
  <div>
    <h3>Tous les plats</h3>
    <div>
      <Plat v-for="plat in allPlats" :key="plat._id" :plat="plat" />
    </div>
  </div>
</template>

<script>
import Plat from "@/components/Plat";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Plat,
  },
  name: "Plats",
  methods: {
    ...mapActions(["initPlats"]),
  },
  computed: mapGetters(["allPlats"]),
  created() {
    this.initPlats();
    console.log(mapGetters(["allPlats"]));
  },
};
</script>
