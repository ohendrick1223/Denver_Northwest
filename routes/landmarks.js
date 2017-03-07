'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');


//get all landmarks for each neighborhood page
router.get('/:id', function(req, res) {
  const id = req.params.id; //needs to equal html id
  console.log(id);
  knex('landmarks')
  .select('name', 'description', 'photo_url_recent', 'photo_url_2', 'address', 'neighborhood')
  .first()
  .where('id', id)
  .then(function(data) {
    res.send(data);
    //create a for loop to populate a modal box for each landmark.
  })
  .catch(function(err) {
    res.send(err);
  });
});
//get by id for clicking individual landmarks

module.exports = router;


//TODO: need to change the name of each id on each landmark icon to be associated to the id number. Then, need to set const id on line 10 equal to that id in the html, and then when the ids match, the pull the specific landmark object and populate it dynamically into a modal box (using angular?), but start, before modal box, just populating it on the page underneath the map....
