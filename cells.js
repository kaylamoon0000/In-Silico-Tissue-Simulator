// Biological parameters are now closer to literature values (scaled but unit‑aware)
// Units (scaled): secretion = arbitrary units proportional to pg/cell/s
// diffusion handled in simulation as μm²/s equivalent scaling

const CELL_TYPES = {
  neuron: {
    color: "#FFD700",
    secretion: 0.05,
    burst: true,
    description: "Neuron – releases neurotransmitters in short bursts rather than continuous secretion."
  },
  astrocyte: {
    color: "#FF66CC",
    secretion: 0.02,
    burst: false,
    description: "Astrocyte – modulates extracellular environment and releases gliotransmitters."
  },
  microglia: {
    color: "#FF8C00",
    secretion: 0.08,
    burst: true,
    description: "Microglia – immune surveillance cell that releases cytokines when activated."
  },
  oligodendrocyte: {
    color: "#99CCFF",
    secretion: 0.005,
    burst: false,
    description: "Oligodendrocyte – low secretory activity, primarily structural/myelinating."
  },
  neural_stem: {
    color: "#00FFFF",
    secretion: 0.03,
    burst: false,
    description: "Neural stem cell – secretes trophic factors supporting neurogenesis."
  },
  endothelial: {
    color: "#00CC66",
    secretion: 0.015,
    burst: false,
    description: "Endothelial cell – releases signaling molecules involved in angiogenesis and barrier regulation."
  },
  pericyte: {
    color: "#66FF99",
    secretion: 0.02,
    burst: false,
    description: "Pericyte – modulates vascular signaling and extracellular matrix stability."
  },
  t_cell: {
    color: "#FF3333",
    secretion: 0.07,
    burst: true,
    description: "T cell – secretes cytokines transiently after activation."
  },
  macrophage: {
    color: "#CC5500",
    secretion: 0.09,
    burst: true,
    description: "Macrophage – strong cytokine producer during inflammatory response."
  },
  fibroblast: {
    color: "#CCCCCC",
    secretion: 0.01,
    burst: false,
    description: "Fibroblast – secretes extracellular matrix proteins and growth factors."
  },
  mesenchymal_stem: {
    color: "#33FFFF",
    secretion: 0.04,
    burst: false,
    description: "Mesenchymal stem cell – known for paracrine immunomodulatory signaling."
  },
  epithelial: {
    color: "#9999FF",
    secretion: 0.008,
    burst: false,
    description: "Epithelial cell – barrier cell with modest signaling activity."
  },
  cancer_glioblastoma: {
    color: "#990000",
    secretion: 0.1,
    burst: false,
    description: "Glioblastoma cell – continuously secretes growth factors and inflammatory mediators."
  },
  cancer_stem: {
    color: "#660000",
    secretion: 0.12,
    burst: false,
    description: "Cancer stem cell – high paracrine signaling supporting tumor microenvironment."
  },
  dendritic: {
    color: "#FFAA00",
    secretion: 0.06,
    burst: true,
    description: "Dendritic cell – antigen presenting cell that releases cytokines upon activation."
  },
  b_cell: {
    color: "#FF6666",
    secretion: 0.05,
    burst: true,
    description: "B cell – releases cytokines and antibodies after stimulation."
  },
  iPSC: {
    color: "#66FFFF",
    secretion: 0.025,
    burst: false,
    description: "Induced pluripotent stem cell – secretes developmental signaling molecules."
  },
  organoid_progenitor: {
    color: "#33CCFF",
    secretion: 0.03,
    burst: false,
    description: "Organoid progenitor – drives morphogen gradients in 3D tissue models."
  },
  chondrocyte: {
    color: "#66CCFF",
    secretion: 0.01,
    burst: false,
    description: "Chondrocyte – secretes cartilage matrix proteins and signaling molecules."
  },
  cardiomyocyte: {
    color: "#FF99CC",
    secretion: 0.02,
    burst: true,
    description: "Cardiomyocyte – releases signaling peptides in response to mechanical stress."
  }
};
```javascript
const CELL_TYPES = {
  neuron: { color: "#FFD700", secretion: 0.3, description: "Neuron – primary electrically excitable cell responsible for synaptic transmission and network signaling." },
  astrocyte: { color: "#FF66CC", secretion: 0.4, description: "Astrocyte – regulates neurotransmitter recycling, ion balance, and blood–brain barrier integrity." },
  microglia: { color: "#FF8C00", secretion: 0.6, description: "Microglia – resident immune cells of the CNS involved in neuroinflammation and synaptic pruning." },
  oligodendrocyte: { color: "#99CCFF", secretion: 0.2, description: "Oligodendrocyte – produces myelin sheaths that insulate neuronal axons and accelerate conduction." },
  neural_stem: { color: "#00FFFF", secretion: 0.5, description: "Neural stem cell – multipotent progenitor capable of differentiating into neurons and glial cells." },
  endothelial: { color: "#00CC66", secretion: 0.3, description: "Endothelial cell – lines blood vessels and is critical in blood–brain barrier and angiogenesis research." },
  pericyte: { color: "#66FF99", secretion: 0.35, description: "Pericyte – supports vascular stability and is increasingly studied in neurodegenerative disease and stroke." },
  t_cell: { color: "#FF3333", secretion: 0.7, description: "T cell – adaptive immune cell implicated in multiple sclerosis and neuroinflammatory disorders." },
  macrophage: { color: "#CC5500", secretion: 0.65, description: "Macrophage – peripheral immune cell that infiltrates injured CNS tissue and drives inflammatory cascades." },
  fibroblast: { color: "#CCCCCC", secretion: 0.25, description: "Fibroblast – extracellular matrix producing cell widely used in tissue engineering and wound healing studies." },
  mesenchymal_stem: { color: "#33FFFF", secretion: 0.45, description: "Mesenchymal stem cell – multipotent stromal cell studied for regenerative therapies and immunomodulation." },
  epithelial: { color: "#9999FF", secretion: 0.2, description: "Epithelial cell – barrier-forming cell type relevant in organoid and tissue interface models." },
  cancer_glioblastoma: { color: "#990000", secretion: 0.85, description: "Glioblastoma cell – aggressive brain tumor cell used in oncology and tumor–microenvironment research." },
  cancer_stem: { color: "#660000", secretion: 0.9, description: "Cancer stem cell – subpopulation responsible for tumor recurrence, therapy resistance, and metastasis." },
  dendritic: { color: "#FFAA00", secretion: 0.55, description: "Dendritic cell – professional antigen-presenting cell bridging innate and adaptive immunity." },
  b_cell: { color: "#FF6666", secretion: 0.6, description: "B cell – antibody-producing lymphocyte studied in autoimmune encephalitis and neuroimmune signaling." },
  iPSC: { color: "#66FFFF", secretion: 0.5, description: "Induced pluripotent stem cell – reprogrammed somatic cell used to model patient-specific neurological diseases." },
  organoid_progenitor: { color: "#33CCFF", secretion: 0.5, description: "Organoid progenitor cell – used to form 3D brain organoids that mimic early neurodevelopment." },
  chondrocyte: { color: "#66CCFF", secretion: 0.2, description: "Chondrocyte – cartilage-forming cell studied in joint degeneration and mechanobiology." },
  cardiomyocyte: { color: "#FF99CC", secretion: 0.3, description: "Cardiomyocyte – contractile heart muscle cell often used in cross‑tissue signaling and organ‑on‑chip studies." }
};
```javascript
const CELL_TYPES = {
  neuron: { color: "yellow", secretion: 0.3, description: "Neuron: excitable signaling cell." },
  astrocyte: { color: "magenta", secretion: 0.4, description: "Astrocyte: regulates synaptic environment." },
  microglia: { color: "orange", secretion: 0.6, description: "Microglia: brain immune cell." },
  stem: { color: "cyan", secretion: 0.5, description: "Stem cell: self‑renewing progenitor." },
  cancer: { color: "red", secretion: 0.8, description: "Cancer cell: uncontrolled proliferation." }
};
