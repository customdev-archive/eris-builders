import { ActionRowBuilder } from './ActionRowBuilder.js';

export const TextInputStyle = {
    Short: 1,
    Paragraph: 2
}

export class ModalBuilder extends ActionRowBuilder {
    constructor() {
        super(false);
    }

    setCustomId(custom_id) {
        this.custom_id = custom_id;
        return this;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }
}

export class TextInputBuilder {
    constructor() {
        this.type = 4;
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

    setMaxLength(max_length) {
        this.max_length = max_length;
        return this;
    }

	setMinLength(min_length) {
        this.min_length = min_length;
        return this;
    }

	setPlaceholder(placeholder) {
        this.placeholder = placeholder;
        return this;
    }

	setValue(value) {
        this.value = value;
        return this;
    }

	setRequired(required = true) {
        this.required = required;
        return this;
    }
}