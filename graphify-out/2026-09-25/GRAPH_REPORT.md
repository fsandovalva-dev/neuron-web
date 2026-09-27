# Graph Report - neuron-web  (2026-09-25)

## Corpus Check
- Large corpus: 54 files · ~721,837 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 180 nodes · 307 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Root Layout & Navbar
- Gallery, Services & Card UI
- ESLint & Package Scripts
- Home Page Sections
- shadcn Components Config
- TypeScript Config
- Pricing & Tabs
- Runtime Dependencies
- Dev Dependencies
- FAQ & Accordion
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `cn()` - 40 edges
2. `compilerOptions` - 16 edges
3. `react` - 13 edges
4. `lucide-react` - 11 edges
5. `Button()` - 7 edges
6. `tailwind` - 6 edges
7. `aliases` - 6 edges
8. `scripts` - 5 edges
9. `next` - 5 edges
10. `Badge()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `AnimatedTabTrigger()` --calls--> `cn()`  [EXTRACTED]
  components/Pricing.tsx → lib/utils.ts
- `SheetOverlay()` --calls--> `cn()`  [EXTRACTED]
  components/ui/sheet.tsx → lib/utils.ts
- `SheetFooter()` --calls--> `cn()`  [EXTRACTED]
  components/ui/sheet.tsx → lib/utils.ts
- `SheetDescription()` --calls--> `cn()`  [EXTRACTED]
  components/ui/sheet.tsx → lib/utils.ts
- `AccordionItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/accordion.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (11 total, 1 thin omitted)

### Community 0 - "Root Layout & Navbar"
Cohesion: 0.11
Nodes (17): app_globals, geistMono, geistSans, metadata, Navbar(), Sheet(), SheetContent(), SheetDescription() (+9 more)

### Community 1 - "Gallery, Services & Card UI"
Cohesion: 0.17
Nodes (19): galleryImages, experiments, Card(), CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader() (+11 more)

### Community 2 - "ESLint & Package Scripts"
Cohesion: 0.10
Nodes (19): eslintConfig, name, private, scripts, build, dev, lint, start (+11 more)

### Community 3 - "Home Page Sections"
Cohesion: 0.17
Nodes (13): CTASection(), GallerySection(), HeroSection(), PricingSection(), ServicesSection(), Badge(), badgeVariants, Button() (+5 more)

### Community 4 - "shadcn Components Config"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 5 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 6 - "Pricing & Tabs"
Cohesion: 0.16
Nodes (14): AnimatedTabTrigger(), fadeInUpAnimation, macroPlans, microPlans, Separator(), Tabs(), TabsContent(), TabsList() (+6 more)

### Community 7 - "Runtime Dependencies"
Cohesion: 0.14
Nodes (14): dependencies, class-variance-authority, clsx, framer-motion, lucide-react, next, @radix-ui/react-accordion, @radix-ui/react-dialog (+6 more)

### Community 8 - "Dev Dependencies"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tw-animate-css, @types/node, @types/react (+2 more)

### Community 9 - "FAQ & Accordion"
Cohesion: 0.33
Nodes (7): faqs, FAQSection(), Accordion(), AccordionContent(), AccordionItem(), AccordionTrigger(), @radix-ui/react-accordion

## Knowledge Gaps
- **82 isolated node(s):** `geistSans`, `geistMono`, `metadata`, `$schema`, `style` (+77 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 89 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Runtime Dependencies` to `ESLint & Package Scripts`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `Home Page Sections` to `Root Layout & Navbar`, `Gallery, Services & Card UI`, `ESLint & Package Scripts`, `Pricing & Tabs`, `FAQ & Accordion`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Why does `cn()` connect `Gallery, Services & Card UI` to `Root Layout & Navbar`, `FAQ & Accordion`, `Home Page Sections`, `Pricing & Tabs`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **What connects `geistSans`, `geistMono`, `metadata` to the rest of the system?**
  _82 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Root Layout & Navbar` be split into smaller, more focused modules?**
  _Cohesion score 0.10666666666666667 - nodes in this community are weakly interconnected._
- **Should `ESLint & Package Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `shadcn Components Config` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._