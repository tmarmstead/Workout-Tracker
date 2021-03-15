let mongoose = require('mongoose');

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true,
            },
            name: {
                type: String,
                trim: true,
                required: true,
            },
            duration: {
                type: Number,
                required: true,
            },
            distance: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            }
        }
    ]

})

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;