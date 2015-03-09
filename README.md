# MQTTLens Chrome App

## Get started and loading the Dev version of MQTTLens

`git clone https://github.com/sandro-k/MQTTLensChromeApp.git`

`git submodule init`

`npm install`

`bower install`

`grunt`


This will build MQTTlens in to the `build` directory. Navigate to `chrome://extensions/` in Chrome and load the `build`
folder as a Chrome App.

To debug MQTTlens installed from the Chrome App Store brows to  [`chrome://inspect/#apps`](chrome://inspect/#apps)

## Live reload 

`grunt watch`

## Changelog

0.0.2
* Updated to Polymer 0.5.5 and webcomponents.js

0.0.1 Initial release
