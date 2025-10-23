export class ChatModel{
    constructor(){
        this.messages=this.loadMessages();
        this.observers=[];
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
    addObserver(callback){
        this.observers.push(callback);
    }

    notifyObservers(){
        this.observers.forEach(callback => callback());
    }
}