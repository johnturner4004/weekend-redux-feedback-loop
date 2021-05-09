const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
  pool.query('SELECT * FROM "feedback"')
    .then(result => {
      console.log('Got results from server');
      res.send(result.rows)
    })
    .catch(error => {
      console.log('Error getting results', error);
      res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
  let newFeedback = req.body;
  console.log('Adding feedback', newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES($1, $2, $3, $4);`;
  pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
  .then(results => {
    console.log('Added new feedback', results);
    res.sendStatus(201);
  })
  .catch(error => {
    console.log(`Error adding feedback`, error);
    res.sendStatus(500);    
  })
})

module.exports = router;