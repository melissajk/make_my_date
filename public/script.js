const table = [...document.getElementsByTagName("table")][0]
const data_row_template = document.getElementById("data_row_template")
const template = Handlebars.compile(data_row_template.innerHTML)

const getDateData = async () => {
  await fetch('/api/dateInfo')
    .then(response => response.json())
    .then(data => {
      table.insertAdjacentHTML("beforeend", template({ data: data.futureDateColl }))
    })
    .catch(err => console.log(err))
  }

getDateData()
