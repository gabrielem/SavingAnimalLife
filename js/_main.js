$(function() {

  var sendPost = function(){

    var itemnumber = new Date().getTime() + "|" + Math.floor((Math.random() * 10000) + 1);
    var data = {
        'name': $("#name").val(),
        'email': $("#email").val(),
        'fishs': $('#fishsN').val(),
        'goats': $('#goatsN').val(),
        'fishsPrice': $('#fishsPrice').val(),
        'goatsPrice': $('#goatsPrice').val(),
        'totalPrice': $('#donationPrice1').val(),
        'itemnumber': itemnumber


    };
    console.log("SendPost");
    console.log(data);
    $("#pp-itemnumber").val(itemnumber)
    //$("#pp-amount").val($('#donationPrice1').val())

    $(".js-sendEmailDonation").hide()
    $(".js-loading-bar").show()


    $.ajax({
      type: 'POST',
      url: 'http://losar2017.lungta.it/en/send/',
      data: data,
      success: function(msg){
          console.log("Send ok!");
          /*
            Send Paypal Post
          */
          $("#donate2").hide()
          $("#donate3").show()

      }
    });

    $("#paypalForm").submit();

  };


  $(".js-new-donation").click(function( event ) {
    event.preventDefault();
    $(".js-fishs-select").val("0")
    $(".js-goats-select").val("0")
    $("#donationPrice").val("£0")
    $("#donationPrice1").val("£0")
    $("#pp-amount").val("0")

    setDonation()
    $("#donate1").show()
    $("#donate2").hide()
    $("#donate3").hide()
  })

  $(".js-sendEmailDonation").click(function( event ) {
    event.preventDefault();
    sendPost()
  })

  $(".js-sendDonation").click(function( event ) {
    event.preventDefault();
    $("#donate1").hide()
    $("#donate2").show()
    $("#donate3").hide()

    setDonation()

  });


  $(".js-goBackAndChangeDonationItems").click(function( event ) {
    event.preventDefault();
    $("#donate1").show()
    $("#donate2").hide()

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
        console.log("goatsPrice",goatsPrice)

        $(".fishsN").html(fishs)
        $(".fishsPrice").html(fishsPrice)

        $(".goatsN").html(goats)
        $(".goatsPrice").html(goatsPrice)

        $("#fishsN").val(fishs)
        $("#fishsPrice").val(fishsPrice)

        $("#goatsN").val(goats)
        $("#goatsPrice").val(goatsPrice)



        donationPrice = fishsPrice+goatsPrice
        $("#donationPrice").val("£" + donationPrice)
        $("#donationPrice1").val("£" + donationPrice)
        $("#pp-amount").val(donationPrice)


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
