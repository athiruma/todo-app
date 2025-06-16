import Route from '@ember/routing/route';
import { service } from '@ember/service';
import ENV from '../config/environment';

export default class TasksRoute extends Route {
  @service store;

  async model() {
    const tasks = await this.store.findAll('task');

    return tasks;
  }
}
