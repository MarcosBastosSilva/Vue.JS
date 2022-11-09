const vm = new Vue({
    el: '#app',
    data: {
        title: "Instancia 1",
        text: "texto da primeira instancia."
    }
})

const helloWorldComponent = {
    template: `
    <div class="component"> 
    Hello World
    </div>
    `
}


const vm2 = new Vue({
    el: '#app2',
    data: {
        title: "instancia 2",
        text: "texto da segunda instancia"
    },
    components: {
        "hello-world": helloWorldComponent,
    },
})