export default {
  getImage () {
    return {
      id: '6a238b19-3ee3-4d5c-acb5-944a3c1fb407',
      publicId: '3ehqEZvwZByc6hjzgEZU5p',
      userId: 'hecto932',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/3ehqEZvwZByc6hjzgEZU5p.jpg',
      description: '#awesome',
      tags: ['awesome'],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  }
}
