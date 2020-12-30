import allData from './data'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getAll() {
    const asArray = Object.values(allData)
    const randomTime = getRandomInt(500, 3000)
    await timeout(randomTime)
    return asArray
}

async function getById(id) {
    if (!Object.prototype.hasOwnProperty.call(allData, id)) {
        return null
    }
    const entry = allData[id]
    const randomTime = getRandomInt(500, 3000)
    await timeout(randomTime,)
    return entry
}

export default { getAll, getById }