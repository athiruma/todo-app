import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-list/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/submit', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Forms::Submit />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Forms::Submit>
        template block text
      </Forms::Submit>
    `);

    assert.dom().hasText('template block text');
  });
});
