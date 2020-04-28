var prestas = []

fetch('./json/prestas-palavanne.json')
.then(function(response) {
    return response.json() 
})
.then(function(data) { 
    prestas = data

    var table = document.querySelector('.agenda')

    for (var i = 0; i < prestas.length; i++) {
        var dates = createRow(prestas[i])
        table.appendChild(dates)
    }
})

function createRow(presta) {
    var tr = document.createElement('tr')
    tr.classList = 'row'

    if (presta.spectacle === 'Les Pourkoapas') {
        var cell = document.createElement('td')

        var lienSpectacle = document.createElement('a')
        lienSpectacle.href = 'pourkoapas.html'
        lienSpectacle.classList = 'link-spectacle'
        lienSpectacle.innerHTML = presta.spectacle
        cell.appendChild(lienSpectacle)

        tr.appendChild(cell)

    } else if (presta.spectacle === 'La Moufle') {
        var cell = document.createElement('td')

        var lienSpectacle = document.createElement('a')
        lienSpectacle.href = 'moufle.html'
        lienSpectacle.classList = 'link-spectacle'
        lienSpectacle.innerHTML = presta.spectacle
        cell.appendChild(lienSpectacle)

        tr.appendChild(cell)
    } else {
        
    }

    tr.appendChild(createCell(presta.date))
    tr.appendChild(createCell(presta.ville))

    if (presta.lien !== '' && presta.spetacle !== '') {
        var lien = document.createElement('a')
        lien.href = presta.lien
        lienSpectacle.classList = 'link-presta'
        lien.innerHTML = presta.evenement
        
        var td = document.createElement('td')
        td.appendChild(lien)

        tr.appendChild(td)

    } else {
        tr.appendChild(createCell(presta.evenement))
    }

    return tr
}

function createCell(val) {
    var td = document.createElement('td')
    td.innerHTML = val

    return td
}
