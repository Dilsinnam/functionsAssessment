function firstLetterName(name) {
    alert("The name " + name + " starts with the letter " + name.charAt(0));
}

function divisibleByTwo(divNumber) {
    if(divNumber % 2 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}



function largestNum(numArray) {
    console.log(Math.max(...numArray));
}

firstLetterName("Dilsin");
divisibleByTwo(4);
largestNum([1,2,3,4,5,6]); 

