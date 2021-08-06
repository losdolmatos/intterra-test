<template>
  <div>
    <the-header />
    <the-content>
      <router-view />
    </the-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheContent from '@/components/TheContent.vue';
import TheHeader from '@/components/TheHeader.vue';

export default defineComponent({
  components: {
    TheHeader,
    TheContent,
  },
});
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  background: #f9f9f9;
  color: #333333;
}

#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-track {
  background: #f9f9f9;
}
::-webkit-scrollbar-thumb {
  background: #091c28;
}
::-webkit-scrollbar-thumb:hover {
  background: #091c28;
}
</style>
