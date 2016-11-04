'use strict'

import test from 'ava'
import micro, { send } from 'micro'
import uuid from 'uuid-base62'
import listen from 'test-listen'
import request from 'request-promise'

test('GET /:id', async t => {
  let id = uuid.v4()

  let srv = micro(async (req, res) => {
    send(res, 200, { id })
  })

  let url = await listen(srv)
  let body = await request({ uri: url, json: true })
  t.deepEqual(body, { id })
})

test.todo('POST /')
test.todo('POST /:id/like')
