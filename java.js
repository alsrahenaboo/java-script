let user_name = prompt("please enter your name ");
if(user_name ==null ||user_name == undefined ){
    user_name =" ";
}
let user_gender = prompt("Enter your Gender");

if(user_gender=="meal"){
    alert ("welcom Mr " +  user_name);

}else if(user_gender=="female"){
    alert ("welcom Ms " +  user_name);


}else{
    alert("welcom" + user_name);

}
let order = prompt("what do you want Donat Coffee or Ice cream or Bakery ",["Bakery"]);
// alert("Enter name your order ");
console.log(user_name + order);