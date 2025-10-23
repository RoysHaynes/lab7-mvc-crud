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
    getMessages(){
        return [...this.messages];
    }

    updateMessage(id,newText){
        const message = this.messages.find(msg => msg.id === id);
        if(message&& message.isUser){
            message.text = newText;
            message.edited = true;
            this.saveMessages();
            this.notifyObservers();
        }
    }

    deleteMessage(id){
        this.messages= this.messages.filter(msg => msg.id !== id);
        this.saveMessages();
        this.notifyObservers();
    }
    clearMessages(){
        this.messages = [];
        this.saveMessages();
        this.notifyObservers();
    }

    exportChat(){
        return JSON.stringify(this.messages,null,2);
    }

    importChat(jsonData){
        try{
            const messages = JSON.parse(jsonData);
            if (!Array.isArray(messages) || !messages.every(msg => msg.id && msg.text && typeof msg.isUser === 'boolean')) {
                throw new Error('Invalid chat data format');
            }
            this.messages = messages;
            this.saveMessages();
            this.notifyObservers();
        } catch(error){
            console.error(error);
            throw error;
        }
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