
/*--------------------------修改的参数--------------------------*/
let keyWords = '烘焙'
let pageNum =0
let endPage = 16
/*----------------------------------------------------*/
let page2QTime = 0
let url = window.location.href
let name = ''
// if(url.indexOf('https://k.kuaishou.com/#/star_plaza/video')!=-1){
//    console.log(4322222222222222225)
//   page1()
// }
if(url.indexOf('https://k.kuaishou.com/#/promotion/star')!=-1){
  page2()
}
if(url.indexOf('https://adim.kuaishou.com/pc')!=-1){
  name = decodeURI(getQueryVariable('fuckname'))
  page4()
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
};
function page4(){
  let item = document.getElementsByClassName('sc-Axmtr')
  let sessionnickname = document.getElementsByClassName('session-nickname')
  if(item.length==0){
    setTimeout(()=>{
      page4()
    },2000)
  }else{
    tufuck(0)
    // for(let index in sessionnickname){
    //   // if(name==sessionnickname[index].innerHTML){
        
        
        
    //   // }
    // }
  }
}
function tufuck(index){
  let item = document.getElementsByClassName('sc-Axmtr')
  item[index].click()
  setTimeout(()=>{
    
    let df = document.getElementsByClassName('drkEhP')
    if(df.length==0){
      document.getElementsByClassName('chartbox-editor')[0].innerHTML = '您好，想跟您合作推广，方便留个您的v信。'
      document.getElementsByClassName('chartbox-btn-ok')[0].click()
     
    }
    if(index<item.length-1){
      index++
      tufuck(index)
    }else{
      window.close()
    }
    
  },200)
}
function page3(){
  // let items = document.getElementsByClassName('sc-Axmtr')[0]
  // items.click()
  // let tok = document.getElementsByClassName('sc-fzqARJ')
  let imframe = document.getElementById("im-frame")
  if(imframe.length==0){
    setTimeout(()=>{
      page3()
    },2000)
  }else{
    let url = document.getElementById("im-frame").src
    let val = document.getElementsByClassName('star-name')[0].innerHTML
    window.open(url+'&fuckname='+encodeURI(val))
    setTimeout(()=>{
      window.close()
    },200)
  }
  
}
function page2(){
  let bot = document.getElementsByClassName("gray-button")
  console.log(bot)
  if(bot.length>0){
    console.log( bot[0])
     bot[0].click()
     page3()
  }else{
    if(page2QTime==10){
      window.close()
    }
     setTimeout(()=>{
       page2QTime++
       page2()
    },100)
  }
}
function page1(){
  console.log(4334535435435)
  let startNum = 0
  let pageNum =0
  let endPage = 16


  let itemNum = 0
  function task1(){

    let doc = document.getElementsByClassName('ant-select-selection-search-input')[0]
    if(doc){
      document.getElementsByClassName('ant-select-selection-search-input')[0].value=keyWords;
      document.getElementsByClassName('ant-select-selection-search-input')[0].dispatchEvent(new Event('input'))
      document.getElementsByClassName('sc-crrszt')[0].click()
      task5()
    }else{
      setTimeout(()=>{
        task1()
      },1000)
    }
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
      if(itemNum>list.length-1){
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
    pageNum++
    let nums = document.getElementsByClassName('ant-pagination-item')
    for(let obj of nums){
      let text = obj.getElementsByTagName('a').innerHTML
        if(pageNum>endPage){
          return
        }
        if(text==pageNum){
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
    let nums = document.getElementsByClassName('ant-pagination-item-link')[0]
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

