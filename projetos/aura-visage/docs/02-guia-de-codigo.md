# Aprendendo desenvolvimento com o código do AURA

Este guia usa a implementação real como objeto de estudo. Os exemplos curtos são recortes ou simplificações didáticas: não substitua arquivos inteiros por eles.

## 1. Entenda onde cada parte roda

HTML organiza a página. CSS define aparência, espaços e adaptação de tela. JavaScript dá comportamento à interface. Node.js executa JavaScript fora do navegador e, neste projeto, serve para preparar arquivos e abrir um servidor local.

O servidor `serve.mjs` é uma ferramenta de desenvolvimento. Ele não é a API de agendamento e não recebe dados do formulário. Na hospedagem, os arquivos estáticos são entregues pela infraestrutura do provedor.

```text
Requisição da página
  → dist/index.html
  → dist/styles.css + dist/app.js
  → imports de content.js, services.js e components.js
  → funções geram HTML dentro de #app
  → eventos respondem a cliques e preenchimento
  → visitante pode abrir Trinks, WhatsApp ou Google
```

## 2. Mapa dos arquivos

| Arquivo | Responsabilidade | Exemplo de ajuste |
|---|---|---|
| `dist/index.html` | Documento, idioma, metadados e entrada do aplicativo | Título exibido na aba |
| `dist/content.js` | Dados da marca, áreas e campanhas | Horário e endereço |
| `dist/services.js` | Preços, duração e destinos de reserva | Valor de um serviço |
| `dist/components.js` | Funções de apresentação reutilizáveis | Texto da FAQ |
| `dist/app.js` | Montagem da página e eventos | Comportamento de um filtro |
| `dist/styles.css` | Cores, fontes, grade e pontos de adaptação | Espaçamento no celular |
| `prepare.mjs` | Gera páginas das campanhas e sitemap | Endereço-base da publicação |
| `serve.mjs` | Servidor local simples | Porta da prévia |
| `package.json` | Configuração e atalhos de execução | `npm run dev` |

Apesar do nome `dist`, nesta implementação os arquivos dessa pasta também são o código-fonte editado diretamente. Não existe uma pasta `src` que os recompile. Os HTML das campanhas são exceção: são gerados por `prepare.mjs`.

## 3. HTML: leia a estrutura

```html
<html lang="pt-BR">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="module" src="/app.js"></script>
<div id="app"></div>
```

