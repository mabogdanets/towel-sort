
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if( (typeof matrix == "undefined" ) || (matrix.length==0)){
    return [];
  }else{
    let output = [];
    let o;
    let check=true;
      for(let i = 0; i < matrix.length; i++){
          o = matrix[i];
          if(check){
              for(let j = 0; j<o.length; j++){
                  output.push(o[j]);
               } 
          }else{
            for(let j = o.length-1; j>=0; j--){
              output.push(o[j]);
           }  
          }
         check=!check;

      }
      return output;
  }
}
