Vue.config.devtools = true;

const app = new Vue ({
    el: "#root",
    data: {
        list: [],
    },
    methods: {
        randomEmail() {
            //    generare 10 email 
            for (let index = 0; index < 10; index++) {
                    let obj = JSON.parse('{ "success":true,"response":"becker.aleen@conroy.com" }')
                    // console.log(obj)
                    this.list.push(obj);
                  
            }
            console.log(this.list)
        }


    },

    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
           result = response.data;
           console.log(this.randomEmail());
        });
    }
});
