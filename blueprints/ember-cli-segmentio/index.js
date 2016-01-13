/*jshint node:true*/
module.exports = {
  description: 'Default ember-cli-segmentio blueprint. Installs dependencies',
  afterInstall: function(){
    return this.addBowerPackageToProject('analytics');
  }
};
