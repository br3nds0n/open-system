require('dotenv').config()

const App = require('./App')

async function server () {
  const app = await App.start()
  const port = process.env.PORT_SERVER

  app.listen(port, () => console.log(`⚡ Backend started at http://localhost:${port}`))
}

server()
