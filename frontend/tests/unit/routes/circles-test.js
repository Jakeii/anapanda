import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | circles', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:circles');
    assert.ok(route);
  });
});
