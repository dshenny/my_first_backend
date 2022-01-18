const express = require('express');


const app = express();
const port = 8080;


const basicAuth = require('express-basic-auth')


app.get("/", (req, res)=> {
    franksongs = ["All Alone", "All By Myself", "All I Do Is Dream of You", "All I Need is the Girl", "All My Tomorrows", "All of Me", "All of You", "All or Nothing at All", "All the Things You Are", "All the Way", "All the Way Home", "All This and Heaven Too", "All Through the Day", "Almost Like Being in Love", "Always", "America the Beautiful", "American Beauty Rose", 
    "Among My Souvenirs", "Anything", "Barbara"];
    randomsongs = franksongs[Math.floor(Math.random(" ") * franksongs.length)];
    res.send(randomsongs);
})

app.get("/birth_date", (req, res)=> {
    frankbirthday = "December 12, 1915";
    //dont have to put inside variable, can simply just insert date directly inside of "res.send()"
    res.send(frankbirthday);
})

app.get("/birth_city", (req, res)=> {
    frankbirthcity= "Hoboken, New Jersey";
     //dont have to put inside variable, can simply just insert city and state directly inside of "res.send()"
    res.send(frankbirthcity);
})

app.get("/wives", (req, res)=> {
    res.send("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx")
})
app.get("/picture", (req, res)=> {
    //frankpicture = "https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg"
    //can also place the variable above(frankpicture) inside redirect quotes
    //if not using variable, you must have link in quotes still
    res.redirect("https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg");
})

app.get("/public", (req, res)=> {
    res.send("Everybody can see this page")
})

app.use("/protected", basicAuth({
    users: { 'admin': 'admin' },
    challenge: true,
    unauthorizedResponse: 'Not authorized',
}))


app.get("/protected", (req, res)=> {
    res.send("Welcome, authenticated client")
})
app.listen(port, ()=> console.log("listening on port" + port))