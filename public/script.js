const data_wrapper = document.getElementById("data_wrapper")
const data_row_template = document.getElementById("data_row_template")
const template = Handlebars.compile(data_row_template.innerHTML)

data_wrapper.onclick = (e) => {
  const modalTitle = document.getElementById('dataModalLabel')
  const paraRefDate = document.getElementById('dateDataRef')
  const paraAmbDate = document.getElementById('dateDataAmb')
  const row = e.target.parentNode
  const refDate = row.dataset.dateRef
  const ambDate = row.dataset.dateAmb
  modalTitle.innerHTML = e.target.innerHTML

  paraRefDate.innerHTML = refDate === 'N/A' ? "Not a refrigerated item" : `Refrigerate until ${refDate}`

  paraAmbDate.innerHTML = ambDate === 'N/A' ? "Not an ambient item" :  `Ambient until ${ambDate}`
}


const getDateData = async () => {
  await fetch('/api/dateInfo')
    .then(response => response.json())
    .then(data => {
      data_wrapper.insertAdjacentHTML("beforeend", template({ data: data.futureDateColl }))
    })
    .catch(err => console.log(err))
  }

getDateData()
