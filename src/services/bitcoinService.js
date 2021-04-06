import axios from 'axios'
export const bitcoinService = {
    getRate,
    getMarketPrice,
    getTradeVolume,
    getBlockSize
}

function getRate(coins) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        .then(res => res.data)
}

function getMarketPrice() {
    return axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        .then(res => res.data)
}

function getTradeVolume() {
return axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
.then(res=>res.data)
}
function getBlockSize() { 
    return axios.get('    https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
.then(res=>res.data)
}