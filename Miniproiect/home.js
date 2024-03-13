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
    const rowIndex=row.parentNode.parentNode.rowIndex -1;
    dataTable.deleteRow(rowIndex);
    saveData()
    
}
function viwShift(){
    const storedData=JSON.parse( localStorage.getItem("dataTableValue"));
    if(dataTable.childElementCount==0){
    storedData.forEach(rowData=>{
        const newRow=dataTable.insertRow();
        const hoursCell=newRow.insertCell(0);
        const locationCell=newRow.insertCell(1);
        const deleteCell=newRow.insertCell(2);
        hoursCell.textContent=rowData.hours;
        locationCell.textContent=rowData.location;
        deleteCell.innerHTML=`<button onclick="deleteRow(this)">Delete</button>`
    })}
}
function sortShift(){
    const rows=Array.from(dataTable.rows)
    rows.sort((a,b)=>{
        const numberA=parseInt(a.cells[0].textContent);
        const numberB=parseInt(b.cells[0].textContent);
        return numberA-numberB;
    })
        rows.forEach((row)=>{
            dataTable.appendChild(row);

       
        saveData()
    })

}
function searcShift(){
    const serchBar= document.getElementById("search-bar");
    let serchInput=document.createElement("input");
    serchInput.type="text";
    serchInput.placeholder="Choose a location";
    serchInput.classList.add("search_input");
    serchInput.addEventListener("input",showShifts());
    serchBar.appendChild(serchInput);
    serchBar.appendChild(serchInput);
}
function showShifts(){
    
}