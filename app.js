let mongoose = require('mongoose')
let instanodeDb = require('./modules/instanode-db')

mongoose.Promise = global.Promise

// Connection URL
let connection = 'mongodb://localhost:27017/myproject'

// Use connect method to connect to the server
mongoose
    .connect(connection)
    .then(() => {
      console.log('Mongoose up and running!')

        // -). saving images
        // instanodeDb.saveImage({ url: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg', description: 'such cat much wow', tags: ['cat','kitty','cute','catstagram'] })
        // instanodeDb.saveImage({ url: 'http://www.petfood.co.uk/wp-content/uploads/2011/06/free-cat-food-samples.jpg', description: 'beauty!', tags: ['cat','nicecat','cute','sweety', 'pussy'] })

        // -). search by tag
      instanodeDb.searchByTag('cat', (err, images) => {
        if (err) {
          return console.log('Error searching images by tag name: ', err.message)
        }
        console.log('Found ' + images.length + ' image(s): ', images)
      })

        // -). search by creation date
      let minDate = new Date('10/13/2016')
      let maxDate = new Date()
      instanodeDb.filter({after: minDate, before: maxDate, results: 24}, (err, images) => {
        if (err) {
          return console.log('Error searching images by creation date: ', err.message)
        }
        console.log('Found ' + images.length + ' image(s): ', images)
      })
    })
    .catch(() => {
      console.log('Error connecting to MongoDB!')
    })

