/*jshint node:true*/
module.exports = {
  description: 'Default ember-cli-segmentio blueprint. Installs dependencies',

  normalizeEntityName: function(entityName) {
    // Normalize and validate entity name here.
    return entityName;
  },
  afterInstall: function(){
    return this.addBowerPackageToProject('analytics');
  }
};
