<template>
  <div class>
    <button class="px-4 py-2 bg-white shadow" @click="login">Log in</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("auth", ["saveToken"]),
    login() {
      this.saveToken("FAKETOKENXXX");
      this.$router.push("./profile");
    }
  }
};
</script>