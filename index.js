/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-segmentio',
  afterInstall(){
    return this.addBowerPackageToProject('analytics');
  },
  included(app){
    this._super.included(app);

    app.import(app.bowerDirectory + 'analytics/analytics.min.js');
  }
};
