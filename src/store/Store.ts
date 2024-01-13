
export type userId=string

export interface chats{
   id:string,
   userId:userId,
   name:string,
   message:string,
   upvotes:userId[]
}

export class  Store {
    
    constructor(){
         
    }
    
    initRoom(roomId:string){

    }

    getChats(roomId:string,limit:number,offset:number){

    }

    addChats(userId:string,name:string,roomId:string,message:string){

    }

    addUpvote(userId:string,roomId:string,chatId:string){

    }
}