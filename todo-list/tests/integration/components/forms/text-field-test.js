import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-list/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/text-field', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Forms::TextField />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Forms::TextField>
        template block text
      </Forms::TextField>
    `);

    assert.dom().hasText('template block text');
  });
});
