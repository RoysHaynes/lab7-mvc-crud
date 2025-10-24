export class ChatController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.init(this.model);

        this.view.form.addEventListener("submit", (e) => {
            e.preventDefault();
            const text = this.view.input.value.trim();
            if (!text) return;

            this.model.addMessage(text, true);

            this.view.input.value = "";

            setTimeout(() => {
                this.model.addMessage("Hi! I'm your friendly bot 🤖", false);
            }, 600);
        });


        this.view.clearBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to clear all messages?")) {
                this.model.clearMessages();
            }
        });

        this.view.exportBtn.addEventListener("click", () => {
            const data = this.model.exportChat();
            const blob = new Blob([data], { type: "application/json" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "chat_export.json";
            a.click();
        });

        this.view.importBtn.addEventListener("click", () => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = ".json";
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () => {
                    try {
                        this.model.importChat(reader.result);
                    } catch {
                        alert("Invalid file format!");
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        });

        this.view.chatBody.addEventListener("click", (e) => {
            const id = e.target.dataset.messageId;
            const action = e.target.dataset.action;
            if (!id || !action) return;

            if (action === "delete") {
                if (confirm("Delete this message?")) {
                    this.model.deleteMessage(id);
                }
            }

            if (action === "edit") {
                const newText = prompt("Edit your message:");
                if (newText) {
                    this.model.updateMessage(id, newText);
                }
            }
        });
    }
}
