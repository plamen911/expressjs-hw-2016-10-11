// Node.js module to save tags and images
let mongoose = require('mongoose')
let Tag = require('../models/tag')
let Image = require('../models/image')

mongoose.Promise = global.Promise

// save image
module.exports.saveImage = (params) => {
  let tagsArray = params.tags || []
  let tags = []

  if (tagsArray.length) {
    tagsArray.forEach((tagName) => {
      tags.push(new Tag({
        name: tagName
      }))
    })
  }

  new Image({
    url: params.url || '',
    description: params.description || '',
    tags: tags
  })
        .save()
        .then((image) => {
          console.log('image._id: ', image._id)
        })
        .catch((err) => {
          console.log('Error saving new image: ', err.message)
        })
}

// search by tag - return all images by tag sorted by their date of creation in descending order
module.exports.searchByTag = (tagName, cb) => {
  Image
        .find()
        .where('tags.name').equals(tagName)
        .sort('-createdAt')
        .then((images) => {
          cb(null, images)
        })
        .catch((err) => {
          cb(err, null)
        })
}

// search by creation date - return all images with their tags between two dates
module.exports.filter = (params, cb) => {
  let minDate = params.after || null
  let maxDate = params.before || null
  let pageSize = params.results || 10

  let query = {}
  if (minDate) {
    query.createdAt = {
      '$gte': minDate
    }
  }
  if (maxDate) {
    query.createdAt = {
      '$lte': maxDate
    }
  }

  Image
        .find(query)
        .sort('-createdAt')
        .limit(pageSize)
        .then((images) => {
          cb(null, images)
        })
        .catch((err) => {
          cb(err, null)
        })
}
