function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

// const ages = [12, 34, 54, 3, 32, 12];
// const oldest = largestElement(ages);
const oldest2 = largestElement([-12, -6, -17]);
console.log('oldest2', oldest2);