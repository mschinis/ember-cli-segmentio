import getOwner from 'ember-getowner-polyfill';

export function initialize(appInstance) {
  const owner = getOwner(appInstance);
  const segment = owner.lookup('service:segment');

  owner.lookup('router:main').on('didTransition', function(){
    segment.trackPageView();
  });
}

export default {
  name: 'segment',
  initialize: initialize
};
