import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | remoteproc', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:remoteproc');
    assert.ok(route);
  });
});
