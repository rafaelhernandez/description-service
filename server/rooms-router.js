const express = require('express');
const db = require('../db/model.js');
const router = express.Router();

router.route('/:roomid/description')
  .get((req, res, next) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title></title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
          <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
          <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        </head>
        <body>
          <div id="app-description"></div>
          <script type="text/javascript" src="/app-description.bundle.js"></script>
          <script>
            document.addEventListener("DOMContentLoaded", function(event) {
              ReactDOM.render(
                React.createElement(AppDescription, {roomId: "${req.params.roomid}"}, null),
                document.getElementById('app-description')
              );
            });
          </script>
        </body>
      </html>
      `);
  });

module.exports = router;
