import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { sort } from '@ember/object/computed';

export default class TasksController extends Controller {
  headers = ['Status', 'Title', 'Action'];
  @service store;
  @action
  createTask(title) {
    const newTask = this.store.createRecord('task', {
      title,
      status: false,
    });

    newTask.save(); // save to backend
  }
  @action
  async updateStatus(id) {
    const task = await this.store.peekRecord('task', id);
    task.status = !task.status;
    await task.save();
  }

  @action
  async deleteTask(id) {
    const task = await this.store.peekRecord('task', id);
    if (task) {
      await task.destroyRecord(); // delete from backend
    }
  }

  sortDefinition = ['status:asc', 'title:asc', 'createdAt:asc']; // false first, true last

  @sort('model', 'sortDefinition') sortedTasks;
}
