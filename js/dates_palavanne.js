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
    var tr = document.createElement('div')
    tr.classList = 'row'

    if (presta.spectacle !== '') {
        var cell = document.createElement('div')
        cell.className = 'cell'
        cell.innerHTML = presta.spectacle

        tr.appendChild(cell)

    }

    tr.appendChild(createCell(presta.date))
    tr.appendChild(createCell(presta.ville))

    if (presta.lien !== '') {
        var lien = document.createElement('a')
        lien.href = presta.lien
        lien.classList = 'link-agenda'
        lien.innerHTML = presta.evenement
        
        var td = document.createElement('div')
        td.appendChild(lien)

        tr.appendChild(td)

    } else {
        tr.appendChild(createCell(presta.evenement))
    }

    return tr
}

function createCell(val) {
    var cell = document.createElement('div')
    cell.innerHTML = val
    cell.className = 'cell'

    return cell
}

