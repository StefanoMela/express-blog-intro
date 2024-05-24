module.exports = {
    get: (req, res) => {
        res.send('Sono la lista dei post')
    },
    post: (req, res) => {
        res.send('Postato correttamente')
    }
}