# Executar, manter e publicar

## Rodar a cópia do portfólio

Instale Node.js de uma fonte oficial e clone o repositório. Na pasta do projeto:

```sh
cd projetos/aura-visage
npm run prepare-site
npm run dev
```

Abra `http://127.0.0.1:4173/`. Não é necessário `npm install`: os scripts usam módulos internos do Node e o projeto não declara dependências. Não abra `index.html` por duplo clique; os módulos e caminhos devem ser servidos por HTTP.

Se a porta estiver ocupada, encerre apenas a instância de prévia que você iniciou ou altere a porta em `serve.mjs`. O servidor fica limitado à máquina local.

## Fazer uma alteração pequena

```sh
git switch -c ajuste-aura
```

Edite o arquivo responsável pela mudança, confira a interface e execute:

```sh
node --check dist/app.js
node --check dist/components.js
node --check dist/content.js
node --check dist/services.js
npm run prepare-site
```

Esses comandos verificam sintaxe e preparação dos arquivos. Eles não provam que os destinos externos funcionam, nem substituem testar a interface. Confira filtros, menu móvel, abertura e fechamento dos diálogos, links e mensagens de erro. Não faça reservas reais ou envie mensagens de teste sem combinar com a operação.

Depois de revisar a diferença:

```sh
git diff
git add projetos/aura-visage
git commit -m "Atualiza informações do AURA"
```

O último bloco deve ser executado na raiz do repositório do portfólio. Um commit registra a alteração localmente; enviar ao GitHub e publicar o site são etapas diferentes. Não há sincronização automática configurada entre esse repositório e o Sites.

## Onde atualizar

| Mudança | Arquivo |
|---|---|
| Telefone, endereço ou horário | `dist/content.js`; conferir textos repetidos em `app.js` e `components.js` |
| Preço, duração ou link Trinks | `dist/services.js`; revisar data de consulta em `app.js` |
| Fotografia | `dist/assets/`; conferir nome, proporção, descrição e fonte |
| FAQ ou privacidade | `dist/components.js` |
| Campanha | `dist/content.js`, depois executar `prepare.mjs` |
| Domínio do sitemap | `prepare.mjs` |
| Cor e apresentação | `dist/styles.css` |

O endereço confirmado em 07/10/2026 é Rua Pascoal Souza, 66 — Vila Maria Luísa, Bairro do Limão, São Paulo. Atendimento de terça a sábado, das 09h às 18h. Ao mudar um dado operacional, alinhar site, Trinks e Google.

## Estado de publicação

O site original está publicado no Sites e seu acesso foi encontrado como público em 07/10/2026. As instruções de não indexação permanecem: `index.html` contém `noindex,nofollow` e `robots.txt` bloqueia rastreamento. Isso não é controle de acesso, não garante privacidade e não impede visitas diretas.

Antes de buscar tráfego orgânico, revisar conteúdo e estratégia de indexação. As páginas de campanha ainda são conceitos; não devem ser anunciadas como promoções vigentes. É recomendável produzir o conteúdo principal em HTML estático antes de investir em SEO de forma ampla, pois a versão atual depende de JavaScript para sua montagem.

Os links absolutos iniciados com `/` supõem hospedagem na raiz. A cópia dentro deste portfólio é destinada à leitura do código e execução local. Para navegar no produto, use a URL do Sites indicada no README. Hospedar a cópia em outra subpasta exige adaptar caminhos e roteamento.

## Recuperação e evolução

Guarde versões no Git e publique uma alteração por vez quando possível. Para desfazer uma alteração já compartilhada, prefira um commit de reversão revisado, preservando o histórico. Evite forçar sobrescrita de branch.

Marca, logo, fotos e conteúdo comercial pertencem aos respectivos titulares. A presença dos arquivos neste case não concede licença de reutilização para outros clientes. A configuração específica do projeto Sites, credenciais e arquivos internos da equipe não fazem parte desta cópia de portfólio.
