const parent = document.getElementsByClassName('main-div')
console.log(parent)

for(const vl in parent){
    console.log(vl)
}

let myArray = Array.from(parent)