/*function A(){
    var date = document.getElementById("A1").value;
    alert(date);

};
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
document.getElementById("submit").onclick = function(){
    alert(A());
};
var d=parseInt(prompt("enter the day"));
var m=parseInt(prompt("enter the month"));
var y=parseInt(prompt("enter the year"));
alert("the century is " +c);
*/
function dayofweek(){
    var input =document.getElementById('A1').value;
    var x= new Date( input );
    y=x.getFullYear();
    m=x.getMonth();
    m=m+1;
    d=x.getDay();
   /* function century(){
        return parseInt(y/100) +1;
    }*/
    var c= parseInt(y/100) +1;
    document.getElementById('A3').innerHTML='the century is ' +c;
    var gender= document.getElementById('A4').value;
    var day=(((c/4) -2*c-1) + ((5*y/4)) + ((26*(m+1)/10)) + d) % 7;
var dayOfWeek= parseInt(day);
document.getElementById('A5').innerHTML= dayOfWeek;
/*
var dayOfWeek = parseInt(dayofweek());
var gender=prompt("enter your gender");
alert(gender);
alert("day of week = " +dayOfWeek);
if(gander=='' || d=='' || m=='' || y=''){
alert("please insert something");
}*/
if(input=''|| gender ==''){
    alert("please enter the values");
    }
else if (dayOfWeek == 0 && gender =='male'){
 document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Kwasi'
}
else if(dayOfWeek == 1 && gender=='male'){
    document.getElementById('A2').innerHTML = 'You were born on monday, Your akan name is Kwado';
}
else if(dayOfWeek == 2 && gender=='male'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Kwabena'
}
else if(dayOfWeek == 3 && gender=='male'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Kwafi'
}
else if(dayOfWeek == 4 && gender=='male'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Yaw';
}
else if(dayOfWeek == 5 && gender=='male'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Kofi';
}
else if(dayOfWeek == 6 && gender=='male'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Kwame';
}
else if(dayOfWeek == 0 && gender=='female'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Kosua';
}
else if(dayOfWeek == 1 && gender=='female'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Adwona';
}
else if(dayOfWeek == 2 && gender=='female'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Abenaa';
}
else if(dayOfWeek == 3 && gender=='female'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Akua';
}
else if(dayOfWeek == 4 && gender=='female'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Yaa';
}
else if(dayOfWeek == 5 && gender=='female'){
    document.getElementById('A2').innerHTML ='You were born on monday, Your akan name is Afua';
}
else{
    document.getElementById('A2').innerHTML = 'You were born on monday, Your akan name is Ama';
}
}
