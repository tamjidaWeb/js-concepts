function checkAge (){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
   const errorTag = document.getElementById('error')
   


try{
    const age = parseInt (ageText);
    if(isNaN(age)){
        throw 'please enter a number';
        // console.log('age not found', age , ageText)
    }
    else if (age< 18){
        throw "baccha not allowed";
    }
    else if(age> 30){
        throw ' murubbi';
    }
    errorTag.innerHTML = '';
    // console.log(bbaria);
}
catch(err){
    console.log('ERROR', err);
    errorTag.innerHTML = 'ERROR: '+ err;
}
finally{
    console.log('all done inside try catch');
}
console.log(1111)
}