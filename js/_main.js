$(function() {
  $('.js-fishs-select').empty()
  for (i = 0; i < 109; i++)
  {
     $('.js-fishs-select').append($('<option>',
     {
        value: i,
        text : i
    }));
  }

  $('.js-goats-select').empty()
  for (i = 0; i < 109; i++)
  {
     $('.js-goats-select').append($('<option>',
     {
        value: i,
        text : i
    }));
  }
});
