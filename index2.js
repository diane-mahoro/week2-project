function dayofweek(){
    var input =document.getElementById('A1').value;
    x= new Date( input );
    y=x.getFullYear();
    m=x.getMonth();
    m=m+1;
    d=x.getDay();
    var c= parseInt(y)/100 +1;
    var day= ( ( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) % 7;
var dayOfWeek= parseInt(day);
// document.getElementById('A3').innerHTML='the century is ' +dayOfWeek;
// document.getElementById('A3').innerHTML = d;
// document.getElementById('A5').innerHTML = dayOfWeek;
/*
var dayOfWeek = parseInt(dayofweek());
var gender=prompt("enter your gender");
alert(gender);
alert("day of week = " +dayOfWeek);
if(gander=='' || d=='' || m=='' || y=''){
alert("please insert something");
}*/
var gender= document.getElementById('A4').value;
if(input=''|| gender ==''){
    alert("please enter the values");
    }
else if ( d == 7 && gender =='male'){
 document.getElementById('A2').innerHTML ='Your born day is sunday, Your akan name is Kwasi'
}
else if(d == 1 && gender=='male'){
    document.getElementById('A2').innerHTML = 'Your born day is monday, Your akan name is Kwado';
}
else if(d == 2 && gender=='male'){
    document.getElementById('A2').innerHTML ='Your born day is tuesday, Your akan name is Kwabena'
}
else if(d == 3 && gender=='male'){
    document.getElementById('A2').innerHTML ='Your born day is wednesday, Your akan name is Kwafi'
}
else if(d == 4 && gender=='male'){
    document.getElementById('A2').innerHTML ='Your born day is thursday, Your akan name is Yaw';
}
else if(d == 5 && gender=='male'){
    document.getElementById('A2').innerHTML ='Your born day is friday, Your akan name is Kofi';
}
else if(d == 6 && gender=='male'){
    document.getElementById('A2').innerHTML ='Your born day is saturday, Your akan name is Kwame';
}
else if(d == 7 && gender=='female'){
    document.getElementById('A2').innerHTML ='Your born day is sunday, Your akan name is Akosua';
}
else if(d == 1 && gender=='female'){
    document.getElementById('A2').innerHTML ='Your born day is monday, Your akan name is Adwoa';
}
else if(d == 2 && gender=='female'){
    document.getElementById('A2').innerHTML ='Your born day is tuesday, Your akan name is Abenaa';
}
else if(d == 3 && gender=='female'){
    document.getElementById('A2').innerHTML ='Your born day is wednesday, Your akan name is Akua';
}
else if(d == 4 && gender=='female'){
    document.getElementById('A2').innerHTML ='Your born day is thursday, Your akan name is Yaa';
}
else if(d == 5 && gender=='female'){
    document.getElementById('A2').innerHTML ='Your born day is friday, Your akan name is Afua';
}
else{
    document.getElementById('A2').innerHTML = 'Your born day is saturday, Your akan name is Ama';
}
}
