document.getElementById("generate-btn").addEventListener('click', ()=>{
    generateRandomNumber();
})


function generateRandomNumber(){
    let randomNumber = Math.round(Math.random()*10000)
    if(randomNumber < 1000){
        generateRandomNumber()
        console.log("three digit")
    } else {
        document.getElementById("generated-pin").value = randomNumber;
    }
    
}

