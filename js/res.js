function getResponsiveStatus(){
      if ($(window).width() >= 1200) {
          newWinSize = 'lg';
      } else if ($(this).width() >= 992) {
          newWinSize = 'md';
      } else if ($(this).width() >= 768) {
          newWinSize = 'sm';
      } else {
          newWinSize = 'xs';
      }
      return newWinSize;
  };
  String.prototype.toHHMMSS = function () {
      var sec_num = parseInt(this, 10); // don't forget the second param
      var hours   = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);

      if (hours   < 10) {hours   = "0"+hours;}
      if (hours > 23) { hours = "00"; }
      if (minutes < 10) {minutes = "0"+minutes;}
      var time    = hours+':'+minutes;
      return time;
  };

  $(document).ready(function() {
     $('.selectpicker').selectpicker();
     $('#rezForm').validator();
     var availableHours = [
       [10,00],[11,30],[13,00],[14,30],[16,00],[17,30],[19,00],[20,30],[22,00],[23,30]
     ];
    var $dateInput = $( '#datePicker' );
    var $timeInput = $( '#timePicker' );
    var today = new Date();
    var timePickerConfig = {
      formatSubmit: 'HH:i',
      closeOnSelect: true,
      clear: '',
      formatLabel: function(time) {
        return 'HH:i' + ' - ' + ((time.pick+60)*60).toString().toHHMMSS();
      },
      interval: 90,
      min: [10,00],
      max: [23,30],
      disable:[],
      onRender: function() {
        var resHour = this.get('select','HH:i');
        if(resHour) {
          $("#timeVal").html(resHour);
          $("#rezButton").attr("disabled",false);
        }
      }
    };
    var datePickerConfig = {
      formatSubmit: 'yyyy/mm/dd',
      today: 'Bugün',
      clear: '',
      close: 'Kapat',
      closeOnSelect: true,
      min: today,
      max: 90,
      hiddenName: true,
      onOpen: function() {
        $("#timePicker").attr("disabled",true);
        $("#timeVal").html('');
        $("#rezButton").attr("disabled",true);
        if($timeInput.pickatime('picker')) {
          $timeInput.pickatime('picker').set('select', null);
        }
      },
      onRender: function() {
        var resDateFormatted = this.get('select','dd mmmm yyyy');
        var resDate = this.get('select','yyyy-mm-dd');
        $("#dateVal").html(resDateFormatted);
        if(resDate) {
          $("#timePicker").append('<span id="hourLoading" class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>');
          var availableHoursRef = new Firebase("https://kacis22.firebaseio.com/availableHours/"+resDate);
          availableHoursRef.once("value", function(snapshot) {
            $timeInput.pickatime('picker').set('disable',false);
            var result = snapshot.val();
            if(result) {
              var disableArr = [];
              snapshot.forEach(function(data) {
                  disableArr.push(availableHours[data.val()]);
              });
              $timeInput.pickatime('picker').set('disable',disableArr);
            }
            $("#hourLoading").remove();
            $("#timePicker").attr("disabled",false);
          });
        }
      }
    };
    if(getResponsiveStatus() === 'lg') {
      $("#pickerCss").attr("href","css/classic.css");
      $("#dateCss").attr("href","css/classic.date.css");
      $("#timeCss").attr("href","css/classic.time.css");
    } else {
      timePickerConfig.container = "#timeContainer";
      datePickerConfig.container = "#dateContainer";
      $("#pickerCss").attr("href","css/default.css");
      $("#dateCss").attr("href","css/default.date.css");
      $("#timeCss").attr("href","css/default.time.css");
    }
    $dateInput.pickadate(datePickerConfig);
    $timeInput.pickatime(timePickerConfig);


  });
  $(document).on("click", "#rezButton", function () {
     var dateVal = $("#datePicker").pickadate('picker').get('select','dd mmmm yyyy');
     var timeVal = $("#timePicker").pickatime('picker').get('select','HH:i');
     $(".modal-body #dateValue").html( dateVal );
     $(".modal-body #timeValue").html( timeVal );
});
var submitRez = function() {
  $("#sendRezButton").attr("disabled",true);
  $("#closeButton").attr("disabled",true);
  $("#sendRezButton").append('<span id="rezLoading" class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>');
  var availableTime = [ "10","11","13","14","16","17","19","20","22","23"];
  var date = $("#datePicker").pickadate('picker').get('select','yyyy-mm-dd');
  var time = $("#timePicker").pickatime('picker').get('select','HH');
  var fbData = { "email": $('#inputEmail').val(), "personCount": $('#inputPersonCount').val(), "phone": $('#inputPhone').val(),
  "firstname": $('#inputFirstname').val(), "lastname": $('#inputLastname').val(),
  "reservationDate": $('#dateValue').html(), "reservationTime": $("#timeValue").html()};
  var reservationsRef = new Firebase('"https://kacis22.firebaseio.com/reservations/'+date);
  reservationsRef.push(fbData);
  var availableHoursRef = new Firebase("https://kacis22.firebaseio.com/availableHours/"+date);
  for(var i = 0; i < availableTime.length; i++) {
    if(time === availableTime[i]) {
      availableHoursRef.push(i);
      break;
    }
  }
  $.ajax({
    url: 'http://kacis22.azurewebsites.net/api/mail/check',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify( { "email": $('#inputEmail').val(), "personCount": $('#inputPersonCount').val(), "phone": $('#inputPhone').val(),
    "firstname": $('#inputFirstname').val(), "lastname": $('#inputLastname').val(),
    "reservationDate": $('#dateValue').html(), "reservationTime": $("#timeValue").html()} ),
    processData: false,
    success: function( res ){
      if(res=== "OK") {
        alert('Rezervasyon başarılı bir şekilde yapılmıştır.');
        location.reload();
      } else {
        alert('Rezervasyon esnasında sorun yaşanmıştır. Lütfen tekrar deneyiniz.');
        location.reload();
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      alert('Rezervasyon esnasında sorun yaşanmıştır. Lütfen tekrar deneyiniz.');
      location.reload();
    }
  });
};
$('#rezModal').on('shown.bs.modal', function () {
  $('#inputLastname').focus();
  $('#inputFirstname').focus();
  //$('#rezForm').validator('validate');
});
var timeFunc = function() {
  var minTime = [10,00];
  if(today.getHours() > 0 && today.getHours() < 10){

  } else if(today.getHours() > 10 && today.getHours() < 12) {
    minTime = availableHours[1];
  } else if(today.getHours() > 12 && today.getHours() < 13) {
    minTime = availableHours[2];
  } else if(today.getHours() > 13 && today.getHours() < 15) {
    minTime = availableHours[3];
  } else if(today.getHours() > 15 && today.getHours() < 16) {
    minTime = availableHours[4];
  } else if(today.getHours() > 16 && today.getHours() < 18) {
    minTime = availableHours[5];
  } else if(today.getHours() > 18 && today.getHours() < 19) {
    minTime = availableHours[6];
  } else if(today.getHours() > 19 && today.getHours() < 21) {
    minTime = availableHours[7];
  } else if(today.getHours() > 21 && today.getHours() < 22) {
    minTime = availableHours[8];
  } else if (today.getHours() > 22){
    minTime = availableHours[9];
  }
}
