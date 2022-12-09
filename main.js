function time (){
    let dt =new Date();
    let hrs =dt.getHours();
    let mins =dt.getMinutes();
    let sec =dt.getSeconds();

    document.getElementById('hrs').innerText = hrs +`\n` + 'hours';
    document.getElementById('mins').innerText = mins +`\n`+ `mins`;
    document.getElementById('sec').innerText= sec +`\n`+`sec`;
    

    if (hrs>=12){
        hrs = hrs-12;
        document.getElementById("hrs").innerText =  hrs +`\n`+ "hrs"
        document.getElementById("ap").innerHTML = "PM"
    }
    else{
     
        document.getElementById("ap").innerHTML = "AM"
    
    }
    
 }
//  console.log(time);
 setInterval(time,1000)

 function time2(){
    var img =''
    let dt =new Date();
    let hrs =dt.getHours();
    let mins =dt.getMinutes();
    let sec =dt.getSeconds();
  //console.log(dt,hrs,mins,sec);
  if (hrs>12){
    hrs = hrs-12;
    document.getElementById("hrs").innerText =  hrs +`\n`+ "hrs"
    document.getElementById("ap").innerHTML = "PM"
}
else{
 
    document.getElementById("ap").innerHTML = "AM"

}
  
    // console.log("wakeuptimeis,  ", document.getElementById('wakeuptime').value)
    // console.log("hrs is",hrs)
    if (document.getElementById('wakeuptime').value==hrs){
       img= '<img src="morning.jpg"/>'
       
        document.getElementById('container1').innerText ='GOOD MORNING !!WAKE UP';
        document.getElementById('container2').innerText ='GRAB SOME HEALTHY BREAKFAST';
        document.getElementById('change').innerHTML =img;
        // console.log(hrs,mins,sec);
        // console.log("hello...morning")

    }
    if (document.getElementById('lunchtime').value==hrs){
        
        img= '<img src="lunchtime.jpg"/>'
       
        document.getElementById('container1').innerText ='GOOD AFTERNOON!!TAKE SOME SLEEP';
        document.getElementById('container2').innerText ='LETS HAVE SOME LUNCH';
        document.getElementById('change').innerHTML =img;
       
    }
    if (document.getElementById('naptime1').value==hrs){
        
        img= '<img src="evening_image.jpg"/>'
       
        document.getElementById('container1').innerText ='GOOD EVENING!!';
        document.getElementById('container2').innerText ='STOP YANNING,GET SOME TEA ..ITS JUST EVENING';
        document.getElementById('change').innerHTML =img;
        
        
    }
    if (document.getElementById('nighttime').value==hrs){
        img= '<img src="night photo.jpg"/>'
       
        document.getElementById('container1').innerText ='GOOD NIGHT!!';
        document.getElementById('container2').innerText ='CLOSE YOUR AND GO TO SLEEP';
        document.getElementById('change').innerHTML =img;
    
    }
}   
 

//     function time3(){
//     let dt =new Date();
//     let hrs =dt.getHours();
//     let mins =dt.getMinutes();
//     let sec =dt.getSeconds();
    
//     if (hrs>=10){
//         change1.src ="morning.jpg";
//         container1.innerText="GOOD MORNING !! WAKE UP!!";
//         container2.innerText="GRAB SOME HEALTHY BREAKFAST";
//     }
//     if (hrs>=12 && hrs<16 ){
//         change1.src ="lunchtime.jpg";
//         container1.innerText="GOOD AFTERNOON!! TAKE SOME SLEEP!!";
//         container2.innerText="LETS HAVE SOME LUNCH";
//     }
//     if (hrs>=16 && hrs<20){
//         change1.src="evening_image.jpg"
//         container1.innerText="GOOD EVENING!!";
//         container2.innerText="STOP YANNING, GET SOMETEA,ITS JUST EVENING";
//     }
//     if (hrs>=20){
//         change1.src ="night photo.jpg";
//         container1.innerText="GOOD NIGHT!!";
//         container2.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
//     }
//  }
 let button=document.getElementById('alaram');
 

 function settime(){
    var hrs =new Date().getHours();
    var i =document.getElementById("wakeuptime").value;
    var j =document.getElementById("lunchtime").value;
    var k =document.getElementById("naptime1").value;
    var l =document.getElementById("nighttime").value;

    if(i==='selected'){
        document.getElementById('set').innerText="10AM-11AM";
    }
    else{
        document.getElementById('set').innerText=i;
    }
    if(j==='selected'){
        document.getElementById('set1').innerText="12PM-1PM";
    }
    else{
        document.getElementById('set1').innerText=j;
    }
    if(k==='selected'){
        document.getElementById('set2').innerText="4PM-5PM";
    }
    else{
        document.getElementById('set2').innerText=k;
    }
    if(l==='selected'){
        document.getElementById('set3').innerText="8PM-9AM";
    }
    else{
        document.getElementById('set3').innerText=l;
    }
}

 
// setInterval(showtime,1000)
let btn=document.getElementById('alaram');
btn.addEventListener("click" ,settime)



 