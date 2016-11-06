'use strict'

import { send, json } from 'micro' // eslint-disable-line no-unused-vars
import HttpHash from 'http-hash'
import Db from 'platzigram-db'
import config from './config'
import DbStub from './test/stub/db'

const env = process.env.NODE_ENV || 'production'
let db = new Db(config.db) // eslint-disable-line no-unused-vars

if (env === 'test') {
  db = new DbStub()
}

const hash = HttpHash()

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
