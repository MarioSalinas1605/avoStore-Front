import DB from '../../../database/db'

async function avocado(req, res) {
    const id = req.query.id
    const entry = await DB.getById(id)
    res.statusCode = 200
    res.json(entry)
}

export default avocado