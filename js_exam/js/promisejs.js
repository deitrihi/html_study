function myPromise(value) {
    return new Promise(function(resolve, reject) {
        console.log("3초 후 인사메세지를 출력합니다..");
        setTimeout(function(){
        if(value){
            console.log("안녕하세요!");
            resolve("성공");
        }
        else {
            reject(Error("실패"));
        }
        }, 3000);
    });
}

function myResolve(value){
  console.log("resolved: ", value);
} 

function myReject(value){
  console.log("rejected: ", value);
}

// myPromise(true).then(myResolve,myReject); // myResolve 실행
// myPromise(false).then(myResolve,myReject); // myReject 실행

// myPromise(true)
// .then(myPromise)
// .then(myPromise)
// .then(myResolve)
// .catch(myReject);


function getPosts(){
    return new Promise(function(resolve, reject){
        $.ajax({
        url : './layout.css',
        type: 'GET',
        success : function(result){
            var posts = result.data
            resolve(posts);
            // 그외 posts로 할일
            console.log('1 : Posts(promise)');
        }
        });
    });
}
    
function getFirstPost(posts){
    return new Promise(function(resolve, reject){
        $.ajax({
        url : './layout.css',
        type: 'GET',
        success : function(result){
            var post = result.data
            resolve('1');
            // 그외 post로 할일
            console.log('2 : FirstPosts(promise)');
        },
        });
    });
}
    
function getPostAuthor(posts){
    return new Promise(function(resolve, reject){
        console.log(posts);
        $.ajax({
        url : './layout.css',
        type: 'GET',
        success : function(result){
            var user = result.data
            resolve(user);
            // user로 할일
            console.log('3 : PostAuthor(promise)');
        }
        });
    });
}
    
function errorHandler(value){
    console.log("error: ", value);
}
    
getPosts()
.then(getFirstPost)
.then(getPostAuthor)
.catch(errorHandler);

$.ajax({
    url : './layout.css',
    type: 'GET',
    success : function(result1) {
        var posts = result1.data;
        $.ajax({
        url : './layout.css',
        type: 'GET',
        success : function(result2){
            var post = result2.data;
            $.ajax({
            url : './layout.css',
            type: 'GET',
            success : function(result3){
                // user로 할일 - 3
                console.log('3 : PostAuthor(ajax)');
            }
            });
            // 그외 post로 할일 - 2
            console.log('2 : FirstPosts(ajax)');
        }
        });
        // 그외 posts로 할일 - 1
        console.log('1 : Posts(ajax)');
    }
});