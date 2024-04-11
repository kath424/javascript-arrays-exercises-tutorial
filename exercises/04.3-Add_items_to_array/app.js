let arr = [4,5,734,43,45];

// Your code here, use the push() function and the 2 Math functions
function numeroAleatorio(){
    let numero = Math.floor(Math.random() * 10)
    return numero
}

arr.push(numeroAleatorio())
arr.push(numeroAleatorio())

console.log(arr);
