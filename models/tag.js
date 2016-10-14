let mongoose = require('mongoose')
let Schema = mongoose.Schema

mongoose.Promise = global.Promise

// tag schema
let schema = new Schema({
  name: {type: String, default: null, required: true},
  createdAt: {type: Date, default: null}
})

schema.pre('save', function (next) {
  if (this.isNew) {
    this.createdAt = new Date()
  }
  console.log('Saving tag')
  next()
})

let Tag = mongoose.model('Tag', schema)
module.exports = Tag
