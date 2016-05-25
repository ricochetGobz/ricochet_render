const adresses = {
  // Server
  SERVER_STATUS_CHANGE: '/S_StatusChange',
  SERVER_CONNECTED: '/S_Connected',
  SERVER_DISCONNECTED: '/S_Disconnected',
  SERVER_ERROR: '/S_Error',
  // WebRender
  WEB_RENDER_STATUS_CHANGE: '/WR_StatusChange',
  WEB_RENDER_CONNECTED: '/WR_Connected',
  WEB_RENDER_DISCONNECTED: '/WR_Disconnected',
  // OpenFramework
  OPEN_FRAMEWORKS_STATUS_CHANGE: '/OF_StatusChange',
  OPEN_FRAMEWORKS_CONNECTED: '/OF_Connected',
  OPEN_FRAMEWORKS_DISCONNECTED: '/OF_Disconnected',
  // Kinect
  KINECT_STATUS_CHANGE: '/K_StatusChange',
  KINECT_CONNECTED: '/K_Connected',
  KINECT_DISCONNECTED: '/K_Disconnected',
  // Cube
  CUBE_CONNECTED: '/C_Connected',
  CUBE_DISCONNECTED: '/C_Disconnected',
  CUBE_TOUCHED: '/C_Touched',
  CUBE_DRAGGED: '/C_Dragged',
  CUBE_DRAG_END: '/C_DragEnd',
  CUBE_PLAYED: '/C_Played',
  // Cubes
  NBR_CUBE_FOUND: '/C_NbrCubesFound',
  // Bracelet
  BRACELET_CONNECTED: '/B_Connected',
  BRACELET_DISCONNECTED: '/B_Disconnected',
};

module.exports = adresses;
