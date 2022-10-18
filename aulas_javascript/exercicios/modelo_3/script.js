function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERROOOOOO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'imgs/homem8.jpeg')
            } else if (idade <18) {
                //Jovem
                img.setAttribute('src', 'imgs/homem16.jpeg')
            }else if (idade <40){
                //Adulto
                img.setAttribute('src', 'imgs/homem20.jpeg')
            }else {
                //Idoso
                img.setAttribute('src', 'imgs/homem40.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'imgs/mulher8.jpeg')
            } else if (idade <20) {
                //Jovem
                img.setAttribute('src', 'imgs/mulher18.jpeg')
            }else if (idade <40){
                //Adulto
                img.setAttribute('src', 'imgs/mulher30.jpeg')
            }else {
                //Idoso
                img.setAttribute('src', 'imgs/mulher40.jpeg')
            }
        }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectando.. bibpibbpi.. ${genero} com ${idade} anos....`
        res.appendChild(img)
    }
