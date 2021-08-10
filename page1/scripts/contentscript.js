
let startNum = 1
let pageNum =32
let endPage = 40


let itemNum = 0
function task1(){

  let doc = document.getElementsByClassName('el-input__inner')[0]
  if(doc){
    document.getElementsByClassName('el-input__inner')[0].value='商业';
    document.getElementsByClassName('el-input__inner')[0].dispatchEvent(new Event('input'))
    document.getElementsByClassName('search-btn')[0].click()
    task5()
  }else{
    setTimeout(()=>{
      task1()
    },1000)
  }
}
function task5(){
  let aulist = document.getElementsByClassName('author-item')
  console.log(aulist.length>0)
  if(aulist.length>0){
    task0()
  }else{
    setTimeout(()=>{
      task5()
    },100)
    
  }
}

function task2(){
  let aulist = document.getElementsByClassName('author-item')
  console.log(aulist.length>0)
  if(aulist.length>0){
    itemNum=0
    task3()
  }else{
    setTimeout(()=>{
      task2()
    },100)
    
  }
}
function task3(){
  let list = document.getElementsByClassName('author-item')
  setTimeout(()=>{
    if(itemNum>list.length-1){
      task4()
    }else{
      list[itemNum].click()
      itemNum++
      task3()
    }
     
  },3000)
  setTimeout(()=>{
    task4()
  },60000)
}

function task4(){
  pageNum++
  let nums = document.getElementsByClassName('number')
  for(let obj of nums){
    let text = obj.innerHTML
      if(text==pageNum){
           nums[pageNum].click()
           task2()
      }
  }
  // console.log(pageNum,nums[pageNum],'==============')
 
  // if(pageNum<endPage){
  //   task2()
  // }
  
}
function task0(){
  let nums = document.getElementsByClassName('btn-next')[0]
  console.log(nums,'1111111111')
  if(nums){
      // if(startNum>nums){
      //   return 
      // }
    
    nums.click()
    startNum++
    if(pageNum<startNum){
      setTimeout(()=>{
        task2()
      },1000)
      
    }else{
       task0()
     }
  }
  else{
    setTimeout(()=>{
      task0()
    },100)
  }
}
task1()







