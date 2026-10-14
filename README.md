# IDEAL Supermercados — primeira apresentação

Landing page responsiva de conceito para apresentar ao cliente de São Miguel do Iguaçu. Direção clara, verde-lima, preto suave e fotografias de alimentos; aprovado pelo usuário em 14/10/2026.

## Abrir

Abra `index.html` diretamente no navegador. Todos os recursos estão na pasta do projeto e não há dependências a instalar.

Para desenvolvimento com servidor local:

```sh
npm run dev
```

Endereço: http://localhost:3000. O servidor escuta somente na máquina local.

## Verificação e pacote

```sh
npm run check
npm run build
```

O build recria apenas a pasta gerada `dist/`. Para apresentar em outro computador, extraia `IDEAL-apresentacao.zip` e abra o `index.html`, mantendo as pastas de imagens ao lado dele. O pacote pode ser servido por qualquer hospedagem estática.

## Vercel

A configuração de deploy está em `vercel.json`: framework **Other**, build `npm run build`, saída `dist` e sem instalação de dependências. O build valida os caminhos e a capitalização de todos os recursos locais. Use `npm run preview` para servir a versão gerada, ou extraia `IDEAL-vercel.zip` para obter o pacote de código pronto para importação. Instruções completas em [DEPLOY-VERCEL.md](DEPLOY-VERCEL.md).

## Implementado

- Hero com apresentação da marca e chamada para ofertas.
- Hortifrúti, açougue e panificadora artesanal.
- Ofertas com acesso ao Instagram oficial, sem preços fixos.
- Cardápio e encomendas da padaria nos canais oficiais.
- Clube do Desconto com link oficial.
- Moldura de iPhone adaptada do componente `IPhone17ProMax` da Cult UI, substituindo o cartão conceitual.
- Prévia local do conteúdo do clube na tela do celular, com recursos oficiais e links verificados para Google Play e App Store.
- Duas lojas apresentadas sem endereços ou horários inventados.
- Fotos reais da equipe e da padaria obtidas do perfil público.
- Links de delivery, telefone e atendimento.
- Menu mobile acessível, Escape para fechar, foco visível e respeito a movimento reduzido.
- Imagens WebP locais, carregamento adiado fora do hero, HTML semântico e metadados.
- `noindex, nofollow` por ser uma proposta; ajustar antes de publicar o site oficial.

## Stack e limitação do ambiente

Este protótipo usa HTML, CSS e JavaScript, com Node.js apenas para servidor e build. A consulta ao registro oficial npm falhou com `ECONNRESET`, inclusive na tentativa com acesso ampliado e cache local. Next.js e as ferramentas 21st.dev/skills não puderam ser instalados ou verificados por esse caminho. Não foram feitas alterações na configuração global do Codex.

Essa alternativa entrega uma página portátil agora. A futura conversão para Next.js App Router, TypeScript e Tailwind deve preservar a composição e separar cabeçalho, departamentos, padaria, clube e lojas em componentes. Não há integração de checkout ou captura de dados neste conceito: os botões encaminham para os canais existentes.

## Conteúdo pendente para o site oficial

- Endereços e horários confirmados das duas unidades.
- Logotipo original em SVG ou imagem de alta resolução; o usado agora é a foto pública do perfil, com resolução limitada.
- Fotos próprias de produtos e das lojas para substituir as imagens ilustrativas.
- Validação das frases propostas e das informações de atendimento pelo cliente.
- Domínio, hospedagem, imagem Open Graph absoluta e política de privacidade caso futuras integrações coletem dados.
- As páginas de destino externas foram identificadas a partir do Linktree oficial; a landing não verifica funcionamento comercial, cadastro ou disponibilidade dos serviços externos.

## Fontes

- Instagram: https://www.instagram.com/ideal_supermercado1/
- Canais: https://linktr.ee/idealsupermercado1
- Delivery: https://api.whatsapp.com/send/?phone=5545991368669
- Cardápio: https://hubt.com.br/ideal-supermercado/
- Clube: https://idealsupermercado.crescevendas.com/checkin/689

As imagens `instagram-familia.jpg` (equipe reunida) e `instagram-padaria.jpg` (colaboradora apresentando produto) são do perfil público. Crédito aparece na página. A reprodução está preparada para apresentação do conceito ao cliente; confirmar os arquivos e direitos finais na entrega oficial.

## Imagens geradas

Foram criadas com a ferramenta integrada ImageGen, não pela CLI. Arquivos utilizados:

- `public/images/hero-groceries.webp`: sacola kraft com verduras, bananas, cenouras, tomates, pão, maçãs e abacates sobre bancada clara, luz natural de manhã, composição editorial acolhedora, sem pessoas, texto ou marcas.
- `public/images/bakery.webp`: pães franceses, pão artesanal e croissants sobre linho e madeira, luz dourada, textura realista, fotografia editorial, sem pessoas, texto ou marcas.
- `public/images/churrasco.webp`: picanha grelhada e fatiada com sal grosso, alecrim e vinagrete sobre tábua rústica, luz quente, fotografia editorial, sem pessoas, texto ou marcas.

Os prompts especificaram que eram imagens ilustrativas e não fotografias de uma loja real. Os PNGs originais estão em `design-assets/`; as versões WebP foram comprimidas para uso na página. Elas estão identificadas como ilustrativas no conteúdo.

## Validação realizada

- Sintaxe do JavaScript e dos scripts Node verificada.
- Build estático concluído.
- Resposta HTTP 200 para a página e nove recursos essenciais.
- Inspeção visual desktop e mobile; larguras verificadas: 320, 390, 768, aproximadamente 905 e 1440 pixels.
- Sem overflow horizontal nos tamanhos verificados; título mantido em três linhas.
- Menu mobile abre, fecha e responde à tecla Escape.
- Nenhuma âncora interna ausente, imagem sem atributo alt ou link externo em nova aba sem noopener.
- Contraste dos principais pares de texto/fundo calculado: entre 6,13:1 e 15,63:1, acima do mínimo AA para texto comum.
- Não foi realizada auditoria automatizada completa de WCAG ou Lighthouse; não declarar uma certificação de acessibilidade ou nota de desempenho.

## Atualização do Clube do Desconto

O cartão verde conceitual foi removido a pedido do usuário. Foi executado `pnpm dlx shadcn@latest add @cult-ui/apple-iphone-17-pro`, mas a instalação falhou com `ERR_PNPM_META_FETCH_FAIL` / `ECONNRESET` ao acessar o registro npm. O componente React original usa React, Motion, Lucide React e Tailwind; este projeto continua sendo estático. Sua moldura foi adaptada para HTML/CSS a partir do código publicado, com atribuição e licença em `THIRD-PARTY-NOTICES.md`.

A página https://idealsupermercado.crescevendas.com/checkin/689 foi aberta e inspecionada. Sua incorporação em iframe foi testada e recusada pelo destino. Portanto, a tela exibe uma prévia local do conteúdo público: banner, logo e selos de download oficiais, textos resumidos das orientações e links originais para as lojas de aplicativos. Não é uma página live e não recebe atualização automática. A região de conteúdo tem rolagem própria e pode receber foco pelo teclado. Há acesso direto à página original abaixo do mockup e no CTA.

Recursos do clube obtidos da página oficial em 14/10/2026 estão em `public/images/clube/`. Não foram reproduzidos formulários de cadastro ou coleta de CPF. O conteúdo e os recursos podem ser atualizados quando o cliente fornecer seus materiais definitivos.
