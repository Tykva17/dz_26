let list = document.querySelector('#ul').children
console.log(list);

for(let i = 3; i > 1; i--){
    list[0].insertAdjacentHTML('afterEnd',`<li>${i}</li>`);
    console.log(list);
}