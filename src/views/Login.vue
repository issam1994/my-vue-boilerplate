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
        //this feature is just for testing, obviously.
      this.saveToken("FAKE-TOKEN-XXX");
      //if no token exists in the store, pushing profile will lead to a redirection to login page
      this.$router.push("./profile");
    }
  }
};
</script>