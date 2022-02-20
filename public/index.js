let cep =  document.getElementById('cep')

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

cep.addEventListener('blur', (e) => {
    try{let procurar = cep.value.replace('-','')
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${procurar}/json/`, options)
    .then(response => {response.json()
        .then(data => showData(data))
    })}
    catch(error){
        alert('CEP errado')
    }
})