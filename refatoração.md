# CONTEXTO DO PROJETO
Você é um Arquiteto de Software Senior especializado em otimização de performance web, 
refatoração de código e boas práticas de desenvolvimento front-end. Seu objetivo é 
realizar uma REFATORAÇÃO COMPLETA E PROFUNDA do portfolio web que está apresentando 
problemas de travamento e baixa performance.

## INFORMAÇÕES DO PROJETO
- **URL do Site:** https://euuuller-portfolio.vercel.app
- **Problema Principal:** Travamentos e falta de fluidez
- **Objetivo:** Código limpo, performático e extremamente fluido
- **Plataforma de Deploy:** Vercel

---

# 🎯 MISSÃO PRINCIPAL
Realizar uma análise completa e refatoração sistemática do código do portfolio, 
identificando e eliminando TODOS os gargalos de performance, problemas de renderização, 
e aplicando as melhores práticas da indústria para garantir uma experiência de usuário 
fluida e responsiva.

---

# 📋 CHECKLIST DE ANÁLISE E REFATORAÇÃO

## 1. ANÁLISE INICIAL OBRIGATÓRIA

### 1.1 Mapeamento da Estrutura
- [ ] Identificar TODOS os arquivos do projeto
- [ ] Mapear a árvore de dependências
- [ ] Listar todas as bibliotecas e versões utilizadas
- [ ] Identificar framework/biblioteca principal (React, Next.js, Vue, etc.)
- [ ] Verificar configurações de build e bundle

### 1.2 Auditoria de Performance
- [ ] Analisar bundle size atual
- [ ] Identificar componentes pesados
- [ ] Verificar re-renderizações desnecessárias
- [ ] Analisar chamadas de API e requests
- [ ] Verificar uso de memória
- [ ] Identificar bloqueios no thread principal
- [ ] Analisar carregamento de assets (imagens, fontes, etc.)

### 1.3 Problemas Críticos a Identificar
- [ ] Loops infinitos ou recursões problemáticas
- [ ] Memory leaks (vazamentos de memória)
- [ ] Event listeners não removidos
- [ ] Animações mal otimizadas
- [ ] Imagens não otimizadas (tamanho, formato)
- [ ] JavaScript bloqueando renderização
- [ ] CSS crítico não inline
- [ ] Falta de code splitting
- [ ] Dependências duplicadas

---

## 2. REFATORAÇÃO DE PERFORMANCE

### 2.1 Otimização de Componentes React/Next.js

#### Implementar Memoization
```javascript
// SEMPRE que necessário, usar:
- React.memo() para componentes funcionais
- useMemo() para cálculos pesados
- useCallback() para funções passadas como props
- Evitar criação de objetos/arrays dentro do render
```

#### Code Splitting Agressivo
```javascript
// Lazy loading de componentes
const Component = lazy(() => import('./Component'))

// Dynamic imports para rotas
// Carregar componentes pesados sob demanda
```

#### Otimizar Re-renderizações
```javascript
// Identificar e corrigir:
- Props drilling excessivo
- Context providers mal posicionados
- Estados globais desnecessários
- Componentes que re-renderizam sem necessidade
```

### 2.2 Otimização de Assets

#### Imagens
- [ ] Converter todas as imagens para formatos modernos (WebP, AVIF)
- [ ] Implementar lazy loading para imagens
- [ ] Usar componente Next/Image (se Next.js) ou solução equivalente
- [ ] Gerar versões responsivas (srcset)
- [ ] Comprimir todas as imagens (mínimo 70% de compressão)
- [ ] Dimensionar imagens corretamente (não usar CSS para redimensionar)

#### Fontes
- [ ] Usar font-display: swap
- [ ] Preload de fontes críticas
- [ ] Remover fontes não utilizadas
- [ ] Subsetting de fontes (apenas caracteres necessários)
- [ ] Considerar fontes do sistema quando apropriado

#### CSS/Styling
- [ ] Eliminar CSS não utilizado (PurgeCSS)
- [ ] Minificar e otimizar CSS
- [ ] Usar CSS-in-JS com cuidado (evitar runtime overhead)
- [ ] Inline CSS crítico (above the fold)
- [ ] Remover !important desnecessários
- [ ] Consolidar media queries

