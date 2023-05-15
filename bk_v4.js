//Create  a new file bk_v4.js and type the following
const SHA256 = require('crypto-js/sha256');

class Block{
 constructor(index,timestamp, data, previousHash ='')
  {
   this.index=index;
   this.timestamp=timestamp;
   this.data=data;
   this.previousHash = previousHash;
   this.hash = this.calcHash();
   this.nonce=0;   //this is the nonce
 }  // constructor closed but the class is not closed yet

 calcHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)+this.nonce).toString();
  }

  mineBlock(difficulty){
    while(this.hash.substring(0,difficulty)!== Array(difficulty+1).join("0")){
       //inside calculate the hash of this block
        this.hash=this.calcHash();
        this.nonce++; //increment the nonce as long as our hash doesn't start with enough zeros 
        }    
    }
}