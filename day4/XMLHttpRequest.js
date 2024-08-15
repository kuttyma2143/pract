const URL = "https://jsonplaceholder.typicode.com/todos/";
const request = new XMLHttpRequest();

request.onreadystatechange = function()
{
var tod=JSON.parse(this.response)
if(tod.length > 0)
{
    for(var i=0;i<tod.length;i++)
        {
        console.log(tod[i].title)
    }
    
}
}
request.open("GET", URL);
request.send()
console.log(request);