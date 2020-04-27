var prestas = [
    {
        spectacle: "La Moufle",
        date: "20 février",
        ville: "Viriat (01)",
        evenement: "École maternelle Les Prairies",
        lien: ""
    },
    {
        spectacle: "Les Pourkoapas",
        date: "28 février",
        ville: "Les Mathes (17)",
        evenement: "Carnaval de la débrouille",
        lien: "https://www.royanatlantique.fr/"
    },
    {
        spectacle: "Les Pourkoapas",
        date: "16 mai",
        ville: "Nevers (25)",
        evenement: "Sensibilisation au développement durable",
        lien: "https://www.nevers.fr/"
    },
    {
        spectacle: "Les Pourkoapas",
        date: "20 mai",
        ville: "Sevran (93)",
        evenement: "Immobilière 3F",
        lien: "https://www.ville-sevran.fr/"
    },
    {
        spectacle: "Les Pourkoapas",
        date: "2 et 3 juin",
        ville: "Gex (01)",
        evenement: "Festival Tôt ou tard",
        lien: "https://www.festivaltotoutarts.com/"
    },
    {
        spectacle: "Les Pourkoapas",
        date: "6 et 7 juin",
        ville: "Estavayer-le-Lac (Suisse)",
        evenement: "Festival Ludimaniak 2020",
        lien: "https://ludimaniak.ch/fr/"
    },
    {
        spectacle: "Les Pourkoapas",
        date: "13 juin",
        ville: "Oyonnax (01)",
        evenement: "Défilé des conscrits",
        lien: ""
    },
    {
        spectacle: "Les Pourkoapas",
        date: "19 juin",
        ville: "Arc et Senans (25)",
        evenement: "70 ans de Dynacité",
        lien: ""
    },
    {
        spectacle: "Les Pourkoapas",
        date: "19 septembre",
        ville: "Montargis (45)",
        evenement: "Fête du quartier sur le développement durable",
        lien: ""
    },
    {
        spectacle: "Les Pourkoapas",
        date: "23 septembre",
        ville: "Sevran (93)",
        evenement: "Immobilière 3F",
        lien: ""
    }
]

// var prestas = []

// fetch('./json/prestas.json')
// .then(function(response) {
//     return response.json() 
// })
// .then(function(data) { 
//     prestas = data
// })

var table = document.querySelector('.agenda')

for (var i = 0; i < prestas.length; i++) {
    var dates = createRow(prestas[i])
    table.appendChild(dates)
}

function createRow(presta) {
    var tr = document.createElement('tr')
    tr.classList = 'row'

    if (presta.spectacle === 'Les Pourkoapas') {
        var cell = document.createElement('td')

        var lienSpectacle = document.createElement('a')
        lienSpectacle.href = 'pourkoapas.html'
        lienSpectacle.innerHTML = presta.spectacle
        cell.appendChild(lienSpectacle)

        tr.appendChild(cell)

    } else if (presta.spectacle === 'La Moufle') {
        var cell = document.createElement('td')

        var lienSpectacle = document.createElement('a')
        lienSpectacle.href = 'moufle.html'
        lienSpectacle.innerHTML = presta.spectacle
        cell.appendChild(lienSpectacle)

        tr.appendChild(cell)
    } else {
        
    }

    tr.appendChild(createCell(presta.date))
    tr.appendChild(createCell(presta.ville))

    if (presta.lien !== '') {
        var lien = document.createElement('a')
        lien.href = presta.lien
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
