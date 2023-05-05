var express = require('express')
var router = express.Router()
var segmentationrules = require('../services/emailtemplate')

router.use(function (req, res, next) {
    segmentationrules.getEmailVariation().then(function (segmentationrulesCollection) {
    req.segmentationrules = segmentationrulesCollection
    next()
  }).catch(function (err) {
    console.log('index.js - getEmailVariation (line 7) error:', JSON.stringify(err,null,2))
    next()
  })
})

router.get('/', function (req, res, next) {
    res.send(req.segmentationrules)
})

module.exports = router
