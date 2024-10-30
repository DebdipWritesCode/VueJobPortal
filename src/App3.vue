<script setup>
import { ref, onMounted } from 'vue';

const msg = ref("Hello Potato");
const status = ref("active");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);
const newTask = ref("");

const toogleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
}

const addTask = () => {
  tasks.value.push(newTask.value);
  newTask.value = "";
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2 v-if="status === 'active'">User is active</h2>
  <h2 v-else-if="status === 'pending'">User is pending</h2>
  <h2 v-else>User is inactive</h2>

  <h3>Tasks</h3>
  <form @submit.prevent="addTask">
    <label for="newTask">Enter Task</label>
    <input type="text" name="newTask" id="newTask" v-model="newTask" />
    <button>Submit</button>
  </form>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
        <button @click="deleteTask(index)">x</button>
      </span>
    </li>
  </ul>
  <br />
  <button @click="toogleStatus">Change status</button>
</template>