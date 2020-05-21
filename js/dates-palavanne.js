(function () {

  var prestas = []

  fetch('json/dates-options.json')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      prestas = data

      var table = document.querySelector('.agenda')

      for (var i = 0; i < prestas.length; i++) {

        if (!prestas[i].option) {
          var dates = createRow(prestas[i])
          table.appendChild(dates)
        }
      }
    })

  function createRow(presta) {
    var divDate = document.createElement('div')
    divDate.classList.add('row', 'palavanne')

    divDate.appendChild(createCell(presta.spectacle)).classList.add('strong')
    divDate.appendChild(createCell(presta.date + ' ' + presta.annee))
    divDate.appendChild(createCell(presta.ville))
    divDate.appendChild(createCell(presta.evenement))

    if (presta.lien !== '') {
      var divLien = document.createElement('div')

      var lien = document.createElement('a')
      lien.href = presta.lien
      lien.setAttribute('target', '_blank')
      lien.classList = 'btn-agenda'
      lien.innerHTML = 'Plus d\'infos'

      divLien.appendChild(lien)
      divDate.appendChild(divLien)

    }

    return divDate
  }

  function createCell(val) {
    var divCell = document.createElement('div')
    divCell.innerHTML = val
    divCell.className = 'cell'

    return divCell
  }

}())