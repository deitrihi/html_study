Vue.component('todo-item', {
    template:'<li>항목</li>'
});

var app = new Vue({
    el: '#app'
});

Vue.component('todo-item2', {
    props: ['todo'],
    template: '<li>{{todo.no}}. {{todo.text}}</li>'
});

var data = {model: [
    {id:0, no:1, text:'One'},
    {id:1, no:2, text:'Two'},
    {id:2, no:3, text:'Three'}
]};

var app2 = new Vue({
    el:'#app2',
    data : data
});