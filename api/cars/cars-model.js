const db = require('../../data/db-config');

const getAll = async () => {
  const rows = await db('cars')
  return rows
}

const getById = async (id) => {
  const row = await db('cars')
    .where('id', id)
    .first()
  return row
}

const create = async (car) => {
  const [carId] = await db('cars')
    .insert(car)
  const newCar = await getById(carId);
  return newCar
}

module.exports = {getAll, getById, create}