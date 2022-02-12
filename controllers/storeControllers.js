exports.homePage = (req, res) => {
    console.log(req.name)
    res.render('index',re)
}
exports.addStore = (reg, res) => {
    res.send('It works')
    // we went to render out one of our templates 
    res.render('editStore', {title:'Add Store'} )
}
exports.createStore = (reg, res) => {
    res.json(req.body)
}

