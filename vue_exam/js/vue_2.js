var app3 = new Vue( { 
    el : "#app-3",
    data : {
        seen:true
    }
});

var app_for = new Vue( { 
    el : "#app-for",
    data : {
        todos : [
            {no:1, text:'first'},
            {no:2, text:'second'},
            {no:3, text:'third'}
        ]
    }
})