# IDEAL — pesquisa e proposta de landing page

Pesquisa realizada em 14/10/2026. Status: direção aprovada pelo usuário e primeira versão de apresentação implementada. O usuário definiu conversão equilibrada entre os canais, ofertas direcionadas ao Instagram e endereços/horários ainda desconhecidos.

## Evidências da marca

Fonte principal: https://www.instagram.com/ideal_supermercado1/

O perfil público identifica Ideal Supermercados, lojas 1 e 2 em São Miguel do Iguaçu. A bio destaca ofertas, panificadora artesanal e delivery. Telefone exibido: (45) 3565-2318. O perfil exibia aproximadamente 24,2 mil seguidores na consulta; esse número não será fixado na página por variar.

O logotipo é preto sobre branco, com detalhe verde-lima. Os destaques possuem fundos claros e ilustrações simples. A grade pública combina vídeos de colaboradores apresentando alimentos, imagens da padaria, encartes com preços em vermelho, amarelo e rosa, e fotografias de ações com famílias e crianças dentro da loja. Essas cores de campanha não devem competir com o verde da identidade permanente.

Limite: o acesso público permitiu ler a bio, os nomes dos destaques e examinar as miniaturas. A abertura individual dos posts exigiu login. Não foram verificados stories, legendas completas ou todas as imagens dos carrosséis. Os códigos hex abaixo são aproximações propostas para a web, não cores extraídas de um manual oficial.

## Canais oficiais verificados

Fonte: https://linktr.ee/idealsupermercado1

- Delivery/encomendas: https://api.whatsapp.com/send/?phone=5545991368669
- Cardápio da padaria: https://hubt.com.br/ideal-supermercado/
- Clube do Desconto: https://idealsupermercado.crescevendas.com/checkin/689
- Instagram: https://www.instagram.com/ideal_supermercado1/

Não presumir que o telefone fixo da bio é WhatsApp. Endereços completos e horários atuais das duas unidades ainda precisam de confirmação.

## Referências e decisões

Refero foi consultado, mas o serviço retornou assinatura inativa. Foram usados os guias locais de tipografia e cor da skill e referências públicas do segmento.

- Whole Foods Market (https://www.wholefoodsmarket.com/): hierarquia entre ofertas, alimentos, qualidade e serviços. Adaptar a organização do conteúdo, sem importar promessas ou condições comerciais.
- FreshDirect (https://www.freshdirect.com/): agrupamento por departamentos e acesso direto a delivery e ofertas. Adaptar apenas a facilidade de descoberta; a proposta do IDEAL é landing page, sem checkout próprio.
- Instagram do IDEAL: referência dominante para identidade, tom popular, presença da equipe e categorias reais.

| Decisão | Origem | Aplicação |
| --- | --- | --- |
| Verde-lima como assinatura | Logotipo público | Botões principais e pequenos destaques, com texto escuro |
| Preto suave e branco | Logotipo público | Tipografia e superfícies claras |
| Fundo marfim discreto | Proposta complementar | Calor visual em seções de alimentos |
| Fotografia grande de alimentos e pessoas | Feed público | Hero e padaria; priorizar arquivos originais sem textos sobrepostos |
| Ações de delivery, cardápio e clube | Linktree oficial | Links diretos para serviços já existentes |
| Ofertas separadas da identidade permanente | Encartes públicos | Bloco promocional com validade e fonte, quando houver conteúdo aprovado |

## Direção recomendada — frescor e proximidade

Preservar: marca verde/preto/branco; títulos fortes sem serifa; fotografias apetitosas; equipe e comunidade; ações comerciais claras. Evitar: aparência de SaaS, gradientes decorativos, excesso de sombras, preços fictícios e depoimentos inventados.

Paleta inicial proposta:

- Assinatura: #8BC63F.
- Texto e botões escuros: #20251D.
- Superfície: #FFFFFF.
- Fundo complementar: #F7F8F2.
- Texto secundário: #53604D.
- Verde escuro complementar: #294B29, para contraste em links e faixas institucionais.

O verde-lima deve receber texto escuro. A paleta será ajustada após conferência de contraste e recebimento de arquivos oficiais.

Hero proposto: “Mais frescor. Mais economia. Mais IDEAL.” com imagem ampla de alimentos e a assinatura “O supermercado da sua família em São Miguel do Iguaçu”. A frase é uma proposta editorial, não um slogan oficial confirmado.

## Estrutura proposta

1. Cabeçalho: marca, departamentos, padaria, clube, lojas e botão de delivery.
2. Hero: mensagem principal, fotografia, CTA de pedido e acesso às ofertas.
3. Departamentos: hortifrúti, açougue e padaria artesanal, apoiados pela comunicação pública da marca.
4. Padaria: destaque editorial e acesso ao cardápio oficial.
5. Ofertas: acesso à fonte oficial; preços locais só quando houver atualização e validade definidas.
6. Clube do Desconto: apresentação objetiva e link oficial, sem inventar benefícios.
7. Lojas: duas unidades, mapas e contatos após confirmação dos dados atuais.
8. Comunidade/Instagram e rodapé com contatos oficiais.

## Implementação proposta

Pasta inspecionada e vazia: não há package.json, lockfile ou design system existente. Stack sugerida conforme orientações do usuário: Next.js App Router, TypeScript e Tailwind, componentes leves e animações CSS. Avaliar bibliotecas e ferramentas de componentes antes de instalação; não instalar dependências sem necessidade.

Etapas: confirmar objetivo e direção; organizar assets e dados comerciais; implementar desktop/mobile; ligar canais oficiais; validar teclado, contraste e movimento reduzido; executar checagens e build; inspecionar navegador em desktop e mobile.

## Briefing pendente

1. Prioridade de conversão: delivery, visitas às lojas ou adesão ao clube?
2. Preferência: direção clara verde-lima recomendada ou página predominantemente promocional?
3. Conteúdo de ofertas: link para Instagram inicialmente ou atualização de encartes no próprio site?
4. Quais são os endereços completos e horários atuais das duas unidades?

Fotos originais e logotipo em boa resolução melhoram a fidelidade; caso não estejam disponíveis, imagens ilustrativas devem ser identificadas como tal e nunca apresentadas como fotos das lojas.
