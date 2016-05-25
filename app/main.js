/**
*
* app/main.js
* The entry point of your javascript application.
*
**/

import WSController from './core/WSController';
import App from './core/App';

import adrs from './core/addresses';

let _App = false;
const WSCtrl = new WSController();
const DOMInstallStatus = document.getElementById('install-status');
const DOMDebug = document.getElementById('debug');

let OFConnected = true;
let kinectConnected = true;

function writeInDOM(status, info) {
  DOMInstallStatus.innerHTML = status;
  DOMDebug.innerHTML = info;
}
function start() {
  writeInDOM('ready', '');
  if(!_App.isOn) {
    _App.isOn = true;
    _App.start();
  }

}

function stop() {
  writeInDOM('not ready', `Open Framework : ${OFConnected ? 'ON' : 'OFF'},
   Kinect : ${kinectConnected ? 'ON' : 'OFF'}`);
}

function installIsReady() {
  return (OFConnected && kinectConnected);
}

function checkInstallStatus() {
  if (installIsReady()) {
    start();
  } else {
    stop();
  }
}

/**
 * #########################
 * CONNECION TO NODE.JS
 * #########################
 */
WSCtrl.on(adrs.SERVER_CONNECTED, () => {
  console.log('WebSocket Client Connected');
});

WSCtrl.on(adrs.SERVER_ERROR, (err) => {
  writeInDOM('???', err);
});

WSCtrl.on(adrs.SERVER_DISCONNECTED, () => {
  console.log('echo-protocol Client Closed');
  writeInDOM('???', 'Disconnected to the server');
});

WSCtrl.on(adrs.OPEN_FRAMEWORKS_STATUS_CHANGE, (isConnected) => {
  OFConnected = isConnected;
  checkInstallStatus();
});

WSCtrl.on(adrs.KINECT_STATUS_CHANGE, (isConnected) => {
  kinectConnected = isConnected;
  checkInstallStatus();
});

WSCtrl.on(adrs.CUBE_PLAYED, (data) => {
  const cube = JSON.parse(data);
  _App.motion.createEcho(cube.x, cube.y);
});

WSCtrl.on(adrs.NBR_CUBE_FOUND, (data) => {
  console.log("Nbr of cube on table :", data);
  console.log(typeof data)
  _App.motion.displayTuto(data);
});

/**
 * #########################
 * INIT
 * #########################
 */
WSCtrl.init();
_App = new App();
_App.isOn = false;
checkInstallStatus();
