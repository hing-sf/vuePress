
// const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
// const requireCredits = require('../middlewares/requireCredits');
// const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {

  // app.get('/api/promoInstance', requireLogin, async (req, res) => {
  //   const surveys = await Survey.find({ _user: req.user.id }).select({
  //     recipients: false
  //   });

  //   res.send(surveys);
  // });

  app.get('/api/promoInstance', async (req, res) => {
    const data = await Survey.find( req.type )
    res.send(data);
  });

  app.get('/api/promoInstance/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/promoInstance/webhooks', (req, res) => {
    const p = new Path('/api/promoInstance/:surveyId/:choice');

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date()
          }
        ).exec();
      })
      .value();

    res.send({});
  });

  app.post('/api/promoInstance', requireLogin, async (req, res) => {    
    const { jsonData, type} = req.body;

    const survey = new Survey({
      jsonData,
      type,
      // recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Great place to send an email!
    // const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      // await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};