const express = require('express')
const router = express.Router()

const { getIntensity, getRegionCountry, getRnL, getTopic } = require('../controllers/variables')


router.get('/intensity', getIntensity)

router.get('/region&country', getRegionCountry)


router.get('/relevance&likelihood', getRnL)


router.get('/topic', getTopic)

module.exports = router