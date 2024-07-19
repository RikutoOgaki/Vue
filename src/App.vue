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
  // 算出プロパティー
  let id = 0;
  const newTodo = ref('');
  const hideCompleted = ref(false)
  const todos = ref([
  { id: id++, text: 'Learn HTML', done:true },
  { id: id++, text: 'Learn JavaScript', done:true },
  { id: id++, text: 'Learn Vue', done:false }
  ])
  function addTodo(){
    todos.value.push({id: id++ , text:newTodo.value ,done:false});
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
  <!-- 算出プロパティー -->
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="addTask">
    <button>add</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todos.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{done:todo.done}">
        {{ todo.text }}
      </span>
      <button @click="removeTodo(todo)">remove</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>

  
</template>

<style>
  .title{
    color: tomato;
  }

  .done{
    text-decoration: line-through;
  }
</style>