// require library downloaded
const express = require('express')
const res = require('express/lib/response')
// create express app instance
const app = express()

// here we tell app to use the ejs view engine we downloaded#
app.set('view engine', 'ejs') // 2nd argument 'pug' if using that

// create HTTP method/route. 99% of the time don't need next parameter
// just navigating to a url is a get request
app.get('/', (req, res, next) => {
    // run this code when the route is reached e.g. localhost:3000
    console.log("you made it to the back slash") // this in the server's console
    // this on the page - currently blank white page with Hi in the top left
    // send is good for testing but not something you'd use typically
    // res.send("Hi")
    // used to send a status code e.g. 500 for server error
    // res.sendStatus(500)
    // we can also use chaining
    // res.sendStatus(500).send("Hi")
    // for instance, to send json
    // res.status(500).json({ message: "Error"})
    // this would start a download of this file when navigated to
    // res.download('server.js')

    // what we mostly want to do is return/render an html file or send some json
    // first we need to tell app where these files are
    // by default app will look in a views folder if one exists
    // we can use our server to pass informaiton into our view files
    // to do this we need a VIEW ENGINE
    // there are many but we'll use EJS (another is pug) with > npm i ejs
    // html files in /views now need to have the extension .ejs not .html
    // passing data to .ejs files is as simple as including an object as 2nd arg
    // in the .ejs you use the following syntax to access/run code <%= name %>
    // this could cause an error is name is not defined so we use the following
    // <%= locals.name %>, locals is like saying 'props' and now if name is not defined
    // there will be a blank rather than an error, going further we can do <%= locals.name || 'Joe Bloggs' %>
    // the = means output that code to the page e.g. <%= 4 + 5 %> would output 9
    res.render('index', {name: 'Dildo Swaggins'}) // this now returns views/index.ejs using the ejs view engine

    
})
// often we'll want to render .ejs if using server to display web pages
// if making an API we'll likely be returning json

// currently we are defining all our routes directly in server.js, this gets messy fast
// instead express allows us to make a router - which is like another instance of our app

// we could put these user routes here but instead we'll make a /routes folder to hold an index of
// all of our routes. In there we'll make users.js
// app.get('/users', (req, res) => {
//     res.send('User List')
// })

// app.get('/users/new', (req, res) => {
//     res.send('New User Form')
// })

// import users router
const usersRouter = require('./routes/users')
// link/mount router
// the first argument is how we're able to add a prefix to this instances routes
app.use('/users', usersRouter)


// get app instance/server to listen
app.listen(3000) 
// localhost:3000 is now listening for HTTP methods
// nothing will happen until we set up routes (get, post, put, delete)
