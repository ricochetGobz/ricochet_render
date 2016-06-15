/**
*
* app/main.js
* The entry point of your javascript application.
*
**/

import WSController from './core/WSController';
import App from './core/App';
import utils from './core/utils';
import adrs from './core/addresses';

const WSCtrl = new WSController();
const DOMInstallStatus = document.getElementById('install-status');
const DOMDebug = document.getElementById('debug');

let _App = false;
let OFConnected = false;
let kinectConnected = false;

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
    start();
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

utils.emitter.addListener(adrs.SEND_NEW_COMPOSITION, (compo) => {
  WSCtrl.send(adrs.GALLERY_NEW_COMPOSITION, compo);
});

// WSCtrl.on(adrs.SERVER_ERROR, (err) => {
//   writeInDOM('???', err);
// });

WSCtrl.on(adrs.SERVER_DISCONNECTED, () => {
  console.log('echo-protocol Client Closed');
  writeInDOM('???', 'Disconnected to the server');
});

WSCtrl.on(adrs.OPEN_FRAMEWORKS_STATUS_CHANGE, (isConnected) => {
  OFConnected = isConnected;
  checkInstallStatus();
});

WSCtrl.on(adrs.OPEN_FRAMEWORKS_START_PLAYER, () => {
  // TODO start player
  _App.motion.toggleTimer();
});

WSCtrl.on(adrs.KINECT_STATUS_CHANGE, (isConnected) => {
  kinectConnected = isConnected;
  checkInstallStatus();
});

WSCtrl.on(adrs.CUBE_PLAYED, (data) => {
  const cube = JSON.parse(data);
  console.log(_App.motion.scene.ratio);
  // const x = cube.x * _App.motion.scene.ratio;
  // const y = cube.y * _App.motion.scene.ratio;
  const x = cube.x * 2.3;
  const y = cube.y * 2.3;
  _App.motion.createEcho(x, y, cube.soundId);
  _App.motion.timer.onAdd(cube);
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
