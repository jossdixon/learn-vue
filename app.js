const app = Vue.createApp({
  data() {
    return {
      firstName: 'Peter',
      lastName: 'Peterson',
      email: 'em@il.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/26.jpg',
    }
  },
})

app.mount('#app')
