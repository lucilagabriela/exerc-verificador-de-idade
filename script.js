function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var msg = document.getElementById('msg')
    var nasc = document.getElementById('anonasc')
    if (nasc.value.length == 0 || nasc.value > anoatual || nasc.value == 0) {
        // verifica se a caixa de texto está vazia ou é maior que o ano atual
        msg.innerHTML = 'Verifique se preencheu os dados corretamente!'
        document.getElementById('msg').style.color = '#rgb(255, 0, 0)'
    } else {
        var idade = anoatual - Number(nasc.value)
        var sexo = document.getElementsByName('genero') //nao vai com TagName
        var genero = ''
        if (sexo[0].checked) {
            genero = 'homem'
        } else if (sexo[1].checked) {
            genero = 'mulher'
        }
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        msg.style.textAlign = 'center'
    }
}