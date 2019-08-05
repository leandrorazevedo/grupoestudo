# Elemento \<progress\>

Como todos os outros elementos HTML, este elemento tem os atributos globais (global attributes)

> **max**

    Este atributo descreve quanto trabalho é demandado pela tarefa indicada pelo elemento progress.

> **value**

    Este atributo especifica quanto da tarefa foi concluído. Se este não existir, a barra de progresso é indeterminada; isso indica que uma atividade está em progresso sem previsão de quanto tempo é esperado para que seja concluída.

Você pode usar a propriedade _orient_ para especificar se a barra de progresso deve ser renderizada horizontalmente (padrão) ou verticalmente. A pseudo-classe \_:indeterminate pode ser associada a barras de progresso indeterminadas.

## Exemplo

```html
<progress value="70" max="100">70 %</progress>
```

# Elemento \<meter\>

O elemento HTML meter (\<meter\>) pode representar um valor escalar dentro de um intervalo conhecido ou um valor fracionário.

> **value**

    O valor numérico atual. Ele deve estar entre os valores mínimos e máximo (o atributo min e o atributo max) se eles estiverem especificados. Se não especificado ou mal formatado, o valor é 0. Se especificado, mas fora do intervalo dado pelos atributos min e max, o valor é igual ao extremo do intervalo mais próximo.

> **min**

    O limite numérico mínimo do intervalo medido. Deve ser menor que o valor máximo (o atributo max), se especificado. Se não especificado, o valor mínimo é 0.

> **max**

    O limite numérico máximo do intervalo medido. Deve ser maior que o valor mínimo (o atributo min), se especificado. Se não especificado, o valor máximo é 1.

> **low**

    O limite numérico máximo da parte inferior do intervalo medido. Deve ser maior que o valor mínimo (o atibuto min), e também ser menor que o valor alto e o valor máximo (os atributos high e max, respectivamente), se estiver especificado. Se não especificado, ou se for menor que o valor mínimo, o valor de low é igual ao valor mínimo.

> **high**

    O limite numérico mínimo da parte superior do intervalo medido. Deve ser menor que o valor máximo (o atibuto max), e também ser maior que o valor baixo e o valor mínimo (os atributos low e min, respectivamente), se estiver especificado. Se não especificado, ou se for maior que o valor máximo, o valor de high é igual ao valor máximo.

> **optimum**

    Esse atributo indica o valor numérico ótimo. Deve estar dentro do intervalo (definido pelos atributos min e max). Quando com os atributos low e high, ele indica a região do intervalo que é considerada preferível. Por exemplo, se estiver entre os atributos min e low, então a parte inferior do intervalo é considerada como ótima.

> **form**

    Esse atributo associa o elemento com um elemento form que é dono de um elemento meter. Por exemplo, um elemento meter pode estar mostrando um intervalo correspondente a um elemento input do type(tipo) number. Esse atributo só é utilizado se o elemento meter está sendo utilizado como um elemento associado a um formulário; mesmo assim, ele pode se romitido se o elemento for um descendente de um elemento form.
