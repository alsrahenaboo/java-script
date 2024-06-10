// let user_name = prompt("please enter your name ");
// if(user_name ==null ||user_name == undefined ){
//     user_name =" ";
// }
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

// let order = prompt("what do you want Donat Coffee or Ice cream or Bakery ",["Bakery"]);
// let ordername= prompt("Enter name your order ",["Ice coffee"]);
// console.log(user_name + order);

// const cusomer=[user_name,order,ordername];
// for( let i = 0 ; i < cusomer.length;i++ )  {
//     console.log(cusomer[i]);
// }

// let section=document.querySelector("section");
// let newdiv= document.createElement("div");
// newdiv.style.height="300px";
// newdiv.style.width="300px";
// newdiv.style.textAlign= 'center';
// newdiv.style.color= 'white';
// newdiv.style.marginTop= '25px';
// newdiv.style.paddingTop= '20px';
// newdiv.style.backgroundColor="red";
// let apple = document.createElement('ul');
// let nameli=document.createElement('li');
// nameli.textContent="my name is : " + user_name;
// let orderli=document.createElement("li");
// orderli.textContent=" i want to this order : " +  order;
// let ordernameli=document.createElement('li');
// ordernameli.textContent="type of order is : " + ordername;

// document.body.insertBefore(newdiv,section);
// apple.appendChild(nameli);
// apple.appendChild(orderli);
// apple.appendChild(ordernameli);
// newdiv.appendChild(apple);

document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    let name = document.getElementById('fname').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let ordertype = document.getElementById('ordertype').value;
    let drink = document.querySelector('input[name="drink"]:checked').value;

    
    output.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong> your Age is :</strong> ${age}</p>
        <p><strong> your Gender:</strong> ${gender}</p>
        <p><strong>Order Type:</strong> ${ordertype}</p>
        <p><strong>your chooise this Drink:</strong> ${drink}</p>
    `;
});




