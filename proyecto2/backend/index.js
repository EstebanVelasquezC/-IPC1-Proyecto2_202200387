const express = require(`express`)
const cors = require(`cors`)

const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`servidor ejecutándose en el puerto ${port}`)
})

app.use(express.urlencoded({ extended: true }));


var users = []

app.use(express.json({
    type: "*/*"
}))




app.use(cors());

app.get("/", (req, res) => res.sendFile(__dirname + "/pages/login.html"))
app.get("/register", (req, res) => res.sendFile(__dirname + "/pages/register.html"))
app.get("/admin", (req, res) => res.sendFile(__dirname + "/pages/admin/admin.html"))


app.use(express.static("/public"))
/*
app.get(`/iniciado`, (req, res) => {
    response.status(200).json({
        Mensaje: "la solicitud es correcta en el servidor"
    })
})

app.get(`/usuarios`, (req, res) => {
    res.status(200).json({
        Mensaje: "la solicitud es correcta en el servidor",
        data: users
    });
});




app.post(`/registro`, (req, res) => {
    const nuevoUsuario = req.body;
    users.push(nuevoUsuario);
    console.log(users);
    res.status(201).json({
        Mensaje: "El usuario se registró correctamente",
        Id: users.length - 1
    })
})

app.delete(`/eliminar/:id`, (req, res) => {
    const iduser = request.params.id
    users = users.filter((user) => {
        user.id !== iduser
    })
    console.log(users)
    res.status(200).json({
        Mensaje: "El usuario se elimino correctamente",
       
    })
})*/


