const prices = [100,50,30,80,120,65,45,25,90,10];

const discounted = prices.map((price)=> {
    return price * 0.9;
    
})

//console.log(prices)
//console.log(discounted)
const biggerThan60 = discounted.filter((price)=>{
    return price >= 60; 
})
console.log(discounted)
console.log(biggerThan60)
