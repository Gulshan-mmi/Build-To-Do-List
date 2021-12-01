//add element in list 
document.getElementById("add-button").addEventListener("click",additem);
function additem(){
    var txt=document.getElementById("todo-entry-box").value;
    newitem(txt);
}
function newitem(item){
    var ol= document.getElementById("todo-list");
    var li = document.createElement('li');
    li.innerHTML= item;
    ol.appendChild(li);
    li.classList.add("item");
    li.alt="0";
    li.addEventListener("dblclick",()=>{
        if(li.alt==0){
            li.classList.add("cut");
            li.alt=1;
        }else{
            li.classList.remove("cut");
            li.alt=0;
        }
    }); 
    bglist();
}
//list background color
function bglist(){
    var li = document.querySelectorAll('.item');
    for(i=1;i<li.length;i++){
        if(i%2!=0){
            li[i].style.backgroundColor="lightgrey";
        }
    }
}

//clear complete list function
document.getElementById("empty-button").addEventListener("click",removeitem);
function removeitem(){
    var lst = document.getElementsByClassName('item');
    while (lst.length>0) {
        lst.item(0).remove();
    }
}

//empty list function
function cls(){
    var x = document.getElementsByClassName("cut");
   while (x.length>0) {
       x.item(0).remove();
   }
   bglist();
}
