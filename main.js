function buscar() {
    var putText = document.querySelector("#putText").value.toLowerCase()

    var url = "https://pokeapi.co/api/v2/pokemon/" + putText + "";
    

     // Get content API
    fetch(url).then(res => res.json()).then(data => {

        var screen = document.querySelector("#tela")
        
        screen.innerHTML =

        "<h2>" + data.name + ' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + data.id + '.gif "; > '
        +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/' + data.id + '.gif "; > ' 
        + '<p> Id' + data.id + '</p>'
        + '<p> Tipo' + data.types.map(type => type.type.name) + '</p>'

        + '<p> Habilidade' + data.abilities.map(abilities => abilities.ability.name) + '</p>'


        document.querySelector("#putText").value = ''
    }).catch(error => {
        var screen = document.querySelector('#tela')

        screen.innerHTML = '<p>Pokemón não localizado, erro' + error + '</p>'

    })

}