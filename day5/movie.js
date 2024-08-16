class movie {
    constructor(title,studio,rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
      
    }
  
    
   
    
    
    
}



    const film1= new movie("Casino Royale","Eon Productions","PG13");
    const film2= new movie("kaithi","sun pictures");
    const film3= new movie("leo","studio green","R");
    const film4= new movie("billa","vel film",);
    const film5= new movie("master","red jain","PG13");
    const film6= new movie("goa","evergreen","R");

    var input = [];
    var input1= [];
    var output= [];

    input.push(film1.rating)
    input.push(film2.rating)
    input.push(film3.rating)
    input.push(film4.rating)
    input.push(film5.rating)
    input.push(film6.rating)

    input1.push(film1.title)
    input1.push(film2.title)
    input1.push(film3.title)
    input1.push(film4.title)
    input1.push(film5.title)
    input1.push(film6.title)
    
    
    for (var z = 0; z < input.length; z++) 
      {
      if (input[z] === "PG") {
        output.push(input1[z]);
      }
      }
     console.log("PG Rating movie are:",output)
  
    console.log(film1);
    console.log(film2);
    console.log(film3);
    console.log(film4);
    console.log(film5);
    console.log(film6);
    