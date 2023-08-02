import app from './app'
import './data/dbConfig.ts'

const PORT = process.env.PORT

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`)
})
