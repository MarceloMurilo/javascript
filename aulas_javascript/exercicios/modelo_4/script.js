function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')  
    let passo = document.getElementById('txtp') 
    let res = document.getElementById('res')
    
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            window.alert('Não encontramos nada aqui ta faltando dado filho')
        } else {
            res.innerHTML= `contando...`
            //declarando variáveis tratando elas como 'números'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if (i < f){

                // contagem crescente
                
                for (let c = i; c<=f; c += p)
                    res.innerHTML += `<div> aaaa </div>
                    ${c} \u{1F595}`
                }
             else {
                // contagem decrescente
                for (let c = i; c >=f ; c -= p)
                res.innerHTML += `<div> aaaa </div>
                ${c}\u{1F595}`
            }
            res.innerHTML += `\u{1F91F}`
        }
       

    

    
}
/*
    var c = 1 
    while (c <=6){
    console.log (`passo ${c}`)
    c++ 
    }
*/ 