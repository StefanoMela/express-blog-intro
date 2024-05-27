// imports
const postsArray = require('../data/post-array.js')
const postsJSON = require('../data/posts.json')
const { writeJSON } = require('../utils.js');


// export controller
module.exports = {
    get: (req, res) => {
        res.format({
            html: () => {
                let html = '<div>'
                postsArray.forEach(post => {
                    html +=
                        `<img width="250" src="/${post.immagine}"/>
                    <h2>${post.titolo}</h2>
                    <p>${post.contenuto}
                    <h3>tags:</h3>
                    <ul>
                    `;
                    post.tags.forEach(tag => html += `<li>${tag}</li>`);
                    html += `</ul>`
                });
                postsJSON.forEach(post => {
                    html +=
                        `<img width="250" src="/${post.immagine}"/>
                    <h2>${post.titolo}</h2>
                    <p>${post.contenuto}
                    <h3>tags:</h3>
                    <ul>
                    `;
                    post.tags.forEach(tag => html += `<li>${tag}</li>`);
                    html += `</ul>`
                })
                html += `</div>`
                res.send(html)
            },
            json: () => {
                res.json(postsJSON);
            }
        })
    },
    post: (req, res) => {
        writeJSON('posts', [...postsJSON, req.body])
        res.send('Post effettuato correttamente')
    }
}