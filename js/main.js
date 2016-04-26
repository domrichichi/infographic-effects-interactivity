// runnersvar

var $runners = $('.runners');
var $run = $('.run-1');
var $runTwo = $('.run-2');
var $runThree = $('.run-3');


// phonesvar

var $phones = $('.phones');
var $blackPhones = $('.black-phones');
var $redPhones = $('.red-phones');

// fifteenvar

var $fifteen = $('#fifteen');
var lengthMax = parseInt($fifteen.attr('data-max'), 10);
var current = 0;

var updateLength = function () {
  current += 1;
  $fifteen.html(current);
  updateTick();
};

var updateTick = function () {
  if (current < lengthMax) {
    requestAnimationFrame(updateLength);
  }
};

// chartvar

// piechartvar

// barbellvar

var $weights = $('.weights');
var $leftTwo = $('.two-left');
var $leftThree = $('.three-left');
var $leftFour = $('.four-left');

var $rightTwo = $('.two-right');
var $rightThree = $('.three-right');
var $rightFour = $('.four-right');

// runners

$runners.on('click', function () {
  $run.toggleClass('run-in');
});

$runners.on('click', function () {
  $runTwo.toggleClass('run-in-2');
});

$runners.on('click', function () {
  $runThree.toggleClass('run-in-3');
});


// mousein=hover

// phones

$phones.on('click', function () {
  $redPhones.toggleClass('make-red');
})

// fifteen

$fifteen.one('click', function () {
  $redPhones.toggleClass();
  updateLength();
});

// chart

// barbell

$weights.on('click', function () {
  $leftTwo.toggleClass('fall-in-two');
});

$weights.on('click', function () {
  $leftThree.toggleClass('fall-in-three');
});

$weights.on('click', function () {
  $leftFour.toggleClass('fall-in-four');
});

$weights.on('click', function () {
  $rightTwo.toggleClass('fall-in-two');
});

$weights.on('click', function () {
  $rightThree.toggleClass('fall-in-three');
});

$weights.on('click', function () {
  $rightFour.toggleClass('fall-in-four');
});

// wifi


