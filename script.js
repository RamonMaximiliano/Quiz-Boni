
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
    question3.setAttribute("id", "main-title2");
    let question3text = document.createTextNode("Qual é a melhor linguagem de programação?")
    question3.appendChild(question3text)
    document.querySelector("div.main-div").appendChild(question3)


    //Div 1
    let secondOption1 = document.createElement("div")
    //let textSecondOption1 = document.createTextNode("Hello!")
    //secondOption1.appendChild(textSecondOption1)
    secondOption1.setAttribute("id", "secondOption1");
    secondOption1.setAttribute("class", "mainOption");
    secondOption1.setAttribute("onclick", "nextQuestion2()");
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
    secondOption2.setAttribute("onclick", "nextQuestion2()");
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
    secondOption3.setAttribute("onclick", "nextQuestion2()");
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
    secondOption4.setAttribute("onclick", "nextQuestion2()");
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
    secondOption5.setAttribute("onclick", "nextQuestion2()");
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


function nextQuestion2(){
    var nextOption1 = document.getElementById("secondOption1");
    nextOption1.remove();
    var nextOption2 = document.getElementById("secondOption2");
    nextOption2.remove();
    var nextOption3 = document.getElementById("secondOption3");
    nextOption3.remove();
    var nextOption4 = document.getElementById("secondOption4");
    nextOption4.remove();
    var nextOption5 = document.getElementById("secondOption5");
    nextOption5.remove();

    var nextQuestion1 = document.getElementById("main-title2");
    nextQuestion1.remove()

    let nextQuestion = document.createElement("h1")
    nextQuestion.setAttribute("class", "main-title");
    nextQuestion.setAttribute("id", "main-title5");
    let nextText = document.createTextNode("Qual melhor empresa?")
    nextQuestion.appendChild(nextText)
    document.querySelector("div.main-div").appendChild(nextQuestion)


    //Div third question 1
    let thirdOption1 = document.createElement("div")
    //let textSecondOption1 = document.createTextNode("Hello!")
    //secondOption1.appendChild(textSecondOption1)
    thirdOption1.setAttribute("id", "thirdOption1");
    thirdOption1.setAttribute("class", "mainOption");
    thirdOption1.setAttribute("onclick", "result()");
    document.querySelector(".main-div").appendChild(thirdOption1);

    //Number third question 1
    let thirdNumber1 = document.createElement("p")
    let textThirdNumber1 = document.createTextNode("1")
    thirdNumber1.appendChild(textThirdNumber1)
    thirdNumber1.setAttribute("id", "thirdNumber1")
    thirdNumber1.setAttribute("class", "questionNUmber");
    document.getElementById("thirdOption1").appendChild(thirdNumber1);

    //Option third question 1
    let thirdPhrase1 = document.createElement("p")
    let thirdTextPhrase1 = document.createTextNode("Apple")
    thirdPhrase1.appendChild(thirdTextPhrase1)
    thirdPhrase1.setAttribute("class", "option");
    document.getElementById("thirdOption1").appendChild(thirdPhrase1);


  //Div third question 2
  let thirdOption2 = document.createElement("div")
  //let textSecondOption1 = document.createTextNode("Hello!")
  //secondOption1.appendChild(textSecondOption1)
  thirdOption2.setAttribute("id", "thirdOption2");
  thirdOption2.setAttribute("class", "mainOption");
  thirdOption2.setAttribute("onclick", "result()");
  document.querySelector(".main-div").appendChild(thirdOption2);

  //Number third question 2
  let thirdNumber2 = document.createElement("p")
  let textThirdNumber2 = document.createTextNode("2")
  thirdNumber2.appendChild(textThirdNumber2)
  thirdNumber2.setAttribute("id", "thirdNumber2")
  thirdNumber2.setAttribute("class", "questionNUmber");
  document.getElementById("thirdOption2").appendChild(thirdNumber2);

  //Option third question 2
  let thirdPhrase2 = document.createElement("p")
  let thirdTextPhrase2 = document.createTextNode("Dell")
  thirdPhrase2.appendChild(thirdTextPhrase2)
  thirdPhrase2.setAttribute("class", "option");
  document.getElementById("thirdOption2").appendChild(thirdPhrase2);

    //Div third question 3
    let thirdOption3 = document.createElement("div")
    //let textSecondOption3 = document.createTextNode("Hello!")
    //secondOption1.appendChild(textSecondOption1)
    thirdOption3.setAttribute("id", "thirdOption3");
    thirdOption3.setAttribute("class", "mainOption");
    thirdOption3.setAttribute("onclick", "result()");
    document.querySelector(".main-div").appendChild(thirdOption3);

    //Number third question 1
    let thirdNumber3 = document.createElement("p")
    let textThirdNumber3 = document.createTextNode("3")
    thirdNumber3.appendChild(textThirdNumber3)
    thirdNumber3.setAttribute("id", "thirdNumber3")
    thirdNumber3.setAttribute("class", "questionNUmber");
    document.getElementById("thirdOption3").appendChild(thirdNumber3);

    //Option third question 1
    let thirdPhrase3 = document.createElement("p")
    let thirdTextPhrase3 = document.createTextNode("Microsoft")
    thirdPhrase3.appendChild(thirdTextPhrase3)
    thirdPhrase3.setAttribute("class", "option");
    document.getElementById("thirdOption3").appendChild(thirdPhrase3);

    
      //Div third question 4
      let thirdOption4 = document.createElement("div")
      //let textSecondOption1 = document.createTextNode("Hello!")
      //secondOption1.appendChild(textSecondOption1)
      thirdOption4.setAttribute("id", "thirdOption4");
      thirdOption4.setAttribute("class", "mainOption");
      thirdOption4.setAttribute("onclick", "result()");
      document.querySelector(".main-div").appendChild(thirdOption4);
  
      //Number third question 4
      let thirdNumber4 = document.createElement("p")
      let textThirdNumber4 = document.createTextNode("4")
      thirdNumber4.appendChild(textThirdNumber4)
      thirdNumber4.setAttribute("id", "thirdNumber1")
      thirdNumber4.setAttribute("class", "questionNUmber");
      document.getElementById("thirdOption4").appendChild(thirdNumber4);
  
      //Option third question 4
      let thirdPhrase4 = document.createElement("p")
      let thirdTextPhrase4 = document.createTextNode("Stefanini")
      thirdPhrase4.appendChild(thirdTextPhrase4)
      thirdPhrase4.setAttribute("class", "option");
      document.getElementById("thirdOption4").appendChild(thirdPhrase4);


    //Div third question 5
    let thirdOption5 = document.createElement("div")
    //let textSecondOption1 = document.createTextNode("Hello!")
    //secondOption1.appendChild(textSecondOption1)
    thirdOption5.setAttribute("id", "thirdOption5");
    thirdOption5.setAttribute("class", "mainOption");
    thirdOption5.setAttribute("onclick", "result()");
    document.querySelector(".main-div").appendChild(thirdOption5);

    //Number third question 5
    let thirdNumber5 = document.createElement("p")
    let textThirdNumber5 = document.createTextNode("5")
    thirdNumber5.appendChild(textThirdNumber5)
    thirdNumber5.setAttribute("id", "thirdNumber5")
    thirdNumber5.setAttribute("class", "questionNUmber");
    document.getElementById("thirdOption5").appendChild(thirdNumber5);

    //Option third question 5
    let thirdPhrase5 = document.createElement("p")
    let thirdTextPhrase5 = document.createTextNode("Tesla")
    thirdPhrase5.appendChild(thirdTextPhrase5)
    thirdPhrase5.setAttribute("class", "option");
    document.getElementById("thirdOption5").appendChild(thirdPhrase5);

}    


