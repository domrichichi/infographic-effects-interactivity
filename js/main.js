// runners

var $runners = $('.runners');
var $run = $('.run-1');
var $runTwo = $('.run-2');


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

// phones

$phones.on('click', function () {
  $redPhones.addClass('make-red');

})
