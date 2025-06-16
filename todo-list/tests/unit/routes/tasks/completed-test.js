import { module, test } from 'qunit';
import { setupTest } from 'todo-list/tests/helpers';

module('Unit | Route | tasks/completed', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tasks/completed');
    assert.ok(route);
  });
});
