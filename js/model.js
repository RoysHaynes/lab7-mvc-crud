export class ChatModel{
    constructor(){
        this.messages=this.loadMessages();
        this.observers=[];
    }

    addObserver(callback){
        this.observers.push(callback);
    }

    notifyObservers(){
        this.observers.forEach(callback => callback());
    }
    addMessage(text, isUser){
        const message= {
            id: Date.now().toString(),
            text: text,
            isUser: isUser,
            timestamp: Date.now().toString(),
            edited: false
        };
        this.messages.push(message);
        this.saveMessages();
        this.notifyObservers();
    }

    saveMessages(){
        try{
            localStorage.setItem('chatMessages', JSON.stringify(this.messages));
        } catch (error) {
            console.error(error);
        }
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