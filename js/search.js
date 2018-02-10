$(document).ready(function () {

var data = $.ajax({
    url: 'http://apigateway.ryanair.com/pub/v1/core/3/cities?apikey=mBZ3XsuiZc6cuqT0cu8xPJt50wZcqxRG',
    
    async: false,
    dataType: 'json',
    type:"get", // Type of a method, "get" by default.
    data: null, // Request payload of a method, "null" by default.
    contentType:  "application/x-www-form-urlencoded;charset=utf-8",
    processData:  true,
   }).responseJSON;
   console.log(data);
   
});

