
// const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Survey = mongoose.model('surveys');

module.exports = app => {

  app.get('/api/promoInstance', async (req, res) => {
    const data = await Survey.find( req.slug )
    res.send(data);
  });

  app.get('/api/promoInstance/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });

  // POST promoInstance to Database
  app.post('/api/promoInstance', requireLogin, async (req, res) => {    
    const {lgImage, mdImage, ctaUrl, eyeEN, hedEN, subEN, ctaName } = req.body;
    let instanceId = `instance_ID_${Date.now()}`

    const survey = new Survey({
      
      // slug: hedEN.split(' ').join('-').toLowerCase(),
      storyDefault: { 
        images: [{ large: lgImage, medium: mdImage }],
        ctas: { url: ctaUrl },
        transdata: { 
          eye: { en: eyeEN },
          hed: { en: hedEN },
          sub: { en: subEN },
          cta: { en: ctaName }
         }
      },
      // content: [{template, image, head, subCopy} ],
      _user: req.user.id,
      instanceId: instanceId,
      dateSent: Date.now()
    });

    try {
         await survey.save()
      
            Survey.findOne({ instanceId: instanceId })
            .then((instance) => {
            console.log(instance);
            instance.storyDefault.images.push({ large: mdImage });;
            return instance.save();
        });

        const user = await req.user.save();

        res.send(user);
      } catch (err) {
        res.status(422).send(err);
    }
  });
};