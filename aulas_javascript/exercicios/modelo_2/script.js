function carregar(){

    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
        if (hora >= 4 && hora < 12) {
            //Bom Dia!
            img.src = 'imgs/rebecca.jpeg'
        } else if (hora >=12 && hora < 18) {
            //Boa tarde!
            img.src = 'imgs/tarde_alice.jpeg'
            document.body.style.background = '#00325a'
        }
        else {
            //Boa noite 
            img.src = 'imgs/noite_alice.jpeg'
            document.body.style.background = '#151a3a'
        }

}
