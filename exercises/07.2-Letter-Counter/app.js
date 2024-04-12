let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
// Your code here
for(let l of par){
    const i = l.toLowerCase()
    if(l === " ") continue

    if(counts[i]){
        counts[i]++
    }else{
        counts[i] = 1
    }
}
console.log(counts)