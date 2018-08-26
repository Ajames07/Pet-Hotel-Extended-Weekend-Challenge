//requirements
const router = require('express').Router();
const pool = require('../modules/pool');
//end requirements

//dashboard POST route
router.post('/', (req, res) => {
    console.log('in POST route', req.body);
    const petInfo = req.body;
    const queryText = `INSERT INTO "pet_log" ("pet_name","breed","color","checked_in")
                        VALUES ($1,$2,$3,$4);`;
    pool.query(queryText, [petInfo.pet_name, petInfo.breed, petInfo.color, petInfo.checked_in])
        .then((results) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Caught ERROR in dashboard POST', error);
            sendStatus(500);
        });
});//end dashboard POST

router.get('/', (req, res) => {
    console.log('in dashboard GET');
    const queryText = `SELECT * FROM "pet_log" JOIN "owners" ON "pet_log"."owner_id" = "owners"."id";`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('ERROR caught in dashboard GET', error);
        res.sendStatus(500);
    });
})//end dashboard GET route

module.exports = router;