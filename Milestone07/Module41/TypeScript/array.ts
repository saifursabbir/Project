const salary = 7500;
const friedsSalaries: number[] = [7500, 12300, 17200, 9400, 8300];

friedsSalaries[0] = 10500;
friedsSalaries.push(13100);

// friedsSalaries[4] = '9800';
// friedsSalaries.push('7400')



let max = 0;
for (const salary of friedsSalaries) {
    if (salary > max) {
        max = salary;
    }
}


