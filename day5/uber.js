class uber {
    constructor(name,kilometer,) {
      this.name = name;
      
      this.kilometer = kilometer;
      
    }
  
    getSparePrice() {
      return this.kilometer * 11;
    }
  
   
    }
  
  const rider=new uber("rahim",10);
  const rider1=new uber("ramu",8);
  const rider2=new uber("somu",6);
  const rider3=new uber("rich",25);
  console.log(rider.name,"your estimate amount is:",rider.getSparePrice())
  console.log(rider1.name,"your estimate amount is:",rider1.getSparePrice())
  console.log(rider2.name,"your estimate amount is:",rider2.getSparePrice())
  console.log(rider3.name,"your estimate amount is:",rider3.getSparePrice())
  
