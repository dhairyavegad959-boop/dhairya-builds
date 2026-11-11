export type ProjectCategory =
  | 'Cinematic AI Videos'
  | 'AI Marketing Posters'
  | 'YouTube Thumbnails'
  | 'Notion Templates';

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  date?: string;
  clientOrContext: string;
  deliverables: string[];
  mediaType: 'video' | 'image' | 'placeholder';
  mediaUrl?: string;
  posterUrl?: string;
  aspectRatio?: '16:9' | '9:16' | '3:4' | '4:3' | '1:1';
  isPlaceholder?: boolean;
  designFocus: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  categoryMatch: ProjectCategory;
  description: string;
  examples: string[];
  ctaText: string;
  ctaActionType: 'email' | 'scroll' | 'filter';
  emailSubject: string;
  targetSection: string;
}

export interface NotionTemplateItem {
  id: string;
  title: string;
  type: 'Ready-Made Template' | 'Custom Workspace';
  categoryTag: string;
  description: string;
  features: string[];
  ctaText: string;
  emailSubject: string;
  isPlaceholderPreview: boolean;
}

export const BRAND_CONFIG = {
  brandName: 'Dhairya Builds',
  creatorName: 'Dhairya Vegad',
  location: 'Gujarat, India',
  eyebrow: 'AI VISUAL BUILDER · GUJARAT, INDIA',
  heroHeading: 'I turn ideas into visuals people remember.',
  heroDescription:
    'I create cinematic AI videos, marketing posters, YouTube thumbnails, and customizable Notion templates for businesses, creators, and students.',
  email: 'dhairyavegad172@gmail.com',
  defaultEmailSubject: 'Project Inquiry — Dhairya Builds',
  instagramUrl: 'https://www.instagram.com/dhairyabuilds?igsh=Mm9uaHJrcmp3MDNv',
  instagramHandle: '@dhairyabuilds',
  youtubeUrl: 'https://youtube.com/@dhairyabuilds?si=X3_0J9bBvLSHQNNk',
  linkedinUrl: 'https://www.linkedin.com/in/dhairya-vegad-79617b406',
  portraitUrl: '/assets/aistudio/Screenshot_2026-05-02-19-27-41-819_com.miui.gallery_bfed218e.png',
};

