var row = 1 ;
var btna = document.getElementById("btna");
btna.addEventListener("click", AddRow());

function AddRow(){
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var email = document.getElementById("email").value
    var gender = document.querySelector('input[name="gender"]:checked').value ;
    var course = document.getElementById("course").value;
   
    var deleteButton= document.getElementById("delete"); 
      
    if(!name || !age|| !email|| !course|| !gender){
    alert("please fill the above details");
    return;
    }

    var display = document.getElementById("show");

    var newRow = display.insertRow(row);
    
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
   


    cell1.innerHTML = name;
    cell2.innerHTML= age;
    cell3.innerHTML=gender;
    cell4.innerHTML=course;
    cell5.innerHTML = email;
    

    row++;
    

}
