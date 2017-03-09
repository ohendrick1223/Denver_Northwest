
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');


router.post('/send', function(req, res) {
  console.log('sendgrid route hit');
  var from_email = new helper.Email('test@example.com');

    subject = 'Invoice for March, 2017';
      to_email = new helper.Email('test@example.com');
      content = new helper.Content('text/html', table);
      mail = new helper.Mail(from_email, subject, to_email, content);

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
        if (parseInt(response.statusCode) >= 200 && parseInt(response.statusCode)  < 300) res.json('success');
        console.log(response.statusCode);
      });

});

module.exports = router;
