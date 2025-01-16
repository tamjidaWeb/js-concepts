const paymentSuccess= true;
const marks = 80;

function enroll(){
    console.log('course enrollment is processing');

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){

            if(paymentSuccess){
                resolve();
            }
            else{
                reject('payment failed');
            }
        },3000);

    });
    return promise;
}


function progress(){

    const promise = new Promise(function(resolve ,reject){
       console.log('course in progress');
       
        setTimeout(function(){
            if(marks>=80){
                resolve();
    
            }
            else{
                reject('you wont get the certificate');
         
        };
    },3000)
      
    })
    return promise;
}



    function getCertification(){
        console.log('certificate is preparing');
        const promise = new Promise (function(resolve){
            setTimeout(function(){
                resolve('seccessfully printed the certificate')
            },1000);
    

        });
        return promise;
    
    }

    enroll()
    .then(progress)
    .then(getCertification)
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })

