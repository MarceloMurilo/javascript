let contador = 0;
let input = document.getElementById('texto');
let add = document.getElementById('add');
let main = document.getElementById('areaLista');


function addTarefa() {
    //pegar o valor digitado no input
    let valorInput = input.value;

    //se não for vazio e nem numo, nem indefinido 
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id= "${contador}" class="item"> 
          
                    <div onclick ="marcarTarefa(${contador})"
                        class="item-icone">
                        <i id = "icone_${contador}" class="mdi mdi-circle-outline"></i>    </div>

                    <div onclick ="marcarTarefa(${contador})" class="item-nome">${valorInput} </div>

                    <div class="item-botao">
                        <button onclick = "deletar(${contador})" class="delete"> <i class="mdi mdi-delete"></i>Deletar </button> </div>
                        
                        </div>`;

        //add novo item no main
        main.innerHTML += novoItem;
        //zerar os campos
        input.value = ""
        input.focus();
    }
}


function deletar(id) {

    var tarefa = document.getElementById(id);
    tarefa.remove();
    }


function marcarTarefa(id) {

    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    
    console.log(classe);

    if(classe == "item") {
        item.classList.add('clicado');
        var icone_ = document.getElementById('icone_'+ id);
        icone_.classList.remove('mdi-circle-outline');
        icone_.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    }else  {
        item.classList.remove('clicado');
        var icone_ = document.getElementById('icone_'+ id);
        icone_.classList.add('mdi-circle-outline');
        icone_.classList.remove('mdi-check-circle');
    }
   
    }


input.addEventListener("keyup", function (event) {

    //se teclou enter (13)
    if (event.keyCode === 13) {

        event.preventDefault();
        add.click();
    }
    }
    )
