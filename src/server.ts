import app from './app'
import './data/dbConfig.ts'

const port = process.env.PORT ?? 3000

app.listen(port, function () {
  console.log(`Server listening on port ${port}`)
})
