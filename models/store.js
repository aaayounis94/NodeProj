// models are wherr we are gonna store our data
// but before we crrate the data storga ewe need to define what this adta will lokk like and that is where we define the schema 
// model is like defining columns and datatypes for each column in a spreadsheet 

// mongosee is the package we use to interface with the database 
const mongoose = require('mongoose')
// 
mongoose.Promise = global.Promise
// slugs  will allow us to use URL friendly names
const slug = require('slugs')
// make the schema 
const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, 
        // if u set required just to true it will give u an ugly mongo db errormessage 
        required:'Please enter a store name' 
    } , 
    slug:String , 
    description: {
        type: String, 
        trim: true
    }, 
    // this is how u will set an array of strings 
    tags: [String], 

})
// we do this to not autogenerate a slug when someone saves a store 
// pre('save') means before it is saved 
storeSchema.pre('save', function (next) {
    // here we only run this function if the name is modified 
    if (!this.isModified('name')) {
        next()
        return 
    }
    this.slug = slug(this.name)
    next()
})
// we are exporting the store schema and set it as the mongodb model using mongoose 
module.exports = mongoose.model('Store', storeSchema) 


