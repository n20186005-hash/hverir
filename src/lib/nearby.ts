import { nearbyData } from './nearby-data';
import type { AppLocale } from './site';

export const AREA_NAMES = {
  myvatn: { en: 'Lake Mývatn', zh: '米湖' },
  krafla: { en: 'Krafla', zh: '克拉夫拉' },
  canyon: { en: 'Jökulsárgljúfur', zh: '杰古沙河峡谷' },
  coast: { en: 'Húsavík and the coast', zh: '胡萨维克与海岸' },
  inland: { en: 'Inland North Iceland', zh: '冰岛北部内陆' },
} as const;

export const NEARBY_SOURCE_DATE = '2026-11-20';

export type NearbyArea = keyof typeof AREA_NAMES;
type Copy = {
  title: string;
  description: string;
  history: string;
  highlights: string;
  walk: string;
  photo: string;
  faq: readonly [question: string, answer: string];
};

type Photo = {
  src: `/nearby/${string}`;
  source: string;
  author: string;
  license: string;
  licenseUrl: string;
  width: number;
  height: number;
  alt: Record<AppLocale, string>;
};

export type NearbyPlace = {
  slug: string;
  name: string;
  mapRegion: string;
  area: NearbyArea;
  source: string;
  manager?: { en: string; zh: string; source: string };
  en: Copy;
  zh: Copy;
  photos?: readonly Photo[];
};

export const nearbyPlaces: readonly NearbyPlace[] = nearbyData;
const bySlug = new Map(nearbyPlaces.map((place) => [place.slug, place]));

export function getNearbyPlace(slug: string) {
  return bySlug.get(slug);
}

export function nearbyMap(place: NearbyPlace) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name}, ${place.mapRegion}, Iceland`)}`;
}

export function relatedPlaces(place: NearbyPlace) {
  const group = nearbyPlaces.filter((item) => item.area === place.area);
  const index = group.indexOf(place);
  if (group.length < 3) return group.filter((item) => item !== place);
  return [group[(index + group.length - 1) % group.length], group[(index + 1) % group.length]];
}

export const NEARBY_TEXT = {
  en: {
    title: 'Places near Hverir',
    description: 'Explore crater walks around Lake Mývatn, Krafla’s volcanic landscapes, the Jökulsárgljúfur canyon and North Iceland’s coast.',
    map: 'Open in Google Maps',
    overview: 'About this stop',
    manager: 'Managed by',
    managerPending: 'Site management is awaiting verification.',
    highlights: 'What to look for',
    walk: 'Getting there and visiting',
    photo: 'Photography',
    faq: 'Frequently asked question',
    sources: 'Visitor information and sources',
    sourceDate: 'Sources consulted November 20, 2026',
    related: 'More in this area',
    home: 'Hverir visitor guide',
  },
  zh: {
    title: '赫维尔周边景点',
    description: '从赫维尔出发，探索米湖的火山口步道、克拉夫拉火山地貌、杰古沙河峡谷和冰岛北部海岸。',
    map: '在 Google 地图中打开',
    overview: '景点介绍',
    manager: '管理单位',
    managerPending: '管理单位待核实。',
    highlights: '主要看点',
    walk: '交通与游览',
    photo: '拍摄建议',
    faq: '常见问题',
    sources: '游览信息与资料来源',
    sourceDate: '资料查阅于 2026 年 11 月 20 日',
    related: '同一区域的景点',
    home: '赫维尔游览指南',
  },
} as const;
