const Car = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  try{
    const car = await Car.getById(req.params.id)
   if(!car) {
    res.status(404).message({message: 'not found'})
    next()
   }else {
     req.car = car
     next()
   }
} catch (error) {
    next(error)
}  
}

const checkCarPayload = (req, res, next) => {
  if(!req.body.vin){ res.status(400).message({message: 'vin is missing'
  }) 
  next()
}
  if(!req.body.make){ res.status(400).message({message: 'make is missing'
  }) 
  next()
}
  if(!req.body.model){ res.status(400).message({message: 'model is missing'
  }) 
  next()
}
  if(!req.body.mileage){ res.status(400).message({
    message: 'mileage is missing'
  }) 
  next()
}else{
  next()
}
}

const checkVinNumberValid = async (req, res, next) => {
  if(Car.getAll().includes(req.body.vin)){
    res.status(400).message({message: `vin ${req.body.vin} is invalid`})
  }else{
    next()
  }

}

const checkVinNumberUnique = async (req, res, next) => {
  if(vinValidator.validate(req.body.vin)){
    next()
  }else{
    res.status(400).message({message: `vin ${req.body.vin} is invalid`})
  }
}
module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
}