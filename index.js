/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-segmentio',
  included: function(app){
    this._super.included(app);

    app.import(app.bowerDirectory + 'analytics/analytics.min.js');
  },
  isDevelopingAddon: function() {
    return true;
  }
};
