/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-segmentio',
  afterInstall(){
    return this.addBowerPackageToProject('analytics');
  }
};
