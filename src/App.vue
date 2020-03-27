<template>
  <div id="app">
    <!-- header  -->
    <header class="shadow">
    <div class="nav container mx-auto">
      <!-- if user is authenticated -->
      <div class="nav-links" v-if="isAuthenticated">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/profile">Profile</router-link>
        <button class="logout-button" @click="logOut">Log Out</button>
      </div>
      <!-- if user is a guest -->
      <div class="nav-links" v-else>
        <router-link class="nav-link" to="/login">Login</router-link>
        <router-link class="nav-link" to="/register">Register</router-link>
      </div>
    </div>
    </header>
    <!-- pages -->
    <div class="container mx-auto">
      <transition name="slide" mode="out-in">
      <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("auth", ["logOut"])
  }
};
</script>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  @apply mb-2;
}
.nav-links {
  @apply flex items-center;
}
.nav-link {
  @apply px-4 py-6 font-bold border-b-4 border-white;
}
.logout-button {
  @apply px-4 py-3 font-bold ml-auto bg-gray-100 text-gray-800 shadow-inner;
}
.router-link-exact-active {
  @apply text-green-600 border-b-4 border-green-600;
}
</style>
