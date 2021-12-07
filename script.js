
function nextQuestion(){
    var option1 = document.getElementById("option1");
    option1.remove();
    var option2 = document.getElementById("option2");
    option2.remove();
    var option3 = document.getElementById("option3");
    option3.remove();
    var option4 = document.getElementById("option4");
    option4.remove();
    var option5 = document.getElementById("option5");
    option5.remove();

    var question1 = document.querySelector("h1.main-title");
    question1.remove()


    //Second Question
    let question3 = document.createElement("h1")
    question3.setAttribute("class", "main-title");
    let question3text = document.createTextNode("Qual é a melhor linguagem de programação?")
    question3.appendChild(question3text)
    document.querySelector("div.main-div").appendChild(question3)


    //Div 1
    let secondOption1 = document.createElement("div")
    //let textSecondOption1 = document.createTextNode("Hello!")
    //secondOption1.appendChild(textSecondOption1)
    secondOption1.setAttribute("id", "secondOption1")
    secondOption1.setAttribute("class", "mainOption");
    document.querySelector(".main-div").appendChild(secondOption1);

    //Number 1
    let secondNumber1 = document.createElement("p")
    let textSecondNumber1 = document.createTextNode("1")
    secondNumber1.appendChild(textSecondNumber1)
    secondNumber1.setAttribute("id", "secondNumber1")
    secondNumber1.setAttribute("class", "questionNUmber");
    document.getElementById("secondOption1").appendChild(secondNumber1);

    //Option 1
    let secondPhrase1 = document.createElement("p")
    let textSecondPhrase1 = document.createTextNode("JavaScript")
    secondPhrase1.appendChild(textSecondPhrase1)
    secondPhrase1.setAttribute("class", "option");
    document.getElementById("secondOption1").appendChild(secondPhrase1);
    
    //Div 2
    let secondOption2 = document.createElement("div")
    //let textSecondOption1 = document.createTextNode("Hello!")
    //secondOption1.appendChild(textSecondOption1)
    secondOption2.setAttribute("id", "secondOption2")
    secondOption2.setAttribute("class", "mainOption");
    document.querySelector(".main-div").appendChild(secondOption2);

    //Number 2
    let secondNumber2 = document.createElement("p")
    let textSecondNumber2 = document.createTextNode("2")
    secondNumber2.appendChild(textSecondNumber2)
    secondNumber2.setAttribute("id", "secondNumber2")
    secondNumber2.setAttribute("class", "questionNUmber");
    document.getElementById("secondOption2").appendChild(secondNumber2);

    //Option 2
    let secondPhrase2 = document.createElement("p")
    let textSecondPhrase2 = document.createTextNode("Python")
    secondPhrase2.appendChild(textSecondPhrase2)
    secondPhrase2.setAttribute("class", "option");
    document.getElementById("secondOption2").appendChild(secondPhrase2);

    //Div 3
    let secondOption3 = document.createElement("div")
    //let textSecondOption1 = document.createTextNode("Hello!")
    //secondOption1.appendChild(textSecondOption1)
    secondOption3.setAttribute("id", "secondOption3")
    secondOption3.setAttribute("class", "mainOption");
    document.querySelector(".main-div").appendChild(secondOption3);

    //Number 3
    let secondNumber3 = document.createElement("p")
    let textSecondNumber3 = document.createTextNode("3")
    secondNumber3.appendChild(textSecondNumber3)
    secondNumber3.setAttribute("id", "secondNumber3")
    secondNumber3.setAttribute("class", "questionNUmber");
    document.getElementById("secondOption3").appendChild(secondNumber3);

    //Option 3
    let secondPhrase3 = document.createElement("p")
    let textSecondPhrase3 = document.createTextNode("Java")
    secondPhrase3.appendChild(textSecondPhrase3)
    secondPhrase3.setAttribute("class", "option");
    document.getElementById("secondOption3").appendChild(secondPhrase3);

    //Div 4
    let secondOption4 = document.createElement("div")
    //let textSecondOption1 = document.createTextNode("Hello!")
    //secondOption1.appendChild(textSecondOption1)
    secondOption4.setAttribute("id", "secondOption4")
    secondOption4.setAttribute("class", "mainOption");
    document.querySelector(".main-div").appendChild(secondOption4);

    //Number 4
    let secondNumber4 = document.createElement("p")
    let textSecondNumber4 = document.createTextNode("4")
    secondNumber4.appendChild(textSecondNumber4)
    secondNumber4.setAttribute("id", "secondNumber4")
    secondNumber4.setAttribute("class", "questionNUmber");
    document.getElementById("secondOption4").appendChild(secondNumber4);

    //Option 4
    let secondPhrase4 = document.createElement("p")
    let textSecondPhrase4 = document.createTextNode("PHP")
    secondPhrase4.appendChild(textSecondPhrase4)
    secondPhrase4.setAttribute("class", "option");
    document.getElementById("secondOption4").appendChild(secondPhrase4);

    //Div 5
    let secondOption5 = document.createElement("div")
    //let textSecondOption1 = document.createTextNode("Hello!")
    //secondOption1.appendChild(textSecondOption1)
    secondOption5.setAttribute("id", "secondOption5")
    secondOption5.setAttribute("class", "mainOption");
    document.querySelector(".main-div").appendChild(secondOption5);

    //Number 5
    let secondNumber5 = document.createElement("p")
    let textSecondNumber5 = document.createTextNode("5")
    secondNumber5.appendChild(textSecondNumber5)
    secondNumber5.setAttribute("id", "secondNumber5")
    secondNumber5.setAttribute("class", "questionNUmber");
    document.getElementById("secondOption5").appendChild(secondNumber5);

    //Option 5
    let secondPhrase5 = document.createElement("p")
    let textSecondPhrase5 = document.createTextNode("C#")
    secondPhrase5.appendChild(textSecondPhrase5)
    secondPhrase5.setAttribute("class", "option");
    document.getElementById("secondOption5").appendChild(secondPhrase5);
 
}




