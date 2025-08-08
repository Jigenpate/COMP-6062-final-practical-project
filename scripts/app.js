console.log("Welcome to vue.js");

const app= Vue.createApp({
    data(){
        return{
            Name:'Jigen patel',
            studentID:'1252161',
            photo:[]
        },
        created(){
            this.fetchData();
        }
    },
    computed:{
        Userdata(){
            return `${this.Name} ${this.studentID}`;
        }

    },
    methods:{
        fetchData(){
            fetch('https://comp6062.liamstewart.ca/random-user-data')
            .then(Response  => {
                if(Response.ok){
                    return Response.json();
                }
                else
                {
                    console.log('Error found so please try it again');
                }
            })
            .then(data => {
                this.photo=data;
            })
            .catch(error =>{
                console.log('something went wrong');
            }); 
        }
    } 
}
);

app.mount('#app');