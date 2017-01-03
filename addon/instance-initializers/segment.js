import getOwner from 'ember-getowner-polyfill';

export function initialize(appInstance) {
  const segment = appInstance.lookup('service:segment');

  appInstance.lookup('router:main').on('didTransition', function(){
    segment.trackPageView();
  });
}

export default {
  name: 'segment',
  initialize: initialize
};
