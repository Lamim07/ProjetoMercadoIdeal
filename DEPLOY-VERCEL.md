# Publicar o protótipo na Vercel

O projeto é estático: a Vercel executa o build Node.js e publica apenas `dist/`. Não há dependências, variáveis de ambiente ou servidor de aplicação para configurar.

## Pacote pronto

Extraia `IDEAL-vercel.zip`. A pasta extraída contém o código, os recursos, o build e `vercel.json` na raiz. Use essa pasta como a raiz do projeto, não a pasta `public/`.

## Pelo GitHub / painel da Vercel

1. Envie os arquivos extraídos a um repositório Git.
2. Na Vercel, escolha **Add New → Project** e importe esse repositório.
3. Se solicitado, use estas configurações:

| Campo | Valor |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Raiz que contém `package.json` e `vercel.json` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | Vazio / desativado |
| Environment Variables | Nenhuma necessária |

4. Clique em **Deploy**.

O `vercel.json` já declara framework, build, instalação desativada e diretório de saída. Não é necessário instalar Next.js para publicar esta versão.

## Pela CLI, se já estiver instalada

Na pasta extraída:

```sh
vercel
```

Depois de conferir o deployment de preview, publique em produção:

```sh
vercel --prod
```

Login, escolha da conta e criação do projeto são feitos na sua conta Vercel. A preparação local não publicou o site.

## Conferir localmente

```sh
npm run build
npm run preview
```

Abra http://localhost:3000. O preview serve os arquivos gerados em `dist/`.

O build verifica a sintaxe do JavaScript e a existência de todos os recursos locais, incluindo diferenças de maiúsculas/minúsculas que causariam falhas no Linux da Vercel. O diretório `public/` é preservado dentro de `dist/`, porque o HTML referencia `public/images/...`.

O protótipo mantém `noindex, nofollow`, adequado para a apresentação ao cliente. A tela do clube continua sendo uma prévia local com links para os canais oficiais.

Documentação de referência: https://vercel.com/docs/project-configuration/vercel-json e https://vercel.com/docs/builds/configure-a-build
