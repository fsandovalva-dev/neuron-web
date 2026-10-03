# Graph Report - neuron-web  (2026-10-03)

## Corpus Check
- 175 files · ~1,017,268 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: .toml 8, (none) 4, .cmd 2)

## Summary
- 3292 nodes · 6613 edges · 166 communities (161 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 132 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7be80e2d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- sheet.tsx
- cn
- package.json
- FAQ.tsx
- components.json
- compilerOptions
- .agents/skills/impeccable/scripts/live-browser.js
- dependencies
- el
- modern-screenshot.umd.js
- postcss.config.mjs
- Three.js Textures
- Three.js Textures
- initGlobalBar
- initPageChat
- setLiveState
- Three.js Shaders
- renderDesignVisual
- startVariantObserver
- What You Must Do When Invoked
- Three.js Shaders
- Three.js Loaders
- Three.js Interaction
- Common Effects
- Three.js Lighting
- .claude/skills/impeccable/scripts/live-browser.js
- Three.js Animation
- Three.js Geometry
- .agents/skills/impeccable/reference/adapt.md
- Three.js Loaders
- connectSSE
- .agents/skills/impeccable/reference/new-work.md
- onAnnotDown
- handleManualEditActivity
- Three.js Fundamentals
- Three.js Materials
- onboard.md
- createLiveBrowserDomHelpers
- The Toolkit
- connectSSE
- .agents/skills/impeccable/SKILL.md
- Diseño: descarga de material educativo con formulario
- setLiveState
- createLiveBrowserSessionState
- actOnAgentTarget
- Product
- .claude/skills/impeccable/scripts/modern-screenshot.umd.js
- animate.md
- .agents/skills/impeccable/reference/live.md
- Handle `generate`
- el
- Generate Report
- $impeccable hooks
- New visual work
- optimize.md
- dialog.tsx
- graphify reference: extra exports and benchmark
- Scan mode (approach C: auto-extract, then confirm descriptive language)
- generate.md
- .claude/skills/impeccable/reference/new-work.md
- critique.md
- Simplify the Design
- Hardening Dimensions
- clarify.md
- Nielsen's 10 Heuristics
- Generate Combined Critique Report
- Three.js Interaction
- .agents/skills/impeccable/reference/doctor.md
- document.md
- impeccable
- polish.md
- quieter.md
- scheduleAcceptCleanup
- renderDesignVisual
- Diseño: ficha de experimento al pasar sobre un experimento
- graphify reference: query, path, explain
- Init flow
- Common Effects
- Three.js Lighting
- showToast
- Visualize: Direction Comps & Asset Production
- Common Cognitive Load Violations
- iOS platform
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- Operate mode depth (and Read notes)
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- Diagnostic Scan
- .claude/CLAUDE.md
- extraction-spec.md
- Shape
- cleanup
- Three.js Animation
- initPageChat
- Three.js Geometry
- Three.js Fundamentals
- Three.js Materials
- Android platform
- Responsive Design
- Persona-Based Design Testing
- Impeccable Asset Producer
- Extract Flow
- Generate Report
- Cognitive Load Assessment
- Impeccable Finish Reviewer
- Impeccable Manual Edit Applier
- live-browser-ignores.js
- Diagnostic Scan
- .claude/skills/impeccable/reference/live.md
- handleManualEditActivity
- Component review
- .claude/skills/impeccable/reference/onboard.md
- Heuristics Scoring Guide
- barPaletteForTheme
- Operate mode depth (and Read notes)
- The Toolkit
- captureElementToBlob
- actOnAgentTarget
- createLiveBrowserSessionState
- .claude/skills/impeccable/reference/animate.md
- Handle `generate`
- createLiveBrowserDomHelpers
- Generate Report
- onAnnotDown
- New visual work
- .claude/skills/impeccable/reference/optimize.md
- Scan mode (approach C: auto-extract, then confirm descriptive language)
- button.tsx
- .claude/skills/impeccable/reference/critique.md
- Simplify the Design
- Hardening Dimensions
- mountSvelteComponentVariant
- .claude/skills/impeccable/reference/clarify.md
- Nielsen's 10 Heuristics
- Generate Combined Critique Report
- .claude/skills/impeccable/reference/document.md
- .claude/skills/impeccable/reference/polish.md
- .claude/skills/impeccable/reference/quieter.md
- Responsive Design
- Init flow
- devDependencies
- Common Cognitive Load Violations
- iOS platform
- Shape
- Android platform
- Persona-Based Design Testing
- Impeccable Asset Producer
- Extract Flow
- Generate Report
- Cognitive Load Assessment
- Impeccable Finish Reviewer
- Impeccable Manual Edit Applier
- .claude/skills/impeccable/scripts/live-browser-ignores.js
- .claude/skills/impeccable/reference/colorize.md
- .claude/skills/impeccable/SKILL.md
- Visualize: Direction Comps & Asset Production
- .claude/skills/impeccable/scripts/impeccable
- .claude/skills/impeccable/reference/adapt.native.md
- Component review
- Impeccable Documenter
- enableInlineEdit
- .claude/skills/impeccable/reference/doctor.md
- Heuristics Scoring Guide
- $impeccable hooks

## God Nodes (most connected - your core abstractions)
1. `cn()` - 40 edges
2. `connectSSE()` - 34 edges
3. `connectSSE()` - 34 edges
4. `setLiveState()` - 33 edges
5. `resumeSession()` - 33 edges
6. `setLiveState()` - 33 edges
7. `resumeSession()` - 33 edges
8. `showToast()` - 31 edges
9. `showToast()` - 31 edges
10. `initGlobalBar()` - 30 edges

## Surprising Connections (you probably didn't know these)
- `Plan de implementación` --references--> `PlanCard()`  [INFERRED]
  docs/design/ficha-experimento-hover.md → components/Pricing.tsx
- `Done` --references--> `Reveal()`  [INFERRED]
  TASKS.md → components/Reveal.tsx
- `Plan de implementación` --references--> `FAQSection()`  [INFERRED]
  docs/design/descarga-material-educativo.md → components/FAQ.tsx
- `Plan de implementación` --references--> `GallerySection()`  [INFERRED]
  docs/design/descarga-material-educativo.md → components/Gallery.tsx
- `DialogHeader()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dialog.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (166 total, 5 thin omitted)

### Community 0 - "sheet.tsx"
Cohesion: 0.17
Nodes (17): app_globals, bricolage, figtree, metadata, RootLayout(), menuDots, Navbar(), Sheet() (+9 more)

### Community 1 - "cn"
Cohesion: 0.15
Nodes (25): AnimatedTabTrigger(), fadeInUpAnimation, macroPlans, microPlans, Plan, PlanCard(), planTones, PricingSection() (+17 more)

### Community 2 - "package.json"
Cohesion: 0.08
Nodes (24): eslintConfig, name, private, scripts, build, dev, lint, start (+16 more)

### Community 3 - "FAQ.tsx"
Cohesion: 0.14
Nodes (26): Home(), Bubbles, fill, ring, CorporateSection(), TODO: texto provisorio. La oferta para empresas aún no está definida (formatos,…, CTASection(), faqs (+18 more)

### Community 4 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 5 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 6 - ".agents/skills/impeccable/scripts/live-browser.js"
Cohesion: 0.03
Nodes (131): addManualContextText(), applyGlobalBarLabelState(), applyLiveBarPreference(), applyPlaceholderSizingStyles(), averageRgb01(), bindEditBadgeProxy(), bufferToBase64(), buildPlaceholderResizeHandles() (+123 more)

### Community 7 - "dependencies"
Cohesion: 0.14
Nodes (14): dependencies, class-variance-authority, clsx, framer-motion, lucide-react, next, @radix-ui/react-accordion, @radix-ui/react-dialog (+6 more)

### Community 8 - "el"
Cohesion: 0.07
Nodes (57): actionLabel(), applyConfigureBarChrome(), bindConfigureCountPillTooltip(), bindConfigureInlineControlHover(), bindConfigureModifierPillHover(), buildConfigureActionControl(), buildConfigureCountControl(), buildConfigureRow() (+49 more)

### Community 9 - "modern-screenshot.umd.js"
Cohesion: 0.09
Nodes (55): ae(), be(), bt(), Ce(), s(), Ct(), de(), dt() (+47 more)

### Community 11 - "Three.js Textures"
Cohesion: 0.04
Nodes (44): Accessing UVs, Background Options, Basic Loading, Canvas Texture, Color Space, Compressed Textures, Cube Textures, CubeCamera (+36 more)

### Community 12 - "Three.js Textures"
Cohesion: 0.04
Nodes (44): Accessing UVs, Background Options, Basic Loading, Canvas Texture, Color Space, Compressed Textures, Cube Textures, CubeCamera (+36 more)

### Community 13 - "initGlobalBar"
Cohesion: 0.09
Nodes (41): agentHasWorkInFlight(), agentStatusText(), barPaletteForTheme(), brandMarkSvg(), buildDesignHeader(), buildParamsPanel(), designPanelCss(), detectPageTheme() (+33 more)

### Community 14 - "initPageChat"
Cohesion: 0.08
Nodes (52): armPageChatForTyping(), attachSteerFocusDebug(), attachSteerFocusGuard(), buildSteerProcessingDots(), buildSteerQueueHint(), clearSteerAwaitTimer(), clearSteerFocusRecoverTimer(), collapsePageChat() (+44 more)

### Community 15 - "setLiveState"
Cohesion: 0.09
Nodes (62): applyEditing(), beginNewLiveConfiguration(), buildInsertPlaceholderSnapshotFromDom(), buildLocatorForLeaf(), buildPickedAnchorSnapshot(), cancelEditing(), cancelEditingToPicking(), cancelInsertConfigure() (+54 more)

### Community 16 - "Three.js Shaders"
Cohesion: 0.06
Nodes (33): Common Injection Points, Common Material Properties, Common Shader Patterns, Debugging Shaders, Dissolve Effect, Extending Built-in Materials, External Shader Files, Fresnel Effect (+25 more)

### Community 17 - "renderDesignVisual"
Cohesion: 0.08
Nodes (34): buildCollapsible(), buildColorModels(), buildListHtml(), buildRadiiModels(), buildTypographyModels(), cssSafe(), designEmptyMessage(), escapeHtml() (+26 more)

### Community 18 - "startVariantObserver"
Cohesion: 0.12
Nodes (35): applyParamDefaults(), applyParamValue(), applyPlaceholderDimensions(), closedClipPath(), commitAcceptedVariantToDom(), ensureInsertPlaceholder(), finalizeInsertSession(), findVariantsWrapper() (+27 more)

### Community 19 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 20 - "Three.js Shaders"
Cohesion: 0.06
Nodes (33): Common Injection Points, Common Material Properties, Common Shader Patterns, Debugging Shaders, Dissolve Effect, Extending Built-in Materials, External Shader Files, Fresnel Effect (+25 more)

### Community 21 - "Three.js Loaders"
Cohesion: 0.06
Nodes (32): ArrayBuffer, Async/Promise Loading, Blob URL, Built-in Cache, Caching, CubeTextureLoader, Custom Asset Manager, Custom Path/URL (+24 more)

### Community 22 - "Three.js Interaction"
Cohesion: 0.07
Nodes (29): Basic Raycasting, Box Selection, Camera Controls, Click to Select, DragControls, Efficient Raycasting, Event Handling Best Practices, FirstPersonControls (+21 more)

### Community 23 - "Common Effects"
Cohesion: 0.07
Nodes (28): Bloom (Glow), Chromatic Aberration, Color Correction, Combining Multiple Effects, Common Effects, Custom ShaderPass, Depth of Field (DOF), EffectComposer Setup (+20 more)

### Community 24 - "Three.js Lighting"
Cohesion: 0.07
Nodes (27): AmbientLight, Common Lighting Setups, Contact Shadows (Fake, Fast), Cube Texture Environment, DirectionalLight, DirectionalLight Shadows, Enable Shadows, Environment Lighting (IBL) (+19 more)

### Community 25 - ".claude/skills/impeccable/scripts/live-browser.js"
Cohesion: 0.03
Nodes (134): acceptedDomAlreadyClean(), addManualContextText(), applyEditing(), applyGlobalBarLabelState(), applyLiveBarPreference(), applyParamValue(), applyPlaceholderSizingStyles(), bindEditBadgeProxy() (+126 more)

### Community 26 - "Three.js Animation"
Cohesion: 0.07
Nodes (26): Additive Blending, Animating Morph Targets, Animation Blending, Animation System Overview, Animation Utilities, AnimationAction, AnimationClip, AnimationMixer (+18 more)

### Community 27 - "Three.js Geometry"
Cohesion: 0.07
Nodes (26): Advanced Shapes, Basic Shapes, BufferAttribute Types, BufferGeometry, Built-in Geometries, Center Geometry, Clone and Transform, Common Patterns (+18 more)

### Community 28 - ".agents/skills/impeccable/reference/adapt.md"
Cohesion: 0.08
Nodes (22): Assess Adaptation Challenge, Content Adaptation, Desktop Adaptation (Mobile → Desktop), Email Adaptation (Web → Email), Implement Adaptations, Layout Adaptation Techniques, Mobile Adaptation (Desktop → Mobile), Adaptation Strategies (+14 more)

### Community 29 - "Three.js Loaders"
Cohesion: 0.06
Nodes (32): ArrayBuffer, Async/Promise Loading, Blob URL, Built-in Cache, Caching, CubeTextureLoader, Custom Asset Manager, Custom Path/URL (+24 more)

### Community 30 - "connectSSE"
Cohesion: 0.05
Nodes (89): abandonForeignSession(), abandonSupersededGo(), abortSvelteComponentInjection(), applyOriginalAttrsToSvelteAnchor(), applySavedSessionMeta(), checkpointPayload(), clampVariantIndex(), cleanup() (+81 more)

### Community 31 - ".agents/skills/impeccable/reference/new-work.md"
Cohesion: 0.11
Nodes (16): Recommended Actions, Craft (deprecated alias), Apply, Live-mode signature params, Set the spatial thesis, Two isolated assessments, Verify, Visitor mode (+8 more)

### Community 32 - "onAnnotDown"
Cohesion: 0.20
Nodes (17): beginEditPin(), buildAnnotationsForCapture(), buildPinElement(), cancelEditingPin(), clampPlaceholderSize(), finalizeEditingPin(), initAnnotOverlay(), localCoords() (+9 more)

### Community 33 - "handleManualEditActivity"
Cohesion: 0.19
Nodes (24): clearStoredManualApplyState(), fetchPendingCount(), handleManualEditActivity(), hidePendingApplyDock(), manualApplyLoadingText(), manualApplyStateKey(), manualEditEventForCurrentPage(), numberOrNull() (+16 more)

### Community 34 - "Three.js Fundamentals"
Cohesion: 0.08
Nodes (24): Cameras, Clock for Animation, Color, Common Patterns, Coordinate System, Core Classes, Euler, Group (+16 more)

### Community 35 - "Three.js Materials"
Cohesion: 0.08
Nodes (24): Built-in Uniforms (auto-provided), Car Paint Example, Common Material Properties, Environment Maps, Glass Material Example, LineBasicMaterial & LineDashedMaterial, Material Cloning and Modification, Material Types Overview (+16 more)

### Community 36 - "onboard.md"
Cohesion: 0.09
Nodes (22): Assess Onboarding Needs, Context Over Ceremony, Contextual Help, Design Onboarding Experiences, Documentation & Help, Empty State Design, Feature Discovery & Adoption, Guided Tours & Walkthroughs (+14 more)

### Community 37 - "createLiveBrowserDomHelpers"
Cohesion: 0.17
Nodes (10): createLiveBrowserDomHelpers(), cssId(), liveUiRoot(), makeFrozenAnchor(), own(), pickable(), rectIsUsableAnchor(), uiAppend() (+2 more)

### Community 38 - "The Toolkit"
Cohesion: 0.10
Nodes (20): Animate complex properties, Assess What "Extraordinary" Means Here, For data-heavy interfaces, For functional UI, For performance-critical UI, For visual/marketing surfaces, Implement with Discipline, Interact with the device (+12 more)

### Community 39 - "connectSSE"
Cohesion: 0.08
Nodes (72): applyParamDefaults(), applyPlaceholderDimensions(), applySavedSessionMeta(), checkpointPayload(), closedClipPath(), completeParameterGenerationIfReady(), completeParameterPublication(), completeSourceInjection() (+64 more)

### Community 40 - ".agents/skills/impeccable/SKILL.md"
Cohesion: 0.10
Nodes (15): Before you finish, Scope is sovereign, The amplification, The skeleton test, Why it reads flat, Craft floor, Refuse, Verify (+7 more)

### Community 41 - "Diseño: descarga de material educativo con formulario"
Cohesion: 0.17
Nodes (12): Campos, Composición, Criterios de aceptación, Diseño: descarga de material educativo con formulario, Dónde guardar las respuestas (decisión pendiente), Estados, Flujo técnico, Lectura del encargo (+4 more)

### Community 42 - "setLiveState"
Cohesion: 0.09
Nodes (58): beginNewLiveConfiguration(), cancelEditing(), cancelEditingToPicking(), cancelInsertConfigure(), clearAnnotations(), clearInsertPicking(), closeTunePopover(), cursorForInsertAxis() (+50 more)

### Community 43 - "createLiveBrowserSessionState"
Cohesion: 0.21
Nodes (15): createLiveBrowserSessionState(), clearHandled(), clearScrollY(), clearSession(), isHandled(), loadSession(), markHandled(), nextCheckpointRevision() (+7 more)

### Community 44 - "actOnAgentTarget"
Cohesion: 0.26
Nodes (18): actOnAgentTarget(), agentTargetBusyReason(), agentTargetOverlayGone(), agentTargetTaken(), claimAgentTarget(), claimAndActOnAgentTarget(), declineAgentTargetBusy(), declineAgentTargetUnresolvable() (+10 more)

### Community 45 - "Product"
Cohesion: 0.06
Nodes (29): Al empezar una sesión, Commits y PRs, Flujo de trabajo, graphify, Neuron web, Por cada tarea, Reglas del producto (resumen de PRODUCT.md), Accessibility & Inclusion (+21 more)

### Community 46 - ".claude/skills/impeccable/scripts/modern-screenshot.umd.js"
Cohesion: 0.09
Nodes (55): ae(), be(), bt(), Ce(), s(), Ct(), de(), dt() (+47 more)

### Community 47 - "animate.md"
Cohesion: 0.12
Nodes (14): Accessibility and control, Choose material by meaning, Find the job, Implement to the runtime, Set the motion thesis, Timing and easing, Verify, Visitor mode (+6 more)

### Community 48 - ".agents/skills/impeccable/reference/live.md"
Cohesion: 0.08
Nodes (22): Apply at system scale, Audit before choosing, Choose a strategy, Contrast and perception, Live-mode signature params, Verify, Visitor mode, Cleanup (+14 more)

### Community 49 - "Handle `generate`"
Cohesion: 0.12
Nodes (16): 1. Read the screenshot (if present), 2. Wrap the element, 3. Load the action's reference, 4. Plan three variants: identity first, then mode, then axes, 5. Apply the freeform prompt (if present), 6. Deliver variants, 7. Parameters (composition-sized, 0-4 per variant), 8. Signal done (+8 more)

### Community 50 - "el"
Cohesion: 0.08
Nodes (53): actionLabel(), applyConfigureBarChrome(), bindConfigureCountPillTooltip(), bindConfigureInlineControlHover(), bindConfigureModifierPillHover(), buildConfigureActionControl(), buildConfigureCountControl(), buildConfigureRow() (+45 more)

### Community 51 - "Generate Report"
Cohesion: 0.13
Nodes (14): 1. Accessibility (A11y), 2. Performance, 3. Theming, 4. Responsive Design, 5. Implementation Integrity (CRITICAL), Audit Health Score, Detailed Findings by Severity, Diagnostic Scan (+6 more)

### Community 52 - "$impeccable hooks"
Cohesion: 0.33
Nodes (6): Constraints, Failure modes, Flow, $impeccable hooks, Routing, Triage findings

### Community 53 - "New visual work"
Cohesion: 0.14
Nodes (14): 1. Decide what is already true, 2. Ask what will change the work, 3. Choose the right amount of invention, 4. Commit the world, 5. Record the decision, 6. Build with full commitment, 7. Inspect and finish, Both paths (+6 more)

### Community 54 - "optimize.md"
Cohesion: 0.14
Nodes (13): Animation Performance, Assess Performance Issues, Core Web Vitals Optimization, Cumulative Layout Shift (CLS < 0.1), Interaction to Next Paint (INP < 200ms), Largest Contentful Paint (LCP < 2.5s), Loading Performance, Network Optimization (+5 more)

### Community 55 - "dialog.tsx"
Cohesion: 0.27
Nodes (12): galleryImages, GallerySection(), Dialog(), DialogClose(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader() (+4 more)

### Community 56 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 57 - "Scan mode (approach C: auto-extract, then confirm descriptive language)"
Cohesion: 0.15
Nodes (13): Component translation rules, Narrative mapping, Scan mode (approach C: auto-extract, then confirm descriptive language), Schema, Step 1: Find the design assets, Step 2: Auto-extract what can be auto-extracted, Step 2b: Stage the frontmatter, Step 3: Ask the user for qualitative language (+5 more)

### Community 58 - "generate.md"
Cohesion: 0.15
Nodes (11): Step 1: Parse the request, Step 2: Reuse the page, then start, Step 3: Generate, Step 4: Accept and close, append-arrays, append-string, Config drift, Consent prompt (use this phrasing) (+3 more)

### Community 59 - ".claude/skills/impeccable/reference/new-work.md"
Cohesion: 0.11
Nodes (16): Recommended Actions, Craft (deprecated alias), Apply, Live-mode signature params, Set the spatial thesis, Two isolated assessments, Verify, Visitor mode (+8 more)

### Community 60 - "critique.md"
Cohesion: 0.17
Nodes (11): Action Summary, Ask the User, Assessment A: Design Review, Assessment B: Detector + Browser Evidence, Assessment Orchestration, Deliver the Report, Hard Invariants, Persist the Snapshot (+3 more)

### Community 61 - "Simplify the Design"
Cohesion: 0.17
Nodes (11): Assess Current State, Code Simplification, Content Simplification, Document Removed Complexity, Information Architecture, Interaction Simplification, Layout Simplification, Plan Simplification (+3 more)

### Community 62 - "Hardening Dimensions"
Cohesion: 0.17
Nodes (11): Accessibility Resilience, Assess Hardening Needs, Edge Cases & Boundary Conditions, Error Handling, Hardening Dimensions, Input Validation & Sanitization, Internationalization (i18n), Performance Resilience (+3 more)

### Community 63 - "clarify.md"
Cohesion: 0.18
Nodes (10): Actions and navigation, Audit the language, Errors and permissions, Forms, Help and instructional text, Loading, empty, and success states, Rewrite by function, Set the message hierarchy (+2 more)

### Community 64 - "Nielsen's 10 Heuristics"
Cohesion: 0.18
Nodes (11): 10. Help and Documentation, 1. Visibility of System Status, 2. Match Between System and Real World, 3. User Control and Freedom, 4. Consistency and Standards, 5. Error Prevention, 6. Recognition Rather Than Recall, 7. Flexibility and Efficiency of Use (+3 more)

### Community 65 - "Generate Combined Critique Report"
Cohesion: 0.18
Nodes (11): Design Health Score, Design Specificity Verdict, Generate Combined Critique Report, Minor Observations, Overall Impression, Persona Red Flags, Priority Issues, Questions to Consider (+3 more)

### Community 66 - "Three.js Interaction"
Cohesion: 0.07
Nodes (29): Basic Raycasting, Box Selection, Camera Controls, Click to Select, DragControls, Efficient Raycasting, Event Handling Best Practices, FirstPersonControls (+21 more)

### Community 67 - ".agents/skills/impeccable/reference/doctor.md"
Cohesion: 0.14
Nodes (11): Impeccable Documenter, Input Contract, Output Contract, Workflow, Monorepo notes, Opting out of the boot check, Step 1: Run the pass, Step 2: Act by severity (+3 more)

### Community 68 - "document.md"
Cohesion: 0.18
Nodes (10): Pitfalls, Seed mode, Step 1: Route through new-work's workshop, Step 2: Write seed DESIGN.md, Step 3: Confirm, Style guidelines, The frontmatter: token schema, The markdown body: eight sections (canonical order) (+2 more)

### Community 69 - "impeccable"
Cohesion: 0.60
Nodes (5): impeccable script, check_download(), fetch_url(), probe_ok(), setup_help()

### Community 70 - "polish.md"
Cohesion: 0.18
Nodes (10): 1. Establish the system, 2. Gather the evidence, 3. Triage, 4. Polish the whole path, 5. Verify and finish, Color, imagery, and icons, Content and code, Flow and hierarchy (+2 more)

### Community 71 - "quieter.md"
Cohesion: 0.18
Nodes (10): Assess Current State, Color Refinement, Composition Refinement, Motion Reduction, Plan Refinement, Refine the Design, Simplification, Verify Quality (+2 more)

### Community 72 - "scheduleAcceptCleanup"
Cohesion: 0.31
Nodes (11): acceptedDomAlreadyClean(), clearHandledWrapperReloadStamp(), deferredRecoverySuperseded(), ensureAcceptedDomClean(), findAcceptedRuntimeWrappers(), handledWrapperReloadKey(), reloadAfterMissingAcceptedDom(), restoreAcceptedDomFromSnapshot() (+3 more)

### Community 73 - "renderDesignVisual"
Cohesion: 0.08
Nodes (39): buildCollapsible(), buildColorModels(), buildDesignHeader(), buildListHtml(), buildRadiiModels(), buildTypographyModels(), cssSafe(), designEmptyMessage() (+31 more)

### Community 74 - "Diseño: ficha de experimento al pasar sobre un experimento"
Cohesion: 0.10
Nodes (17): Anatomía, Comportamiento, Contenido provisorio, Criterios de aceptación, Datos, Diseño: ficha de experimento al pasar sobre un experimento, Dónde vive, El chip (+9 more)

### Community 75 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 76 - "Init flow"
Cohesion: 0.20
Nodes (10): Completion gate, Init flow, Step 1: Load current state, Step 2: Explore the project, Step 3: Interview for product truth, Step 4: Write PRODUCT.md, Step 5: Record workflow defaults, Step 6: Wrap up or resume (+2 more)

### Community 77 - "Common Effects"
Cohesion: 0.07
Nodes (28): Bloom (Glow), Chromatic Aberration, Color Correction, Combining Multiple Effects, Common Effects, Custom ShaderPass, Depth of Field (DOF), EffectComposer Setup (+20 more)

### Community 78 - "Three.js Lighting"
Cohesion: 0.07
Nodes (27): AmbientLight, Common Lighting Setups, Contact Shadows (Fake, Fast), Cube Texture Environment, DirectionalLight, DirectionalLight Shadows, Enable Shadows, Environment Lighting (IBL) (+19 more)

### Community 79 - "showToast"
Cohesion: 0.09
Nodes (35): abandonForeignSession(), abandonSupersededGo(), clearSteerAwaitTimer(), configureVoiceContext(), copyToClipboard(), discardOrphanedSession(), dismissToast(), finishVoiceSession() (+27 more)

### Community 80 - "Visualize: Direction Comps & Asset Production"
Cohesion: 0.33
Nodes (5): After approval: the comp becomes a spec, Generate three compositional options, One approval point, Plates and provenance, Visualize: Direction Comps & Asset Production

### Community 81 - "Common Cognitive Load Violations"
Cohesion: 0.22
Nodes (9): 1. The Wall of Options, 2. The Memory Bridge, 3. The Hidden Navigation, 4. The Jargon Barrier, 5. The Visual Noise Floor, 6. The Inconsistent Pattern, 7. The Multi-Task Demand, 8. The Context Switch (+1 more)

### Community 82 - "iOS platform"
Cohesion: 0.22
Nodes (9): Color & materials, Components & controls, iOS platform, Layout & structure, Motion, The iOS slop test, Touch targets, Typography (+1 more)

### Community 83 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 84 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 85 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 86 - "Operate mode depth (and Read notes)"
Cohesion: 0.22
Nodes (9): Color, Components, Layout, Motion, Operate mode depth (and Read notes), Product constraints, Product permissions, The product slop test (+1 more)

### Community 89 - "Diagnostic Scan"
Cohesion: 0.33
Nodes (6): 1. Accessibility (VoiceOver / TalkBack), 2. Performance, 3. Appearance & Theming, 4. Platform Conformance (CRITICAL), 5. Adaptivity, Diagnostic Scan

### Community 92 - "Shape"
Cohesion: 0.22
Nodes (8): Cadence, Confirm and stop, Phase 1: Discovery interview, Phase 2: Resolve the design direction, Phase 3: Write the brief, Round 1: purpose, people, and outcome, Round 2: material, behavior, and boundaries, Shape

### Community 93 - "cleanup"
Cohesion: 0.11
Nodes (34): abortSvelteComponentInjection(), buildInsertPlaceholderSnapshotFromDom(), buildPickedAnchorSnapshot(), captureAndEmit(), cleanup(), cleanupAcceptedSession(), clearHandled(), clearMountErrorCard() (+26 more)

### Community 94 - "Three.js Animation"
Cohesion: 0.07
Nodes (26): Additive Blending, Animating Morph Targets, Animation Blending, Animation System Overview, Animation Utilities, AnimationAction, AnimationClip, AnimationMixer (+18 more)

### Community 95 - "initPageChat"
Cohesion: 0.14
Nodes (29): armPageChatForTyping(), attachSteerFocusDebug(), attachSteerFocusGuard(), clearSteerFocusRecoverTimer(), collapsePageChat(), expandPageChat(), focusConfigureInput(), focusPageChatInput() (+21 more)

### Community 96 - "Three.js Geometry"
Cohesion: 0.07
Nodes (26): Advanced Shapes, Basic Shapes, BufferAttribute Types, BufferGeometry, Built-in Geometries, Center Geometry, Clone and Transform, Common Patterns (+18 more)

### Community 97 - "Three.js Fundamentals"
Cohesion: 0.08
Nodes (24): Cameras, Clock for Animation, Color, Common Patterns, Coordinate System, Core Classes, Euler, Group (+16 more)

### Community 98 - "Three.js Materials"
Cohesion: 0.08
Nodes (24): Built-in Uniforms (auto-provided), Car Paint Example, Common Material Properties, Environment Maps, Glass Material Example, LineBasicMaterial & LineDashedMaterial, Material Cloning and Modification, Material Types Overview (+16 more)

### Community 99 - "Android platform"
Cohesion: 0.25
Nodes (8): Android platform, Color & theming, Components & motion, Layout & structure, The Android slop test, Touch targets, Typography, Verifying the build

### Community 100 - "Responsive Design"
Cohesion: 0.08
Nodes (25): Assess Adaptation Challenge, Breakpoints: Content-Driven, Content Adaptation, Desktop Adaptation (Mobile → Desktop), Detect Input Method, Not Just Screen Size, Email Adaptation (Web → Email), Implement Adaptations, Layout Adaptation Patterns (+17 more)

### Community 101 - "Persona-Based Design Testing"
Cohesion: 0.25
Nodes (8): 1. Impatient Power User: "Alex", 2. Confused First-Timer: "Jordan", 3. Accessibility-Dependent User: "Sam", 4. Deliberate Stress Tester: "Riley", 5. Distracted Mobile User: "Casey", Persona-Based Design Testing, Project-Specific Personas, Selecting Personas

### Community 102 - "Impeccable Asset Producer"
Cohesion: 0.25
Nodes (7): Core Rule, Decision Comps, Impeccable Asset Producer, Input Contract, Output Contract, Review handoff, The job

### Community 103 - "Extract Flow"
Cohesion: 0.25
Nodes (7): Extract Flow, Step 1: Discover the Design System, Step 2: Identify Patterns, Step 3: Plan Extraction, Step 4: Extract & Enrich, Step 5: Migrate, Step 6: Document

### Community 104 - "Generate Report"
Cohesion: 0.29
Nodes (7): Audit Health Score, Detailed Findings by Severity, Executive Summary, Generate Report, Patterns & Systemic Issues, Platform Conformance Verdict, Positive Findings

### Community 105 - "Cognitive Load Assessment"
Cohesion: 0.29
Nodes (7): Cognitive Load Assessment, Cognitive Load Checklist, Extraneous Load: Bad Design, Germane Load: Learning Effort, Intrinsic Load: The Task Itself, The Working Memory Rule, Three Types of Cognitive Load

### Community 106 - "Impeccable Finish Reviewer"
Cohesion: 0.29
Nodes (6): Checks, in order, Disposition, Impeccable Finish Reviewer, Input Contract, Output Contract, Verdict Pass

### Community 107 - "Impeccable Manual Edit Applier"
Cohesion: 0.29
Nodes (6): Checks, Entry Atomicity, Impeccable Manual Edit Applier, Input Contract, Output Contract, Workflow

### Community 108 - "live-browser-ignores.js"
Cohesion: 0.52
Nodes (6): globToRegex(), matchesScope(), normalizeIgnoreRule(), normalizeIgnoreValue(), pageCandidates(), resolveDetectIgnores()

### Community 109 - "Diagnostic Scan"
Cohesion: 0.33
Nodes (6): 1. Accessibility (VoiceOver / TalkBack), 2. Performance, 3. Appearance & Theming, 4. Platform Conformance (CRITICAL), 5. Adaptivity, Diagnostic Scan

### Community 110 - ".claude/skills/impeccable/reference/live.md"
Cohesion: 0.07
Nodes (26): Step 1: Parse the request, Step 2: Reuse the page, then start, Step 3: Generate, Step 4: Accept and close, Cleanup, Exit, First-time setup, Handle `accept` (+18 more)

### Community 111 - "handleManualEditActivity"
Cohesion: 0.19
Nodes (24): clearStoredManualApplyState(), fetchPendingCount(), handleManualEditActivity(), hidePendingApplyDock(), manualApplyLoadingText(), manualApplyStateKey(), manualEditEventForCurrentPage(), numberOrNull() (+16 more)

### Community 112 - "Component review"
Cohesion: 0.40
Nodes (4): Assemble and review, Component review, Prepare the component kit, Present and wait

### Community 113 - ".claude/skills/impeccable/reference/onboard.md"
Cohesion: 0.09
Nodes (22): Assess Onboarding Needs, Context Over Ceremony, Contextual Help, Design Onboarding Experiences, Documentation & Help, Empty State Design, Feature Discovery & Adoption, Guided Tours & Walkthroughs (+14 more)

### Community 114 - "Heuristics Scoring Guide"
Cohesion: 0.50
Nodes (4): Heuristics Scoring Guide, Issue Severity (P0–P3), Reference Material, Score Summary

### Community 115 - "barPaletteForTheme"
Cohesion: 0.14
Nodes (22): agentHasWorkInFlight(), agentStatusText(), barPaletteForTheme(), brandMarkSvg(), buildParamsPanel(), buildSteerProcessingDots(), buildSteerQueueHint(), designPanelCss() (+14 more)

### Community 116 - "Operate mode depth (and Read notes)"
Cohesion: 0.22
Nodes (9): Color, Components, Layout, Motion, Operate mode depth (and Read notes), Product constraints, Product permissions, The product slop test (+1 more)

### Community 117 - "The Toolkit"
Cohesion: 0.10
Nodes (20): Animate complex properties, Assess What "Extraordinary" Means Here, For data-heavy interfaces, For functional UI, For performance-critical UI, For visual/marketing surfaces, Implement with Discipline, Interact with the device (+12 more)

### Community 118 - "captureElementToBlob"
Cohesion: 0.12
Nodes (20): averageRgb01(), captureChromeNodes(), captureElementFromRenderedAncestor(), captureElementToBlob(), compileShader(), cssColorToRgb01(), dominantRgb01(), findBackdropAncestor() (+12 more)

### Community 119 - "actOnAgentTarget"
Cohesion: 0.24
Nodes (19): actOnAgentTarget(), agentTargetBusyReason(), agentTargetOverlayGone(), agentTargetTaken(), claimAgentTarget(), claimAndActOnAgentTarget(), declineAgentTargetBusy(), declineAgentTargetUnresolvable() (+11 more)

### Community 120 - "createLiveBrowserSessionState"
Cohesion: 0.21
Nodes (15): createLiveBrowserSessionState(), clearHandled(), clearScrollY(), clearSession(), isHandled(), loadSession(), markHandled(), nextCheckpointRevision() (+7 more)

### Community 121 - ".claude/skills/impeccable/reference/animate.md"
Cohesion: 0.12
Nodes (14): Accessibility and control, Choose material by meaning, Find the job, Implement to the runtime, Set the motion thesis, Timing and easing, Verify, Visitor mode (+6 more)

### Community 122 - "Handle `generate`"
Cohesion: 0.12
Nodes (16): 1. Read the screenshot (if present), 2. Wrap the element, 3. Load the action's reference, 4. Plan three variants: identity first, then mode, then axes, 5. Apply the freeform prompt (if present), 6. Deliver variants, 7. Parameters (composition-sized, 0-4 per variant), 8. Signal done (+8 more)

### Community 123 - "createLiveBrowserDomHelpers"
Cohesion: 0.17
Nodes (10): createLiveBrowserDomHelpers(), cssId(), liveUiRoot(), makeFrozenAnchor(), own(), pickable(), rectIsUsableAnchor(), uiAppend() (+2 more)

### Community 124 - "Generate Report"
Cohesion: 0.13
Nodes (14): 1. Accessibility (A11y), 2. Performance, 3. Theming, 4. Responsive Design, 5. Implementation Integrity (CRITICAL), Audit Health Score, Detailed Findings by Severity, Diagnostic Scan (+6 more)

### Community 125 - "onAnnotDown"
Cohesion: 0.24
Nodes (15): beginEditPin(), buildAnnotationsForCapture(), buildPinElement(), cancelEditingPin(), finalizeEditingPin(), initAnnotOverlay(), localCoords(), onAnnotDown() (+7 more)

### Community 126 - "New visual work"
Cohesion: 0.14
Nodes (14): 1. Decide what is already true, 2. Ask what will change the work, 3. Choose the right amount of invention, 4. Commit the world, 5. Record the decision, 6. Build with full commitment, 7. Inspect and finish, Both paths (+6 more)

### Community 127 - ".claude/skills/impeccable/reference/optimize.md"
Cohesion: 0.14
Nodes (13): Animation Performance, Assess Performance Issues, Core Web Vitals Optimization, Cumulative Layout Shift (CLS < 0.1), Interaction to Next Paint (INP < 200ms), Largest Contentful Paint (LCP < 2.5s), Loading Performance, Network Optimization (+5 more)

### Community 128 - "Scan mode (approach C: auto-extract, then confirm descriptive language)"
Cohesion: 0.15
Nodes (13): Component translation rules, Narrative mapping, Scan mode (approach C: auto-extract, then confirm descriptive language), Schema, Step 1: Find the design assets, Step 2: Auto-extract what can be auto-extracted, Step 2b: Stage the frontmatter, Step 3: Ask the user for qualitative language (+5 more)

### Community 129 - "button.tsx"
Cohesion: 0.21
Nodes (9): offsets, RevealVariant, shown, Badge(), badgeVariants, class-variance-authority, framer-motion, @radix-ui/react-slot (+1 more)

### Community 130 - ".claude/skills/impeccable/reference/critique.md"
Cohesion: 0.17
Nodes (11): Action Summary, Ask the User, Assessment A: Design Review, Assessment B: Detector + Browser Evidence, Assessment Orchestration, Deliver the Report, Hard Invariants, Persist the Snapshot (+3 more)

### Community 131 - "Simplify the Design"
Cohesion: 0.17
Nodes (11): Assess Current State, Code Simplification, Content Simplification, Document Removed Complexity, Information Architecture, Interaction Simplification, Layout Simplification, Plan Simplification (+3 more)

### Community 132 - "Hardening Dimensions"
Cohesion: 0.17
Nodes (11): Accessibility Resilience, Assess Hardening Needs, Edge Cases & Boundary Conditions, Error Handling, Hardening Dimensions, Input Validation & Sanitization, Internationalization (i18n), Performance Resilience (+3 more)

### Community 133 - "mountSvelteComponentVariant"
Cohesion: 0.27
Nodes (12): applyOriginalAttrsToSvelteAnchor(), commitAcceptedSvelteComponentToDom(), componentModuleCandidates(), describeMountFailure(), detectDevServerBase(), getMountedSvelteComponentAnchor(), importFirstReachable(), isSvelteInsertManifest() (+4 more)

### Community 134 - ".claude/skills/impeccable/reference/clarify.md"
Cohesion: 0.18
Nodes (10): Actions and navigation, Audit the language, Errors and permissions, Forms, Help and instructional text, Loading, empty, and success states, Rewrite by function, Set the message hierarchy (+2 more)

### Community 135 - "Nielsen's 10 Heuristics"
Cohesion: 0.18
Nodes (11): 10. Help and Documentation, 1. Visibility of System Status, 2. Match Between System and Real World, 3. User Control and Freedom, 4. Consistency and Standards, 5. Error Prevention, 6. Recognition Rather Than Recall, 7. Flexibility and Efficiency of Use (+3 more)

### Community 136 - "Generate Combined Critique Report"
Cohesion: 0.18
Nodes (11): Design Health Score, Design Specificity Verdict, Generate Combined Critique Report, Minor Observations, Overall Impression, Persona Red Flags, Priority Issues, Questions to Consider (+3 more)

### Community 137 - ".claude/skills/impeccable/reference/document.md"
Cohesion: 0.18
Nodes (10): Pitfalls, Seed mode, Step 1: Route through new-work's workshop, Step 2: Write seed DESIGN.md, Step 3: Confirm, Style guidelines, The frontmatter: token schema, The markdown body: eight sections (canonical order) (+2 more)

### Community 138 - ".claude/skills/impeccable/reference/polish.md"
Cohesion: 0.18
Nodes (10): 1. Establish the system, 2. Gather the evidence, 3. Triage, 4. Polish the whole path, 5. Verify and finish, Color, imagery, and icons, Content and code, Flow and hierarchy (+2 more)

### Community 139 - ".claude/skills/impeccable/reference/quieter.md"
Cohesion: 0.18
Nodes (10): Assess Current State, Color Refinement, Composition Refinement, Motion Reduction, Plan Refinement, Refine the Design, Simplification, Verify Quality (+2 more)

### Community 140 - "Responsive Design"
Cohesion: 0.20
Nodes (10): Breakpoints: Content-Driven, Detect Input Method, Not Just Screen Size, Layout Adaptation Patterns, Mobile-First: Write It Right, Picture Element for Art Direction, Responsive Design, Responsive Images: Get It Right, Safe Areas: Handle the Notch (+2 more)

### Community 141 - "Init flow"
Cohesion: 0.20
Nodes (10): Completion gate, Init flow, Step 1: Load current state, Step 2: Explore the project, Step 3: Interview for product truth, Step 4: Write PRODUCT.md, Step 5: Record workflow defaults, Step 6: Wrap up or resume (+2 more)

### Community 142 - "devDependencies"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tw-animate-css, @types/node, @types/react (+2 more)

### Community 143 - "Common Cognitive Load Violations"
Cohesion: 0.22
Nodes (9): 1. The Wall of Options, 2. The Memory Bridge, 3. The Hidden Navigation, 4. The Jargon Barrier, 5. The Visual Noise Floor, 6. The Inconsistent Pattern, 7. The Multi-Task Demand, 8. The Context Switch (+1 more)

### Community 144 - "iOS platform"
Cohesion: 0.22
Nodes (9): Color & materials, Components & controls, iOS platform, Layout & structure, Motion, The iOS slop test, Touch targets, Typography (+1 more)

### Community 145 - "Shape"
Cohesion: 0.22
Nodes (8): Cadence, Confirm and stop, Phase 1: Discovery interview, Phase 2: Resolve the design direction, Phase 3: Write the brief, Round 1: purpose, people, and outcome, Round 2: material, behavior, and boundaries, Shape

### Community 146 - "Android platform"
Cohesion: 0.25
Nodes (8): Android platform, Color & theming, Components & motion, Layout & structure, The Android slop test, Touch targets, Typography, Verifying the build

### Community 147 - "Persona-Based Design Testing"
Cohesion: 0.25
Nodes (8): 1. Impatient Power User: "Alex", 2. Confused First-Timer: "Jordan", 3. Accessibility-Dependent User: "Sam", 4. Deliberate Stress Tester: "Riley", 5. Distracted Mobile User: "Casey", Persona-Based Design Testing, Project-Specific Personas, Selecting Personas

### Community 148 - "Impeccable Asset Producer"
Cohesion: 0.25
Nodes (7): Core Rule, Decision Comps, Impeccable Asset Producer, Input Contract, Output Contract, Review handoff, The job

### Community 149 - "Extract Flow"
Cohesion: 0.25
Nodes (7): Extract Flow, Step 1: Discover the Design System, Step 2: Identify Patterns, Step 3: Plan Extraction, Step 4: Extract & Enrich, Step 5: Migrate, Step 6: Document

### Community 150 - "Generate Report"
Cohesion: 0.29
Nodes (7): Audit Health Score, Detailed Findings by Severity, Executive Summary, Generate Report, Patterns & Systemic Issues, Platform Conformance Verdict, Positive Findings

### Community 151 - "Cognitive Load Assessment"
Cohesion: 0.29
Nodes (7): Cognitive Load Assessment, Cognitive Load Checklist, Extraneous Load: Bad Design, Germane Load: Learning Effort, Intrinsic Load: The Task Itself, The Working Memory Rule, Three Types of Cognitive Load

### Community 152 - "Impeccable Finish Reviewer"
Cohesion: 0.29
Nodes (6): Checks, in order, Disposition, Impeccable Finish Reviewer, Input Contract, Output Contract, Verdict Pass

### Community 153 - "Impeccable Manual Edit Applier"
Cohesion: 0.29
Nodes (6): Checks, Entry Atomicity, Impeccable Manual Edit Applier, Input Contract, Output Contract, Workflow

### Community 154 - ".claude/skills/impeccable/scripts/live-browser-ignores.js"
Cohesion: 0.52
Nodes (6): globToRegex(), matchesScope(), normalizeIgnoreRule(), normalizeIgnoreValue(), pageCandidates(), resolveDetectIgnores()

### Community 155 - ".claude/skills/impeccable/reference/colorize.md"
Cohesion: 0.25
Nodes (7): Apply at system scale, Audit before choosing, Choose a strategy, Contrast and perception, Live-mode signature params, Verify, Visitor mode

### Community 156 - ".claude/skills/impeccable/SKILL.md"
Cohesion: 0.10
Nodes (15): Before you finish, Scope is sovereign, The amplification, The skeleton test, Why it reads flat, Craft floor, Refuse, Verify (+7 more)

### Community 157 - "Visualize: Direction Comps & Asset Production"
Cohesion: 0.33
Nodes (5): After approval: the comp becomes a spec, Generate three compositional options, One approval point, Plates and provenance, Visualize: Direction Comps & Asset Production

### Community 158 - ".claude/skills/impeccable/scripts/impeccable"
Cohesion: 0.60
Nodes (5): impeccable script, check_download(), fetch_url(), probe_ok(), setup_help()

### Community 159 - ".claude/skills/impeccable/reference/adapt.native.md"
Cohesion: 0.25
Nodes (7): Adaptation Strategies, Assess Adaptation Challenge, Implement & Verify, Orientation & foldables, Phone → Tablet (iPad / large screens), Platform → platform (iOS ↔ Android), Web → native (porting a website or web app)

### Community 160 - "Component review"
Cohesion: 0.40
Nodes (4): Assemble and review, Component review, Prepare the component kit, Present and wait

### Community 161 - "Impeccable Documenter"
Cohesion: 0.40
Nodes (4): Impeccable Documenter, Input Contract, Output Contract, Workflow

### Community 162 - "enableInlineEdit"
Cohesion: 0.40
Nodes (5): collectEditableTextRows(), visit(), enableInlineEdit(), onInlineInput(), wrapMixedContentTextNodes()

### Community 163 - ".claude/skills/impeccable/reference/doctor.md"
Cohesion: 0.25
Nodes (7): Monorepo notes, Opting out of the boot check, Step 1: Run the pass, Step 2: Act by severity, Step 3: Deprecated fields are binding, Step 4: Do not overclaim on truth drift, What this owns, and what it does not

### Community 164 - "Heuristics Scoring Guide"
Cohesion: 0.50
Nodes (4): Heuristics Scoring Guide, Issue Severity (P0–P3), Reference Material, Score Summary

### Community 165 - "$impeccable hooks"
Cohesion: 0.33
Nodes (6): Constraints, Failure modes, Flow, $impeccable hooks, Routing, Triage findings

## Knowledge Gaps
- **1428 isolated node(s):** `figtree`, `bricolage`, `metadata`, `$schema`, `style` (+1423 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1502 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Reference Material` connect `Heuristics Scoring Guide` to `.claude/skills/impeccable/reference/critique.md`, `Persona-Based Design Testing`, `Cognitive Load Assessment`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `Reference Material` connect `Heuristics Scoring Guide` to `Cognitive Load Assessment`, `critique.md`, `Persona-Based Design Testing`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `Heuristics Scoring Guide` connect `Heuristics Scoring Guide` to `Nielsen's 10 Heuristics`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `figtree`, `bricolage`, `metadata` to the rest of the system?**
  _1428 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `FAQ.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13655761024182078 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._