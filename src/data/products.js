/**
 * Product catalog data, transcribed from Dr. Ultra's technical
 * literature. Kept as plain data (not JSX) so it can be reused by
 * multiple components (cards, tables, filters) and updated by
 * non-developers without touching component code.
 */

import imgUltra650 from '../assets/images/products/ultra-650.jpg';
import imgUltra920 from '../assets/images/products/ultra-920.jpg';
import imgUltra950 from '../assets/images/products/ultra-950.jpg';
import imgUltra1550 from '../assets/images/products/ultra-1550.jpg';
import imgUltraF500 from '../assets/images/products/ultra-f500.jpg';
import imgUltra310J from '../assets/images/products/ultra-310j.jpg';
import imgUltraF570 from '../assets/images/products/ultra-f570.jpg';
import imgUltraFR630 from '../assets/images/products/ultra-fr630.jpg';
import imgUltraH710 from '../assets/images/products/ultra-h710.jpg';
import imgUltra510J from '../assets/images/products/ultra-510j.jpg';
import imgUltra8000 from '../assets/images/products/ultra-8000.jpg';
import imgUltraF930 from '../assets/images/products/ultra-f930.jpg';
import imgUltraB6650 from '../assets/images/products/ultra-b6650.jpg';
import imgUltraFC2130 from '../assets/images/products/ultra-fc2130.jpg';
import imgUltra10FD from '../assets/images/products/ultra-10fd.jpg';
import imgUltraElectroRed from '../assets/images/products/ultra-electro-red.jpg';
import imgUltraElectroGrey from '../assets/images/products/ultra-electro-grey.jpg';
import imgUltraEpoxyGelCoatRed from '../assets/images/products/ultra-epoxy-gel-coat-red.jpg';
import imgUltraSupersonic from '../assets/images/products/ultra-supersonic.jpg';

export const thermalClasses = [
  {
    key: 'B',
    label: 'Class B — 130°C',
    description:
      'General industrial motors. Dip-and-bake and roll-dip friendly, short cure cycles.',
    grades: ['Ultra 650', 'Ultra 920', 'Ultra 950', 'Ultra 1550', 'Epoxy Gel Coat'],
  },
  {
    key: 'F',
    label: 'Class F — 155°C',
    description: 'Continuous-duty motors and traction auxiliaries.',
    grades: ['Ultra F 500', 'Ultra 310J', 'Ultra F 570', 'Ultra B 6650', 'Ultra FC 2130'],
  },
  {
    key: 'H',
    label: 'Class H — 180°C',
    description: 'Traction motors, e-mobility, and dry-type transformers.',
    grades: ['Ultra FR 630', 'Ultra H 710', 'Ultra 510J', 'Ultra 8000', 'Ultra F930'],
  },
];

