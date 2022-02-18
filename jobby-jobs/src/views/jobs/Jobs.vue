<template>
  <div>
    <h1>The Jobs Page</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { title: job.title, id: job.id, details: job.details }}">
        <h3>{{ job.title }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'Carpenter', id: 1, details: 'wood'},
        { title: 'Plumber', id: 2, details: 'pipes'},
        { title: 'Electrician', id: 3, details: 'wires'},
        { title: 'Painter', id: 4, details: 'colours'}
      ]
    }
  }
}
</script>

<style>

</style>
