describe ('Fizzbuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function(){
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });
    
    it('divisible by 15', function(){
      expect(fizzBuzz.isDivisibleByFiveteen(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {
    
    it('divisible by 3', function(){
      expect(fizzBuzz.isDivisibleByThree(2)).toBe(false);
    });
    
    it('divisible by 5', function(){
      expect(fizzBuzz.isDivisibleByFive(2)).toBe(false);
    });

    it('divisible by 5', function(){
      expect(fizzBuzz.isDivisibleByFiveteen(2)).toBe(false);
    });

  });

  describe('when playing, says', function() {
    
    it('"Fizz" when a number is divisible by 3', function(){
      expect(fizzBuzz.says(6)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function(){
      expect(fizzBuzz.says(10)).toEqual("Buzz");
    });

    it('"FizzBuzz" when a number is divisible by 15', function(){
      expect(fizzBuzz.says(30)).toEqual("FizzBuzz");
    });

    it('returns number when number is not divisible by 3, 5 or 15', function(){
      expect(fizzBuzz.says(4)).toEqual(4);
    });

  });

  // prints out all fizzbuzz from 1 to 100
  var fizzBuzz = new Fizzbuzz();
    for (var i = 1; i <= 100; i++) {
    console.log(fizzBuzz.says(i));
  }

});
