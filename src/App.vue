<script setup>
  import { ref , reactive} from 'vue'

  // チュートリアル１内容
  const message = ref('Make Me tomato');
  const counter = reactive({count: 0});

  // class名の付け方
  const titleClass = ref('title');

  // DOM操作方法
  const count = ref(0)
  function plus() {
    count.value++
  }
  function minus(){
    count.value--
  }

  // 
</script>

<template>
  <h1 :class="titleClass">{{ message }}</h1>
  <p>Count is: {{ count }}</p>
  <button @click="plus">PLUS</button>
  <button @click="minus">MINUS</button>
</template>

<style>
  .title{
    color: tomato;
  }
</style>