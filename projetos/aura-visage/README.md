# O AURA Visage Spa

Site comercial para um estabelecimento de estética, beleza e bem-estar na Zona Norte de São Paulo. Projeto de portfólio conduzido por Kevin Dias, com desenvolvimento assistido por IA e validação junto ao responsável e à equipe do AURA.

**[Ver site publicado](https://aura-visage-spa-preview.kdias6752.chatgpt.site)** · **[Estudo de caso](docs/01-estudo-de-caso.md)** · **[Aprender com o código](docs/02-guia-de-codigo.md)**

## O que foi entregue

Identidade visual em verde, creme e marrom; fotografias reais; catálogo com 18 serviços e filtros; acesso ao Trinks para reserva; alternativa de WhatsApp com a recepção; localização e avaliações no Google. A implementação utiliza HTML, CSS, JavaScript com módulos nativos e scripts locais em Node.js, sem dependências de produção.

O objetivo é facilitar a descoberta e o próximo passo do visitante. Resultados de vendas e conversão ainda não foram medidos. Trinks e WhatsApp são conectados por links: não há sincronização por API ou chatbot.

## Trilha de aprendizado

1. [Problema, solução e decisões de produto](docs/01-estudo-de-caso.md).
2. [HTML, CSS, JavaScript e sintaxe do projeto](docs/02-guia-de-codigo.md).
3. [Como apresentar e comercializar a entrega](docs/03-como-apresentar-e-vender.md).
4. [Execução local, manutenção e publicação](docs/04-operacao-e-manutencao.md).

## Rodar localmente

Dentro desta pasta, com Node.js instalado:

```sh
npm run prepare-site
npm run dev
```

Abra `http://127.0.0.1:4173/`. Não é necessário instalar pacotes. A cópia em uma subpasta do portfólio é para leitura e execução local; a demonstração está no Sites, pois os caminhos do aplicativo pressupõem a raiz do domínio.

## Créditos e uso

A marca, o logo e as fotografias são do AURA e de seus respectivos titulares. Os arquivos documentam este case e não concedem permissão de reutilizar a identidade em outro negócio. A cópia de portfólio não inclui credenciais, configuração específica da hospedagem ou documentos internos da equipe.

Atualização: 07/10/2026. Site estático com identidade aprovada e imagens reais do perfil oficial.

## Manutenção

- dist/content.js: marca, endereço, horário, áreas de interesse e campanhas.
- dist/services.js: 18 serviços, preços e links consultados no Trinks em 07/10/2026. Os dois combos de quiropraxia por R$ 189,90 foram confirmados pelo responsável.
- dist/components.js: navegação, perguntas e diálogo de agendamento.
- dist/app.js: composição e interações. A data da revisão de preços também deve ser atualizada aqui.
- dist/styles.css: apresentação e responsividade.
- node prepare.mjs: prepara oito rotas sazonais, sitemap e robots.
- node serve.mjs: servidor local em 127.0.0.1:4173.

## Integração

Os links levam ao Trinks para reserva. Os preços são uma consulta datada, sem sincronização automática. O WhatsApp é uma alternativa com a recepção; o formulário prepara a mensagem e o visitante confirma seu envio. Nenhum agendamento é concluído pelo formulário local.

O Google Maps abre o perfil fornecido pelo responsável. A plaqueta existente continua em uso. Não foram criados depoimentos fictícios ou uma agenda paralela.

Eventos locais incluem page_view, click_schedule, view_treatment, start_lead, whatsapp_message_prepared, click_whatsapp, campaign_whatsapp_click e click_trinks. Permanecem apenas na memória da página, sem identificadores pessoais. Não há analytics conectado, chatbot, API Trinks ou armazenamento de dados pelo site. Cliques não comprovam reservas.

## Publicação

O site está com acesso público. O bloqueio de indexação permanece nesta etapa; publicar um site e permitir indexação são decisões distintas. As oito campanhas continuam sendo conceitos sem ofertas comerciais vigentes.

Consultar ../aura-proximos-passos.md para o alinhamento do Google. Endereço confirmado pelo responsável: Rua Pascoal Souza, 66. Horário confirmado: terça a sábado, das 09h às 18h.

## Fotografias

Logo e imagens locais vieram do Instagram oficial, a pedido do responsável. Fontes:
https://www.instagram.com/auravisagespa/
https://www.instagram.com/auravisagespa/reel/DZoNGhORtBX/
https://www.instagram.com/auravisagespa/reel/DaXgkAQDZr1/

Enquadramento da fachada em CSS. As imagens originais em maior resolução poderão substituir as capas dos vídeos futuramente.

