const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'I Am A Cat', author: 'Natsume Soseki', img: 'assets/iamacat.jpeg', isFav: true },
        { title: 'Things Fall Apart', author: 'Chinua Achebe', img: 'assets/thingsfallapart.jpeg', isFav: false },
        { title: 'We, The Drowned', author: 'Carsten Jensen', img: 'assets/wethedrowned.jpeg', isFav: false },
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      console.log(book.isFav)
      book.isFav = !book.isFav
    }
  }
})

app.mount('#app')
