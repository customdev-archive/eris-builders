export const SelectMenuTypes = {
    String: 3,
    User: 5,
    Role: 6,
    Mentionable: 7,
    Channel: 8
};

export class SelectMenuBuilder {
    constructor() {
        this.type = 3;
        this.options = [];
    }

    setType(type) {
        this.type = type;
        return this;
    }

    setCustomId(custom_id) {
        this.custom_id = custom_id;
        return this;
    }

    setPlaceholder(placeholder) {
        this.placeholder = placeholder;
        return this;
    }

    setMinValues(min_values) {
        this.min_values = min_values;
        return this;
    }

    setMaxValues(max_values) {
        this.max_values = max_values;
        return this;
    }

    setDisabled(disabled = true) {
        this.disabled = disabled;
        return this;
    }
    
    addOption(option) {
        this.addOptions([ option ]);
        return this;
    }

    addOptions(options) {
        for (const option of options) { // { label, value, description, emoji, default }
            this.options.push(option);
        }
        return this;
    }
}