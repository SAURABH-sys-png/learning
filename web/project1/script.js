const body = document.querySelector("body")
const btn = document.querySelectorAll('.btn')

btn.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        
    });
});