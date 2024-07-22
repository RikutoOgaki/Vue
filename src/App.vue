<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" />
    </h1>
    <nav>
      <ul>
        <li><a href="https://ja.vuejs.org/">Vue.js公式ドキュメント</a></li>
        <li><a href="https://github.com/RikutoOgaki/Vue">このPageのGithub</a></li>
      </ul>
    </nav>
  </header>

  <RouterView>
    <RouterLink to="/TutorialView1">Tutorial１</RouterLink>
  </RouterView>
</template>

<style scoped>

header{
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo{
  font-size: 1rem;
}

ul{
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
}

ul > li > a{
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
}

ul > li > a:hover{
  border-bottom: 1px solid #ffffff;
}
</style>
