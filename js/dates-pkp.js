(function () {

  var prestas = []

  fetch('json/dates-options.json')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      prestas = data

      let table = document.querySelector('.agenda')

      for (let i = 0; i < prestas.length; i++) {
        if (!prestas[i].option && prestas[i].spectacle === 'Les Pourkoapas') {
          let dates = createRow(prestas[i])
          table.appendChild(dates)
        }
      }
    })

  function createRow(presta) {
    let divDate = document.createElement('div')
    divDate.classList.add('row', 'pourkoapas', 'white')
    divDate.appendChild(createCell(presta.date + ' ' + presta.annee))
    divDate.appendChild(createCell(presta.ville))
    divDate.appendChild(createCell(presta.evenement))

    if (presta.lien !== '') {
      let lien = document.createElement('a')
      lien.href = presta.lien
      lien.setAttribute('target', '_blank')
      lien.classList = 'btn-agenda'
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
