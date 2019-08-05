# Tags para textos

## \<h1\> - \<h6\> : Cabeçalho da seção

Elementos de cabeçalho são implementados em seis níveis, \<h1\> é o mais importante e \<h6\> é o de menor importância. Um elemento de cabeçalho descreve brevemente o tópico da seção em que ele está. As informações de cabeçalho podem ser usadas por agentes de usuário, por exemplo, para construir uma tabela de conteúdos para um documento automaticamente.

exemplos :

```html
<h1>cabeçalho de nivel 1</h1>
<h2>cabeçalho de nivel 2</h2>
<h3>cabeçalho de nivel 3</h3>
<h4>cabeçalho de nivel 4</h4>
<h5>cabeçalho de nivel 5</h5>
<h6>cabeçalho de nivel 6</h6>
```

### Notas

Não use níveis menores para diminuir o tamanho da fonte do cabeçalho: use a propriedade CSS font-size .

Evite pular níveis de cabeçalhos: sempre comece com \<h1\>, depois \<h2\> e assim por diante. Tente, também, ter pelo menos um cabeçalho de primeiro nível em uma página..

Em HTML5, use o elemento \<section\> para definir os limetes do documento. Cabeçalhos fornecem títulos para sections and subsections. Você também pode agrupar um cabeçalho e seu conteúdo usando o elemento \<div\> .

## \<p\> : Parágrafo

O elemento HTML \<p\> (ou Elemento HTML Parágrafo) representa um parágrafo do texto. Parágrafos são, geralmente, representados em mídia visual , como bloco de texto que são separados dos blocos adjacentes por espaços brancos verticais e/ou recuo de primeira-linha.

Parágrafos são elementos em bloco .

exemplo :

```html
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, maiores tempore. Natus, minus amet tenetur ut asperiores possimus eligendi
  nulla, ab facere, autem dolorem accusantium adipisci doloribus fugiat corrupti! Quod.
</p>
```

## \<sub\> : Subscrito

O elemento Subscrito HTML (\<sub\>) especifica o texto embutido que deve ser exibido como subscrito apenas por motivos tipográficos. Geralmente, os subscritos são renderizados com uma linha de base reduzida usando texto menor.

exemplo :

```html
H<sub>2</sub>O = água
```

resultado :

H<sub>2</sub>O = água

## <sup> : Sobrescrito

O elemento HTML Sobrescrito (\<sup\>) especifica o texto embutido que deve ser exibido como sobrescrito apenas por motivos tipográficos. Sobrescritos geralmente são renderizados com uma linha de base elevada usando texto menor.

exemplo :

```html
2<sup>2</sup> = 4
```

resultado :

2<sup>2</sup> = 4

## \<br\> : Quebra de Linha

O elemento HTML quebra-de-linha \<br\> produz uma quebra de linha em um texto (carriage-return). É útil para escrever poemas ou um endereço, onde a divisão de linha é significante.

Não use \<br\> para aumentar o espaço entre as linhas de texto; para isso use a propiedade CSS margin ou o elemento \<p\>.

```html
<p>
  Grupo <br />
  de <br />
  Estudos
</p>
```

Resultado :

 <p>
    Grupo <br> de <br> Estudos
<p>

## \<hr\> : Quebra de Linha Temática

O elemento HTML \<hr\> representa uma quebra temática entre elementos de nível de parágrafo (por exemplo , uma mudança da cena de uma história, ou uma mudança de tema com uma seção). Nas versões anteriores do HTML, representava uma linha horizontal. Pode continuar sendo exibida como uma linha horizontal nos navegadores, mas agora está definida em termos semânticos, em vez de termos de apresentação.

```html
<p>
  Este é o primeiro parágrafo do texto. texto.
</p>

<hr />

<p>
  Este é o segundo parágrafo do texto.
</p>
```

Resultado :

<p>Este é o primeiro parágrafo do texto.</p>

<hr>

<p>Este é o segundo parágrafo do texto. </p>

## \<strong\>

O elemento HTML \<strong\> dá ao texto uma forte importância, e é tipicamente mostrado em negrito.

### **Notas de uso**

O elemento \<strong\> é utilizado em conteúdos que são de "grande importância", incluindo coisas de urgentes (como alertas). Podem ser sentenças que são de grande importância para toda a página, ou, você pode meramente tentar pontuar que algumas palagras são de grande importância, comparado ao conteúdo próximo.

Tipicamente, estes elementos são renderizados por padrão, usando fontes em negrito. Contudo, ele não deve ser usado para simplesmente aplicar o estilo negrito; use o CSS font-weight para este propósito. Use o elemento \<b\> para chamar a atenção para certos textos sem a indicação de grande nível de importância. Use o elemento \<em\> para marcar textos que tem necessitam de ênfase.

Outro uso aceitavel para \<strong\> é denotado com o rótulo (label) de parágrafos, que representa notas ou avisos, dentro do texto da página.

### **Bold vs Strong**

Muitas vezes é confuso para novos desenvolvedores porque há tantas maneiras de expressar a mesma coisa em um website renderizado. Bold e Strong são talvez um dos casos mais comuns. Porque usar \<strong\>\</strong\> vs \<b\>\</b\>? Você precisa digitar muito mais ao usar strong e ela produz o mesmo resultado, certo?

Talvez não; strong é um estado lógico, e bold é um estado físico. Estados lógicos separam apresentação do conteúdo, e ao fazer isso permitem que ele seja expresso de várias maneiras diferentes. Possivelmente em vez de renderizar um texto como negrito você queira renderizá-lo vermelho, ou num tamanho diferente, ou sublinhado, ou seja lá o que for. Faz mais sentido mudar as propriedades de apresentação de strong do que bold. Isto porque bold é um estado físico; não há separação entre a apresentação e o conteúdo, e fazer com que bold faça qualquer outra coisa diferente de deixar o texto em negrito seria confuso e ilógico.

É importante notar que \<b\>\</b\> tem outros usos, quando se quer chamar atenção sem aumentar a importância.

### **Emphasis vs Strong**

Enquanto no HTML4, Strong simplesmente indicava uma ênfase mais forte, em HTML5, o elemento é descrito como representando "uma forte importância para o seu conteúdo." Esta é uma importante distinção a se fazer. Enquanto Emphasis é usado para alterar o significado de uma sentença ("Eu _amo_ cenouras" vs. "Eu amo _cenouras_"), Strong é usado para dar mais importância a porções de uma sentença (e.g., "**Cuidado!** Isso é **muito perigoso.**"). Ambos Strong e Emphasis podem ser aninhados para aumentar o grau relativo de importância ou reforçar ênfase, respectivamente.

exemplo :

```html
<p>Ao fazer x é <strong>imperativo</strong> que se faça y antes de prosseguir.</p>
```

resultado :

<p>Ao fazer x é <strong>imperativo</strong> que se faça y antes de prosseguir.
</p>

## \<em\> : Emphasis
