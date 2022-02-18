<template>
  <h1>{{ $route.params.title }} Details Page</h1>
  <h3>{{ $route.params.details }}</h3>
</template>

<script>
export default {
  props: ['title', 'id', 'details']
}
</script>

<style>

</style>
