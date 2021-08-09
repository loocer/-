
function sendMsg(){
	var inpEle = document.getElementsByClassName('el-textarea__inner')[0]
	// inpEle.value = '测试信息'  //仅仅是模拟回车，则不需要这样，这样给input框设置值也是不生效的，正确给input设置值的方式参考上面的
	// 模拟回车
	var event = document.createEvent('Event')
	event.initEvent('keydown',true,false)  //注意这块触发的是keydown事件，在awx的ui源码中bind监控的是keypress事件，所以这块要改成keypress
	event = Object.assign(event, {
	  ctrlKey:false,
	  metaKey:false,
	  altKey:false,
	  which: 13,
	  keyCode: 13,
	  key:'Enter',
	  code:'Enter'
	})
	inpEle.focus()
	inpEle.dispatchEvent(event)
}


let index = 0
function task3(){
	
	let chatItem = document.getElementsByClassName('chat-list-item')
	
	if(index>chatItem.length){
		return
	}else{
		console.log(index,'的')
		task2(chatItem[index])
	}
	
}
function task2(item){
	 	let items = document.getElementsByClassName('last-text')
	 	let obj = items[index].innerHTML
	 	console.log(obj)
		if(obj.length>0){

			index++
			setTimeout(()=>{
				task3()
			},100)
			
		}else{
			item.click()
			let chars = document.getElementsByClassName('chat-message')
			setTimeout(()=>{
			
				document.getElementsByClassName('el-textarea__inner')[0].value = '您好，想跟您合作推广，方便留个您的v信。'
				document.getElementsByClassName('el-textarea__inner')[0].dispatchEvent(new Event('input'))
				sendMsg()
				setTimeout(()=>{
					index++
					task3()
				},6000)
			},1000)
		}
}
task3()