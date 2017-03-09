
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

router.post('/send', function(req, res) {
  console.log('sendgrid route hit');

    var name = req.body.name;
    var message = req.body.message;
    console.log(name, message);
    const emailBody = name + '/n' + message;
    console.log(emailBody);
      var from_email = new helper.Email('test@example.com');
      var subject = 'from Northwest Denver site';
      var to_email = new helper.Email('ohendrick1223@gmail.com');
      var content = new helper.Content('text/plain', emailBody);
      var mail = new helper.Mail(from_email, subject, to_email, content);

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

    sg.API(request, (error, response) => {
      if (error) {
        console.log(error);
        res.json('failure');
      }
      if (parseInt(response.statusCode) >= 200 && parseInt(response.statusCode)  < 300) {
        console.log('success', response);
        res.json('success');
      }
      console.log(response.statusCode);
    });

});

module.exports = router;
