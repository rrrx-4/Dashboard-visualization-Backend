const Forecast = require('../model/forecast')


const getIntensity = async (req, res) => {

    // console.log(req);

    const intensities = await Forecast.find({}, { intensity: 1, end_year: 1, added: 1, topic: 1, sector: 1, region: 1 })

    console.log(intensities.length);

    res.status(200).json({ intensities, count: intensities.length })


}

const getRegionCountry = async (req, res) => {

    const rnc = await Forecast.find({}, { region: 1, country: 1 })

    res.status(200).json({ rnc, count: rnc.length })

}

const getRnL = async (req, res) => {

    const rnl = await Forecast.find({}, { relevance: 1, likelihood: 1, added: 1 })

    res.status(200).json({ rnl, count: rnl.length })

}

const getTopic = async (req, res) => {

    const topic = await Forecast.find({}, { topic: 1 });

    res.status(200).json({ topic, count: topic.length })

}


module.exports = { getIntensity, getRegionCountry, getRnL, getTopic }