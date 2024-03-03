let lists1=[];

let tasks = document.getElementById("tasks");
let inp=document.getElementById('inp');
let bt1=document.getElementById('bt1');
let bt2=document.getElementById('bt2');
let bt3=document.getElementById('bt3');
function savelists(){
    localStorage.setItem("lists1",JSON.stringify(lists1));
}
function retr(){
    let rett=localStorage.getItem("lists1");
    if(rett){
        lists1=JSON.parse(rett);
        //rendertasklist();
    }
}
function rendertasklist(){
    tasks.innerHTML="";
    for (let i = 0; i < lists1.length; i++) {
        let li = document.createElement("div");
        let cb = document.createElement("input");
        cb.type = "checkbox";
        //cb.id = "cb" + i;
        cb.addEventListener("click", function () {
          if (cb.checked) {
            lists1[i].status = "completed";
          } else {
            lists1[i].status = "pending";
          }
          rendertasklist();
          //savelists();
        });
       
    
        // Strike through completed tasks
        let span = document.createElement("span");
        if (lists1[i].status === "completed") {
          cb.checked = true;
          span.style.textDecoration = "line-through";
        }
        // Creating the final list item
        span.innerHTML = lists1[i].name;
        li.appendChild(cb);
        li.appendChild(span);
        tasks.appendChild(li);
      }
}
function addtask(task1){
    if(task1){
        newtask={};
        newtask.name=task1;
        newtask.status="pending";
        lists1.push(newtask);
        rendertasklist();
        savelists();
        inp.value="";
    }
    else{
        alert("please enter task");
        inp.focus();
    }
}
bt1.onclick=function(){
    let task1=inp.value;
    addtask(task1);

    }
function clearlist(){
    for (let i = 0; i < lists1.length; i++) {
        if (lists1[i].status === "completed") {
          lists1.splice(i, 1);
          i--;
        }
      }
    
}
bt2.onclick=function(){
    clearlist();
    rendertasklist();
    savelists();
    inp.focus();
}
bt3.onclick=function(){
    inp.value="";
    inp.focus();
}
window.onkeydown=function(e){
    if(e.keyCode==13){
        if(inp.value==""){
            window.alert("input is empty");
        }
        else{
            let task1=inp.value;
            addtask(task1);
         }
    }
}
retr();
rendertasklist();

inp.focus();