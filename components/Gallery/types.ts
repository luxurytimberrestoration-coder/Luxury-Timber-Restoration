export type Project = {
  id: number;
  title: string;
  location: string;
  type: string;
  duration: string;
  description: string;
  before: string;
  after: string;
  beforeCaption: string;
  afterCaption: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Victorian Pine Hallway",
    location: "Kensington, London",
    type: "Floor Restoration",
    duration: "2 days",
    description:
      "These original Victorian pine boards had been blackened by decades of grime, hammer holes, and heavy debris. We stripped the floor back completely, filled every nail hole and gap, carried out a 3-stage sand, and finished with two coats of warm satin lacquer — revealing the natural pine underneath.",
    before: "/gallery/floor1-before.jpg",
    after: "/gallery/floor1-after.jpg",
    beforeCaption: "Blackened, debris-covered, hammer-damaged boards",
    afterCaption: "Warm satin lacquer, clean grain — same hallway",
  },
  {
    id: 2,
    title: "Hardwood Bedroom Floor",
    location: "Clifton, Bristol",
    type: "Floor Sanding & High-Gloss Finish",
    duration: "1 day",
    description:
      "A tired, dull bedroom floor with patches of uneven wear and a dead finish. We carried out a full drum sand, levelled the surface, and applied a high-gloss polyurethane finish in two coats — bringing out the warm variation in the hardwood grain and delivering a mirror-like result.",
    before: "/gallery/floor2-before.jpg",
    after: "/gallery/floor2-after.jpg",
    beforeCaption: "Flat, dull, unevenly worn finish throughout",
    afterCaption: "Deep high-gloss polyurethane — rich grain revealed",
  },
  {
    id: 3,
    title: "Antique Teak Garden Bench",
    location: "Didsbury, Manchester",
    type: "Furniture Restoration",
    duration: "3 days",
    description:
      "This solid teak bench had been left outdoors for years — the wood was bleached silver-grey, cracked and completely dry. We stripped it back, treated the cracks, applied a teak oil conditioner, then finished with a warm mahogany stain that restored its original character.",
    before: "/gallery/furniture1-before.jpg",
    after: "/gallery/furniture1-after.jpg",
    beforeCaption: "Bleached silver-grey, cracked and bone dry",
    afterCaption: "Warm mahogany stain, teak oil conditioner — same bench",
  },
  {
    id: 4,
    title: "Victorian Burr Walnut Cabinet",
    location: "Chiswick, London",
    type: "Antique Furniture Restoration",
    duration: "5 days",
    description:
      "A museum-quality Victorian burr walnut cabinet with a flaking, chalky surface and dull inlay. We hand-stripped the old lacquer, re-secured the loose veneer, cleaned the brass inlay, and applied a traditional French polish by hand — building up 12 layers to achieve the deep, mirror gloss it deserved.",
    before: "/gallery/furniture2-before.jpg",
    after: "/gallery/furniture2-after.jpg",
    beforeCaption: "Chalky, flaking surface — inlay dull and neglected",
    afterCaption: "12-layer French polish — gold inlay gleaming",
  },
];

export const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "12+", label: "Years Experience" },
  { value: "48hr", label: "Avg. Response Time" },
  { value: "100%", label: "Satisfaction Rate" },
];
