const {assert, expect, should} = require('chai');
const Segment = require('../lib/segment');

describe( 'Segment', () =>{

  let segment;

  beforeEach( () => {
    segment = new Segment();
  } );

  it( 'should be a function', () => {
    assert.isFunction( Segment );
  } );

  it( 'should be an object', () => {
    assert.isObject( segment );
  } );

  it( 'should have an x and y position with a default value of 0', () => {
    assert.equal( segment.xPosition, 0 );
    assert.equal( segment.yPosition, 0 );
  } );

  it( 'should have a height and width of 28', () => {
    assert.equal( segment.width, 28 );
    assert.equal( segment.height, 28 );
  } );
} );
