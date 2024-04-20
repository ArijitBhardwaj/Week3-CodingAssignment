//1.Function to check if a string contains 'y':

const checkForY = (str) => {
    if (str.includes('y')) {
        console.log("YES");
    } else {
        console.log("NO");
    }
};

//2.Function to find factorial of a number:

const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

//3.Function to find the student with the highest average marks:

const studentList = [
    { name: "Mike", marks: [80, 50, 60, 100] },
    { name: "Daniel", marks: [40, 50, 100, 100] },
    { name: "Stacy", marks: [20, 100, 50, 70] }
];

const highestAverageMarks = (students) => {
    const averageMarks = students.map(student => ({
        name: student.name,
        average: student.marks.reduce((acc, mark) => acc + mark, 0) / student.marks.length
    }));
    return averageMarks.reduce((prev, current) => (prev.average > current.average) ? prev : current).name;
};

console.log(highestAverageMarks(studentList));

//4.Function to find the number with the highest number of occurrences:

const findMostFrequentNumber = (arr) => {
    const occurrenceCount = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(occurrenceCount).reduce((a, b) => occurrenceCount[a] > occurrenceCount[b] ? a : b);
};

console.log(findMostFrequentNumber([20, 4, -10, 4, 11, 20, 4, 2])); 

//5. Function to find the unique number in the array:

const findUniqueNumber = (arr) => {
    const frequency = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    for (const num in frequency) {
        if (frequency[num] === 1) {
            return parseInt(num);
        }
    }
};

console.log(findUniqueNumber([20, 20, 11, 4, 11, 20, 2, 4])); 


//6. Function to filter out palindromes from an array of strings:
const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
};

const filterPalindromes = (arr) => {
    return arr.filter(isPalindrome);
};

console.log(filterPalindromes(['abc', 'aba', 'ccc', 'dca', 'a'])); 

