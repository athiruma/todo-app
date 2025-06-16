import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormTextField extends Component {
  @action
  handleInput(event) {
    this.args.updateMessage(event.target.value);
  }
}
