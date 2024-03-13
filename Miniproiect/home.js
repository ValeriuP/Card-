const storedData=JSON.parse(localStorage.getItem("user"));
const username=document.getElementById("user-name");
const dataTable=document.getElementById("data-table").getElementsByTagName("tbody")[0];
username.innerText=`Hello,${storedData[0]}`;
function logout(){
    window.location.href="login.html"
}

function addShift(){
 const form=document.getElementById("form");
 form.style.display="flex";
 const main=document.querySelector(".main");
 main.classList.add("blur-main");

}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    const location=document.getElementById("location");
    const hours=document.getElementById("hours");
    const errorLocation=document.querySelector(".error-location");
    const errorHours=document.querySelector(".error-hours");
    let result=true
    if(location.value ==""){
        errorLocation.innerText="Please enter a location";
        result=false
    }
    else{
        errorLocation.innerText="";
    }
    if(hours.value=="" || hours.value>24 ||hours.value<0){
        errorHours.innerText="Please enter a valid number of hours";
        result=false;
    }
    else{
        errorHours.innerText="";
    }
    if(result){
        // const dataTable=document.getElementById("data-table").getElementsByTagName("tbody")[0];
        const newRow=dataTable.insertRow();
        const hoursCell=newRow.insertCell(0);
        const locationCell=newRow.insertCell(1);
        const deleteCell=newRow.insertCell(2);
        hoursCell.textContent=hours.value;
        locationCell.textContent=location.value;
        deleteCell.innerHTML=`<button onclick="deleteRow(this)">Delete</button>`

        saveData();
        const main=document.querySelector(".main");
        form.style.display="none"
        main.classList.remove("blur-main");
    }
})

function saveData(){
    
    const dataValue=[];
    for(i=0;i<dataTable.rows.length;i++){
        const row=dataTable.rows[i];
        const rowData={
            hours:row.cells[0].textContent,
            location:row.cells[1].textContent

        }
        dataValue.push(rowData);

    }
    localStorage.setItem("dataTableValue",JSON.stringify(dataValue));

}
function deleteRow(row){
    const rowIndex=row.parentNode.parentNode.rowIndex;
    dataTable.deleteRow(rowIndex);
    saveData()
    
}