export const PROJECT_CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Cinematic AI Videos',
  'AI Marketing Posters',
  'YouTube Thumbnails',
  'Notion Templates',
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'shiv-homestay-video',
    title: 'Shiv Homestay Dwarka — Hospitality Film',
    category: 'Cinematic AI Videos',
    shortDescription:
      'Cinematic AI promotional film and voiceover storytelling showcasing modern duplex rooms and family hospitality near Dwarkadhish Temple.',
    fullDescription:
      'Created a comprehensive promotional video advertisement for Shiv Homestay in Dwarka, Gujarat. The visual narrative walks prospective guests through the exterior architecture, modern living spaces, family-friendly bedrooms, semi-kitchen amenities, and warm hospitality, paired with clear Hindi voiceover storytelling and on-screen callouts.',
    date: '2026',
    clientOrContext: 'Shiv Homestay · Dwarka, Gujarat',
    deliverables: [
      '16:9 Horizontal Promotional Film',
      'AI Visual Enhancement & Scene Transitions',
      'Hindi Voiceover & Audio Mastering',
      'On-Screen Amenity Typography',
    ],
    mediaType: 'video',
    mediaUrl: '/assets/aistudio/VN20260603_153721_b53ca52f.mp4',
    posterUrl: '/assets/aistudio/file_0000000048007230a4758f8e05e8a1f6_d33c1dcf.png',
    aspectRatio: '16:9',
    isPlaceholder: false,
    designFocus: [
      'Warm architectural lighting and inviting interior framing',
      'Paced narrative flow from exterior arrival to room details',
      'Clear amenity callouts (AC, Smart TV, Semi-Kitchen, Tea Kit)',
    ],
  },
  {
    id: 'dwarka-jewellery-commercial',
    title: 'Heritage Bridal Jewellery — Vertical Commercial',
    category: 'Cinematic AI Videos',
    shortDescription:
      'High-detail vertical AI video commercial highlighting intricate gold and emerald craftsmanship for a Dwarka jewellery showcase.',
    fullDescription:
      'Designed a luxury 9:16 vertical reel tailored for social media promotions. The sequence opens with macro close-ups of filigree gold and emerald settings, transitions to an emotive bridal portrait in warm chandelier light, and concludes with a velvet display showcase.',
    date: '2026',
    clientOrContext: 'Jewellery Showcase · Dwarka',
    deliverables: [
      '9:16 Vertical Social Commercial',
      'Macro Product Lighting & Texture Direction',
      'Bridal Portrait Sequence',
      'Instrumental Acoustic Score',
    ],
    mediaType: 'video',
    mediaUrl: '/assets/aistudio/gemini_generated_video_b423fbc8_d0dc7839.mp4',
    aspectRatio: '9:16',
    isPlaceholder: false,
    designFocus: [
      'Photorealistic specular highlights on gold and gemstones',
      'Cohesive color grading in deep crimson, antique gold, and emerald',
      'Social-first vertical composition for Instagram Reels & YouTube Shorts',
    ],
  },
  {
    id: 'dc-natural-ayurvedic-poster',
    title: 'DC Natural — Herbal & Handmade Soap Campaign',
    category: 'AI Marketing Posters',
    shortDescription:
      'Bilingual (English & Gujarati) product advertisement showcasing chemical-free handmade soaps and Amla-Aritha-Shikakai shampoo.',
    fullDescription:
      'Developed an organic product marketing poster for DC Natural. The creative arranges the herbal shampoo bottle alongside four handmade soap variants (Neem, Camphor, De-Tan Scrub, and Menthol) on natural wood and burlap textures, surrounded by raw botanical ingredients and clear Gujarati and English typography.',
    date: '2026',
    clientOrContext: 'DC Natural · Local Product Campaign',
    deliverables: [
      'High-Resolution Campaign Poster',
      'Bilingual Gujarati & English Typography Layout',
      'Botanical Ingredient Staging',
      'Social & Print Ready Formats',
    ],
    mediaType: 'image',
    mediaUrl: '/assets/aistudio/file_00000000ab1c71fdade1e5c7a901d5a2_636b1800.png',
    aspectRatio: '4:3',
    isPlaceholder: false,
    designFocus: [
      'Authentic earthy palette reinforcing chemical-free herbal positioning',
      'Clear product variant labeling in Gujarati script',
      'Balanced visual hierarchy from brand header to local delivery CTA',
    ],
  },
  {
    id: 'shiv-homestay-print-poster',
    title: 'Shiv Homestay — Duplex Stay Promotional Poster',
    category: 'AI Marketing Posters',
    shortDescription:
      'Structured hospitality flyer combining interior photography, amenity iconography, location QR code, and direct booking details.',
    fullDescription:
      'Created a clean, high-clarity promotional poster for Shiv Homestay in Dwarka. The layout leads with a bright wide-angle bedroom photograph, followed by refined editorial typography, a 6-point amenity grid, exterior twilight imagery, and a structured footer with QR location scanning.',
    date: '2026',
    clientOrContext: 'Shiv Homestay · Hospitality Print & Digital',
    deliverables: [
      'Vertical Promotional Poster',
      'Amenity Iconography Grid',
      'QR Code Location Integration',
      'WhatsApp Direct Booking Layout',
    ],
    mediaType: 'image',
    mediaUrl: '/assets/aistudio/file_0000000048007230a4758f8e05e8a1f6_d33c1dcf.png',
    aspectRatio: '3:4',
    isPlaceholder: false,
    designFocus: [
      'High-key interior lighting that communicates cleanliness and space',
      'Scannable 6-feature grid (3BHK, Wi-Fi, Pickup, Family Friendly)',
      'Uncluttered contact footer for immediate guest inquiries',
    ],
  },
  {
    id: 'devbhumi-dwarka-getaway-poster',
    title: 'Devbhumi Dwarka — Coastal Homestay Campaign',
    category: 'AI Marketing Posters',
    shortDescription:
      'Atmospheric sunset marketing creative pairing coastal temple heritage with room previews, Gujarati subheadings, and seasonal tariff details.',
    fullDescription:
      'Designed a travel and hospitality campaign graphic targeting pilgrims and families visiting Devbhumi Dwarka. The composition blends a golden-hour coastal backdrop with three framed vignettes—sea-view room, Dwarkadhish Temple architecture, and traditional Gujarati thali dining.',
    date: '2026',
    clientOrContext: 'Devbhumi Dwarka Hospitality Campaign',
    deliverables: [
      'Social Media Promotional Creative',
      'Bilingual Headline & Amenity Badges',
      'Multi-Frame Collage Layout',
    ],
    mediaType: 'image',
    mediaUrl: '/assets/aistudio/IMG_20260524_162055_ab160d60.png',
    aspectRatio: '3:4',
    isPlaceholder: false,
    designFocus: [
      'Golden-hour atmospheric depth paired with deep navy contrast',
      'Visual storytelling across stay, spiritual heritage, and local cuisine',
      'Clear pricing callout and QR booking structure',
    ],
  },
  {
    id: 'authentic-indian-flavors-menu',
    title: 'Authentic Indian Flavors — Culinary Editorial Graphic',
    category: 'AI Marketing Posters',
    shortDescription:
      'Dark-mode restaurant promotional layout pairing studio-lit food imagery with gold serif typography and structured dietary indicators.',
    fullDescription:
      'Crafted a refined culinary promotional graphic showcasing Indian and Indo-Chinese dishes. Set against a matte charcoal slate texture, the layout uses high-contrast food photography (masala papad, hakka noodles, spiced buttermilk) to anchor a clean two-column typographic hierarchy.',
    date: '2026',
    clientOrContext: 'Restaurant & Culinary Promotion',
    deliverables: [
      'Editorial Culinary Layout',
      'AI Studio Food Styling & Lighting',
      'Custom Dietary & Spice Legend System',
    ],
    mediaType: 'image',
    mediaUrl: '/assets/aistudio/file_0000000074187206b5468ffb4a355bf0_f16bcee9.png',
    aspectRatio: '3:4',
    isPlaceholder: false,
    designFocus: [
      'Appetizing warm rim lighting on food subjects against dark slate',
      'Restrained gold serif typography with generous line spacing',
      'Clear visual indicators for Chef’s Special, Spicy, and Vegetarian items',
    ],
  },
  {
    id: 'youtube-thumbnail-architecture',
    title: 'High-Contrast Creator Thumbnail — Replaceable Showcase Slot',
    category: 'YouTube Thumbnails',
    shortDescription:
      'Placeholder slot reserved for your custom YouTube thumbnail exports. Demonstrates visual hierarchy, subject isolation, and readable 3-word hooks.',
    fullDescription:
      'This slot is a clearly identified placeholder ready to be replaced with your own completed YouTube thumbnail image files. Every thumbnail project is engineered around platform-appropriate composition: decisive subject placement, high foreground-to-background contrast, expressive lighting, and bold typography that stays legible on mobile feeds.',
    date: 'Replaceable Slot',
    clientOrContext: 'Portfolio Placeholder · Ready for Custom Artwork',
    deliverables: [
      '1920×1080 High-CTR Thumbnail Composition',
      'Subject Rim-Lighting & Color Separation',
      'Mobile-Legible Focal Typography',
    ],
    mediaType: 'placeholder',
    aspectRatio: '16:9',
    isPlaceholder: true,
    designFocus: [
      'Strong visual hierarchy that communicates the video premise in under a second',
      'Readable typography with clean contrast separation',
      'Intentional subject placement and storytelling expression',
    ],
  },
  {
    id: 'notion-exam-readiness-workspace',
    title: 'Exam Readiness & Study Dashboard — Workspace Preview Slot',
    category: 'Notion Templates',
    shortDescription:
      'Structured Notion system designed for students to track syllabus completion, revision cycles, and daily study blocks. Preview slot ready for your screenshot.',
    fullDescription:
      'An organized Notion workspace built for students and self-learners managing rigorous exam preparation. Combines subject-level progress tracking, spaced-repetition revision schedules, practice test logs, and a distraction-free daily action view. Clearly marked as a template preview slot ready for your custom Notion screenshot.',
    date: 'Ready-Made & Custom',
    clientOrContext: 'Dhairya Builds · Digital Systems',
    deliverables: [
      'Duplicatable Notion Workspace Template',
      'Syllabus & Revision Tracker Databases',
      'Daily Focus & Study Session Views',
      'Optional Custom Workflow Tailoring',
    ],
    mediaType: 'placeholder',
    aspectRatio: '16:9',
    isPlaceholder: true,
    designFocus: [
      'Clutter-free daily dashboard that reduces cognitive overload',
      'Relational databases linking subjects, topics, and mock test scores',
      'Easily customizable properties for different exams or academic semesters',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-videos',
    number: '01',
    title: 'AI Cinematic Videos',
    categoryMatch: 'Cinematic AI Videos',
    description:
      'Cinematic AI-powered videos for product promotions, hospitality, and brand storytelling.',
    examples: [
      'Hotel and hospitality advertisements',
      'Product advertisements',
      'Restaurant and food promotions',
      'Brand storytelling videos',
      'Promotional videos for local businesses',
      'Cinematic social media content',
    ],
    ctaText: 'Discuss a Video',
    ctaActionType: 'email',
    emailSubject: 'Video Project Inquiry — Dhairya Builds',
    targetSection: '#work',
  },
  {
    id: 'service-posters',
    number: '02',
    title: 'AI Marketing Posters',
    categoryMatch: 'AI Marketing Posters',
    description:
      'Premium promotional creatives for campaigns, products, festivals, and social media.',
    examples: [
      'Festival promotions',
      'Hotel and hospitality posters',
      'Product advertisements',
      'Restaurant promotional graphics',
      'Local business campaigns',
      'Social media promotional designs',
    ],
    ctaText: 'Request a Poster',
    ctaActionType: 'email',
    emailSubject: 'Marketing Poster Inquiry — Dhairya Builds',
    targetSection: '#work',
  },
  {
    id: 'service-thumbnails',
    number: '03',
    title: 'YouTube Thumbnails',
    categoryMatch: 'YouTube Thumbnails',
    description:
      'Clear, compelling thumbnail designs built around strong visual hierarchy and storytelling.',
    examples: [
      'Strong visual hierarchy & readable typography',
      'Intentional subject placement & framing',
      'High foreground-to-background contrast',
      'Clear visual storytelling at a glance',
      'Platform-appropriate mobile & desktop composition',
    ],
    ctaText: 'Create a Thumbnail',
    ctaActionType: 'email',
    emailSubject: 'YouTube Thumbnail Inquiry — Dhairya Builds',
    targetSection: '#work',
  },
  {
    id: 'service-notion',
    number: '04',
    title: 'Customizable Notion Templates',
    categoryMatch: 'Notion Templates',
    description:
      'Ready-made productivity templates and personalized Notion workspaces designed around your workflow.',
    examples: [
      'Exam readiness trackers',
      'Student planners & study dashboards',
      'Personal productivity systems',
      'Personalized Notion dashboards',
      'Custom workflow and organization templates',
    ],
    ctaText: 'Explore Templates',
    ctaActionType: 'scroll',
    emailSubject: 'Notion Template Inquiry — Dhairya Builds',
    targetSection: '#notion-templates',
  },
];

