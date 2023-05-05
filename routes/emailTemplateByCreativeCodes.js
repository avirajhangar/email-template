var express = require('express')
var router = express.Router()
var segmentationrules = require('../services/emailtemplate')

router.param('creativeCode', function (req, res, next, creativeCode) {
    segmentationrules.getEmailVariationBasedOnCreativeCode(creativeCode).then(function (segmentationrulesCollectionCode) {
      req.segmentationrulesByCreaCode = segmentationrulesCollectionCode.items
      next()
    }).catch(function (err) {
      console.log('segmentationrules.js - getProduct (line 7) error:', JSON.stringify(err,null,2))
      next()
    })
})

router.use(function (req, res, next) {
    segmentationrules.getEmailVariation().then(function (segmentationrulesCollection) {
    req.segmentationrules = segmentationrulesCollection.items
    next()
  }).catch(function (err) {
    console.log('index.js - getEmailVariation (line 7) error:', JSON.stringify(err,null,2))
    next()
  })
})

router.get('/get-template/:creativeCode', function (req, res, next) {
    res.send(req.segmentationrulesByCreaCode)
})

module.exports = router