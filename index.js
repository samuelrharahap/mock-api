const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Parse JSON and url-encoded bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Route to handle POST requests
app.post('/v1/product-stocks/bulk-update', (req, res) => {
  console.log('Received POST request:', req.body)

  // Send 'OK' response
  res.status(200).send('OK')
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
