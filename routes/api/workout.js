const router = require('express').Router();
const Workout = require('../../models/workout.js');


router.get('/', (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });

});

router.get('/range', (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });

});

router.post('/', ({ body }, res) => {
    Workout.create(body)
        .then(dbPost => {
            res.json(dbPost);
        })
        .catch(err => {
            res.json(err)
        });

});

router.put("/:id", (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        {
            new: true,
            runValidators: true
        }
    ).then(dbPut => {
        res.json(dbPut);
    })
        .catch(err => {
            res.json(err)
        });
});


// router.get('/workouts/range', (req, res) => {

// })

// router.post('/workouts', (req, res) => {
//     try {
//         const workout = await Workout.create(req.body)
//         res.status(201)
//         res.send(workout._id)
//         console.log("Posting a workoug from router.post in api_routes: ", req.body)
//     } catch (err) {
//         res.status(501)
//         res.send("error in trying to post new workout from api_routes.js:", err)

//     }

// });

// router.put('/workouts/:id', (req, res) => {

// })

module.exports = router;