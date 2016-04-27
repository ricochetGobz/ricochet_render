/**
*
* app/main.js
* The entry point of your javascript application.
*
**/

import WSController from './core/WSController';
import App from './core/App';

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
  const _App = new App();
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
WSCtrl.on('/serverStarted', () => {
  console.log('WebSocket Client Connected');
});

WSCtrl.on('/serverError', (err) => {
  writeInDOM('???', err);
});

WSCtrl.on('/serverDown', () => {
  console.log('echo-protocol Client Closed');
  writeInDOM('???', 'Disconnected to the server');
});

WSCtrl.on('/OFStatusChange', (isConnected) => {
  OFConnected = isConnected;
  checkInstallStatus();
});

WSCtrl.on('/KStatusChange', (isConnected) => {
  kinectConnected = isConnected;
  checkInstallStatus();
});

WSCtrl.on('/playCube', (data) => {
  let cube = JSON.parse(data);
  console.log(cube);
});

/**
 * #########################
 * INIT
 * #########################
 */
WSCtrl.init();
checkInstallStatus();
