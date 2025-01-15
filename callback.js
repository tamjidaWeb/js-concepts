
const paymentSuccessful= true;
const marks = 80;


function enroll(callback){
  console.log('enrollment is process ');

  setTimeout(function(){
    if(paymentSuccessful){
      callback();

    }
    else{
      console.log('enrollment failed');
    }

  },2000);
}

function progress(callback){
  console.log('certificate in processing...');

  setTimeout(function(){
    if(marks >=80){
      callback();

    }
    else{
      console.log('you cant  get the certificate because of poor marks');
    }
  },3000);
}

function getCertificate(){
  console.log('preparing your certificate');

  setTimeout(function(){
    console.log('successfully get the certificate.')
  })
}

enroll(function(){
  progress(getCertificate);
})