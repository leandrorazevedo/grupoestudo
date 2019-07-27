# Audio

O elemento `audio` é utilizado para embutir conteúdo de som em um documento HTML ou XHTML.O elemento `audio` foi adicionado como parte do HTML5.

## Atributos

> **autoplay**

Um atributo Booleano; se especificado (mesmo se o valor for "false"!), o áudio iniciará automaticamente assim que possível sem parar de carregar os dados.

> **buffered**

Um atributo que pode ser lido para determinar os intervalos do áudio que já foram carregados. Este atributo contém um objeto [TimeRanges](https://developer.mozilla.org/pt-BR/docs/Web/API/TimeRanges).

> **controls**

Se esse atributo estiver presente, o navegador oferecerá controles para permitir ao usuário controlar a reprodução do áudio, incluindo volume, navegação, e pausa/continuação da reprodução.

> **loop**

Um atributo Booleano; se especificado, ao chegar no fim do áudio, ele voltará automaticamente para o começo.

> **muted**

Um atributo Booleano que indica se o áudio será inicializado silenciado.

> **played**

Um objeto [TimeRanges](https://developer.mozilla.org/pt-BR/docs/Web/API/TimeRanges) indicando que todo o áudio foi reproduzido.

> **preload**

Esse atributo enumerado pretende dar uma sugestão ao navegador sobre o que o autor pensa que proporcionará uma melhor experiência do usuário. Ele pode ter os seguintes valores:

- none: indica que o usuário não necessitará consultar o áudio ou que o servidor quer minimizar seu tráfego; em outros termos indica que o áudio não deve ser pré-carregado;
- metadata: indica que embora o usuário não necessitará consultar o áudio, pegar os meta-dados (ex: comprimento) é interessante;
- auto: indica que o usuário necessita ter prioridade; em outros termos isso significa que, se necessário, o áudio inteiro pode ser baixado, mesmo que não seja esperado a execução;
- Uma string vazia: é um sinônimo do valor auto.

Se não definido, seu valor padrão será definido pelo navegador (isto é, cada navegador pode escolher seu valor padrão), embora a especificação recomenda que seja definido para o metadata.

> **Notas de uso:**
>
> > O atributo autoplay tem precedência sobre o preload,pois se é necessário executar o áudio automaticamente, o navegador obviamente o baixará. Definindo ambos autoplay e preload é permitido pela especificação.
> > O navegador não é forçado pela especifição a seguir o valor desse atributo; é apenas uma sugestão.

> **src**

A URL do áudio a ser incorporado. Isso é sujeito a HTTP access controls. Isto é opcional; ao invés disso você pode usar o elemento `<source>` dentro do bloco do áudio para especificar o vídeo a ser incorporado .
