const {assert, expect, should} = require('chai');
const Apple = require('../lib/apple');

describe('Apple', () => {

  let apple;

  beforeEach( () => {
    apple = new Apple();
  } );

  it('should be a function', () => {
    assert.isFunction( Apple );
  } );

  it('should be an object', function(){
    assert.isObject( apple );
  } );

  it('should have an x and y position', () => {
    assert.equal( typeof(apple.xPosition), 'number' );
    assert.equal( typeof(apple.yPosition), 'number' );
  } );

  it( 'should have a height and width of 28', () => {
    assert.equal( apple.width, 28 );
    assert.equal( apple.height, 28 );
  } );

  it( 'should generate a new x and y position between 0 and 29', () => {
    apple.generateRandomLocation();

    assert.isAbove( apple.xPosition, -1 );
    assert.isBelow( apple.yPosition, 31 );
  } );
} );
