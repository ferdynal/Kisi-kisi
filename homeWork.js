//Jawab 1
sortFn = (a) => a.sort((c, b) => c - b);

var a = [1, 4, 5, 2, 34, 4, 5, 1, 3, 11]
console.log(sortFn(a))

//Jawab 2
dupFilter = (filter, number) => {
    var newArr = []

    for (var i = 0; i < number.length; i++) {
        if (number[i] !== filter) {
            newArr.push(number[i])
        }
    }
    return newArr
}

var number = [1, 2, 3, 4, 5]
console.log(dupFilter(2, number))

// Jawab 3  // refisi, untuk kapitalnya didepan blm bisa
function multiplesArray(letter) {
    var arrLetter = letter.split("");
    var newLetter = "";

    for (var i = 0; i < arrLetter.length; i++) {
        if (arrLetter[i] !== arrLetter[0]) {
            newLetter += "-";
        }
        for (
            var j = 0; j < arrLetter[i].length + arrLetter.indexOf(arrLetter[i]); j++
        ) {
            newLetter += `${arrLetter[i]}`;
        }
    }
    return newLetter    
}

console.log(multiplesArray("fgji"));