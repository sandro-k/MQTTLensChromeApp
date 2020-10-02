# MQTTLens Chrome App!!

## Get started and loading the Dev version of MQTTLens

`git clone https://github.com/sandro-k/MQTTLensChromeApp.git`

`cd MQTTLensChromeApp`

`git submodule init`

`git submodule update`

`npm install`

`bower install`

`grunt`


This will build MQTTlens in to the `build` directory. Navigate to `chrome://extensions/` in Chrome and load the `build`
folder as a Chrome App.

To debug MQTTlens installed from the Chrome App Store brows to  [`chrome://inspect/#apps`](chrome://inspect/#apps)

## Other installations needed

You will also need a few other tools installed to properly complete the build:

* Ruby - see https://www.ruby-lang.org/en/
* NodeJS - see https://nodejs.org/en/
* bower - `npm install -g bower`
* sass `gem install sass`
* Grunt `npm install -g grunt-cli`

## Live reload 

`grunt watch`

## Changelog

0.0.13
* using <core-icon icon="close"></core-icon> in mqtt-message-detail-ui.html

0.0.12
* replacing &times; with x in mqtt-message-detail-ui.html

0.0.11
* adding the ability to connect/disconnect on demand

0.0.10
* making JSON paylod copyable 

0.0.9
* trim connection strings on save [MQTTLensChromeApp/issues/7](https://github.com/sandro-k/MQTTLensChromeApp/issues/7)

0.0.2
* Updated to Polymer 0.5.5 and webcomponents.js

0.0.1 Initial release
