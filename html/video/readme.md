# Vídeo

O elemento HTML `<video>` é utilizado para incorporar conteúdo de vídeo em um documento HTML ou XHTML.

> _Para uma lista completa de todos os eventos e propriedades [clique aqui .](https://www.w3schools.com/tags/ref_av_dom.asp)_

## Atributos / Propriedades

> **autoplay**

Um atributo Booleano; se especificado, o video vai ser executado assim que possível sem precisar de carregar todo o arquivo.

> > _Nota_: Algumas versões do Chrome aceitam somente o autostart e não o autoplay

> **buffered**

Um atributo que pode ser lido para determinar os intervalos do vídeo que já foram carregados. Este atributo contém um objeto [TimeRanges](https://developer.mozilla.org/pt-BR/docs/Web/API/TimeRanges).

> **controls**

Se esse atributo estiver presente, o Gecko oferecerá controles para permitir o usuário controlar a reprodução do vídeo, incluindo volume, navegação, e pausa/continuação da reprodução.

> **height**

A altura da área de exibição do vídeo, em pixels de CSS.

> **loop**

Um atributo Booleano; se especificado, ao chegar no fim do vídeo, ele voltará automaticamente para o começo.

> **muted**

Um atributo Booleano que indica a configuração padrão do áudio contido no vídeo. Se definido, o áudio vai começar mudo. Seu valor padrão é falso, significando que o áudio será reproduzido juntamente com o vídeo.

> **played**

Um objeto [TimeRanges](https://developer.mozilla.org/pt-BR/docs/Web/API/TimeRanges) indicando que todo o vídeo foi reproduzido.

> **preload**

Esse atributo enumerado pretende dar uma sugestão ao navegador sobre o que o autor pensa que proporcionará uma melhor experiência do usuário. Ele pode ter os seguintes valores:

- none: indica que o usuário não necessitará consultar o vídeo ou que o servidor quer minimizar seu tráfego; em outros termos indica que o vídeo não deve ser pré-carregado.
- metadata: indica que embora o usuário não necessitará consultar o vídeo, pegar os meta-dados (ex: comprimento) é interessante.
- auto: indica que o usuário necessita ter prioridade; em outros termos isso indicou que, se necessário, o vídeo inteiro pode ser baixado, mesmo que não seja esperado a execução.
- a string vazia: é um sinônimo do valor auto.

Se não definido, seu valor padrão será definido pelo navegador (isto é, cada navegador pode escolher seu valor padrão), embora a especificação recomenda que seja definido para o metadata.

> > **Notas de uso:**
> >
> > - O atributo `autoplay` tem precedência sobre o `preload`, pois se é necessário executar o vídeo automaticamente, o navegador obviamente o baixará. Definindo ambos `autoplay` e `preload` é permitido pela especificação.
> > - O navegador não é forçado pela especifição a seguir o valor desse atributo; é apenas uma sugestão.

> **poster**

Uma URL indicando uma imagem de prévia do vídeo até o usuário reproduzir ou navegar por ele. Se este atributo não estiver especificado, nada será mostrado até que o primeiro quadro esteja disponível; então o primeiro quadro será exibido como imagem de prévia.

> **src**

A URL do vídeo a ser incorporado. Isto é opcional; ao invés disso você pode usar o elemento <source> dentro do bloco do vídeo para especificar o vídeo a ser incorporado .

> **width**

A largura da área de exibição do vídeo, em pixels de CSS.
