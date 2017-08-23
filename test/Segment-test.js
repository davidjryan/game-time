const {assert, expect, should} = require('chai');
const Segment = require('../lib/segment');

describe('Segment', function(){

  let segment;

  beforeEach( function() {
    segment = new Segment();
  });

  it('should be a function', function() {
    assert.isFunction(Segment);
  });

  it('should be an object', function() {
    assert.isObject(segment);
  });

  it('should have an x position with a default value of 0', function() {
    assert.equal(segment.xPosition, 0);
  })

  it('should have a y position with a default value of 0', function() {
    assert.equal(segment.yPosition, 0);
  })
});
