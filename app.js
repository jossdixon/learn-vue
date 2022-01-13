const app = Vue.createApp({
  data() {
    return {
      firstName: 'Boy',
      lastName: 'Wonder',
      email: 'boy@wonder.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/robin',
    }
  },
})

app.mount('#app')
