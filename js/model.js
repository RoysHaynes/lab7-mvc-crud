export class ChatModel{
    constructor(){
        this.message=[];
    }
    loadMessages(){
        try{
            const data = localStorage.getItem("chatMessages");
            return data ? JSON.parse(data) : [];
        }catch(error){
            console.error(error);
            return [];
        }
    }
}