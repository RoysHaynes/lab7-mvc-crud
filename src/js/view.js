export class ChatView{
    constructor(){
        this.chatBody = document.querySelector(".chatBody");
        this.messageCount= document.querySelector("#msg-count");
        this.emptyState= document.querySelector(".start-chat");
        this.form= document.querySelector(".chat-input");
        this.input= document.querySelector("input");
        this.importBtn= document.querySelector("[data-import]");
        this.exportBtn= document.querySelector("[data-export]");
        this.clearBtn= document.querySelector("[data-clear]");
        this.model=null;
    }

    init(model){
        this.model = model;
        this.model.addObserver(()=> this.render());
        this.render();
    }
    render(){
        console.log('render called',this.model.getMessages());
    }

}