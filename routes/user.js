const express = require('express');
const router = express.Router();

const pool = require('./databaseConnection.js');

router.get('/messages', (req, res) => {
    console.log('messages route')
    res.end();
});

router.get('/users', (req, res) => {
    console.log('Fetching all users');
  
    const queryString = 'SELECT * FROM testTable';
  
    pool.query(queryString, (err, rows, fields) => {
      if (err) {
        console.log('failed query request ' + err);
        res.sendStatus(500);
        return;
      }
  
      res.json(rows);
    });
});

router.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const queryString = 'SELECT * FROM testTable WHERE idtestTable = ?';
    console.log('Fetching user with id: ', userId);
  
    pool.query(queryString, [userId], (err, rows, fields) => {
      if (err) {
        console.log('failed query request ' + err);
        res.sendStatus(500);
        return;
      }
  
      const users = rows.map((row) => {
        return { firstName: row.firstName, lastName: row.lastName }
      });
  
      res.json(users);
    });
});

router.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const queryString = 'SELECT * FROM testTable WHERE idtestTable = ?';
    console.log('Fetching user with id: ', userId);
  
    pool.query(queryString, [userId], (err, rows, fields) => {
      if (err) {
        console.log('failed query request ' + err);
        res.sendStatus(500);
        return;
      }
  
      const users = rows.map((row) => {
        return { firstName: row.firstName, lastName: row.lastName }
      });
  
      res.json(users);
    });
});

router.get('/gantt_data', (req, res) => {
    const queryString = 'SELECT * FROM ganttData';
    console.log('Fetching gantt data');
  
    pool.query(queryString, (err, rows, fields) => {
      if (err) {
        console.log('failed query request ' + err);
        res.sendStatus(500);
        return;
      }
  
      res.json(rows);
    });
});

router.post('/user_create', (req, res) => {
    const id = req.body.create_id_number;
    const firstName = req.body.create_first_name;
    const lastName = req.body.create_last_name;
    const projectName = req.body.create_project_name;
    const location = req.body.create_location;
    const queryString = 'INSERT INTO testTable (idtestTable, someInfo, otherInfo, lastName, firstName) VALUES (?, ?, ?, ?, ?)';
    
    pool.query(queryString, [id, projectName, location, lastName, firstName], (err, results, fields) => {
      if(err) {
        console.log('Failed to inser new user: ', err);
        res.sendStatus(500);
        return;
      }
  
      console.log('Inserted a new user with id: ' + id)
      res.end();
    });
});

module.exports = router;