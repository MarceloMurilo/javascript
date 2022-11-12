let contador=0,input=document.getElementById("texto"),add=document.getElementById("add"),main=document.getElementById("areaLista");function addTarefa(){let a=input.value;if(""!==a&&null!==a&&a!==void 0){++contador;let b=`<div id= "${contador}" class="item"> 
          
                    <div onclick ="marcarTarefa(${contador})"
                        class="item-icone">
                        <i id = "icone_${contador}" class="mdi mdi-circle-outline"></i>    </div>

                    <div onclick ="marcarTarefa(${contador})" class="item-nome">${a} </div>

                    <div class="item-botao">
                        <button onclick = "deletar(${contador})" class="delete"> <i class="mdi mdi-delete"></i>Deletar </button> </div>
                        
                        </div>`;main.innerHTML+=b,input.value="",input.focus()}}function deletar(a){var b=document.getElementById(a);b.remove()}function marcarTarefa(a){var b=document.getElementById(a),c=b.getAttribute("class");if(console.log(c),"item"==c){b.classList.add("clicado");var d=document.getElementById("icone_"+a);d.classList.remove("mdi-circle-outline"),d.classList.add("mdi-check-circle"),b.parentNode.appendChild(b)}else{b.classList.remove("clicado");var d=document.getElementById("icone_"+a);d.classList.add("mdi-circle-outline"),d.classList.remove("mdi-check-circle")}}input.addEventListener("keyup",function(a){13===a.keyCode&&(a.preventDefault(),add.click())});