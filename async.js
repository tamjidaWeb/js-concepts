console.log(1)
console.log(2);
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
console.log(5)
console.log(6)

function doSomething (){
    console.log(3);
}