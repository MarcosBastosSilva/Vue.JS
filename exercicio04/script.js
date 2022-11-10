const vm = new Vue({
    el:"#app",
    data:{
        text:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et natus porro consequuntur debitis culpa animi dignissimos necessitatibus commodi nihil nisi, doloribus laudantium laboriosam quae illo vel aut vitae, numquam officiis?",
        showText: true,
        textClass: "red",
        number:"1"
    },
    methods:{
        sayHi(){
            window.alert('hi')
        }
    }
})