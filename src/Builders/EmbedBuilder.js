export class EmbedBuilder {
    constructor() {
        this.fields = [];
    }

    setColor(color) {
        this.color = parseInt(color.startsWith('#') ? color.slice(1) : color, 16);
        return this;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    setURL(url) {
        this.url = url;
        return this;
    }

    setAuthor({ name, iconURL, url }) {
        this.author = { name, iconURL, url };
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    setThumbnail(url) {
        this.thumbnail = { url };
        return this;
    }

    addField(name, value, inline) {
        this.addFields([ { name, value, inline } ]);
        return this;
    }

    addFields(fields) {
        for (const { name, value, inline = false } of fields) {
            this.fields.push({ name, value, inline });
        }
        return this;
    }

    setImage(url) {
        this.image = { url };
        return this;
    }

    setFooter({ text, icon_url }) {
        this.footer = { text, icon_url };
        return this;
    }
}