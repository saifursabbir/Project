function bringSingara(taka) {
    console.log('Singara er jonno dise', taka);
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
};

var mony = 90;
var singara = bringSingara(mony);
console.log('ai nen singara', singara);
