import Ember from 'ember';
import config from 'ember-get-config';

export default Ember.Service.extend({
  init(){
    // Get configuration and cache it in the service.
    this.set('config', config);
    return this._super(...arguments);
  },

  hasAnalytics: function() {
    return !!(this.raw() && typeof this.raw() === "object");
  },

  log: function() {
    if(this.config && this.config.segment && this.config.segment.LOG_EVENT_TRACKING) {
      Ember.Logger.info('[Segment.io] ', arguments);
    }
  },

  raw(){
    return window.analytics;
  },
  trackPageView: function() {
    if(this.hasAnalytics()) {
      this.raw().page.apply(this, arguments);

      this.log('trackPageView', arguments);
    }
  },
  trackEvent: function(event, properties, options, callback) {
    if(this.hasAnalytics()) {
      this.raw().track(event, properties, options, callback);
      this.log(event, properties, options);
    }
  },
  identifyUser: function(userId, traits, options, callback) {
    if(this.hasAnalytics()) {
      this.raw().identify(userId, traits, options, callback);
      this.log('identifyUser', traits, options);
    }
  },

  group: function(groupId, traits, options, callback) {
    if(this.hasAnalytics()) {
      this.raw().group(groupId, traits, options, callback);
      this.log('group', traits, options);
    }
  },
  aliasUser: function(userId, previousId, options, callback) {
    if(this.hasAnalytics()) {
      this.raw().alias(userId, previousId, options, callback);
      this.log('aliasUser', previousId, options);
    }
  }
});
