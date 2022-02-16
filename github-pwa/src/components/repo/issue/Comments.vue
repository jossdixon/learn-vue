<template>
  <div>
    <div v-if="comments.length > 0">
      <h4>Comments</h4>
      <div v-for="c of comments" :key="c.id">
        {{c.user && c.user.login}} - {{c.body}}
      </div>
    </div>
  </div>
</template>

<script>
import { octokitMixin } from '../../../mixins/octokitMixin';

export default defineComponent({
  setup() {

  },
})
</script>
