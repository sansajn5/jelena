const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Will change to actual Internal network IP
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
    next();
  });
server.use(bodyParser.json());

const users = [
    {
        id: 1,
        name: 'Nemanja',
        lastName: 'Mudrinic',
        address: 'Kninska 13',
        contact: '1242214',
        dateOfBirth: '01-02-1995',
        note: 'nemanja je debil',
        email: 'nemanja.mudrinic@symphony.is',
        createdAt: '01-01-1998'
    },
    {
        id: 2,
        name: 'Luka',
        lastName: 'Ilic',
        address: 'Negde u loznici...',
        contact: '121421',
        dateOfBirth: '061-02-1996',
        note: 'dev',
        email: 'luka.ilic@untangledmedia.com',
        createdAt: '01-01-1999'
    },
    {
        id: 3,
        name: 'Jelena',
        lastName: 'Mackic',
        address: 'Brace Dronjak 14b',
        contact: '12421412',
        dateOfBirth: '06-06-1996',
        note: 'haker',
        email: 'macmac_mac@gmai;/com',
        createdAt: new Date(),
    }
]

server.get('/users/:id', (req, res, next) => {
    const { id } = req.params;
    const object = users.filter(user => user.id == id)[0];
    return res.json(object);
});

server.listen(3005, () => {
    console.log('cao');
})