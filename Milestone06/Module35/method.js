const student = {
    id: 101,
    name: 'RJ Kibria',
    mony: 5000,
    major: 'mathematics',
    isRich: false,
    subject: ['english', 'ICT', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics',
    },
    takeExam: function () {
        console.log(this.name, 'taking Exam');
    },
    treatDey: function (expense, bookish) {
        this.mony = this.mony - expense - bookish;
        return this.mony;
    }
}

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(600, 50);
console.log(remaining2);