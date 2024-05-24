let paginaHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista Post</title>
    <style>
      /* Stili CSS per la visualizzazione dei post */
      .post {
        border: 1px solid #ccc;
        padding: 20px;
        margin-bottom: 20px;
      }
      .post img {
        max-width: 100%;
        height: auto;
        margin-bottom: 10px;
      }
      .post h2 {
        margin-top: 0;
      }
      .post-tags {
        margin-top: 10px;
      }
      .post-tags span {
        background-color: #f0f0f0;
        padding: 5px 10px;
        margin-right: 5px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <div id="posts-container">
      <!-- Segnaposto per i post -->
      <div class="post">
        <img src="${{POSTIMAGE}}" alt="Placeholder immagine" />
        <h2>${{POSTITLE}}</h2>
        <p>${{POSTBODY}}.</p>
        <div class="post-tags">
          <!-- Segnaposto per i tags -->
          <span>${{POSTAG}}</span>
        </div>
      </div>
    </div>
  </body>
</html>
`
