//Fetches data from http://localhost:3000/student and populates an 
//HTML table (<table id="display_table">) with the fetched data.

async function fun(){
    let fet = await fetch("http://localhost:3000/student");
    let re=await fet.json();
    let s=document.getElementById("display_table");
    let p=re.map((e)=>
`
<tr>
<td>${e.id}</td>
<td>${e.namee}</td>
<td>${e.email}</td>
<td>${e.address}</td>
<td><button onclick="mydelete(${e.id})"><i class="fa-solid fa-trash-can"></i></button></td>
<td><button onclick="myedit(${e.id})"><i class="fa-solid fa-pen-to-square"></i></button></td>
</tr>
`).join(" ")
s.innerHTML=p;
}
fun();




   // post method , adding a new student record to the server.
function add(){
    let fdata={
        id:document.getElementById('id').value,
        namee:document.getElementById('stu_name').value,
        email:document.getElementById('stu_email').value,
        address:document.getElementById('stu_address').value
    }

    fetch("http://localhost:3000/student",{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(fdata)
    })
    .then((res)=>alert("Data stored",res));
}



  // deletion of a student record from the server based on the provided id
function mydelete(id){
    fetch(`http://localhost:3000/student/${id}`,
        {
        method:"DELETE"
    })
    .then((res)=>alert("Data is deleted",res))
}

let upid=0;
function myedit(id){
    upid=id;
    document.getElementById('editform').style.display="block";
}


  //   updating a student record with new data.
function editdata(){
    let editfdata={
        id:document.getElementById('eid').value,
        namee:document.getElementById('ename').value,
        email:document.getElementById('eemail').value,
        address:document.getElementById('eaddress').value 
    }
    fetch(`http://localhost:3000/student/${upid}`,
        {
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(editfdata)
    })
    .then((res)=>alert("Data is edited",res));
}


// Hides the edit form 
function hideform(){
    document.getElementById('editform').style.display="none";
}