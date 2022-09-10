function callback(name, age, task){
    console.log('Hello ', name);
    console.log('Your age is ', age);
    task();
}

function doAssignment(){
    console.log('Do your assignment');
}

function finishProject(){
    console.log('Finish your assignment');
}

callback('Sifat', 25, doAssignment);
callback('Sakib', 27, finishProject);