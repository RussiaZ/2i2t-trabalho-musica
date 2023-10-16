<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!--  html:5                                    -->
  <!--  <link rel="stylesheet" href="css/css.css">  -->
  <!--  <script src="js/js.js"></script>                    -->
            <h1>Enter the Input</h1>

<input type="text" required id="inputtext" required />

     <!--input com tipo(para oq entra) e ID(para marcar oq entra)-->

      <!--botoes com tipo(para saber tipo) e onclicl(para dar funcao, tem ";"! )-->
    <button type="button"  onclick="addR();">Add </button>
    <button type="button"  onclick="addF();">Add first</button>
    <button type="button"  onclick="remF();">Remove First</button>
    <button type="button"  onclick="remR();">Remove Recent </button>
    <button type="button"  onclick="V();">Ver</button>
    <button type="button"  onclick="disAZ();">Order AZ</button>
    <button type="button"  onclick="disZA();">Order ZA</button>
    <button type="button"  onclick="disZU();">Order menor-maior numero</button>
    <button type="button"  onclick="disUZ();">Order maior-menor numero</button>
    <button type="button"  onclick="taL();">Tamanho lista </button>

<div id='values'>(Items atuais)</div>
<p id="demo">(Total de Items)</p>
<!--div com id(para mostrar as coisas)-->




<script>


// variaveis :)
 values =  [];
var inp = document.getElementById('inputtext');

// ADICIONAR ULTIMO
function addR() {
  values.push(inp.value);
  inp.value = ""; }

// ADICIONAR FINAL
function addF(){
  values.unshift(inp.value);
  inp.value = ""; }

//REMOVER FINAL
function remF(){
values.shift(); }

//REMOVER RECENTE
function remR(){
    values.pop(); }

//COMPARAR NUMEROS
function comparar(a,b){
   return a-b; }

//ORGANIZAR ZERO-UM
function disZU(){
   values.sort(comparar); }

//ORGANIZAR UM-ZERO
function disUZ(){
  values.reverse(comparar); }

//ORGANIZAR A-Z
function disAZ(){
   values.sort(); }

//ORGANIZAR Z-A
function disZA(){
  values.reverse(); }

//VER TUDO
function V() {
  document.getElementById("values").innerHTML = values.join(", ");}

//TAMANHO TOTAL DA LISTA
function taL(){
    let size = values.length; 
    document.getElementById("demo").innerHTML = size;
} 

</script>

<style>
    body {background-color: darkslategray;
         text-align: center;
          color: floralwhite;}
          /* Dar destaque para o "body" do html, como fundo, onde texto fica e cor do texto. */
   </style>
</body>

</html>
