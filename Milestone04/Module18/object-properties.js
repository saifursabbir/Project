var computer = {
    price: 29000,
    Storage: '156gb',
    color: 'silver',
    processor: 'intel i5',
}

// console.log(computer);
// console.log(computer.processor);
// var computerPrice = computer.price;

// computer.Price = 22000;
// console.log(computer);

// console.log(computerPrice);

// different ways to set a value of an object property

var pricePropertyName = "price";


computer.price = 22000;
computer["price"] = 23000;
computer[pricePropertyName] = 19000;


var StorageProperty = 'Storage';
computer[StorageProperty] = '512gb';

computer['Storage'] = '1tb';

computer.Storage = '5tb';

console.log(computer);