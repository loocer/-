
function main(){
  let bot = document.getElementsByClassName("op-more-item")
  console.log(bot)
  if(bot.length>0){
    console.log( bot[0])
     bot[0].click()
     window.close()
  }else{
     setTimeout(()=>{
       main()
    },100)
  }
}
main()