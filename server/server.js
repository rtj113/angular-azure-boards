const express = require('express')
const app = express()


var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://dev.azure.com/rtjdesigns/MyFirstProject/_apis/wit/workitems/1?api-version=6.0',
  'headers': {
    'Authorization': 'Basic {PAT GOES HERE}',
    'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b19af1e6-c8fe-4337-ae93-e433cb86f9fd%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

app.get('/',(request, res)=>res.body())
app.listen(process.env.PORT || 80)