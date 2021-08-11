//(1). Problem One
function seerToMon(seer) {
    const mon = seer / 40;
    return mon;
}
const seer = 400;
const mon = seerToMon(seer);
console.log(mon);

//(2). Problem two.

function totalSales(shirt, pant, shoe) {
    let shirtPrice1 = 100;
    let pantPrice2 = 200;
    let shoePrice3 = 300;
    let shirtPrice1Count = shirt * shirtPrice1;
    let pantPrice2Count = pant * pantPrice2;
    let shoePrice3Count = shoe * shoePrice3;
    return totalPase = shirtPrice1Count + pantPrice2Count + shoePrice3Count;
}

let mySalesCount = totalSales(2, 1, 2);
console.log(mySalesCount);

//(3) Problem three.

function deliveryCost(sales) {
    const shirt1Price = 100;
    const shirt2Price = 150;
    const shirt3Price = 220;

    if (sales <= 100) {
        const count = sales * shirt1Price;
        return count;
    }
    else if (sales <= 150) {
        const firstShirtPrice = 100 * shirt1Price;
        const nextSales = sales - 100;
        const secondPantPrice = nextSales * shirt2Price;
        const totalPrice = firstShirtPrice + secondPantPrice;
        return totalPrice;
    }
    else {
        const firstShirtPrice = 100 * shirt1Price;
        const secondPantPrice = nextSales * shirt2Price;
        const nextSales = sales - 150;
        const nextSalesPrice = nextSales * shirt3Price;
        const totalPrice = firstShirtPrice + secondPantPrice + nextSalesPrice;
        return totalPrice;
    }
}
const prices = deliveryCost(35);
console.log(prices);


//(4). Problem four.

let myBestFriend = ['Milad', 'Shovo', 'Rakib', 'Roni', 'Jony', 'Sabbir', 'Sajjad'];
function perfectFriend(friend) {
    biggestName = '';
    for (const element of friend) {
        if (element.length > biggestName.length) {
            biggestName = element;
        }
    }
    return biggestName;
}
const largestName = perfectFriend(myBestFriend);
console.log(largestName);
