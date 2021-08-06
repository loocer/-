

let pageNum = 0

function task1(){
  let doc = document.getElementsByClassName('el-input__inner')[0]
  if(doc){
    document.getElementsByClassName('el-input__inner')[0].value='强';
    document.getElementsByClassName('el-input__inner')[0].dispatchEvent(new Event('input'))
    document.getElementsByClassName('search-btn')[0].click()
    task2()
  }else{
    setTimeout(()=>{
      task1()
    },1000)
  }
}


function task2(){
  let aulist = document.getElementsByClassName('author-item')
  console.log(aulist.length>0)
  if(aulist.length>0){
    task3()
  }else{
    setTimeout(()=>{
      task2()
    },100)
    
  }
}
function task3(){
  let list = document.getElementsByClassName('author-item')
  for(let obj of list){
    obj.click()
  }
  setTimeout(()=>{
    task4()
  },60000)
}

function task4(){
  pageNum++
  let nums = document.getElementsByClassName('number')
  nums[pageNum].click()
  if(pageNum<nums.length){
    task2()
  }
  
}
task1()







