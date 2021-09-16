Vue.config.devtools = true;

const app = new Vue ({
    el: "#app",
    data: {
        list: [],
    },
    mounted() {
        // ciclare l'API in (axios.get()) per generare email sempre differenti utilizzando un for, e pushando in lista il tutto
        for (let index = 0; index < 10; index++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail") //fake Api che mi permette di ricevere un'email randomica
        .then((response) => {
           result = response.data.response;    //  riprendo il response nell'email 
           this.list.push(result);
           console.log(result);
        });
        }
        
    }
});
