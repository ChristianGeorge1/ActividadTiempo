document.querySelector('#btnCalcular').addEventListener('click', () => {

    let horaE = document.getElementById('horaE').value
    let minutosE = document.getElementById('minutoE').value
    let segundosE = document.getElementById('segundoE').value

    let horaS = document.getElementById('horaS').value
    let minutosS = document.getElementById('minutoS').value
    let segundosS = document.getElementById('segundoS').value

    let texto = document.getElementById('resultado')
  
     
        texto.innerHTML = `Hay una diferencia de ${(horaE - horaS) } de horas con ${minutosE - minutosS} y segundos: ${segundosE - segundosS}`
    
});
