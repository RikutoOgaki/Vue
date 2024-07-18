<script setup>
  import { ref , reactive} from 'vue'

  // 宣言的レンダリング
  const message = ref('Make Me tomato');
  const counter = reactive({count: 0});

  // 属性バインディング
  const titleClass = ref('title');

  // イベントリスナー
  const count = ref(0)
  function plus() {
    count.value++
  }
  function minus(){
    count.value--
  }

  // フォームバインディング
  const text = ref('');
  function onInput(e){
    text.value = e.target.value
  }

  // 条件付きレンダリング
  const awesome = ref(true);
  function toggle(){
    awesome.value = !awesome.value
  }

  // リストレンダリング
  let id = 0;
  const newTodo = ref('');
  const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
  ])
  function addTodo(){
    todos.value.push({id: id++ , text:newTodo.value});
    newTodo.value = ''
  }

  function removeTodo(todo){
    todos.value = todos.value.filter((t) => t !== todo);
  }
</script>

<template>
  <!-- 宣言的レンダリング -->
  <!-- 属性バインディング -->
  <h1 :class="titleClass">{{ message }}</h1>
  <p>Count is: {{ count }}</p>

  <!-- イベントリスナー -->
  <button @click="plus">PLUS</button>
  <button @click="minus">MINUS</button>

  <!-- フォームバインディング -->
  <p>{{ text }}</p>
  <input type="text" @input="onInput" placeholder="type here">

  <!-- 条件付きレンダリング -->
  <button @click="toggle">toggel</button>
  <p v-if="awesome">これが</p>
  <p v-else>こう</p>

  <!-- リストレンダリング -->
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="addTask">
    <button>add</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todos.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">remove</button>
    </li>
  </ul>
</template>

<style>
  .title{
    color: tomato;
  }
</style>