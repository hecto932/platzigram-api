'use strict'

import fixtures from '../fixtures'

export default class Db {
  connect () {
    return Promise.resolve(true)
  }

  disconnect () {
    return Promise.resolve(true)
  }

  getImage (id) {
    return Promise.resolve(fixtures.getImage())
  }

  saveImage (image) {
    return Promise.resolve(fixtures.getImage())
  }

  likeImage (id) {
    let image = fixtures.getImage()
    image.liked = true
    image.likes = 1
    return Promise.resolve(image)
  }

  getImages () {
    return Promise.resolve([
      fixtures.getImage(),
      fixtures.getImage(),
      fixtures.getImage()
    ])
  }
}
