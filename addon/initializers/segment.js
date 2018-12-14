export function initialize(application) {
    application.inject('route', 'segment', 'service:segment');
}

export default {
  name: 'segment',
  initialize
};
