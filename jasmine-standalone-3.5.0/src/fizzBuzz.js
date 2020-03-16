var Fizzbuzz = function() {};

Fizzbuzz.prototype.isDivisibleByThree = function(i) {
  return this._isDivisibleBy(i, 3);
};

Fizzbuzz.prototype.isDivisibleByFive = function(i) {
  return this._isDivisibleBy(i, 5);
};

Fizzbuzz.prototype.isDivisibleByFiveteen = function(i) {
  return this._isDivisibleBy(i, 15);
};

Fizzbuzz.prototype._isDivisibleBy = function(i, divisor) {
  return (i % divisor === 0);
};

Fizzbuzz.prototype.says = function(i) {
  if (this.isDivisibleByFiveteen(i)) {
    return "FizzBuzz";
  } else if (this.isDivisibleByFive(i)) {
    return "Buzz";
  } else if (this.isDivisibleByThree(i)) {
    return "Fizz";
  } else {
    return i;
  }
};
