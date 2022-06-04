//creating random pin
function generateRandomNumber(){
    let randomNumber = Math.round(Math.random()*10000)
    if(randomNumber > 1000){
        return randomNumber;
     } else {
         console.log("three digit")
         return generateRandomNumber();
     }
    
}


//generate button functionality
document.getElementById("generate-btn").addEventListener('click', ()=>{
    let pin =  generateRandomNumber();
    // console.log(pin)
 let generatedPin = document.getElementById("generated-pin");
 generatedPin.value = pin; 
 })

 //pin code type
 document.querySelector(".calc-body").addEventListener("click", function(e){
    let showValue = document.querySelector(".showValue");
    let inputNumber = e.target.innerText
    if (isNaN(inputNumber)){
        if(inputNumber == "C"){
            showValue.value = ""
        }
    } else {
        showValue.value += inputNumber;
    }
})


//notifications display none
let wrongPin = document.querySelector(".wrong-pin");
wrongPin.style.display = "none";
let correctPin = document.querySelector(".correct-pin");
correctPin.style.display = "none";

//verification function
function verification() {
    let pin = document.getElementById("generated-pin");
    let showValue = document.querySelector(".showValue");

    if (pin.value == showValue.value){
        correctPin.style.display = "block";
        wrongPin.style.display = "none";
        document.querySelector(".submit-btn").style.backgroundColor = "green";
    } else {
        correctPin.style.display = "none";
        wrongPin.style.display = "block";

        let tryLeft = document.getElementById("tryLeft");
        if (tryLeft.innerText > 0) {
            tryLeft.innerText = parseInt(tryLeft.innerText)-1;
        }

        if(tryLeft.innerText == 0){
            document.querySelector(".submit-btn").disabled = true;
            document.querySelector(".submit-btn").style.backgroundColor = "red";
        }
    }

    pin.value = "";
    showValue.value = ""; 
}

document.querySelector(".submit-btn").addEventListener("click", function(){
    let pin = document.getElementById("generated-pin");
    let showValue = document.querySelector(".showValue");
    if( pin.value == "" || showValue.value == ""){
        if(pin.value == ""){
            alert("Generate Pin");
        }else (
            alert("Type pin")
        )
    }else {
        verification();
    }

});

