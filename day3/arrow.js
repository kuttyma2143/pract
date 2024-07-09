// ARROW FUNCTION PROGRAM

// FIND ODD number


var odd = () => {
   
   
    var n=[1,2,3,4,5,6]
   var n1=[]
   
   
      for(i=0;i<n.length;i++)
      {
      
      if(n[i]%2!=0)
      {
        n1.push(n[i])
      }
      }
      console.log(n1);
  }
  odd();

  


//  CONVERT ALL STRING TO TITLE CAPS IN A STRING ARRAY


var title = () => {
   
   
    var s=["hi","hello","welcome"]
    var n1=[]
   
   
      for(i=0;i<s.length;i++)
      {
      n1.push(s[i].toUpperCase())
      }
      
      console.log(n1);
  }

  title();


  //  SUM OF ALL NUMBERS IN A ARRAY


  var sum=()=> {
   
   
    var n=[2,3,6,8,9,7]
    var n1=0
   
   
      for(i=0;i<n.length;i++)
      {
      n1=n1+n[i]
      }
      
      console.log(n1);
  }
  sum();




  //RETURN ALL THE PRIME NUMBER

  var prime=()=> {
   
   
    var n=[1,2,3,5,4,15,6]
    var n1=[]
   
   
    for(i=0;i<n.length;i++)
    {
          
    if(n[i]>1)
    {
      if((n[i]===2) || (n[i]===5))
      {
        n1.push(n[i])
      }
      
      
      if(n[i]%2!=0)
      {
          if(n[i]%5!=0)
           {
             n1.push(n[i])
           }
      }
      }
      }      
      console.log(n1);
  }
  prime();



  // RETURN ALL PALINDROMES IN A ARRAY


  var palindrome=()=> {
   
   
    var n=[13,15,18,22,88,45,42,51,6]
    var n1=[]
    var d=[]
   
    for(i=0;i<n.length;i++)
    {
    var m=n[i].toString()
        m=m.split("")
    var c=m.reverse()
        c=c.join("")
        
     d.push(c)   
    }    
        
        
     
        
    {
        for(k=0;k<n.length;k++)
        {
      
          for(j=0;j<n.length;j++)
           { 
            if(Number(n[k])===Number(d[j]))
              {

                if((n[k]>11) && (n[k]<99))
                {
                  if(n[k]%11!=0)   
                     {
                      n1.push(n[k])
                     }
                }
              else if(n[k]>99)
                {
                n1.push(n[k])
                }}
     
              }
      
           } 
        }  
    
    
    
    console.log(n1);
  }
  
  palindrome();