function result(){
  var finalQuestion1 = document.getElementById("thirdOption1");
  finalQuestion1.remove();
  var finalQuestion2 = document.getElementById("thirdOption2");
  finalQuestion2.remove();
  var finalQuestion3 = document.getElementById("thirdOption3");
  finalQuestion3.remove();
  var finalQuestion4 = document.getElementById("thirdOption4");
  finalQuestion4.remove();
  var finalQuestion5 = document.getElementById("thirdOption5");
  finalQuestion5.remove();

  var finalBigQuestion = document.getElementById("main-title5");
  finalBigQuestion.remove()

  //resultado
    let resultTittle = document.createElement("h1")
    resultTittle.setAttribute("class", "resultTitleRed");
    resultTittle.setAttribute("id", "result");
    let resultText = document.createTextNode("Você foi mal!")
    resultTittle.appendChild(resultText)
    document.querySelector("div.main-div").appendChild(resultTittle)
   //resultado



    let resultTextScreen = document.createElement("div")
    resultTextScreen.setAttribute("class", "paragraphResult");
    resultTextScreen.setAttribute("id", "paragraphResult");
    let resultTextScreenvision = document.createTextNode(`Sua nota foi:`)
    resultTextScreen.appendChild(resultTextScreenvision)
    document.querySelector("div.main-div").appendChild(resultTextScreen)



    let nota = 10
    let notaResult = document.createElement("div")
    notaResult.setAttribute("class", "nota");
    let notaText = document.createTextNode(nota)
    notaResult.appendChild(notaText)
    document.querySelector("div.main-div").appendChild(notaResult)


  let resetButton = document.createElement("button")
  let textoButton = document.createTextNode("Restart")
  resetButton.setAttribute("class", "resetButton")
  resetButton.setAttribute("onclick", "restart()");
  resetButton.appendChild(textoButton) 
  document.querySelector("div.main-div").appendChild(resetButton)

}

//reseta a tela, como se apertasse F5
function restart(){
  window.location.reload()
}