export const impregnatingBakingVarnishes = [
  {
    code: 'Ultra 650',
    type: 'Alkyd Phenolic Varnish',
    base: 'Alkyd Phenolic',
    thinner: '2050',
    viscosity: '40–60 s',
    cure: '130°C / 8 h',
    thermalClass: '130 (B)',
    image: imgUltra650,
    features: ['Withstands high centrifugal loads without film breakdown', 'Penetrates windings cleanly with minimal sludge build-up'],
    applications: 'High speed motor armatures, drives in chemical industry, hand tools.',
  },
  {
    code: 'Ultra 920',
    type: 'Alkyd Varnish',
    base: 'Alkyd',
    thinner: '2340',
    viscosity: '40–60 s',
    cure: '120°C / 2 h',
    thermalClass: '130 (B)',
    image: imgUltra920,
    features: ['Cures quickly to a flexible, crack-resistant film', 'Wets out and penetrates tight winding slots effectively'],
    applications: 'Fan stators, small motors, transformers, general electricals.',
  },
  {
    code: 'Ultra 950',
    type: 'Alkyd Phenolic Varnish',
    base: 'Alkyd Phenolic',
    thinner: '2050',
    viscosity: '40–60 s',
    cure: '130°C / 6 h',
    thermalClass: '130 (B)',
    image: imgUltra950,
    features: ['Fast cure with strong flow and slot penetration', 'Holds up well against moisture ingress'],
    applications: 'Motor stators, transformers, coils, general windings.',
  },
  {
    code: 'Ultra 1550',
    type: 'Polyurethane Varnish',
    base: 'Polyurethane',
    thinner: '2180',
    viscosity: '45–65 s',
    cure: '140°C / 14 h',
    thermalClass: '130 (B)',
    image: imgUltra1550,
    features: ['Engineered to resist R11 and R22 refrigerants', 'Cures to a tough, flexible film with high solvent resistance'],
    applications: 'Cooled and hermetic motors, compressors, refrigeration and fan motors.',
  },
  {
    code: 'Ultra F 500',
    type: 'Isophthalic Alkyd Varnish',
    base: 'Isophthalic Alkyd',
    thinner: '2050',
    viscosity: '50–70 s',
    cure: '160°C / 6 h',
    thermalClass: '155 (F)',
    image: imgUltraF500,
    features: ['Maintains strong dielectric performance even in humid conditions', 'Delivers strong bond and adhesive strength to windings'],
    applications: 'Motor stators, rotors, generators, auxiliary traction motors.',
  },
  {
    code: 'Ultra 310J',
    type: 'Modified Polyester Varnish',
    base: 'Modified Polyester',
    thinner: '310J',
    viscosity: '115–145 s',
    cure: '150°C / 4 h',
    thermalClass: '155 (F)',
    image: imgUltra310J,
    features: ['Formulated with mild, low-odour solvents for fast drying', 'Resists a broad range of chemical exposure', 'UL recognized under file E253938'],
    applications: 'Motor stators, rotors, generators, traction motors.',
  },
  {
    code: 'Ultra F 570',
    type: 'Isophthalic Alkyd Varnish',
    base: 'Isophthalic Alkyd',
    thinner: '2050',
    viscosity: '40–60 s',
    cure: '150°C / 4 h',
    thermalClass: '155 (F)',
    image: imgUltraF570,
    features: ['Strong resistance to chemical attack', 'Fast-curing with reliable dielectric strength'],
    applications: 'Motors, rotors, generators, industrial windings.',
  },
  {
    code: 'Ultra FR 630',
    type: 'Epoxy Ester Melamine Varnish',
    base: 'Epoxy Ester Melamine',
    thinner: '2050',
    viscosity: '30–50 s',
    cure: '150°C / 8 h',
    thermalClass: '180 (H)',
    image: imgUltraFR630,
    features: ['Combines strong electrical insulation with high mechanical strength', 'Stable against refrigerants and resistant to hydrolysis'],
    applications: 'Hermetic motors, compressors, high performance motors and windings.',
  },
  {
    code: 'Ultra H 710',
    type: 'Polyesterimide Varnish',
    base: 'Polyesterimide',
    thinner: '2180',
    viscosity: '65–75 s',
    cure: '150°C / 4 h',
    thermalClass: '180 (H)',
    image: imgUltraH710,
    features: ['Retains strong bond strength at full Class H operating temperature', 'Resists chemical and moisture exposure', 'PTB certified'],
    applications: 'Traction motors, dry-type transformers, e-mobility, marine electricals.',
  },
  {
    code: 'Ultra 510J',
    type: 'Modified Polyester Varnish',
    base: 'Modified Polyester',
    thinner: '510J',
    viscosity: '60–80 s',
    cure: '150°C / 4 h',
    thermalClass: '180 (H)',
    image: imgUltra510J,
    features: ['Fast-drying formulation with mild, low-odour solvents', 'Cures to a tough, elastic film; UL recognized under file E253938'],
    applications: 'Traction motors, generators, transformers, industrial windings.',
  },
  {
    code: 'Ultra 8000',
    type: 'Epoxy Varnish',
    base: 'Epoxy',
    thinner: 'Demineralised water',
    viscosity: '300–600 mPa·s',
    cure: '160°C / 2 h',
    thermalClass: '180 (H)',
    image: imgUltra8000,
    features: ['Resists R134A refrigerant exposure', 'Water-based formulation with no solvent emissions'],
    applications: 'Windings of hermetic machines, hermetic compressors, electricals, power tools.',
  },
];

