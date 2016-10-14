let mongoose = require('mongoose')
let Tag = require('../models/tag')
let Schema = mongoose.Schema

mongoose.Promise = global.Promise

// image schema
let schema = new Schema({
  url: {type: String, default: null, required: true},
  createdAt: {type: Date, default: null},
  description: {type: String, default: null},
  tags: {type: [Tag.schema], default: []}
})

schema.pre('save', function (next) {
  if (this.isNew) {
    this.createdAt = new Date()
  }
  console.log('Saving image')
  next()
})

let Image = mongoose.model('Image', schema)
module.exports = Image
