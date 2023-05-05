const express = require('express')
const app = express()
const port = 3001
var segmentationrules = require('./routes/segmentationrules')
var segmentationrulesByCode = require('./routes/emailTemplateByCreativeCodes')

// app.get('/', (req, res) => {
//     console.log(segmentationrules)
// })

app.get('/', segmentationrules);

app.get('/get-template/:creativeCode', segmentationrulesByCode);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})