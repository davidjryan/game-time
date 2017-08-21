const {assert, expect, should} = require('chai');
const Apple = require('../lib/apple');

describe('Apple', function() {

  let apple;

  beforeEach( function() {
    apple = new Apple();
  });

  it('should be a function', function() {
    assert.isFunction(Apple);
  });

  it('should be an object', function(){
    assert.isObject(apple);
  });

  it('should have an x and y position', function() {
    assert.equal( typeof(apple.xPosition), 'number' );
    assert.equal( typeof(apple.yPosition), 'number' );
  });

  it('should generate a new x and y position between 0 and 29', function() {
    apple.generateRandomLocation();

    assert.isAbove( apple.xPosition, -1 );
    assert.isBelow( apple.yPosition, 31 );
  });
});
