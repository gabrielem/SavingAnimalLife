$(function() {

  $(".js-sendDonation").click(function( event ) {
    event.preventDefault();
    $("#donate1").hide()
    $("#donate2").show()

    setDonation()

  });


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


  var setDonation = function(){
    console.log("setDonation");
    var fishPrice = 1.50;
    var goatPrice = 145;

      var fishs = $('.js-fishs-select').val()
      var goats = $('.js-goats-select').val()
      if(fishs>0 || goats>0){
        /*
          Set a donation items
        */
        $(".js-noDonationInfo").hide()
        $(".js-sendDonation").show()
        var fishsPrice = fishPrice*fishs
        var goatsPrice = goatPrice*goats
        console.log("fishsPrice",fishsPrice)
        console.log("goatsPrice",mgoatsPrice)

        donationPrice = fishsPrice+goatsPrice
        $("#donationPrice").val("£" + donationPrice)
        $("#donationPrice1").val("£" + donationPrice)


      }else{
        /*
          no donation item found
        */
        $(".js-noDonationInfo").show()
        $(".js-sendDonation").hide()
      }
  }
  $('.js-fishs-select').on('change', function() {
    setDonation()
  })
  $('.js-goats-select').on('change', function() {
    setDonation()
  })
});
