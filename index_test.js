const assert = require('assert');
const Rooster = require('../index');
describe('Rooster', () => {
   describe('.announceDawn', () => {
 it('returns a rooster call', () => {
 // SetUp
const expected = 'cock-a-doodle-doo!';
 
// Exercise
 const actual = Rooster.announceDawn();
// Verify
assert.strictEqual(actual, expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', ()  => {
      //SetUp
      const inputNumber = 10;
      const expected = '10';

      //Exercise
const actual = Rooster.timeAtDawn(inputNumber);

      //Verify
      assert.strictEqual(actual, expected);
    });
     it('throws an error if passed a number less than 0', ()  =>  {
  
    //SetUp
const inputNumber = -1;
const expected = RangeError;

    //Verify
    assert.throws(() => {
      Rooster.timeAtDawn(inputNumber); //Exercise
    }, expected);
  });
     it('throws an error if passed a number greater than 23', ()  =>  {
  
    //SetUp
const inputNumber = 24;
const expected = RangeError;

    //Verify
    assert.throws(() => {
      Rooster.timeAtDawn(inputNumber); //Exercise
    }, expected);
  });
 });
});