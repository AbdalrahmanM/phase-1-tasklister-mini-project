document.addEventListener('DOMContentLoaded', () => {
    // your code here
    let form=document.querySelector('form')
    form.addEventListener('submit',(e)=>{
      e.preventDefault()
      createT(e.target.new_task_description.value)
      form.reset()
    })
  });
  
  function createT(tasks){
    let li=document.createElement('li')
    let btn=document.createElement('input')
    btn.addEventListener('click',deleteTask)
    li.textContent=`${tasks} `
    li.appendChild(btn)
    btn.setAttribute('type','submit')
    btn.setAttribute('value','Delete The Task')
    document.querySelector('#tasks').appendChild(li)
  }

  function deleteTask(e){
    e.target.parentNode.remove()
  }
