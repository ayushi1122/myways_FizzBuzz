function fizzBuzz(num){
    if(num %3 ===0 && num %4 ===0){
        console.log("FizzBuzz");
    }
    else if(num%3 ===0){
        console.log("Fizz");
    }
    else if(num%4===0){
        console.log("Buzz");
    }
    else{
        console.log(num);
    }
}

const Sum= 9997686315;
fizzBuzz(Sum);