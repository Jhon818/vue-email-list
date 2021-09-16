Vue.config.devtools = true;

const app = new Vue ({
    el: "#root",
    list: [],
    data: {},
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
           const result = response.data;
           console.log(result);
        });
    }
});
