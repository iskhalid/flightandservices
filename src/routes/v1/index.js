const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-contoller');

const router = express.Router();

// city
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);

//airport
router.post('/airport', AirportController.create);
router.delete('/airport/:id', AirportController.destroy);
router.get('/airport/:id', AirportController.get);
router.patch('/airport/:id', AirportController.update);
router.get('/airport', AirportController.getAll);

//flight
router.post('/flights', FlightController.create);



module.exports = router;