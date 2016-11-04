'use strict'

import { send } from 'micro'
import HttpHash from 'http-hash'

const hash = HttpHash()

hash.set('GET /:id', async function getPicture (req, res, params) {
  send(res, 200, params)
})

export default async function main (req, res) {
  let { method, url } = req
  let match = hash.get(`${method.toUpperCase()} ${url}`)

  if (match.handler) {
    try {
      await match.handler(req, res, match.params)
    } catch (e) {
      send(res, 500, { error: e.message })
    }
  } else {
    send(res, 404, { error: 'route not found' })
  }
}
