/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-segmentio',
  included: function(app){
    this._super.included(app);

    app.import('./vendor/analytics.js');
  },
  isDevelopingAddon: function() {
    return true;
  },
  contentFor: function(type,config){
    if(type === 'body-footer'){
      if(config.segment && config.segment.WRITE_KEY){
        return '<script>analytics.load(\''+config.segment.WRITE_KEY+'\')</script>'
      }
    }
  }
};
