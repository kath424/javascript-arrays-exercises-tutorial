let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let mixNuevo = []

// Your code here
for(let i = 0; i <= mix.length -1; i++){
    mixNuevo.push(typeof mix[i])
}
console.log(mixNuevo)


