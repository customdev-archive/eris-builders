# Eris builders.

I created this repository to make discord.js-like builders to use with Eris. It isn't exactly like discord.js though (or won't be).

Current classes:
```
ActionRowBuilder
ButtonBuilder
EmbedBuilder
ModalBuilder
SelectMenuBuilder
```

### Eris examples.

Import.
```js
import {
    ActionRowBuilder,

    ButtonStyle,
    ButtonBuilder,

    EmbedBuilder,

    TextInputStyle,
    ModalBuilder,
    TextInputBuilder,

    SelectMenuTypes,
    SelectMenuBuilder
} from 'eris-builders';
```

Embed.
```js
const embed = new EmbedBuilder()
    .setColor('#FFFFFF')
    .setDescription(`🎲 You rolled a **${Math.ceil(Math.random() * 6)}**.`);
interaction.createMessage({ embeds: [ embed ] });
```

Buttons.
```js
const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('custom_id')
            .setLabel('Label.')
    );
interaction.createMessage({ content: 'Click the button:', components: [ row ] });
```

Select menu.
```js
const row = new ActionRowBuilder()
    .addComponents(
        new SelectMenuBuilder()
            .setType(SelectMenuTypes.User)
            .setCustomId('hello_user')
            .setPlaceholder('Say hello to...')
    );
interaction.createMessage({ content: `👋 Hello <@!${interaction.member.id}>.`, components: [ row ] });
```

Modals.
```js
const modal = new ModalBuilder()
    .setCustomId('modal_response')
    .setTitle('Modal');
        
const favoriteShapeInput = new TextInputBuilder()
    .setCustomId('favorite_shape')
    .setStyle(TextInputStyle.Short)
    .setLabel("What's your favorite shape?")
    .setPlaceholder('(eg. square, rectangle, circle)')
    .setMaxLength(50);
        
const firstActionRow = new ActionRowBuilder().addComponents(favoriteShapeInput);
modal.addComponents(firstActionRow);

await this.client.createInteractionResponse(interaction.id, interaction.token, {
    type: 9,
    data: modal
});
```