Uma tag delimita um elemento. Atributos acrescentam informações: `lang` indica o idioma; `id` identifica um elemento específico; `src` aponta para um arquivo. O `viewport` ajuda o navegador móvel a usar a largura do dispositivo. `type="module"` permite os imports de JavaScript. Consulte a [documentação de módulos da MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

`header`, `nav`, `main`, `section` e `footer` comunicam a função dos blocos. Um `h1` apresenta o assunto principal; `h2` separa seções e `h3` detalha itens. Hierarquia de título não deve ser escolhida apenas pelo tamanho da fonte.

Links (`a`) levam a destinos; botões (`button`) executam ações. No projeto, abrir o Trinks é um link e abrir o diálogo de contato é um botão. `label` associa o nome ao campo, `required` exige preenchimento e `aria-label` fornece um nome acessível quando necessário.

Um caminho como `/styles.css` começa na raiz do domínio. Por isso, simplesmente abrir este site como subpasta do GitHub Pages não reproduz a hospedagem atual. Rode o servidor dentro da pasta do projeto, que apresenta `dist` como raiz, ou adapte os caminhos antes de mudar a hospedagem.

## 4. CSS: seletores, valores e adaptação

```css
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

@media (max-width: 540px) {
  .service-grid { grid-template-columns: 1fr; }
}
```

`.service-grid` seleciona uma classe. Entre chaves ficam declarações no formato `propriedade: valor;`. A grade divide o espaço em três colunas; `1fr` é uma fração do espaço disponível. `minmax(0, 1fr)` permite que as colunas encolham. A regra `@media` muda o arranjo em telas estreitas.

O projeto também usa variáveis CSS: uma declaração como `--accent: #355342` pode ser reutilizada com `var(--accent)`. Alterar uma variável muda os lugares que a utilizam; regras com cores escritas diretamente continuam independentes.

`margin` é espaço externo e `padding`, interno. `display: flex` alinha itens em uma direção; `grid` organiza linhas e colunas. `object-fit: cover` preenche a área de uma foto com corte e `object-position` muda o enquadramento. No AURA, esse recurso reduz a presença da janela na foto da fachada sem modificar o arquivo original.

O arquivo reúne regras iniciais e ajustes posteriores: quando duas regras têm precedência equivalente, a posterior pode prevalecer. Uma evolução de manutenção seria organizar esses ajustes por componente, preservando o resultado visual.

## 5. Dados: objetos e arrays

```js
export const brand = {
  name: 'Aura Visage Spa',
  address: 'Rua Pascoal Souza, 66 — Vila Maria Luísa, Bairro do Limão'
};
```

`const` declara uma referência que não pode ser reatribuída. Isso não congela automaticamente o objeto. `{}` agrupa propriedades; `:` separa a chave do valor; vírgulas separam propriedades. `brand.address` acessa o endereço. `export` disponibiliza esse valor a outros módulos.

Em `services.js`, cada serviço é um array posicional:

```js
['Quiropraxia', 'Quiropraxia + ventosa', '1h', 189.9, '15852044']
```

As posições representam área, nome, duração, preço e identificador no Trinks. Uma sexta posição opcional indica “a partir de”. O preço é número, escrito com ponto no código; `toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })` o apresenta como moeda brasileira.

Esse formato é compacto, mas depende da ordem correta. Um possível exercício de refatoração é convertê-lo em objetos com propriedades nomeadas, atualizando também o código que os lê. Não altere apenas a lista, pois a renderização depende do formato atual.

## 6. Imports, funções e templates

```js
import { brand, needs } from './content.js';

const saudacao = (nome) => `Olá, ${nome}!`;
```

`import` traz exportações de outro módulo. A expressão após `=>` é o retorno da função curta. Parênteses contêm parâmetros; chaves em uma função com bloco exigem `return` para devolver um resultado.

As crases criam um template literal. `${...}` insere o resultado de uma expressão no texto. É assim que os componentes transformam dados em fragmentos HTML. Leia mais na [referência de template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

```js
needs.map(TreatmentCard).join('')
```

`map` visita cada item e devolve um novo array com os resultados da função. Neste caso, são textos HTML dos cartões. `join('')` os une sem separador. O array original não é modificado por `map`.

Os componentes do AURA são funções comuns. Não são React e não têm um sistema automático de atualização de estado. O aplicativo insere sua composição com `innerHTML` e conecta os eventos depois.

## 7. Desestruturação e operadores usados no projeto

```js
services.map(([group, name, duration, price, id, from]) => {
  return name;
});
```

Os colchetes no parâmetro fazem desestruturação: atribuem nomes às posições do array. Nos imports, as chaves selecionam exportações nomeadas. O mesmo símbolo pode ter papéis diferentes conforme o contexto.

| Sintaxe | Significado no projeto |
|---|---|
| `condicao ? a : b` | Escolhe um valor conforme a condição |
| `===` / `!==` | Compara sem conversão automática de tipo |
| `&&` / `\|\|` | Combina condições com curto-circuito |
| `?.` | Acessa uma propriedade sem falhar quando o objeto é nulo ou indefinido |
| `??` | Usa o valor alternativo apenas para `null` ou `undefined` |
| `...detail` | Copia propriedades para outro objeto |
| `[...new Set(lista)]` | Remove repetições e volta a produzir um array |
| `Object.entries(objeto)` | Produz pares `[chave, valor]` |
| `Object.fromEntries(pares)` | Monta um objeto a partir dos pares |
| `.filter(...)` | Mantém itens que atendem a uma condição |
| `.some(...)` | Verifica se ao menos um item atende à condição |

`??` e `||` não são equivalentes: `||` também trata `0`, `false` e texto vazio como motivos para usar o valor alternativo.

## 8. DOM, eventos e filtros

DOM é a representação da página com a qual o JavaScript interage.

```js
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-group]').forEach(card => {
      card.hidden = button.dataset.filter !== 'Todos'
        && card.dataset.group !== button.dataset.filter;
    });
  });
});
```

`querySelectorAll` procura todos os elementos que correspondem ao seletor. `forEach` executa uma ação em cada um. `addEventListener` registra o que fazer quando ocorre um clique. A função só roda no evento, não durante o cadastro do evento.

Um atributo `data-filter="Quiropraxia"` vira `button.dataset.filter`. A propriedade `hidden` controla a exibição dos cartões. A implementação completa também atualiza a classe `active` e `aria-pressed` para comunicar o filtro selecionado.

Nos diálogos, `showModal()` abre uma janela modal nativa e `close()` a fecha. O código conecta botões de fechamento e verifica cliques fora dos limites do diálogo. A tecla Escape é parte do comportamento nativo do elemento.

## 9. Formulário e mensagem do WhatsApp

O fluxo real é: preencher → validar → preparar texto → abrir WhatsApp → o visitante decide enviar.

```js
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const digits = String(data.get('phone')).replace(/\D/g, '');
});
```

`preventDefault` impede o envio convencional do formulário. `FormData` lê campos pelo atributo `name`. `String` converte o valor para texto. `/\D/g` é uma expressão regular: encontra todos os caracteres que não são dígitos; `replace` os remove para conferir a quantidade de números.

`setCustomValidity` define uma mensagem de erro e `reportValidity` a apresenta. A validação atual não comprova que o número existe: apenas confere o formato básico. Não há verificação por SMS nem cadastro de usuário.

`encodeURIComponent(message)` codifica a mensagem para compor o parâmetro da URL do WhatsApp. Isso não é criptografia nem autorização de envio. O código usa o número comercial fixo e abre o aplicativo em outra aba. Se a abertura falhar ou for bloqueada, o visitante ainda pode copiar a mensagem preparada.

O botão de cópia usa `async`/`await`: aguarda a promessa de `navigator.clipboard.writeText`. `try`/`catch` oferece uma alternativa quando a cópia não é permitida. Uma promessa representa um resultado que pode chegar depois ou falhar.

## 10. Rastreamento e segurança: o que realmente existe

O array `events` guarda eventos temporários em memória. `CustomEvent('aura:analytics', ...)` permite que outro código escute essas ocorrências, mas não existe envio para Google Analytics ou Google Ads. Recarregar a página perde os registros.

Os parâmetros `utm_source`, `utm_medium` e semelhantes são lidos por `URLSearchParams`; quando presentes, podem acompanhar a mensagem de WhatsApp. Não devem conter dados pessoais ou de saúde. Um clique em Trinks ou WhatsApp não equivale a reserva confirmada.

O site monta HTML a partir de conteúdo fixo controlado no projeto. `innerHTML` não higieniza dados por conta própria: se um dia o conteúdo vier de usuários, banco ou API, deve-se rever a renderização e o tratamento desses valores. O formulário atual insere a mensagem em `textarea.value`, não como HTML.

Validação no navegador melhora a experiência, mas seria insuficiente para proteger uma futura API. Também seria necessário validar no servidor, limitar abuso e manter credenciais fora do JavaScript entregue ao visitante. Nada disso deve ser anunciado como recurso já implementado.

## 11. Preparação, servidor e publicação

`prepare.mjs` lê o HTML-base, percorre `campaigns` e escreve um arquivo para cada rota. `fs` acessa arquivos, `mkdirSync` cria diretórios e `writeFileSync` grava textos. O uso síncrono é adequado ao pequeno script executado manualmente, mas não é um modelo para um servidor de alto tráfego.

O servidor local usa `http.createServer((req, res) => ...)`. `req` representa a solicitação e `res`, a resposta. `path.resolve` calcula o caminho; o código confere se ele permanece dentro da pasta pública. O mapa de tipos MIME informa ao navegador se está recebendo HTML, CSS ou JavaScript. `createReadStream` entrega o arquivo. É uma ferramenta local simples, não um servidor de produção completo.

Git guarda versões do código. GitHub hospeda o repositório e facilita apresentação e colaboração. A hospedagem do site entrega a página aos visitantes. Salvar um commit no GitHub não atualiza automaticamente o site do AURA: este projeto não possui esse fluxo automatizado.

O manifesto da hospedagem original é específico daquele projeto e não acompanha a cópia de portfólio. Para rodar localmente ele não é necessário. Para hospedar sua própria cópia, configure um destino próprio com `dist` na raiz.

## 12. Exercícios em sequência

1. Rode o projeto e encontre no código um texto que vê na tela.
2. Altere um título em uma branch de estudo e veja o resultado.
3. Adicione um serviço fictício apenas localmente, usando destino de demonstração; confira o filtro e remova-o antes de publicar.
4. Explique por que `map` seguido de `join` produz HTML.
5. Altere o espaçamento de um cartão e confira desktop e celular.
6. Faça um filtro por duração em sua branch, sem alterar o catálogo publicado.
7. Reescreva um array de serviço como objeto e adapte seu leitor.
8. Faça uma apresentação de três minutos: problema, solução, decisões, limites e evolução.

Você domina melhor a entrega quando consegue prever o efeito de uma mudança, localizar a responsabilidade no arquivo correto e explicar o que foi implementado sem prometer recursos inexistentes.
