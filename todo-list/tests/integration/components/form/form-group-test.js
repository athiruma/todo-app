import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-list/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form/form-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Form::FormGroup />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Form::FormGroup>
        template block text
      </Form::FormGroup>
    `);

    assert.dom().hasText('template block text');
  });
});
