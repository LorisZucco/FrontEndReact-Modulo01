const shoppinglist = ["Arroz", "Iogurte","Feijão", "Café"];
//shoppinglist.shift();
// método .shift remove primeiro item do array
console.log(shoppinglist);
//shoppinglist.splice(1,2);
//console.log(shoppinglist)
/*const position = shoppinglist.indexOf("Feijão")
console.log(position)
shoppinglist.splice(position,1)
console.log(shoppinglist)*/
shoppinglist.splice(0,1, "Arroz Integral");
console.log(shoppinglist)
shoppinglist.splice(3,1,"Macarrão")
console.log(shoppinglist)
