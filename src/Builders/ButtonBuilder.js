export const ButtonStyle = {
    Primary: 1,
    Secondary: 2,
    Success: 3,
    Danger: 4
}

export class ButtonBuilder {
    constructor() {
        this.type = 2;
        this.style = 1;
    }

    setCustomId(custom_id) {
        this.custom_id = custom_id;
        return this;
    }

    setLabel(label) {
        this.label = label;
        return this;
    }

    setStyle(style) {
        this.style = style;
        return this;
    }

    setURL(url) {
        this.style = 5;
        this.url = url;
        return this;
    }

    setDisabled(disabled = true) {
        this.disabled = disabled;
        return this;
    }

    setEmoji(emoji) {
        if (typeof emoji === 'object') {
            const { name, id } = emoji;

            this.emoji = {
                name,
                id
            };
        } else {
            this.emoji = {
                name: emoji
            };
        }
        return this;
    }
}