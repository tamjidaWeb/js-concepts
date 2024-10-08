function a(){
    console.log('a');
    b();
    console.log('aa')
}

function b(){
    console.log('b');
    d();
    console.log('bb');

}

function d(){
    console.log('d');
    console.log('dd');
}

function x(){
    console.log('x');
    y();
    console.log('xx');
}
function y(){
    console.log('y');
    z();
    console.log('yy');
}
function z(){
    console.log('z');
    console.log('zz');
}

setTimeout(() => {
    console.log('inside time out');
}, 2000)

a();
x();