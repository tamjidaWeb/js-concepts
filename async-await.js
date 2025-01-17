const paymentSuccessfull = true;
const marks= 90;

function enroll(){
    console.log('enrollment is in progress');

    const promise= new Promise(function(resolve,reject){
        setTimeout(function(){
            if(paymentSuccessfull){
                resolve();
            }
            else{
                reject('payment failed');
            }
        },3000)
    })
    return promise;
}


function progress(){
    console.log('progressing');

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(marks>=80){
                resolve();
            }
            else{
                reject('result is poor');
            }
        },2000);
    })
    return promise;
}

function getCertification(){
    console.log('certification is processing');

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve('certificate is ready');
        },1000)
    })
    return promise;
}

async function course(){
  try{
    await enroll();
    await progress();
    const message = await getCertification();
    console.log(message);
  }
  catch(err){
    console.log(err);
  }
}
course();





// async function course(){

//   try{
//     await enroll();
//     await progress();
//     const message = await getCertification();
//     console.log(message);
//   }
//     catch(err){
//         console.log(err);
//     }

// }
// course();








// async function course(){
//     try{
        

//     await enroll();
//     await progress();
//     const message = await getCertification();
//     console.log(message)
// }
//     catch(err){
//         console.log(err);
//     }
// }
// course();