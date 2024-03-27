const container=document.getElementById("item_complete");
const currentlyInput=document.getElementById("currently_input");
currentlyInput.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
       let itemContainer=document.createElement("div") ;
       let itemBtn=document.createElement("button")
       let itemSpan = document.createElement("p")
    //    span.innerText="Complite online JavaScript course"
       itemContainer.appendChild(itemBtn);
       itemContainer.appendChild(span);
       container.appendChild(itemContainer)
       itemBtn.addEventListener("click",e=>handleTaskClick(e));
    }
})



function handleTaskClick(e){
    const item = e.target.parentNode.getElementsByTagName('span')[0];
  
    // console.log(item);
    if(!item.style.textDecoration){
    item.style.textDecoration = "line-through";
    }
    else{
        item.style.textDecoration = "";
    }
  }