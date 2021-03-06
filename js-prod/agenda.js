(function () {

  var prestas = []

  fetch('./json/prestas.json')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      prestas = data

      const agendaPkp = document.querySelector('.agenda-pourkoapas')
      const agendaCev = document.querySelector('.agenda-cev')
      const agendaMouffle = document.querySelector('.agenda-mouffle')
      const agendaCratt = document.querySelector('.agenda-cratt')
      const agendaFabrik = document.querySelector('.agenda-fabrik')
      const agendaMalle = document.querySelector('.agenda-malle')

      prestas.forEach(presta => {
        if (!presta.option && presta.spectacle === 'Les Pourkoapas') {
          const dates = createRow(presta)
          agendaPkp.appendChild(dates)
        } else if (!presta.option && presta.spectacle === 'Cont\'en Voyage') {
          const dates = createRow(presta)
          agendaCev.appendChild(dates)
        } else if (!presta.option && presta.spectacle === 'La Mouffle') {
          const dates = createRow(presta)
          agendaMouffle.appendChild(dates)
        } else if (!presta.option && presta.spectacle === 'Ca Rime à Tout Terrien') {
          const dates = createRow(presta)
          agendaCratt.appendChild(dates)
        } else if (!presta.option && presta.spectacle === 'La Fabrik\'Récup') {
          const dates = createRow(presta)
          agendaFabrik.appendChild(dates)
        } else if (!presta.option && presta.spectacle === 'La Malle Magique') {
          const dates = createRow(presta)
          agendaMalle.appendChild(dates)
        }
      });
    })

  function createRow(presta) {
    const divDate = document.createElement('div')
    if ()
    divDate.classList.add('row', 'agenda-grid')
    divDate.appendChild(createCell(presta.date))
    divDate.appendChild(createCell(presta.ville))

    const prestaAnnulee = '<strong> (annulée)<strong>'
    if (presta.annulee) {
      divDate.appendChild(createCell(presta.evenement + prestaAnnulee))
    } else {
      divDate.appendChild(createCell(presta.evenement))
    }

    if (presta.lien !== '') {
      const lien = document.createElement('a')
      lien.href = presta.lien
      lien.setAttribute('target', '_blank')
      lien.setAttribute('rel', 'noopener')

      if (presta.spectacle === 'Les Pourkoapas') {
        lien.classList.add('btn-agenda', 'has-background-color-blue')
      } else if (presta.spectacle === 'Cont\'en Voyage') {
        lien.classList.add('btn-agenda', 'has-background-color-orange')
      } else if (presta.spectacle === 'La Mouffle') {
        lien.classList.add('btn-agenda', 'has-background-color-green')
      } else if (presta.spectacle === 'Ca Rime à Tout Terrien') {
        lien.classList.add('btn-agenda', 'has-background-color-brown')
      } else if (presta.spectacle === 'La Fabrik\'Récup') {
        lien.classList.add('btn-agenda', 'has-background-color-red')
      } else if (presta.spectacle === 'La Malle Magique') {
        lien.classList.add('btn-agenda', 'has-background-color-grey')
      }

      lien.innerHTML = 'Plus d\'infos'

      const divLien = document.createElement('div')
      divLien.appendChild(lien)

      divDate.appendChild(divLien)
    }

    return divDate
  }

  function createCell(val) {
    const divCell = document.createElement('div')
    divCell.classList.add('cell')
    divCell.innerHTML = val

    return divCell
  }

}())
