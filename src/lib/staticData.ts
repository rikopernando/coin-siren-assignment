import { LandingPageData, HeaderData, HeroSection, FeatureItem, ServiceCategory, FooterData } from './types';

/**
 * Header navigation data
 */
export const headerData: HeaderData = {
  navigationItems: [
    {
      label: '채용',
      children: [
        { label: '해외 개발자 원격 채용', href: '#' },
        { label: '외국인 원격 채용 (비개발 직군)', href: '#' },
        { label: '한국어 가능 외국인 채용', href: '#' },
      ],
    },
    {
      label: '해외 개발자 활용 서비스',
      href: '#',
    },
  ],
  ctaButtonText: '문의하기',
};

/**
 * Hero section data
 */
export const heroData: HeroSection = {
  headline: '최고의 실력을 가진\n외국인 인재를 찾고 계신가요?',
  subheadline: '법률 및 인사관리 부담없이\n1주일 이내에 원격으로 채용해보세요.',
  ctaText: '개발자가 필요하신가요?',
  profileCard: {
    name: 'Abhishek Gupta',
    imageUrl: '/images/profile.webp',
    countryFlagUrl: '/images/country-flag.webp',
    experience: '마케팅 · 2y+',
    price: '월 100만원',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  profileCards: [
    {
      name: 'Abhishek Gupta',
      imageUrl: '/images/profile.webp',
      countryFlagUrl: '/images/country-flag.webp',
      experience: '마케팅 · 2y+',
      price: '월 100만원',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      name: 'Abhishek Gupta',
      imageUrl: '/images/profile.webp',
      countryFlagUrl: '/images/country-flag.webp',
      experience: '개발자 · 3y+',
      price: '월 100만원',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      name: 'Abhishek Gupta',
      imageUrl: '/images/profile.webp',
      countryFlagUrl: '/images/country-flag.webp',
      price: '월 100만원',
      experience: '디자이너 · 4y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
  ],
};

/**
 * Features section data
 */
export const featuresData: FeatureItem[] = [
  {
    title: '평균 월 120만원',
    subtitle: '임금을 해당 국가를 기준으로 계산합니다.',
    description: '임금을 해당 국가를 기준으로 계산합니다.',
  },
  {
    title: '최대 3회 인력교체',
    subtitle: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
    description: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
  },
  {
    title: '평균 3일, 최대 10일',
    subtitle: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
    description: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
  },
];

/**
 * Services section data
 */
export const servicesData: ServiceCategory[] = [
  {
    id: 'overseas-marketing',
    name: '해외 마케팅',
    iconName: 'icon-marketing.webp',
  },
  {
    id: 'publisher',
    name: '퍼블리셔',
    iconName: 'icon-image.webp',
  },
  {
    id: 'cad-engineer',
    name: '캐드원(제도사)',
    iconName: 'icon-box.webp',
  },
  {
    id: 'overseas-sales',
    name: '해외 세일즈',
    iconName: 'icon-target.webp',
  },
  {
    id: 'overseas-cs',
    name: '해외 CS',
    iconName: 'icon-call.webp',
  },
];

/**
 * Footer section data
 */
export const footerData: FooterData = {
  logo: 'hyperhire',
  description: '우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.',
  phone: '010-0000-0000',
  email: 'aaaaa@naver.com',
  cards: [
    {
      id: 'overseas-dev',
      iconName: 'icon-code.webp',
      title: '해외 개발자 원격 채용',
      link: '#',
    },
    {
      id: 'overseas-marketing',
      iconName: 'icon-avatar.webp',
      title: '외국인 원격 채용 (비개발)',
      link: '#',
    },
    {
      id: 'korean-speaking',
      iconName: 'icon-kor.webp',
      title: '한국어 가능 외국인 채용',
      link: '#',
    },
    {
      id: 'overseas-service',
      iconName: 'icon-gear.webp',
      title: '해외 개발자 활용 서비스',
      link: '#',
    },
  ],
  companyInfo: {
    name: '하이퍼하이어',
    ceo: '김주현',
    registrationNumber: '427-86-01187',
    address: '서울특별시 강남대로 479, 지하 1층 238호',
  },
  indiaInfo: {
    name: 'Hyperhire India Private Limited',
    ceo: 'Juhyun Kim',
    registrationNumber: 'U74110DL2016PTC290812',
    address: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
  },
  copyright: '© 2023 Hyperhire',
};

/**
 * Complete landing page data
 */
export const landingPageData: LandingPageData = {
  header: headerData,
  hero: heroData,
  features: featuresData,
  services: servicesData,
  footer: footerData,
};
