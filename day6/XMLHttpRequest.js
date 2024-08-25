var todosAPi = "https://restcountries.com/v3.1/all";
var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  
  var todos=JSON.parse(this.response); // covert into json

  console.log("ASIAN REGION COUNTRIES ")
  if(todos.length>0)
  {
    for(var x=0;x<todos.length;x++) //asia region
    {
      if(todos[x].region==="Asia")
      {
        console.log(todos[x].name)
      }
    }


    console.log("LESS THAN 2LAKS POPULATION COUNTRIES ")
      for(var y=0;y<todos.length;y++)  //population less than 2laks        {
      if(todos[y].population < 200000)
        {
          console.log(todos[y].name,todos[y].population)
        }
        }
    

       
      
      
        console.log("PRINT NAME,CAPITAL& FLAG USING FOREACH METHOD")
    function callback(element,index) //using foreach method print name capital and flag
    {
    var list = todos[index].name
    var list1 = todos[index].capital
    var list2 = todos[index].flag
    console.log(list,list1,list2)
    }
    todos.forEach(callback);




    console.log("TOTAL POPULATION")//HEADING
   function copypop(carry,nextElement) // find total population
   {
    if(typeof carry ==="object")
    {
      
      return carry.population + nextElement.population
    }
    else
    {
      
      return carry + nextElement.population
    }
   }
   const total =  todos.reduce(copypop)

 
 console.log("total population is:", total)


 console.log("US DOLLAR USING COUNTRIES ")

 for(var k=0;k<todos.length;k++) // us dollar using country
 {
  if(k !== 66  && k !== 82 && k !== 160 ) // because in this country no currency object
  {
  if(todos[k].currencies.USD)
  {
  
    console.log(todos[k].name,todos[k].currencies)
  
  }
 
}
 
 
 }
 
    
  
 } 

 
  

  

  
  
  
 
  
  


todoRequest.open("GET", todosAPi);
todoRequest.send();

console.log(todoRequest);

