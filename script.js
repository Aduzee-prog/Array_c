var student = ["Matthew","Janet","Caroline","Stella","Mayowa","Justus"]
console.log(student);

var luckyNumber = [40,48,93,-10,20,120,250,150,-234]
console.log(luckyNumber);

var goodStudent = ["Matthew","Janet","Caroline","Stella","Mayowa","Justus"]
console.log(goodStudent[3]);

var luckyNumber2 = [40,48,93,-10,20,120,250,150,-234]
console.log(luckyNumber2.length);

var empty =["20","30","40"]
console.log(empty.length);

var cart =[]
cart.push('Biscuit')       //['Biscuit']
cart.unshift('cocacola')   //['Cocacola','Biscuit']
cart.push('5 Alive')       //['Cocacola','Biscuit','5 Alive']
cart.unshift('chinchin')   //['Chinchin','Cocacola','Biscuit','5 Alive']
cart.pop()                 //['Chinchin','Cocacola','Biscuit']
cart.shift()               //['Cocacola','Biscuit']


console.log(cart);




var luckyNumber3 = [40,48,93,10,20,120,250,150,234]
console.log(luckyNumber3.some(luckyNumber3 => luckyNumber3 > 251));
var luckyNumber4 = [1,2,3,4,5,6]
console.log(luckyNumber4.map(value => value / 4));
