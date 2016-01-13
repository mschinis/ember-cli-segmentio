export function initialize(container, application) {
    application.inject('route', 'segment', 'service:segment');
}

export default {
  name: 'segment',
  initialize
};
