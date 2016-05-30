const adresses = {
  // Server
  SERVER_STATUS_CHANGE: '/server/statuschange',
  SERVER_CONNECTED: '/server/connected',
  SERVER_DISCONNECTED: '/server/disconnected',
  // WebRender
  WEB_RENDER_STATUS_CHANGE: '/webrender/statuschange',
  WEB_RENDER_CONNECTED: '/webrender/connected',
  WEB_RENDER_DISCONNECTED: '/webrender/disconnected',
  // OpenFramework
  OPEN_FRAMEWORKS_STATUS_CHANGE: '/openframeworks/statuschange',
  OPEN_FRAMEWORKS_CONNECTED: '/openframeworks/connected',
  OPEN_FRAMEWORKS_DISCONNECTED: '/openframeworks/disconnected',
  // Kinect
  KINECT_STATUS_CHANGE: '/kinect/statuschange',
  KINECT_CONNECTED: '/kinect/connected',
  KINECT_DISCONNECTED: '/kinect/disconnected',
  // Cube
  CUBE_CONNECTED: '/cube/connected',
  CUBE_DISCONNECTED: '/cube/disconnected',
  CUBE_TOUCHED: '/cube/touched',
  CUBE_DRAGGED: '/cube/dragged',
  CUBE_DRAG_END: '/cube/dragend',
  CUBE_PLAYED: '/cube/played',
  // Cubes
  NBR_CUBE_FOUND: '/cubes/nfound',
  // Bracelet
  BRACELET_CONNECTED: '/bracelet/connected',
  BRACELET_DISCONNECTED: '/bracelet/disconnected',
};

module.exports = adresses;
