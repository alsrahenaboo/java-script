let user_name = prompt("please enter your name ");
if(user_name ==null ||user_name == undefined ){
    user_name =" ";
}
// function mygender(){
//     let gender;
// while(true){
//     gender=prompt("Please enter your gender");
//     if(gender=="male"){
//         alert("welcome Mr" + user_name);
//         break;

//     }else if(gender=="female"){
//         alert("welcome Ms" + user_name);
//         break;

//     }
//     else{
//         alert("please enter meal or female ");
//     }
//   }
//   return gender;
// }
// mygender();

let order = prompt("what do you want Donat Coffee or Ice cream or Bakery ",["Bakery"]);
let ordername= prompt("Enter name your order ",["Ice coffee"]);
console.log(user_name + order);

const cusomer=[user_name,order,ordername];
for( let i = 0 ; i < cusomer.length;i++ )  {
    console.log(cusomer[i]);
}

let section=document.querySelector("section");
let newdiv= document.createElement("div");
newdiv.style.height="300px";
newdiv.style.width="300px";
newdiv.style.textAlign= 'center';
newdiv.style.color= 'white';
newdiv.style.marginTop= '25px';
newdiv.style.paddingTop= '20px';
newdiv.style.backgroundColor="red";
let apple = document.createElement('ul');
let nameli=document.createElement('li');
nameli.textContent="my name is : " + user_name;
let orderli=document.createElement("li");
orderli.textContent=" i want to this order : " +  order;
let ordernameli=document.createElement('li');
ordernameli.textContent="type of order is : " + ordername;

document.body.insertBefore(newdiv,section);
apple.appendChild(nameli);
apple.appendChild(orderli);
apple.appendChild(ordernameli);
newdiv.appendChild(apple);



