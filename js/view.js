export class ChatView{
    constructor(){
        this.chatBody = document.querySelector(".chat-body");
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
        this.chatBody.innerHTML="";

        let messages= this.model.getMessages();
        this.messageCount.textContent = messages.length + ' message' + (messages.length !== 1 ? 's' : '');
        this.emptyState.style.display = messages.length === 0 ? 'block' : 'none';

        messages.forEach(function(message){
            let messageEl = document.createElement("article");
            if(message.isUser){
                messageEl.classList.add("user-messages");
            }else{
                messageEl.classList.add("bot-messages");
            }
            messageEl.setAttribute("data-message-id", message.id);
            messageEl.innerHTML = `
                <p>${message.text}</p>
                ${message.edited ? '<small>(edited)</small>' : ''}
                ${message.isUser ? `
                    <button class="btn edit-btn" data-action="edit" data-message-id="${message.id}">Edit</button>
                    <button class="btn danger delete-btn" data-action="delete" data-message-id="${message.id}">Delete</button>
                ` : ''}
            `;
            this.chatBody.appendChild(messageEl);
        }.bind(this));
        this.chatBody.scrollTop = this.chatBody.scrollHeight;


    }

}