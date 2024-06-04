let user_name = prompt("please enter your name ");
if(user_name ==null ||user_name == undefined ){
    user_name =" ";
}
let gender;
while(true){
    gender=prompt("Please enter your gender");
    if(gender=="male"){
        alert("welcome Mr" + user_name);
        break;

    }else if(gender=="female"){
        alert("welcome Ms" + user_name);
        break;

    }
    else{
        alert("please enter meal or female ");
    }
  }

let order = prompt("what do you want Donat Coffee or Ice cream or Bakery ",["Bakery"]);
let ordername= prompt("Enter name your order ",["Ice coffee"]);
console.log(user_name + order);

const cusomer=[user_name,gender,order,ordername];
for( let i = 0 ; i < cusomer.length;i++ )  {
    console.log(cusomer[i]);
}