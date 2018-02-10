$(document).ready(
    
    function () {
        var departureCity = $.get('index.html', function(result){
            var obj = $(result).find('#selectDeparture').text;
           
        });
        console.log(departureCity);
        

});

