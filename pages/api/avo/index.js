import DB from '../../../database/db'

async function allAvos(req, res) {
    const allEntries = await DB.getAll()
    const entriesLength = allEntries.length
    res.statusCode = 200
    res.json({data: allEntries, length: entriesLength})
}

export default allAvos