import {Store,chats} from './Store'
let globalchat=0;

export interface Room{
    roomId:string,
    chats:chats[]
}

export class  InMemoryStore implements Store{
    private store:Map<string, Room>;
    constructor(){
        this.store=new Map<string,Room>()
    }
    
    initRoom(roomId:string){
           this.store.set(roomId,{
              roomId,
              chats:[],
           });
    }

    getChats(roomId:string,limit:number,offset:number){
           const room =this.store.get(roomId)
           if(!room){
            return [];
           }

           return room.chats.reverse().slice(0,offset).slice(-1*limit);
    }

    addChats(userId:string,name:string,roomId:string,message:string){
        const room =this.store.get(roomId)
        if(!room){
         return [];
        }

        room.chats.push({
              id:(globalchat++).toString(),
              userId,
              name,
              message,
              upvotes:[]
        })   
    }

    addUpvote(userId:string,roomId:string,chatId:string){
        const room =this.store.get(roomId)
        if(!room){
            return [];
        }
        const chat =room.chats.find(({id})=>id==chatId);
        if(chat){
            return chat.upvotes.push(userId);
        }
    }
}