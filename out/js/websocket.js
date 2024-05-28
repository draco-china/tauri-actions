/**
 * url  websocket连接url
 * onmessageCallBack 收到消息回调函数
 */
function MyWebSocket(url,onmessageCallBack){
	this.socketUrl=url;//websocket连接url
	this.onmessageCallBack = onmessageCallBack;//收到消息回调函数
	this.socketUrl=this.socketUrl.replace("https","wss").replace("http","ws");
	this.socket=null; //websocket连接对象
	var so = this;
	this.status = false;
	this.openSocket = function (){
		if(typeof(WebSocket) == "undefined") {
	         console.log("您的浏览器不支持WebSocket");
	    }else{
	    	 console.log("您的浏览器支持WebSocket");
	    	 if(this.socket!=null){
	             this.socket.close();
	             this.socket=null;
	         }
	    	 console.log(this.socketUrl);
	    	 this.socket = new WebSocket(this.socketUrl);
	    	 this.socket.onopen = function() {
		      	console.log("websocket开启成功");
		      	this.status=true;
		     };
		     this.socket.onmessage = function(msg) {
		    	 console.log(msg.data);
	        	 onmessageCallBack.call(this,msg.data);
	         };
	         this.socket.onclose = function(e) {
	            console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean);
	            this.status=false;
	            setTimeout(function() { 
	            	if(so.status==false){
	            		so.openSocket(); 
	            	}
	            }, 3000);
	         };
	         this.socket.onerror = function() {
	             console.log("websocket发生了错误");
	         }
	    }
	}
	this.sendMassage = function(data){
		this.socket.send(data);
	}
	this.openSocket();
}
