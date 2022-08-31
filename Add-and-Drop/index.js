let addBtn=document.getElementById('add_btn');
        addBtn.addEventListener('click', addChapter);
        let parentList=document.getElementById('parentList');
        function addChapter(e){
            if(parentList.children[0].className=="emptyMsg"){
                parentList.removeChild(parentList.children[0]);
            }
            let currentBtn=e.currentTarget;
            let currentInput=currentBtn.previousElementSibling;
            let currentChapterName=currentInput.value;

            let newLi=document.createElement('li');
            //newLi.classList.add('list-group-item');
            newLi.className="list-group-item d-flex justify-content-between"
            newLi.innerHTML=`<h4 class="flex-grow-1">${currentChapterName}</h4>
                  <button class="btn btn-warning mx-3">Edit</button>
                  <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`;
            parentList.appendChild(newLi);
        }
        function removeChapter(currElement){
          currElement.parentElement.remove();
          let parentList=document.getElementById('parentList');
          if(parentList.children.length<=0){
            let newEmptyMsg = document.createElement("h3");
            newEmptyMsg.classList.add("emptyMsg");
            newEmptyMsg.innerHTML = "No chapters yet. Please add a chapter!!";
            parentList.appendChild(newEmptyMsg);
          }
        }
        function editChapter(currElement){
          currElement.innerHTML="Done";
          let currChapterName=currElement.previousElementSibling.innerHTML;
          let currInput=document.createElement('input');
          currInput.type='text';
          currInput.placeHolder='Chapter Name';
          currInput.className='form-control';
          currInput.value=currChapterName;
          currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling);
        }