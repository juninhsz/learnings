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

const carro = {
    marca: "ford",
    modelo: "fusion",
    ano: 2018,
    placa: "XYZ-0987",
    buzina: function(){
        alert("piiiiii")
    },
    completo: function(){
        return "A marca do carro é "+this.marca+" e o modelo "+this.modelo+" de ano "+this.ano+ " cujo a placa é " +this.placa
    }
}

alert(carro.completo())