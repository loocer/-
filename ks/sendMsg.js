function page1(){
  console.log(4334535435435)
  let startNum = 0
  let pageNum =0
  let endPage = 16


  let itemNum = 0
  function task1(){

      task5()
    
  }
  function task5(){
    let aulist = document.getElementsByClassName('sc-idOiZg')
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
    let aulist = document.getElementsByClassName('sc-idOiZg')
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
    let list = document.getElementsByClassName('sc-idOiZg')
    setTimeout(()=>{
      if(itemNum>=list.length-1){
        task4()
      }else{
        list[itemNum].click()
        itemNum++
        task3()
      }
       
    },3000)
    // setTimeout(()=>{
    //   task4()
    // },60000)
  }

  function task4(){


  	console.log('翻页了吗？')
    pageNum++
    let nums = document.getElementsByClassName('ant-pagination-item')
    for(let obj of nums){
      let text = obj.getElementsByTagName('a')[0].innerHTML
        if(pageNum>endPage){
        	console.log('翻页了吗1')
          return
        }
        if(text==pageNum){
        	console.log('翻页了吗2')
            obj.click()
            
             task2()
             return
        }
    }
    // console.log(pageNum,nums[pageNum],'==============')
   
    // if(pageNum<endPage){
    //   task2()
    // }
    
  }
  function task0(){
    let nums = document.getElementsByClassName('ant-pagination-item')[0]
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
}
page1()