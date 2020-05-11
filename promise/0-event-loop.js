

console.log('syn1')


setTimeout(() => {
    console.log(`time_out_2`)
}, 0);


Promise.resolve().then( () => console.log('promise_3'))

console.log('syn4')