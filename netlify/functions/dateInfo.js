const { compileDates } = require('./helpers/utils.js')
const { dateData } = require('./helpers/dates.js')

const futureDateColl = compileDates(dateData)

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      futureDateColl
    }),
  }
}
