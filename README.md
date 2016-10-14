# Express.js Development - октомври 2016

    MongoDB Exercises

### Problem 1. Install MondoDB and Mongoose
Create a JavaScript file ready to use MongoDB. Use MongoDB on its default port – 27017.

### Problem 2. Create Node.js module named 'instanode-db'
Create Node.js module named 'instanode-db' which is able to save tags and images. Each tag has name, creation date and multiple images. Each image has url, creation date, description and multiple tags. Separate the models into different modules.

### Problem 3. Add saving of images
The module should be able to save an image in the following format:

`instanodeDb.saveImage({ url: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg', description: 'such cat much wow', tags: ['cat','kitty','cute','catstagram'] })`

### Problem 4. Add search by tag
The module should return all images by tag sorted by their date of creation in descending order:

`instanodeDb.findByTag('cat')`

### Problem 5. Add search by creation date
The module should return all images with their tags between two dates. The two dates are optional. For example if the 'after' parameter is missing, take into account only the 'before' one. If both are missing do not filter by date. Take no more than the provided number of total results. If 'results' is missing, take no more than 10 results:

`instanodeDb.filter({after: minDate, before: maxDate, results: 24})`

#### OTHER
- Start MongoDB with command: `sudo mongod`

