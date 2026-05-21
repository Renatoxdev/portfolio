export type LocalizedText = {
  pt: string;
  en: string;
};

export type LocalizedList = {
  pt: string[];
  en: string[];
};

export interface Project {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  tech: LocalizedList;
  repoUrl: string;
  demoUrl: string;
  images: string[];
  details: LocalizedList;
}
