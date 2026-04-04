# 🚀 Prompt Mestre para o Claude: Geek Fitwear

*Copie o texto abaixo a partir da linha pontilhada e cole no **Claude**. Se você estiver no Claude 3.5 Sonnet, a funcionalidade Artifacts deve entregar resultados excepcionais de renderização.*

-----------------------------------------------------------

**Aja como um Engenheiro Front-End Sênior, Especialista em UX/UI e Especialista em CRO (Otimização da Taxa de Conversão) focado primordialmente no E-commerce brasileiro.**

## 🎯 Objetivo
Desenvolver do zero o front-end modular da **Geek Fitwear**, uma loja de roupa fitness de alto nível. A identidade visual deve ser inovadora, premium, transmitindo tecnologia e alta performance, mas extremamente voltada à **conversão em vendas**. O design precisa criar impacto em menos de 3 segundos ("Wow Effect").

## 🛠️ Tecnologias & Stack
- **Framework:** Next.js (App Router, React 18+).
- **Estilização:** Tailwind CSS (utilizando design tokens para facilitar a alteração do tema principal).
- **Animações:** Framer Motion (fundamental para fluidez, hover states luxuosos e micro-interações).
- **Ícones:** Lucide React.
- **Estado:** Context API ou Zustand (para controlar o Slide-over do carrinho).

## 🎨 Diretrizes de Estética e UI
1. **Dark Premium & Cores Dinâmicas:** 
   - Um tema fundamentalmente escuro (`#0f1115` base) com tipografia limpa.
   - Use cores de CTAs em tons vivos que combinem com a pegada de performance atlética/tecnologia (como Verde Neon, Azul Cyber, ou Laranja Alta Definição).
   - Efeitos visuais como Glassmorphism (efeito de vidro no header ou nos modais) com backdrops sutis.
2. **Tipografia:** Uma família veloz e arrojada para títulos (ex: *Outfit* ou *Inter*) e alta legibilidade em blocos de texto.

## 🛒 Princípios OBRIGATÓRIOS de CRO (Para o Brasil)
1. **Destaque do Preço PIX:** O consumidor foca em descontos. Mostre sempre o valor âncora e destaque o preço no Pix (Ex: `De R$ 199` por `R$ 179 No Pix`). Mostre o parcelamento do cartão logo abaixo de forma discreta (`Até 12x de R$ 16,60`).
2. **Urgência Suave:** Mostre a tag "Últimas Unidades" na tela de compra de forma delicada.
3. **Escada de Frete:** No Carrinho, adicione a barra "Adicione mais R$ 50 para garantir FRETE GRÁTIS".
4. **Elementos de Confiança:** Adicione selos perto dos CTAs de compra: "Compra Segura", o logo do Pix, Cartão de Crédito e Pagar.me/Mercado Pago.
5. **Comunicação Direta:** Ícone flutuante e chamativo do WhatsApp no canto inferior da tela o tempo todo.

## 💻 Entregáveis Arquiteturais 
*Nota: Não perca tempo com setup inicial ou configs de repositório. Eu estarei copiando o código para um repositório já ativo.*

Escreva os códigos para as seguintes partes:

**1. Header (Navbar)**
- Transparente no topo com blur suave, menu de navegação fluido.
- Carrinho Lateral (Slide-over drawer) que abre ao clicar na sacola.
- No Carrinho, deixe finalizado até um botão "Fechar Pedido" que chame um `console.log("Integração do Gateway aqui")`.

**2. Product Card (Componente de Alta Conversão)**
- Botão "Adicionar" visível imediatamente de forma elegante.
- Transição de aproximação da imagem da roupa na ação de hover.
- Tag flutuante ("Novo", "Mais Vendido").

**3. Home Page (Página Inicial)**
- **Hero Banner Impressionante:** Chamada de venda direta com botão central grande.
- **Slider/Grid de Produtos:** Coleção atualizada com produtos mockados baseados em peças de alta saída esportiva.
- **Seção "Por que Geek Fitwear?":** Destaques técnicos (Fibra Modeladora, Não Fica Transparente, Costura Flat, Secagem Rápida).

**4. Product View Page (Detalhes do Produto)**
- Layout moderno onde as fotos são o maior foco.
- Seleção visual e limpa do tamanho (P, M, G, GG).
- UI Mockada do formulário "Calcule o Frete Correios".
- Botão super pulsante para o Adicionar ao Carrinho.
- Uma seção sanfona (Accordion) para Medidas e Detalhes de lavagem.

## 🛠️ Instruções Finais
- Deixe o código todo perfeitamente dividido e importável. Comece pelo `ProductCard`, siga para os Layouts Gerais e depois monte a `Home` e a `ProductPage`.
- Para as fotos, use espaços elegantes coloridos ou placeholders do Unsplash simulando moda fitness.
- Não crie placeholders genéricos ou pobres - crie o código com a melhor estética premium que você conseguir. Mostre sua capacidade máxima de UX design.
