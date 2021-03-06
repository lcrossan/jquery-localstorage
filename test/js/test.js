QUnit.test('Inserting into localStorage', function(assert) {
  var obj = {
    'test': test
  }
  var key = $.store(obj)

  assert.ok(localStorage.getItem(key), 'Inserts into localStorage')
})

QUnit.test('Inserting into localStorage with a value', function(assert) {
  var obj = { 'test': test }
  var key = 'THIS IS A TEST'

  $.store(obj, key)
  assert.ok(localStorage.getItem(key), 'Inserts into localStorage')
})

QUnit.test('Getting from localStorage', function(assert) {
  localStorage.setItem('test-key', JSON.stringify('test-value'))

  assert.ok($.get('test-key'), 'Gets from localStorage')
})
