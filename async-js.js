const myLoader = () =>{
    return new Promise((resolve, reject) => {
        const success = true;
        if(success){
            resolve(0.3)
        }
        else{
            reject (0.7)
        }
    })
}