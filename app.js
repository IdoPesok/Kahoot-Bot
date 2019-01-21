const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bot = require("./bot");


app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", (req, res) => {
    var pin = req.body.pin
    var base = req.body.base_name
    var num = parseInt(req.body.bot_num, 10)

    for (var i = 0; i < num; i++) {
        var nickname = base + Math.floor(Math.random() * 100)
        bot.kahootBot(pin, nickname)
    }

    res.redirect("/")
})


app.listen(3000, () => {
    console.log("Server is up and running on port 3000")
})