export const NOTION_TEMPLATES: NotionTemplateItem[] = [
  {
    id: 'exam-readiness-tracker',
    title: 'Exam Readiness Tracker',
    type: 'Ready-Made Template',
    categoryTag: 'Academic & Exam Prep',
    description:
      'A structured study command center to map syllabus modules, log spaced-repetition revisions, and monitor mock test readiness before exam day.',
    features: [
      'Subject & chapter completion breakdown',
      'Spaced revision confidence tracker',
      'Mock test score & error log database',
    ],
    ctaText: 'Inquire to Purchase',
    emailSubject: 'Purchase Inquiry: Exam Readiness Tracker — Dhairya Builds',
    isPlaceholderPreview: true,
  },
  {
    id: 'student-study-dashboard',
    title: 'Student Planner & Study Dashboard',
    type: 'Ready-Made Template',
    categoryTag: 'Student Productivity',
    description:
      'An all-in-one academic workspace organizing daily lectures, assignment deadlines, reading notes, and weekly study timeblocks in one calm view.',
    features: [
      'Assignment & deadline priority view',
      'Course-linked lecture notes archive',
      'Weekly habit & study session planner',
    ],
    ctaText: 'Inquire to Purchase',
    emailSubject: 'Purchase Inquiry: Student Study Dashboard — Dhairya Builds',
    isPlaceholderPreview: true,
  },
  {
    id: 'creator-productivity-system',
    title: 'Daily Productivity & Content System',
    type: 'Ready-Made Template',
    categoryTag: 'Workflow & Organization',
    description:
      'A streamlined daily operating system for independent creators and builders to manage tasks, project pipelines, and creative ideas without clutter.',
    features: [
      'Action-focused daily priority queue',
      'Project & deliverable status board',
      'Resource & reference capture inbox',
    ],
    ctaText: 'Inquire to Purchase',
    emailSubject: 'Purchase Inquiry: Daily Productivity System — Dhairya Builds',
    isPlaceholderPreview: true,
  },
  {
    id: 'custom-notion-workspace',
    title: 'Bespoke Notion Workspace Architecture',
    type: 'Custom Workspace',
    categoryTag: 'Tailored to Your Workflow',
    description:
      'Need a personalized Notion setup built around your exact study routine, content pipeline, or business operations? I design custom workspaces from scratch or adapt existing templates to fit your requirements.',
    features: [
      '1-on-1 workflow mapping & structure design',
      'Custom relational databases & filtered views',
      'Walkthrough guide for seamless daily use',
    ],
    ctaText: 'Request Custom Workspace',
    emailSubject: 'Custom Notion Workspace Request — Dhairya Builds',
    isPlaceholderPreview: false,
  },
];

