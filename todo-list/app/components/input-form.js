import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormsForm extends Component {
  @tracked message = '';

  @action
  updateMessage(message) {
    this.message = message;
  }

  @action
  resetMessage() {
    this.message = '';
  }

  @action
  onSubmit(event) {
    event.preventDefault();
    this.args.createTask(this.message);
    this.resetMessage();
  }
}
