function algebra(math) {
    let arrayMath = math.split(' ');
    for (let i = 0; i < arrayMath.length; i++) {
        if(arrayMath[i] == '+'){
            console.log('tambah');
        }   
    } 
}

console.log(algebra('x + x'));