import { module, test } from 'qunit';
import { setupTest } from 'todo-list/tests/helpers';

module('Unit | Controller | tasks', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:tasks');
    assert.ok(controller);
  });
});
