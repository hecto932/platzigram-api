'use strict'

import test from 'ava'
import micro from 'micro'
import uuid from 'uuid-base62'
import listen from 'test-listen'
import request from 'request-promise'
import pictures from '../pictures'

test('GET /:id', async t => {
  let id = uuid.v4()

  let srv = micro(pictures)

  let url = await listen(srv)
  let body = await request({ uri: `${url}/${id}`, json: true })
  t.deepEqual(body, { id })
})

test.todo('POST /')
test.todo('POST /:id/like')