export const impregnatingResins = [
  'Ultra Unsaturated Polyester / Mide Monostyrene Diluted Solventless Impregnating Resins',
  'Ultra Unsaturated Polyester / Mide Vinyltolune Diluted Solventless Impregnating Resins',
  'Epoxy Based Solventless Impregnating Resins',
  'Ultra Unsaturated Polyester / Mide Monostyrene Diluted Solventless Impregnating Trickle Resins',
  'Epoxy Based Solventless Trickle Resins',
];

export const airDryingVarnishes = [
  {
    code: 'Ultra F930',
    type: 'Air Drying Polyesterimide Varnish',
    base: 'Polyesterimide',
    thinner: '2170',
    viscosity: '15–16 s',
    cure: 'RT / 24 h',
    thermalClass: '180 (H)',
    image: imgUltraF930,
    features: ['The highest thermal rating in our air-drying range', 'Cures to a hard, glossy film with strong adhesion and flexibility', 'Touch-dry in as little as 30 minutes'],
    applications: 'Finishing coat for H-class motors, generators, dry-type transformers.',
  },
  {
    code: 'Ultra B 6650',
    type: 'Epoxy Anti-Tracking Varnish',
    base: 'Epoxy',
    thinner: '2210',
    viscosity: '90–200 s',
    cure: 'RT / 24 h',
    thermalClass: '155 (F)',
    image: imgUltraB6650,
    features: ['Built for high creepage and tracking resistance', 'Withstands moisture, dust and chemical exposure', 'Can be brushed, dipped or sprayed'],
    applications: 'Traction motor windings and coils in humid or polluted service.',
  },
  {
    code: 'Ultra FC 2130',
    type: 'Epoxy Finishing Varnish',
    base: 'Epoxy',
    thinner: '2210',
    viscosity: '280 s',
    cure: 'RT / 24 h',
    thermalClass: '155 (F)',
    image: imgUltraFC2130,
    features: ['Dries quickly as a finishing topcoat', 'Bonds securely over cured impregnating varnish', 'Forms a tough, chemically resistant film'],
    applications: 'Finishing of stators, rotors and coil assemblies.',
  },
  {
    code: 'Ultra 10 FD',
    type: 'Phenolic Air Drying Varnish',
    base: 'Phenolic',
    thinner: '2340',
    viscosity: '25–35 s',
    cure: 'RT / 24 h',
    thermalClass: '130 (B)',
    image: imgUltra10FD,
    features: ['An economical, fast-drying general-purpose finish', 'Resists oil and moisture once cured', 'Flows evenly over laminations and coil surfaces'],
    applications: 'Transformer coils, laminations, general electrical finishing.',
  },
  {
    code: 'Ultra Electro (Red)',
    type: 'Alkyd Air Drying Enamel',
    base: 'Alkyd',
    thinner: '2340',
    viscosity: '50–160 s',
    cure: 'RT / 24 h',
    thermalClass: '130 (B)',
    image: imgUltraElectroRed,
    features: ['Room-temperature curing red insulating enamel', 'Flows smoothly with good gloss and coverage', 'Dries non-tacky, making winding identification easy'],
    applications: 'Identification and finishing of motor windings and armatures.',
  },
  {
    code: 'Ultra Electro (Grey)',
    type: 'Alkyd Air Drying Enamel',
    base: 'Alkyd',
    thinner: '2340',
    viscosity: '50–170 s',
    cure: 'RT / 24 h',
    thermalClass: '130 (B)',
    image: imgUltraElectroGrey,
    features: ['Room-temperature curing grey insulating enamel', 'Cures to a hard, non-tacky, weather-resistant film', 'Finishes to a uniform matt-satin appearance'],
    applications: 'Finishing of panels, stators and transformer tanks.',
  },
  {
    code: 'Ultra Epoxy Gel Coat (Red)',
    type: 'Epoxy Air Drying Enamel',
    base: 'Epoxy',
    thinner: '2210',
    viscosity: '45K–85K mPa·s',
    cure: 'RT / 24 h',
    thermalClass: '130 (B)',
    image: imgUltraEpoxyGelCoatRed,
    features: ['A high-build thixotropic gel that holds its shape when brushed or trowelled on', 'Delivers outstanding anti-tracking and creepage resistance', 'Seals and reinforces coil ends against moisture and pollution'],
    applications: 'Coil overhangs and end windings of traction motors, HV machines and generators.',
  },
  {
    code: 'Ultra Supersonic',
    type: 'Air Drying Varnish',
    base: 'Modified Alkyd',
    thinner: '—',
    viscosity: '20–35 s',
    cure: 'RT / 40 min',
    thermalClass: '130 (B)',
    image: imgUltraSupersonic,
    features: ['Dries in as little as 40 minutes to accelerate production', 'Shields against moisture, chemicals and oil', 'Cures to a tough, high-gloss protective film'],
    applications: 'Coil impregnation, stator maintenance, repair workshops.',
  },
];