export function filterProjectsByCategory(
  projects: PortfolioProject[],
  selectedCategory: 'All' | ProjectCategory
): PortfolioProject[] {
  if (selectedCategory === 'All') {
    return projects;
  }
  return projects.filter((project) => project.category === selectedCategory);
}

export function buildMailtoHref(email: string, subject?: string, body?: string): string {
  const cleanEmail = email.trim();
  const params = new URLSearchParams();
  if (subject && subject.trim().length > 0) {
    params.set('subject', subject.trim());
  }
  if (body && body.trim().length > 0) {
    params.set('body', body.trim());
  }
  const queryString = params.toString().replace(/\+/g, '%20');
  return queryString ? `mailto:${cleanEmail}?${queryString}` : `mailto:${cleanEmail}`;
}

export function validateServiceCompliance(services: ServiceItem[]): {
  valid: boolean;
  count: number;
  prohibitedFound: string[];
} {
  const prohibitedKeywords = ['nova planner', 'qr menu', 'qr ordering', 'restaurant ordering software'];
  const serialized = JSON.stringify(services).toLowerCase();
  const prohibitedFound = prohibitedKeywords.filter((kw) => serialized.includes(kw));
  return {
    valid: services.length === 4 && prohibitedFound.length === 0,
    count: services.length,
    prohibitedFound,
  };
}
