
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

    let secondOption1 = document.createElement("div")
    let textSecondOption1 = document.createTextNode("Hello!")
    secondOption1.appendChild(textSecondOption1)
    document.querySelector(".main-div").appendChild(secondOption1);

    let secondOption2 = document.createElement("div")
    let textSecondOption2 = document.createTextNode("Hello!")
    secondOption1.appendChild(textSecondOption2)
    document.querySelector(".main-div").appendChild(secondOption2);

    let secondOption3 = document.createElement("div")
    let textSecondOption3 = document.createTextNode("Hello!")
    secondOption1.appendChild(textSecondOption3)
    document.querySelector(".main-div").appendChild(secondOption3);

    let secondOption4 = document.createElement("div")
    let textSecondOption4 = document.createTextNode("Hello!")
    secondOption1.appendChild(textSecondOption4)
    document.querySelector(".main-div").appendChild(secondOption4);
    
    let secondOption5 = document.createElement("div")
    let textSecondOption5 = document.createTextNode("Hello!")
    secondOption1.appendChild(textSecondOption5)
    document.querySelector(".main-div").appendChild(secondOption5);5
}





/* function showImage() {
    //pegou o arquivo e colocou numa variavel
    let image = document.getElementById("image").files[0];
    console.log(image)

    //criou o elemento tag img
    let img = document.createElement("img");
    //criou o atributo source com uma URL
    img.src = URL.createObjectURL(image)
    //definiu a width da imagem
    img.width = 200;

    //inseriu a imagem como child da div
    document.getElementById("divImage").appendChild(img)
}   */