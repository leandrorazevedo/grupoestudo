# \<a\>

O elemento HTML \<a\> ou o Elemento Âncora HTML, define uma hiperligação (hyperlink), o destino de uma hiperligação, ou ambos.

## Atributos

> **download**

Este atributo, se presente, indica que o autor planeja que a hiperligação seja usada para fazer download de um recurso de modo que quando um usuário clicar em um link ele seja questionado se deseja salvar seu conteúdo como um arquivo local. Se o atributo possui um valor, ele será usado como um nome sugerido para o arquivo na janela que for abrir quando o usuário clicar no link (o usuário pode mudar tal nome antes de realmente salvar o arquivo, é claro). Não existem restrições sobre valores permitidos, mas você deve considerar que a maioria dos sistemas de arquivos possuem limitações em relação à quais pontuações são suportadas em nomes de arquivos, e navegadores poderão ajustar os nomes de acordo com isso.

> **href\*\***

Este é o único atributo obrigatório para âncoras definindo uma ligação para um hipertexto. Ele indica o alvo do link, seja uma URL ou um fragmento de URL. Um fragmento de URL é um nome precedido por uma cerquilha (#), a qual especifica um destino interno (um ID) dentro do documento atual. URLs não precisam se limitar à documentos Web baseados em HTTP. URLs podem usar qualquer protocolo suportado pelo navegador. Por exemplo, file, ftp, e mailto funcionam na maioria dos navegadores.

> > **Nota:** Você pode usar o fragmento especial "top" para criar um link para o topo da página; por exemplo \<a href="#top"\>Volte ao topo \</a\>. Este comportamento é especificado pelo HTML5.

> **hreflang**

Este atributo especifica a linguagem do documento ligado. É puramente aconselhável. Valores permitidos são determinados pelo [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) para HTML5 e pelo [RFC1766](https://www.ietf.org/rfc/rfc1766.txt) para HTML4. Use este atributo somente se o atributo href estiver presente.

> **media**

Este atributo especifica o tipo de mídia para a qual o recurso linkado se aplica. Seu valor precisa ser um [tipo de mídia](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries). Este atributo é útil principalmente quando cria-se um link para uma folha de estilo externa, permitindo ao navegador escolher aquela melhor adaptada ao dispositivo em que está executando.

> **rel**

Para âncoras contendo o atributo **href**, este atributo especifica qual a relação do destino do link em relação ao documento atual. O valor é uma lista separada por espaços de valores de relações possíveis. Os valores e sua semântica serão registrados por alguma autoridade que possa ter algum significado para o autor do documento. A relação padrão, se nenhuma outra for fornecida, é "void". Use este atributo somente se o atributo **href** estiver presente.

> **target**

Este atributo especifica onde mostrar o recurso linkado. No HTML4, o valor é um nome ou uma palavra-chave que se refere a um frame. No HTML5, é um nome ou palavra-chave que se refere a um contexto de navegação (por exemplo, aba, janela ou um frame inserido dentro de uma linha ("iframe"). As seguintes palavras-chave possuem significados especiais:

- **\_self**: Carrega a resposta no mesmo frame HTML4 (ou contexto de navegação HTML5) em que o link está. Este é o valor padrão se o atributo não for especificado.
- **\_blank**: Carrega a resposta em uma nova janela sem nome HTML4 ou contexto de navegação HTML5.
- **\_parent**: Carrega a resposta no frame pai do frame atual em HTML4 ou no contexto de navegação pai do atual no HTML5. Se não existe um pai, este atributo se comporta de forma idêntica ao \_self.
- **\_top**: Em HTML4: Carrega a resposta na janela original cheia, cancelando todos os outros frames. Em HTML5:Carrega a resposta no contexto de navegação do topo (isto é, o contexto de navegação ancestral do atual, e que não tem pai). Se não existe um pai no contexto atual, esta opção se comporta de modo idêntico que **\_self**.

Use este atributo somente se o atributo href estiver presente.

> **type**

Este atributo especifica o tipo de mídia na forma de um tipo MIME para o link. Geralmente isso é fornecido meramente para fins de informação; no entanto, no futuro um navegador pode adicionar um pequeno íconepara tipos multimídia. Por exemplo, um navegador pode adicionar um pequeno ícone de caixa de som quando um tipo for ajustado para audio/wav. Para uma lista completa de tipos MIME reconhecidos, veja http://www.w3.org/TR/html4/references.html#ref-MIMETYPES. Use este atributo somente se o atributo href estiver presente.

Exemplo :

```html
<a href="https://www.google.com/">Link para o google</a>
```

Resultado :

<a href="https://www.google.com/">Link para o google</a>
