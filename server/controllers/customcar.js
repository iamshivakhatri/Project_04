import {pool} from '../config/database.js'

const getCars = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM customcar ORDER BY id ASC')
        res.status(200).json(results.rows)
        console.log("I am here", results.rows)
        
    } catch (error) {
        res.status(500).json(error)    
    }
}


const getCarById = async (req, res) => {
    try{
        const {id} = req.params  // const id = req.params.id
        const selectQuery = `SELECT color, wheels, interior, exterior, roof, price FROM customcar WHERE id = ${id}`
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows[0])

    } catch(error){
        res.status(500).json(error)

    }
}


const createCar = async (req, res) => {
    try {
        const {color, wheels, interior, exterior, roof, price} = req.body
        const insertQuery = `INSERT INTO customcar (color, wheels, interior, exterior, roof, price) VALUES ('${color}', '${wheels}', '${interior}', '${exterior}', '${roof}', '${price}') RETURNING *`
        const results = await pool.query(insertQuery)
        res.status(200).json(results.rows[0])
        
    } catch (error) {
        res.status(500).json(error)    
    }
}

const updateGift = async (req, res) => {
    try {
        const {id} = req.params
        const {color, wheels, interior, exterior, roof, price} = req.body
        const updateQuery = `UPDATE customcar SET color = '${color}', wheels = '${wheels}', interior = '${interior}', exterior = '${exterior}', roof = '${roof}', price = '${price}' WHERE id = ${id} RETURNING *`
        const results = await pool.query(updateQuery)
        res.status(200).json(results.rows[0])
        
    } catch (error) {
        res.status(500).json(error)    
    }
}

const deleteCar = async (req, res) => {
    try {
        const {id} = req.params
        const deleteQuery = `DELETE FROM customcar WHERE id = ${id}`
        const results = await pool.query(deleteQuery)
        res.status(200).json(results.rows[0])
        
    } catch (error) {
        res.status(500).json(error)    
    }
}

export default {getCars, getCarById, createCar, updateGift, deleteCar}