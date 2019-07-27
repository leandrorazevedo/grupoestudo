# Atributos

> ## **autocomplete**

Este atributo indica se o valor do controle pode ser completado automaticamente pelo navegador. Este atributo é ignorado se o valor do atributo type é hidden, password, checkbox, radio, file ou um tipo de botão (button, submit, reset, image). Os valores possíveis são:

- **off**: O usuário deve inserir explicitamente um valor neste campo a cada uso, ou o documento implementa seu próprio método de autocompletar; o navegador não completa a entrada automaticamente.
- **on**: O navegador pode completar automaticamente o valor baseado em valores que o usuário inseriu no passado.

> ## **autofocus**

Este atributo booleano permite que você especifique que um controle de formulário deve ter o foco de entrada de dados assim que a página carrega, a não ser que o usuário sobrescreva este comportamento digitando em um controle diferente, por exemplo. Apenas um elemento de formulário em um documento pode ter o atributo autofocus, que é booleano. Este atributo não pode ser aplicado se o atributo type estiver definido como hidden (isto é, você não pode colocar automaticamente o foco em um controle escondido).

> ## **checked**

Quando o valor do atributo **type** é `radio` ou `checkbox`, a presença deste atributo booleano indica que o controle é selecionado por padrão; caso contrário, este atributo é ignorado.

> ## **disabled**

Este atributo booleano indica que o controle de formulário não está disponível para interação. Em particular o evento click não será disparado em controles desabilitados. Além disso, o valor de um controle desabilitado não é enviado com o formulário.

> ## **formnovalidate**

Se o elemento for um botão ou uma imagem de envio de formulário, este atributo booleano especifica que o formulário não deve ser validado quando enviado. Se especificado, este atributo sobrescreve o atributo novalidate do formulário dono do elemento.

> ## **height**

Se o valor do atributo type for image, este atributo define a altura da imagem mostrada para o botão.

> ## **inputmode**

Uma dica para o navegador de qual teclado deve ser mostrado. Este atributo se aplica quando o valor do atributo **type** é `text`, `password`, `email` ou `url`. Os valores possíveis são:

- **verbatim**: Conteúdo alfanumérico que não seja prosa, como nomes de usuário e senhas.
- **latin**: Conteúdo no alfabeto latino na língua preferida do usuário, com auxílios de entrada como predição de texto habilitados. Para interações humano-computador como caixas de busca
- **latin-name**: Como latin, mas para nomes humanos.
- **latin-prose**: Como latin, mas com auxílios de entrada mais agressivos. Para comunicações entre humanos como mensagens instantâneas ou email.
- **full-width-latin**: Como latin-prose, mas para as línguas secundárias do usuário.
- **kana**: Entrada em kana ou romaji, tipicamente hiragana, usando caracteres de largura total, com suporte à conversão para kanji. Para entrada de texto em língua japonesa.
- **katakana**: Entrada em katakana, usando caracteres de largura total, com suporte à conversão para kanji. Para entrada de texto em língua japonesa.
- **numeric**: Entrada numérica, incluindo teclas para os dígitos de 0 a 9, o caractere separador de milhar preferido pelo usuário e o caractere para indicar números negativos. Para códigos numéricos como números de cartão de crédito. Para números de verdade, prefira usar `<input type="number">`
- **tel**: Entrada de números de telefone, incluindo as teclas asterisco e cerquilha. Use `<input type="tel">` se possível em vez disso.
- **email**: Entrada de email. Use `<input type="email">` se possível em vez disso.
- **url**: Entrada de URLs. Use `<input type="url">` se possível em vez disso.

> ## **list**

Identifica uma lista de opções pré-definidas de sugestões para o usuário. O valor deve ser o id de um elemento `<datalist>` no mesmo documento. O navegador mostrará apenas opções que são valores válidos para este elemento. Este atributo é ignorado quando o valor do atributo type é hidden, checkbox, radio, file ou um tipo de botão.

> ## **max**

O valor máximo (numérico ou data) para este item, que não deve ser menor que seu valor mínimo (atributo **min**).

> ## **maxlength**

Se o valor do atributo type for `text`, `email`, `search`, `password`, `tel` ou `url`, este atributo especifica o número máximo de caracteres (em pontos de código Unicode) que o usuário pode inserir; para outros tipos de controle, este atributo é ignorado. Seu valor pode exceder o do atributo size. Se não for especificado, o usuário pode inserir uma quantidade ilimitada de caracteres. Especificar um valor negativo resulta no comportamento padrão, isto é, o usuário vai poder inserir um número ilimitado de caracteres. Esta regra só é validada quando o valor do atributo é modificado.

> ## **min**

O valor mínimo (númerico ou data) para este item, que não deve ser maior do que seu máximo (atributo **max**).

> ## **minlength**

Se o valor do atributo type for `text`, `email`, `search`, `password`, `tel` ou `url`, este atributo especifica o número mínimo de caracteres (em pontos de código Unicode) que o usuário pode inserir; para outros tipos de controle, este atributo é ignorado.

> ## **multiple**

Este atributo booleano indica se o usuário pode inserir mais de um valor. Ele é aplicado quando o atributo type está definido como `email` ou `file`; em outros casos, é ignorado.

> ## **pattern**

Uma expressão regular usada para validar o valor do controle. O padrão deve casar com o valor completo da entrada, não apenas uma parte. Use o atributo **title** para descrever o padrão para ajudar o usuário. Este atributo é aplicado quando o valor do atributo **type** é `text`, `search`, `tel`, `url` ou `email`; caso contrário ele é ignorado. A linguagem da expressão regular é a mesma do JavaScript. O padrão não deve estar entre barras.

> ## **placeholder**

Uma dica para o usuário do que ele pode inserir no controle. O texto do atributo não deve conter quebras de linha. Este atributo é aplicado quando o valor do atributo **type** é `text`, `search`, `tel`, `url` ou `email`; caso contrário, ele é ignorado.

> ## **readonly**

Este atributo booleano indica que o usuário não pode modificar o valor do controle.
HTML5 Este atributo é ignorado se o valor do atributo **type** for `hidden`, `range`, `color`, `checkbox`, `radio`, `file` ou um tipo de botão.

> ## **required**

Este atributo especifica que o usuário deve preencher o campo com um valor antes de enviar o formulário. Ele não pode ser usado quando o atributo **type** está definido como `hidden`, `image` ou um tipo de botão (`submit`, `reset` ou `button`). As pseudoclasses CSS `:optional` e `:required` serão aplicadas ao campo como for apropriado.

> ## **tabindex**

A posição do elemento na ordem de navegação pela tecla Tab no documento atual.

> ## **width**

Se o valor do atributo **type** for `image`, este atributo define a largura da imagem exibida para o botão.
