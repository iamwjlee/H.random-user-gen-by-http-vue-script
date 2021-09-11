const Counter = {
    data() {
      return {
        counter: 0,
        firstName: 'John1',
        lastName: 'Doc',
        email: 'John1@gmail.com',
        gender: 'male',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',

      }
    },
    methods: {
        async getUser() {
            const res=await fetch('https://randomuser.me/api')
            const { results }=await res.json()
            //console.log(results)
            //console.log(this.firstName)
            this.firstName= results[0].name.first   //'John2'
            this.lastName=  results[0].name.last //'Doc2'
            this.email= results[0].email //'John2@gmail.com'
            this.gender= results[0].gender //'female'
            this.picture= results[0].picture.large //'https://randomuser.me/api/portraits/women/10.jpg'
    
        }
    },
    mounted() {
        setInterval(()=>{
            //this.counter++
        },1000)
    }
  }
  
  Vue.createApp(Counter).mount('#app')