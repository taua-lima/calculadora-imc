function calcular(){
    let peso = document.querySelector('#peso').value
    let altura = (document.querySelector('#altura').value)/100    

    let imc = (peso / (altura * altura))
    imc = imc.toFixed(1)

   
    document.querySelector('#total').innerHTML = `Seu IMC calculado é de ${imc}`
    document.querySelector('#total').style.display = 'block'
}

document.querySelector('#total').style.display = 'none'
document.querySelector('#botao').addEventListener('click', calcular)