/**
*
* app/core/utils.js
* All of your utils functions
*
**/

const util = {
  isJSON: (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },
};

module.exports = util;