export const specialtyResins = [
  {
    name: 'Dr. Ultra Impregnation Resin — Epoxy Based (Solvent Less)',
    description: 'Epoxy-based solventless impregnation resin for total-solids VPI processes.',
    icon: '🧪',
    tags: ['Solvent Less'],
  },
  {
    name: 'Dr. Ultra Unsaturated Polyester / Imide Trickle Resin (Solvent Less)',
    description: 'Solventless trickle resin engineered for high-speed automated trickle impregnation lines.',
    icon: '💧',
    tags: ['Solvent Less'],
  },
  {
    name: 'Dr. Ultra "C" Class Silicone Insulation Varnish',
    description: 'Silicone-based insulation varnish for the highest thermal-class (C, >180°C) applications.',
    icon: '🔥',
    tags: ['Class C'],
  },
  {
    name: 'Dr. Ultra "C" Class Silicone Insulation Varnish (Solvent Less)',
    description: 'Solventless variant of the C-class silicone insulation varnish for low-emission production lines.',
    icon: '🔥',
    tags: ['Class C', 'Solvent Less'],
  },
];

export const packagingOptions = [
  { size: '500 ml', packaging: 'PET bottle', use: 'Trial and repair packs' },
  { size: '1 L', packaging: 'PET bottle', use: 'Winding shops, service centres' },
  { size: '5 L', packaging: 'PET jar with carry handle', use: 'Small production batches' },
  { size: '20 L', packaging: 'HDPE jerrican', use: 'Production lines' },
  { size: '200 L', packaging: 'MS drum', use: 'Bulk dip tanks and VPI plant' },
];

export const thinnerGuide = [
  { code: '2050', matches: 'Alkyd phenolic, isophthalic alkyd, epoxy ester grades' },
  { code: '2170', matches: 'Air drying polyesterimide (Ultra F930)' },
  { code: '2180', matches: 'Polyurethane and polyesterimide baking grades' },
  { code: '2210', matches: 'Epoxy anti-tracking finishes and gel coat' },
  { code: '2340', matches: 'Alkyd and phenolic air drying grades' },
  { code: '310J / 510J', matches: 'Mild-solvent modified polyester grades' },
];

export const gradeSelectionSteps = [
  {
    step: '01',
    title: 'Fix the thermal class',
    text: 'Match the varnish to the insulation class of the winding — never below it. Class B for general industrial motors, F for continuous-duty and traction auxiliaries, H for traction, e-mobility and dry-type transformers.',
  },
  {
    step: '02',
    title: 'Match the process',
    text: 'Dip-and-bake and roll-dip suit the 40–60 s grades. Trickle and VPI need the higher-solids, controlled-viscosity grades. Where oven time is the constraint, choose a short-cycle grade such as Ultra 920.',
  },
  {
    step: '03',
    title: 'Check the service duty',
    text: 'Refrigerant contact, humidity, chemical exposure or surface pollution narrow the choice — Ultra 1550 and FR 630 for refrigerants, Ultra 8000 where solvent emission must be avoided, anti-tracking finishes for polluted service.',
  },
];

export const safetyNotes = [
  'Store in tightly closed original containers below 30°C, away from heat and direct sunlight.',
  'Shelf life is six months from date of manufacture in sealed packs.',
  'Solvent-borne grades are flammable — earth all tanks and dip baskets, and ventilate the oven area.',
  'Close part-used containers immediately to prevent skinning and solvent loss; record the opening date on the label.',
  'Always observe the safety data sheet for the specific grade before use.',
];
