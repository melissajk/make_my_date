const table = [...document.getElementsByTagName("table")][0]
const data_row_template = document.getElementById("data_row_template")
const template = Handlebars.compile(data_row_template.innerHTML)

const getDateData = async () => {
  await fetch('/.netlify/functions/dateInfoController')
    .then(response => response.json())
    // .then(data => {
    //   table.insertAdjacentHTML("beforeend", template({ data: data }))
    // })
    .then(data => {console.log(data.message)})
    .catch(err => console.log(err))
  }

getDateData()
