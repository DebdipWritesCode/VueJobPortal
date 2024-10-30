<script>
export default {
  data() {
    return {
      msg: "Hello Potato",
      status: "active",
      tasks: ["Task 1", "Task 2", "Task 3"],
      link: "https://www.google.com",
    }
  },
  methods: {
    toogleStatus() {
      if(this.status === "active") {
        this.status = "pending";
      } else if(this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2 v-if="status === 'active'">User is active</h2>
  <h2 v-else-if="status === 'pending'">User is pending</h2>
  <h2 v-else>User is inactive</h2>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">Click for Google</a>
  <br />
  <button @click="toogleStatus">Change status</button>
</template>