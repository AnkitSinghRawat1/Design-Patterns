let instance = null
class SocketService{
    constructor(){
        if(!instance){
            instance = this
            console.log('Socket Connection has been Stablished')
        }
   return instance
    }

    sendData() {
        console.log("Send Data on IO");
      }
}

export default SocketService;
