require('dotenv').config()
const connection = require('./database.js')

connection()

const app = require('./server.js')

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})


    