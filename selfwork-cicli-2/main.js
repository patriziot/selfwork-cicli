
let accumulator = 0;
let counter = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }else{
        accumulator = accumulator + i
        counter ++
    }
    
  }
  console.log(`accumulator = ${accumulator}`);
  console.log(`counter = ${counter}`)
  console.log(`risultato media = ${accumulator/counter}`)

