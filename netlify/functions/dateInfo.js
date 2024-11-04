import { compileDates } from './helpers/utils.js'
import { dateData } from './helpers/dates.js'

const futureDateColl = compileDates(dateData)

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      futureDateColl
    }),
  }
}
