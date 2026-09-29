import wireSpoolImg from '../assets/images/photos/wire-spool.jpg';
import motorImg from '../assets/images/photos/motor.jpg';
import electronicsImg from '../assets/images/photos/electronics-pcb.jpg';
import factoryFloorImg from '../assets/images/photos/factory-floor.jpg';

/**
 * Business lines & services offered by Dr. Ultra. Facts sourced from
 * the company's technical literature, written up in original copy
 * for the web rather than reused verbatim.
 */
export const businessLines = [
  {
    key: 'wire-enamels',
    title: 'Wire Enamels',
    icon: '🧵',
    image: wireSpoolImg,
    summary: 'Primary insulation for magnet wire.',
    points: [
      'Forms the primary insulation layer on copper and aluminium magnet wire before winding',
      'Used in the coils of motors, generators and transformers of every size',
    ],
  },
  {
    key: 'electricals',
    title: 'Electricals',
    icon: '⚙️',
    image: motorImg,
    summary: 'Insulating varnishes for electrical machines.',
    points: [
      'Bonds and consolidates wound magnet wire into a single mechanically stable unit',
      'Applied by dip, roll-dip, hot-dip or trickle impregnation, depending on the line',
    ],
  },
  {
    key: 'electronics-protection',
    title: 'Electronics Protection',
    icon: '🔌',
    image: electronicsImg,
    summary: 'Resin systems for circuit & device protection.',
    points: [
      'Protects electronic circuits and devices against moisture, dust and vibration',
      'Formulated with specific functional properties for individual components and assemblies',
    ],
  },
  {
    key: 'flooring-coating',
    title: 'Flooring & Coating Solutions',
    icon: '🏭',
    image: factoryFloorImg,
    summary: 'Total industrial flooring & waterproofing solutions.',
    points: [
      'Covers everything from functional industrial flooring to waterproofing and protective coating',
      'Includes polyamide hardeners suited to a range of industrial applications',
    ],
  },
];

export const additionalServices = [
  {
    key: 'vpi-plant',
    title: 'Vacuum Pressure Impregnation (VPI) Plant Manufacturing',
    icon: '🏗️',
    text: 'Beyond varnishes and resins, Dr. Ultra also designs and manufactures Vacuum Pressure Impregnation plants and associated dip-tank/oven systems for coil and stator impregnation lines.',
  },
  {
    key: 'grade-consulting',
    title: 'Grade Selection & Application Consulting',
    icon: '🧪',
    text: 'Our technical team helps you fix the right thermal class, match the right application process (dip, roll-dip, trickle, VPI), and check service-duty requirements before you specify a grade.',
  },
  {
    key: 'bulk-supply',
    title: 'Bulk & Scheduled Supply',
    icon: '🚛',
    text: 'From 500 ml trial packs to 200 L MS drums for bulk dip tanks, we support both service-centre quantities and scheduled bulk deliveries for production lines.',
  },
  {
    key: 'global-support',
    title: 'German Technology, Local Support',
    icon: '🌍',
    text: 'Built on German process technology and manufactured in India, backed by a team with global product, application, service and market knowledge for fast local response.',
  },
];
