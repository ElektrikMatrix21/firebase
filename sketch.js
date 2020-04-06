var database, input1, input2, button1, button2;


function setup() {
  createCanvas(600, 600);
  database = firebase.database();
  button1 = createButton('YES');
  button2 = createButton('NO');
  input1 = createInput("Name");
  input2 = createInput("Email");
  input1.position(130, 160);
  input2.position(130, 360);
  button1.position(250, 200);
  button2.position(250, 400);
}



button1.mousePressed(function(){
  update(answer){
    database.ref('Answer').update({
      YES:YES
    });
  update(email){
      database.ref('Email').update({
        email:email
      })
  update(name){
      database.ref('Name').update({
        name:name
      })
})

button2.mousePressed(function(){
  update(answer){
    database.ref('Answer').update({
      NO:NO
    });
  update(email){
    database.ref('Email').update({
      email:email
    })
  update(name){
    database.ref('Name').update({
      name:name
    })
  }
  }
});

function draw() {
}
