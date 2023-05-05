var client = require('./contentfullClient').client;

function getEmailVariationBasedOnCreativeCode (creativeCode, query) {
    query = query || {}
    query['content_type'] = 'segmentationRules'
    query['fields.creativeCode'] = creativeCode
    return client.getEntries(query)
}
function getEmailVariation (query) {
    query = query || {}
    query.content_type = 'segmentationRules'
    return client.getEntries(query)
}
module.exports = {
    getEmailVariationBasedOnCreativeCode,
    getEmailVariation,
}
