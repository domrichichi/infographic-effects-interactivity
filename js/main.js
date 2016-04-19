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
})

// chart

$runners.on('click', function () {
  $run.toggleClass('run-in');
});
