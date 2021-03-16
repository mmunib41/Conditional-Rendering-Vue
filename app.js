

const app= Vue.createApp(
    {
        data(){
            return {showdiv:true,
                title: 'Munib Ch', Email:'muneebch041' ,age: '24'
              }

        },
        methods:{
            toggleshowbooks()
            {
                this.showdiv=true
            },
            toggleshidebooks()
            {this.showdiv=false},
            hideshow()
            {this.showdiv=!this.showdiv}
        }

    }
)
app.mount('#app')