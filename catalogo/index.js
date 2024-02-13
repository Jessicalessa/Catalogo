var comentarios=[]
document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=Text]');

    items.push({
        nome: Text.value
    });

    let Text = document.querySelector('.lista-comentarios');
    Text.innerHTML = "";
    items.map(function(val){

        Text.innerHTML+=`
        <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        </div>
        `;
    })
    Text.value = "";
    
});

document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    items = [];
    
    document.querySelector('.lista-comentarios').innerHTML = "";
})
