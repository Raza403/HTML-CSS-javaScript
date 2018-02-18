const people = Array.from(document.querySelectorAll('.people p'),(name) => {
  console.log(name.textContent);
    }); 
  
     function sumAll(){
      const nums = Array.from(arguments);
      console.log(nums);
      return nums.reduce((prev,next)=> prev+next,0);
     }
     sumAll(32,45,654,67,77,657,77,76,7,7,65,);