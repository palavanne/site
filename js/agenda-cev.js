(function () {

  var prestas = []

  fetch('../json/dates-options.json')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      prestas = data

      let table = document.querySelector('.agenda-cev')

      for (let i = 0; i < prestas.length; i++) {
        if (!prestas[i].option && prestas[i].spectacle === 'Cont\'en Voyage') {
          let dates = createRow(prestas[i])
          table.appendChild(dates)
        }
      }
    })

  function createRow(presta) {
    let divDate = document.createElement('div')
    divDate.classList.add('row', 'agenda-grid')
    divDate.appendChild(createCell(presta.date))
    divDate.appendChild(createCell(presta.ville))

    if (presta.annulee) {
      divDate.appendChild(createCell(presta.evenement + ' <strong>(annulé)</strong>'))
    } else {
      divDate.appendChild(createCell(presta.evenement))
    }

    if (presta.lien !== '') {
      let lien = document.createElement('a')
      lien.href = presta.lien
      lien.setAttribute('target', '_blank')
      lien.classList.add('btn-agenda', 'has-background-color-orange')
      lien.innerHTML = 'Plus d\'infos'

      let divLien = document.createElement('div')
      divLien.appendChild(lien)

      divDate.appendChild(divLien)
    }

    return divDate
  }

  function createCell(val) {
    let divCell = document.createElement('div')
    divCell.classList.add('cell')
    divCell.innerHTML = val

    return divCell
  }

}())
