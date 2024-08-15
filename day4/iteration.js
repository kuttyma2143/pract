var resume={
    "name": "RAHIM ARAFATH Y",
    "age": 28,
    "languages": ["Tamil", "English"],
    "address": {
      "line1": "No1/129 MUSLIM STREET",
      "line2": "KAMBARASAMPETTAI",
      "city": "TRICHY",
      "state": "Tamilnadu"
    }
  };


 // for in 
for( var y in resume)
{
    console.log(y)
}

//for of because for of not work in object
var mob=[9,7,1,6,8,5,8]
for( var x of mob)
    {
        console.log(x)
    }
     
// for each
var mo=[9,8,5,6,4]
mo.forEach(function(value,index){
    console.log("password==>",value,index)

})
   
// for
for(var i=0; i<mo.length;i++)
{
    console.log(mo[i])
}
  

