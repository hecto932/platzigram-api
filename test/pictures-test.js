'use strict'

import test from 'ava'
import micro from 'micro'
import listen from 'test-listen'
import request from 'request-promise'
import fixtures from './fixtures'
import pictures from '../pictures'

test('GET /:id', async t => {
  let image = fixtures.getImage()
  let srv = micro(pictures)
  let url = await listen(srv)
  let body = await request({ uri: `${url}/${image.publicId}`, json: true })
  t.deepEqual(body, image)
})

test.todo('POST /')
test.todo('POST /:id/like')
