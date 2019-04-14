'use strict';
const cors = require('cors');
const express = require('express');
const smartcar = require('smartcar');
const _ = require('lodash');
const Promise = require('bluebird');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const app = express()
  .use(cors());
const port = 8000;

app.use(session({
  name: 'demo-session',
  secret: 'super-duper-secret',
}));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const client = new smartcar.AuthClient({
  clientId: keys.REACT_APP_CLIENT_ID,
  clientSecret: keys.REACT_APP_CLIENT_SECRET,
  redirectUri: keys.REACT_APP_REDIRECT_URI,
  testMode: true,
});


// app.get('/', (req, res) => {
//   res.send({name:'reav'});
// });

// app.get('/login', function(req, res) {
//   const link = client.getAuthUrl();
//   res.redirect(link);
// });


/**
 * Disconnect each vehicle to cleanly logout.
 */
 app.post('/logout', function(req, res, next) {
  const {accessToken, vehicles} = req.body;
  return Promise.map(_.keys(vehicles), (id) => {
    const instance = new smartcar.Vehicle(id, accessToken);
    return instance.disconnect();
  })
    .finally(() => {
      return res.send({code: 'logout'});
    });

  });

/**
 * Called on return from the Smartcar authorization flow. This route extracts
 * the authorization code from the url and exchanges the code with Smartcar
 * for an access token that can be used to make requests to the vehicle.
 */
app.get('/callback', (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.send({code: 'Invalid code: undefined.'});
  }

  return client.exchangeCode(code)
    .then((_access) => {
      // in a production app you'll want to store this in some kind of persistent storage
      req.session = {};
      req.session.vehicles = {};
      req.session.access = _access;
      res.send(_access);

    }).catch((e) => {
      e.action = 'exchanging authorization code for access token';
      res.status(200).send(e);
    });
});


/**
 * Renders a list of vehicles. Lets the user select a vehicle and type of
 * request, then sends a POST request to the /request route.
 */
 app.post('/vehicles', (req, res, next) => {
 const {accessToken} = req.body;
 const vehicles = {};
 if (!accessToken) {
  return res.send({code: 'Invalid access: undefined.'});
 }

 smartcar.getVehicleIds(accessToken)
   .then((data) => {
     const vehicleIds = data.vehicles;
     const vehiclePromises = vehicleIds.map(vehicleId => {
       const vehicle = new smartcar.Vehicle(vehicleId, accessToken);
        vehicles[vehicleId] = {
         id: vehicleId,
       };
       return vehicle.info();
     });

     return Promise.all(vehiclePromises)
       .then((data) => {
         console.log(data, 'data');
         // Add vehicle info to vehicle objects 
         _.forEach(data, vehicle => {
           const {id: vehicleId} = vehicle;
           vehicles[vehicleId] = vehicle;
         });         
         res.send({vehicles: vehicles});
       })
       .catch((err) => { 
         res.status(200).send(err);
       });
   }).catch((e) => {
      res.status(200).send({message: e.message, error: e.error});
   });
});


/**
 * Triggers a request to the vehicle and renders the response.
 */
 app.post('/request', (req, res, next) => {
  const {vehicleId, requestType, accessToken} = req.body;
  if (!accessToken) {
    return res.send({code: 'Invalid access: undefined- /request.'});
  }

  // const vehicle = vehicles[vehicleId];
  const instance = new smartcar.Vehicle(vehicleId, accessToken);

  switch(requestType) {
    case 'info':
      instance.info()
        .then(data => {
          res.send({data: data, type: requestType})
        })
        .catch((err) => {
          res.status(200).send({message: err.message, action: 'Failed to get vehicle info - fetching vehicle info'});
        });
      break;
    case 'location':
      instance.location()
        .then(data => {
          res.send({data: data, type: requestType})
        })
        .catch((err) => {
          res.status(200).send({message: err.message, action: 'Failed to get vehicle location - fetching vehicle location'});
        });
      break;
    case 'odometer':
      instance.odometer()
        .then(data => {
          res.send({data: data, type: requestType})
        })
        .catch((err) => {
          res.status(200).send({message: err.message, action: 'Failed to get vehicle odometer - fetching vehicle odometer'});
        });
      break;
    case 'lock':
      instance.lock()
        .then(res => {
          console.log(res, 'lock');
          // res.send({
          //   // Lock and unlock requests do not return data if successful
          //   data: {
          //     action: 'Lock request sent.',
          //   },
          //   type: requestType,
          // });
        })
        .catch((err) => {
          res.status(200).send({message: err.message, action: 'Failed to send lock request to vehicle.'});
        });
      break;
    case 'unlock':
      instance.unlock()
        .then(res => {
          console.log(res, 'unlock');
          // res.send('data', {
          //   requestType,
          //   // Lock and unlock requests do not return data if successful
          //   data: {
          //     action: 'Unlock request sent.',
          //   },
          // });
        })
        .catch((err) => {
          res.status(200).send({message: err.message, action: 'Failed to send unlock request to vehicle.'});
        });
      break;
    default:
      return res.status(200).send({message: `Failed to find request type ${requestType}`});
  }

});


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));