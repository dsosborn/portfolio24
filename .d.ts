type ModuleType =
  | CardsType
  | CareersFormType
  | ContactModuleType
  | HeroType
  | NewsListType
  | CardsType
  | CardProjectListTypesType
  | RichTextModuleType
  | TeamListType;

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////// INIVIDUAL MODULE TYPES //////////////////////
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

type navItemType = { name: string; slug: string; _id: string };

type CardType = {
  _key: string;
  description: string;
  heading: string;
  link: string;
  iconUrl: string;
};

type CardsType = {
  _type: "cards";
  cards: CardType[];
};

type CareersFormType = {
  _type: "careersForm";
  heading: string;
  positions: string[];
  jobFairs: string[];
};

type ContactModuleType = {
  _type: "contactForm";
  heading: string;
};

type HeroType = {
  _type: "hero";
  slides: {
    heading: string;
    description: any[];
    bkrdImage: string;
    backgroundImage: SanityImageType;
    blur: string;
    expiration: string;
  }[];
};

type NewsListType = {
  _type: "newsList";
  allPostData: any[];
};

type ProjectListType = {
  _type: "projectList";
  projectCategories: any[];
  projectsData: any[];
};

type RecentNewsType = {
  _type: "recentNews";
  heading: string;
  recentPostData: any[];
};

type RichTextModuleType = {
  _type: "richText";
  content: PortableTextFieldType[];
};

type TeamListType = {
  _type: "teamList";
  teamData: any[];
};

type MediaType = {
  url: string;
  width: number;
  height: number;
  alt: string;
  sizes: {
    card?: {
      filename: string;
      width: number;
      height: number;
    };
    hero?: {
      filename: string;
      width: number;
      height: number;
    };
    thumbnail?: {
      filename: string;
      width: number;
      height: number;
    };
  };
};
interface CaptionedImage {
  _type: "captionedImage";
  caption: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  imageUrl?: string;
  blurDataURL?: string;
  float: boolean;
  full: boolean;
}
type SanityImageType = {
  _id: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  altText?: string;
  caption?: string;
  hotspot?: any;
};
interface ProjectDataType {
  _id: string;
  url: string;
  date: string;
  cta: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  title: string;
  featuredImage: {
    url: string;
    height: number;
    width: number;
  };
  body: PortableTextBlock[];
}
