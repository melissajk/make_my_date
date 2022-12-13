const fs = require('fs')
const path = require('path')
const { assignDates } = require('./helpers/utils')

const dataFile = 'dates.json'
const DATA_PATH = path.join(__dirname, `./helpers/${dataFile}`)

const getAllDates = () => {
  const data = fs.readFileSync(DATA_PATH, 'utf-8')
  const collection = data.trim().length > 0 ? JSON.parse(data) : []
  return collection === [] ? collection : assignDates(collection.dateData)
}

const futureDateColl = getAllDates()

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      futureDateColl
    }),
  }
}
