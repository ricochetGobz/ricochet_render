/**
*
* core/WSConnection.js
* Connection on node.js server.
*
**/

import { w3cwebsocket as W3CWebSocket } from 'websocket';
import utils from './utils';
import adrs from './addresses';

const PORT = process.env.PORT || 8080;

export default class WSConnection {
  constructor() {
    this._client = false;
    this._listeners = {};
  }

  init() {
    this._client = new W3CWebSocket(`ws://localhost:${PORT}/`, 'echo-protocol');

    this._client.onerror = (err) => {
      this._callListener(adrs.SERVER_ERROR, err);
    };

    this._client.onopen = () => {
      this._callListener(adrs.SERVER_CONNECTED);
    };

    this._client.onclose = () => {
      this._callListener(adrs.SERVER_DISCONNECTED);
    };

    this._client.onmessage = (e) => {
      if (typeof e.data === 'string') {
        const msg = JSON.parse(e.data);
        console.log(`    Receive : ${msg.address}, ${msg.data}`);
        this._callListener(msg.address, msg.data);
      }
    };
  }

  _callListener(address, data) {
    if (!utils.addressExist(address)) {
      console.log(`_callListener ERROR : ${address} doesn't exist.`);
      return;
    }
    if (this._listeners[address]) {
      this._listeners[address](data);
      return;
    }
    console.log(`_callListener ERROR : ${address} not listened`);
  }

  send(address, data) {
    if (!utils.addressExist(address)) {
      console.log(`WSController.send() ERROR : ${address} doesn't exist.`);
      return;
    }

    if (this._client.readyState === this._client.OPEN) {
      this._client.send(JSON.stringify({ address, data }));
    } else {
      console.error('ERROR : server is lost');
    }
  }

  on(address, callback) {
    if (!utils.addressExist(address)) {
      console.log(`on() ERROR : ${address} doesn't exist.`);
      return;
    }
    this._listeners[address] = (data) => {
      callback(data);
    };
  }
}
