
//1.impoy json servern
const jsonserver = require('json-server')

//2.create a server application using json server
const restServer =jsonserver.create()

//3.set up path for db.json
const router =jsonserver.router('db.json')

//4.return a middleware
const middleware =jsonserver.defaults()

//5.setup a port
const port =3001
//6.use restserver
restServer.use(middleware)
restServer.use(router)

//7.to run the server
restServer.listen(port, ()=>{
    console.log('Resturant server listening on port' + port);
})