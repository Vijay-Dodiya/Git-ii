let number=13,count=0
for(let i=1;i<=number;i++){
    if(number%2==0){
        count++;
    }
}
if(count==2){
    console.log("Number is prime");
}else{
    console.log("Number is not prime");
}