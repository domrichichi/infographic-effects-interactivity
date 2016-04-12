// runners

var $runners = $('.runners');
var $run = $('.run-1');
var $runTwo = $('.run-2');
var $runThree = $('.run-3');


// phones

var $phones = $('.phones');
var $blackPhones = $('.black-phones');
var $redPhones = $('.red-phones');

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

// mousein

// phones

$phones.on('click', function () {
  $redPhones.toggleClass('make-red');
})
