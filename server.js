const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();

class Usuario {
    constructor() {
        this._id = faker.string.uuid();
        this.primerNombre = faker.person.firstName();
        this.apellido = faker.person.lastName();
        this.numeroTelefono = faker.phone.number();
        this.email = faker.internet.email();
        this.contraseña = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.location.street(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            codigoPostal: faker.location.zipCode(),
            pais: faker.location.country()
        };
    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para obtener un usuario aleatorio
app.get('/api/users/new', (req, res) => {
    const usuario = new Usuario();
    res.json(usuario);
});

// Ruta para obtener una empresa aleatoria
app.get('/api/companies/new', (req, res) => {
    const empresa = new Empresa();
    res.json(empresa);
});

// Ruta para obtener un usuario y una empresa aleatorios
app.get('/api/user/company', (req, res) => {
    const empresa = new Empresa();
    const usuario = new Usuario();
    res.json({ empresa, usuario });
});

app.listen(8080, () => {
    console.log('El servidor ya está encendido en el puerto 8080');
});
