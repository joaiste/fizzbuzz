//i couldn't find a specific way to limit input to numbers only & not sure if the loop expressions are sufficient instructions for that purpose

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }

    else if (i % 3 === 0) {
      console.log('Fizz');
    }

    else if (i % 5 === 0) {
      console.log('Buzz');
    }

    else {
      console.log(i);
    }
  }
}

fizzBuzz();




//not sure if this is correct; also, not sure why the second function runs first (at least it ran that way on repl when i've been fiddling with it)


function fizzBuzzCounter(input = x) {
  function fizzBuzz() {
    for (let i = 1; i <= x; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      }

      else if (i % 3 === 0) {
        console.log('Fizz');
      }

      else if (i % 5 === 0) {
        console.log('Buzz');
      }

      else {
        console.log(i);
      }
    }
  }
}

fizzBuzzCounter(20);
