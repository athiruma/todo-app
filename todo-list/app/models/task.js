import Model, { attr } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr title;
  @attr content;
  @attr status;
  @attr createdAt;
}