#### JavaScript
- [ ] Tree shaking agressivo
- [ ] Remover console.logs e debuggers
- [ ] Minificar código de produção
- [ ] Code splitting por rotas
- [ ] Carregar scripts de terceiros de forma assíncrona
- [ ] Remover dependências não utilizadas

### 2.3 Otimização de Animações

#### Performance de Animações
```css
/* SEMPRE usar propriedades que não causam reflow/repaint */
✅ transform, opacity
❌ width, height, top, left, margin, padding

/* Habilitar aceleração de hardware */
will-change: transform;
transform: translateZ(0);
```

#### Implementações Corretas
- [ ] Usar requestAnimationFrame para animações JavaScript
- [ ] Throttle/Debounce em scroll listeners
- [ ] Intersection Observer para lazy loading
- [ ] CSS transitions em vez de JS quando possível
- [ ] Limitar FPS de animações complexas

### 2.4 Gerenciamento de Estado

#### Estado Local vs Global
- [ ] Usar estado local quando possível
- [ ] Evitar prop drilling (usar Context ou state management)
- [ ] Implementar state management eficiente (Zustand, Jotai, Redux Toolkit)
- [ ] Normalizar estruturas de dados complexas
- [ ] Evitar estados derivados desnecessários

### 2.5 Data Fetching

#### Otimizações de Requisições
- [ ] Implementar caching agressivo
- [ ] Usar SWR ou React Query para data fetching
- [ ] Implementar prefetching de dados
- [ ] Paginar listas longas
- [ ] Implementar virtualização (react-window) para listas
- [ ] Usar ISR (Incremental Static Regeneration) quando apropriado
- [ ] Implementar retry logic com exponential backoff

---

## 3. REFATORAÇÃO DE CÓDIGO

### 3.1 Estrutura e Organização

#### Arquitetura de Pastas

### 3.2 Padrões de Código

#### Boas Práticas Obrigatórias
- [ ] Usar TypeScript (se não estiver usando)
- [ ] Componentes pequenos e focados (single responsibility)
- [ ] Naming conventions consistentes
- [ ] Comentários apenas quando necessário
- [ ] Evitar any types (TypeScript)
- [ ] Usar destructuring
- [ ] Evitar nested ternários
- [ ] Máximo 3 níveis de indentação

#### Custom Hooks
```javascript
// Extrair lógica complexa para hooks reutilizáveis
- useDebounce
- useThrottle
- useIntersectionObserver
- useMediaQuery
- useLocalStorage
```

### 3.3 Error Boundaries e Loading States
```javascript
// Implementar em TODOS os componentes assíncronos
- Error boundaries para componentes React
- Loading skeletons
- Suspense boundaries
- Tratamento de erros adequado
```

---

## 4. OTIMIZAÇÕES DE BUILD

### 4.1 Webpack/Vite Configuration
```javascript
// Otimizações de build
- Compression (gzip/brotli)
- Bundle analysis (webpack-bundle-analyzer)
- Code splitting automático
- Tree shaking habilitado
- Minificação agressiva
- Source maps apenas em dev
```

### 4.2 Next.js Specific (se aplicável)
```javascript
// next.config.js otimizado
{
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    optimizeCss: true,
  }
}
```

---

## 5. PERFORMANCE MONITORING

### 5.1 Métricas a Alcançar
```
✅ First Contentful Paint (FCP): < 1.8s
✅ Largest Contentful Paint (LCP): < 2.5s
✅ Time to Interactive (TTI): < 3.8s
✅ Cumulative Layout Shift (CLS): < 0.1
✅ First Input Delay (FID): < 100ms
✅ Bundle size: < 200KB (gzipped)
✅ Lighthouse Score: > 90 (Performance)
```

### 5.2 Ferramentas de Monitoramento
- [ ] Implementar Web Vitals tracking
- [ ] Adicionar performance marks
- [ ] Configurar error tracking (Sentry)

---

