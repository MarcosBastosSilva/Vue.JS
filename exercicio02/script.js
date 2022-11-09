const data = {
    title: "titulo",
    person: {
        name: "Marcos Vinicius",
        age: 23,
    documents: {
        rg: "xxxxxxxxxxxxx-x",
        cpf: "xxxxxxxxxxxx-x"
    },
    nationality:{
        nacionalidade: "Brasileiro"
    }
    }
}
const vm = new Vue ({
    el: "#app",
    data: data,
    methods: {
        alterTitle: function(){
            this.title = `batata + ${this.person.name}`
        },
        ageSentence: function(age){
            return `${age}years`
    } 
    }
})
