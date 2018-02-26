var app = new Vue({
    el : '#app',
    data : {
        message: 'Message!!'
    },
    methods: {
        alertMessage:function() {
            this.message = prompt(this.message);
        }
    }
});

var app2 = new Vue({
    el: '#app2',
    data: { 
        message:''
    }
})