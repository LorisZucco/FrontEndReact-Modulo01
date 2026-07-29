const order = {
    customer: "Loris",
    items: [
        { name: "Pizza", price: 45 },
        {name: "Refrigerante", price: 12 }
    ],
    addres: {
        city: "Florianópolis"
    },
    total() {
        return this.items.reduce((sum, item) => {
            return sum + item.price
        }, 0)
    },
    dlivered: false
}

console.log(order.customer);
console.log(order.items[1].price);
console.log(order.total());