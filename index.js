const { send } = require('micro')
const { router, get } = require('microrouter')

const paths = [
  get('/ping', (req, res) => send(res, 200, "pong")), 
  get('/*', (req, res) => send(res, 200, "hello world"))
]

module.exports = router(...paths)
