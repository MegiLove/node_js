var request= require("request");
request("https://www.goggle.com",function(error,response,body){
	if(!error&&response.statusCode==200){
	console.log(body);
	}
});