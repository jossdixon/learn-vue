const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'I Am A Cat', author: 'Natsume Soseki' },
        { title: 'Things Fall Apart', author: 'Chinua Achebe' },
        { title: 'We, The Drowned', author: 'Carsten Jensen' },
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  }
})

app.mount(#app)
