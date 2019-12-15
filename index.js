#!/usr/bin/env node

const fetch = require('node-fetch');

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    console.log('Your IP address is: ' + data.ip);
	return;
  })
  .catch(err => {
     console.log('error: ', err);
  });