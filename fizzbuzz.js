function SumofPhNo(number){
    let sum=0;
    while(number){
        sum+=number%10;
        num= Math.floor(number/10);
    }
    return sum;
}
    
function fizzBuzz(phsum){
    //const phsum= SumofPhNo(phnumber);
    for(let i=1; i<=phsum; i++){
        if(i %3 ===0 && i %4 ===0){
            console.log("FizzBuzz");
        }
        else if(i%3 ===0){
            console.log("Fizz");
        }
        else if(i%4===0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    } 
}
const phnumber= "9997686315";
const Sum= SumofPhNo(phnumber);
fizzBuzz(Sum);
