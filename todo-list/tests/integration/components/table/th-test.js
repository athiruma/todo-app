import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-list/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table/th', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Table::Th />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Table::Th>
        template block text
      </Table::Th>
    `);

    assert.dom().hasText('template block text');
  });
});
