
let buttonTwo = document.getElementById("buttonTwo");
let addButton = document.getElementById("addButton");
const popCard = document.getElementById('popCard');
let card = document.getElementById('popup');
const popup1 = document.getElementById("addBox");
let heading = document.getElementById('heading')
let inputdata = document.getElementById('inputPop');
let inputListdata = document.getElementById('inputListdata');
let addList =  document.getElementById('addList');
let addlistbtn = document.getElementById('addListBtn');

var temp_id;

buttonTwo.addEventListener('click',function(){
    // addList.style.display = 'none';
    document.getElementById("blur-body").style.cssText=`opacity: 0.7;filter: blur(2px);`;
    popup1.style.display="inline-block"; 
    popCard.style.display ="flex"   
})


function pop(){
    addButton.addEventListener('click', function(){ 
        document.getElementById("blur-body").style.cssText=`filter: blur(0);`;
        popup1.style.display="none";
        heading.style.display="none";
        let id = makeid(7);
        showColumns(id, inputdata.value);
        
    })

    let closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click",function(){
        document.getElementById("blur-body").style.cssText=`filter: blur(0);`;
        popup1.style.display="none";

    })
    
}
pop();



// function internalList(id) {
//     let selectedDiv = document.getElementById(id.dataset.parent);
//     let value = prompt('Enter the item you wanna add'); // you can show up the popup as well
  
//     let newEle = document.createElement('p');
//     newEle.innerText = value;
//    let delBtn = document.createElement('button');

   
//     selectedDiv.appendChild(newEle);
//     selectedDiv.appendChild(delBtn);
//   delBtn.addEventListener("click",function(){
    
//   })
//     // console.log(id.dataset.parent);
//   }

  function makeid(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result; 
  }

  function showColumns(id, title) {
    let newCol = document.createElement('div');
   
    newCol.className = 'col-4';
    newCol.id = id;
    newCol.style = 'border:1px solid black;'
    newCol.style.margin = '2%';
    newCol.innerHTML = `<div class="title">${title}</div> 
    <hr class="hr">
    <div class="hed">
    <div id=${'listContent'+id} class="boxlist"></div>
    <div class="buttons">
    <button onclick="addListItem()" data-parent=${id} class="addItembtn" id="addItembtn"><i class="fa-regular fa-square-plus"></i></button>
    <button onclick="removeList(id)" id="btn-delete" > <i class="fa-solid fa-trash"></i></button>
    </div>
    </div>`;

  
    popCard.appendChild(newCol);
  }

let addItembtn = document.getElementById('addItembtn');
const addListItem =()=>{
    // addItembtn.addEventListener('click',function(){
        addList.style.display = 'inline-block';

    // })
}



// const addcontent = (btn)=>{
//   //  showColumns(id, inputdata.value);
// // let listContent1 = document.getElementById(btn.dataset.parent);
// let inputListdata = document.getElementById('inputListdata');
// let listContent = document.getElementById('listContent'+id);
// cnt +=1;
// listContent.innerHTML += `
// <div id=${'listTxt'+cnt}> ${inputListdata.value} </div>
// <button id=${'cntBtn'+ cnt} onclick="markDone(this)"> Done</button>
// <br/>
// `;
// addList.style.display = 'none'
// }

addlistbtn.addEventListener('click',function(){
let ids = new Date().getTime();


if(inputListdata.value !== ""){
  var tempTask = document.getElementsByClassName('boxlist');
  for(let k = 0; k < tempTask.length;k++){
    if(tempTask[k].classList[1]==ids){
      var p_tag = document.createElement('p');
      p_tag.id = ids;
      
      var donebtn = document.createElement('button');
      donebtn.className = 'donebtn';
      donebtn.textContent = 'Done';
      donebtn.style.cssText= `border: none; background-color: white;`
      p_tag.classList.add('tasks');
      p_tag.innerHTML = inputListdata.value;
      tempTask[k].appendChild(p_tag);
      let donebtn1 = document.getElementsByClassName('donebtn');
      donebtn1.addEventListener('click',function(){
        p_tag.style.textDecoration = "line-through"
      })
      
    }
  }



}
})


const markDone=(btn)=>{
    // console.log(btn.id.slice(7, btn.id.length-1));
    let id = btn.id.slice(6,btn.id.length);
    console.log(btn.id.slice(6,btn.id.length));
    let listTxt = document.getElementById('listTxt'+id);
    //console.log(listTxt.id.slice());
    listTxt.className = "lineTxtCss";
    btn.style.display = "none";
    
}
const removeList =(id)=>{
 //   let hed = document.getElementsByClassName('hed');
      let popcard = document.getElementById(id);
      popcard.style.display = "none";
}






















  // buttonOne.addEventListener("click",function(){
    // const taskList = [];
    // const addTask =()=>{
    //     let tempObj = {
    //         id: Date.now(),
    //         taskName: taskName
    //     }
    // }
    // console.log(tempObj);
    // taskList.push(tempObj);
    // addTaskonScreen();
    // function addTaskonScreen(){
    //     const element = document.createElement("div");
    //     element.setAttribute("class","child")
        
    //     const existingElement = document.getElementById("parent");
    
    //     existingElement.appendChild(element);
    
    //     element.innerText = taskList[taskList.length-1].taskName
    // }

// })
