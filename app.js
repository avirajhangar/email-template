const { response } = require('express');
const express = require('express')
const app = express()
const port = 3001
const Handlebars = require("handlebars");
const template = Handlebars.compile("creativeCode: {{creativeCode}}");
const accessToken = "tPdNXEZCJFqn0cnHAlfSyziZFMDYIMJF2why6qFn9Zg";
const spaceID = "4f311qjmpcww";
const query = `segmentationRulesCollection
{
  items {
    creativeCode
  }
}`;
app.get('/', (req, res) => {

})

app.get('/get-template', (req, res) => {
    var creativeCode = req.query.creativeCode;
    fetch(
        `https://graphql.contentful.com/content/v1/spaces/${spaceID}/environments/master`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                query
            })
        }
    ).then(response => {
        console.log(response)
    })
    res.send(template({ creativeCode: creativeCode }))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})