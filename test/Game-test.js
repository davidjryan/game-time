const {assert, expect, should} = require('chai');
const Game = require('../lib/game');

describe('Game', () => {

  let game;

  beforeEach( () =>{
    game = new Game();
  } );

  it( 'should be a function', () => {
    assert.isFunction( Game );
  } );

  it( 'should be an object', () =>{
    assert.isObject( game );
  } );

  it( 'should have a difficultu with a defalut value of false', () => {
    assert.equal( game.difficulty, false );
  } );

  it( 'should have a speed with a defalut value of 15', () => {
    assert.equal( game.speed, 15 );
  } );

  it( 'should have a speed of 22 if difficulty is true', () => {
    game.changeDifficulty();
    game.difficultyState();
    assert.equal( game.difficulty, true );
    assert.equal( game.speed, 22 );
  } );

  it( 'should have a score with a default value of 0', () => {
    assert.equal( game.score, 0 );
  } );

  it( 'should have a grid with a default value of 30', () => {
    assert.equal( game.grid, 30 );
  } );
} );
