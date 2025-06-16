import RESTAdapter from '@ember-data/adapter/rest';
import ENV from '../config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  host = `http://${ENV.APP.HOSTNAME}:${ENV.APP.PORT}`;
  namespace = ENV.APP.NAMESPACE;
}