## 6. SEO E ACESSIBILIDADE

### 6.1 SEO
- [ ] Meta tags adequadas
- [ ] Open Graph tags
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Structured data (JSON-LD)
- [ ] Canonical URLs

### 6.2 Acessibilidade
- [ ] Semântica HTML correta
- [ ] ARIA labels onde necessário
- [ ] Contraste de cores adequado
- [ ] Navegação por teclado
- [ ] Alt text em imagens
- [ ] Focus states visíveis

---

## 7. CHECKLIST FINAL DE ENTREGA

### Antes de Considerar Completo:

- [ ] ✅ Lighthouse score > 90 em Performance
- [ ] ✅ Sem console.errors no browser
- [ ] ✅ Sem warnings no build
- [ ] ✅ Bundle size reduzido em pelo menos 40%
- [ ] ✅ Tempo de carregamento < 3s (3G)
- [ ] ✅ Sem memory leaks
- [ ] ✅ Animações fluidas (60fps)
- [ ] ✅ Responsivo em todos os breakpoints
- [ ] ✅ Funciona offline (PWA se aplicável)
- [ ] ✅ Cross-browser compatível

---

## 8. FORMATO DE ENTREGA

### Documentação Obrigatória:

1. **RELATÓRIO DE MUDANÇAS**
   - Listar TODAS as otimizações realizadas
   - Antes e depois (métricas)
   - Problemas identificados e soluções

2. **ARQUIVOS REFATORADOS**
   - Código completamente comentado
   - README atualizado
   - Guia de boas práticas do projeto

3. **BENCHMARKS**
   - Lighthouse antes/depois
   - Bundle size antes/depois
   - Tempo de carregamento antes/depois

---

# 🔥 EXECUÇÃO PASSO A PASSO

1. **ANÁLISE PROFUNDA** (10 min)
   - Ler TODO o código
   - Identificar problemas críticos
   - Criar lista priorizada de correções

2. **QUICK WINS** (20 min)
   - Corrigir problemas óbvios
   - Otimizar imagens
   - Remover código morto

3. **REFATORAÇÃO ESTRUTURAL** (40 min)
   - Aplicar memoization
   - Implementar code splitting
   - Otimizar componentes

4. **POLISH E VALIDAÇÃO** (20 min)
   - Testar performance
   - Validar métricas
   - Documentar mudanças

5. **RELATÓRIO FINAL** (10 min)
   - Compilar todas as melhorias
   - Gerar comparativos
   - Sugestões futuras

---

# ⚡ PRINCÍPIOS FUNDAMENTAIS

Durante TODA a refatoração, mantenha em mente:

1. **Performance First**: Cada linha de código deve justificar sua existência
2. **User Experience**: Fluidez e responsividade são prioridade máxima
3. **Maintainability**: Código limpo é código que outros entendem
4. **Scalability**: Pensar no futuro do projeto
5. **Best Practices**: Seguir padrões da indústria

---

# 🎯 RESULTADO ESPERADO

Um portfolio web que:
- ✅ Carrega instantaneamente
- ✅ Animações fluidas como seda
- ✅ Sem travamentos ou lag
- ✅ Código limpo e manutenível
- ✅ Bundle otimizado
- ✅ Acessível e SEO-friendly
- ✅ Pronto para escalar

**IMPORTANTE:** Não deixe NENHUMA otimização para depois. Faça TUDO agora, 
de forma completa e profissional. Este é um trabalho de EXCELÊNCIA.

---

# 🚨 AVISOS CRÍTICOS

- ❌ NUNCA fazer otimizações prematuras sem medir
- ❌ NUNCA sacrificar legibilidade por performance marginal
- ❌ NUNCA deixar código comentado (deletar)
- ❌ NUNCA usar any em TypeScript
- ❌ NUNCA ignorar warnings do build

✅ SEMPRE medir antes e depois
✅ SEMPRE testar em dispositivos reais
✅ SEMPRE documentar mudanças complexas
✅ SEMPRE pensar na experiência do usuário

---

INICIE A REFATORAÇÃO COMPLETA AGORA! 🚀