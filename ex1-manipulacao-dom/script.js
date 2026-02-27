// Selecionando o botao via JS (Vamos usar ID "MyButton")

// const Button = document.getElementById ("myButton");     
// const Button = document.querySelector ("#myButton");     
// const Button = document.getElementByTagName ("myButton");     
const button = document.getElementsByClassName ('botão');    


// Selecionando o paragrafo via JS (Vamos usar ID "MyText")
// const text = document.getElementById("myText");
const text = document.getElementsByTagName('p');

// Adicionando um "ouvinte" de evento para disparar uma ação
// button[0].addEventListener('click',() => {
button[0].addEventListener('mouseover',() => {

    // Troca o texto para "Olá, Mundo!"
    text[0].textContent = 'Olá, Mundo!';
});

button[0].addEventListener('mouseout',() => {

    // Troca o texto para "Texto inicial"
    text[0].textContent = 'Texto Inicial';
})

button[0].addEventListener('dbclick',() => {



    // Troca o texto para "Clique duplo!"
    text[0].textContent = 'Clique duplo!';
})