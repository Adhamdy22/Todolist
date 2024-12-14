

function add()
{
    var text=document.getElementById("inputtask").value;
    var newdiv=document.createElement('div');
    var rightbutton=document.createElement("button")
    var removebutton=document.createElement("button")
    rightbutton.innerText="ok";
    removebutton.innerText="remove"

    rightbutton.onclick=function() //  this => ref who fire action 
    {  
        newdiv.style.border="solid green 5px"
    }

    removebutton.onclick=function() //  this => ref who fire action 
    {  
        this.parentNode.remove();
    }
    newdiv.innerText=text;
    newdiv.appendChild(rightbutton)
    newdiv.appendChild(removebutton)
    newdiv.onclick=function()
    {
        newdiv.classList.toggle('done');
    }

    newdiv.classList.add('task')
    document.getElementById('tasks').appendChild(newdiv);
    localStorage.setItem('Task', newdiv)

}


