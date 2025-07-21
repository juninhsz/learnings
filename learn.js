var idade, conclusao;
idade = 15
var maiorIdade;
maiorIdade = 18

conclusao = (idade >= maiorIdade) ? "maior idade":"menor idade"


alert("O usuário tem"+ " " + conclusao)

function realParaDolar (real, cotacaoDolar) {
    return real * cotacaoDolar
}
var valoReal = 10;
var cotacao = 5.57;
 
var total = realParaDolar(valoReal, cotacao)

alert("O valor em real é de " + valoReal +"R$" + " e o valor em dólar é de " + total + "U$")

function soma (valor1, valor2) {
    return valor1 + valor2
}

function paraCelsius (valorFahrenheit){
    return (5/9) * (valorFahrenheit-32)
}
