const axios = require('axios')
const niceList = require('../utils/niceList.json')

const serverUrl = 'http://localhost:1225'

async function main(name) {
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name
  })

  console.log({ gift })
}
const randomName = niceList[Math.floor(Math.random() * niceList.length)]
const nameToFail = 'Wrong name'

console.log('randomName: ', randomName)
main(randomName)
main(nameToFail)
