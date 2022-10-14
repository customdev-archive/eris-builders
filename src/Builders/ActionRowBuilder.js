export class ActionRowBuilder {
    constructor(setType = true) {
        if (setType) this.type = 1;
        this.components = [];
    }

    addComponents(...components_object) {
        for (const component of components_object) {
            if (Array.isArray(component)) {
                for (const c of component) {
                    this.components.push(c);
                }
            } else {
                this.components.push(component);
            }
        }

        return this;
    }
}