//requirements
const router = require('express').Router();
const pool = require('../modules/pool');
//end requirements

//owners POST route
router.post('/', (req, res) => {
    console.log('in POST route', req.body);
    const ownerInfo = req.body;
    const queryText = `INSERT INTO "owners" ("name")
                        VALUES ($1);`;
    pool.query(queryText, [ownerInfo.name])
        .then((results) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Caught ERROR in owners POST', error);
            sendStatus(500);
        });
});//end owners POST

router.get('/', (req, res) => {
    console.log('in dashboard GET');
    const queryText = `SELECT * FROM "pet_log" JOIN "owners" ON "pet_log"."owner_id" = "owners"."id";`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('ERROR caught in owners GET', error);
        res.sendStatus(500);
    });
})//end owners GET route

module.exports = router;