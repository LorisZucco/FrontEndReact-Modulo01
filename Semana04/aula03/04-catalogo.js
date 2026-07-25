
// Mini-projeto catalogo de produtos (array de objetos)
const products = [
    {"name": "Camiseta", "price": 50.50, "category": "roupa"},
    {"name": "Boné", "price": 40.00, "category": "acessório"},
    {"name": "Tênis", "price": 300.00, "category": "calçado"},   
    {"name": "Calça", "price": 120.99, "category": "roupa"},   
]

const clothes = products.filter((product)=>{
return product.category === "roupa"
})

console.log(clothes)

const names = clothes.map((item)=>{
    return item.name
})
const total = clothes.reduce((sum, p)=>{
    return sum + p.price
}, 0 )

console.log(names)
console.log(`R$ ${total}`)

const productsNames = products.map((product) =>{
    return product.name
})
console.log(productsNames)

const totalPriceProducts = products.reduce((sum, p) =>
{
    return sum + p.price
}, 0)

console.log(`R$ ${totalPriceProducts}`)