import { MouseEventHandler } from "react";

export interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (newValue: string) => void;
}

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isEnabled?: boolean;
}

export interface TextProps {
  className?: string;
  text?: string;
}

export interface ErrorProps {
  className?: string;
  message?: string;
}

// export interface SectionProps {
//   children: React.ReactNode;
//   className?: string;
//   id?: string;
// }

// export interface LinkProps {
//   children?: React.ReactNode;
//   className?: string;
//   href: string;
//   target?: 'BLANK';
//   active?: boolean;
// }

// export interface TextProps {
//   level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
//   children: React.ReactNode;
//   className?: string;
//   textCenter?: boolean;
// }

// export interface ImageContainerProps {
//   src: string;
//   alt: string;
//   className?: string;
//   loading?: 'lazy' | 'eager';
//   fullHeight?: boolean;
//   fullWidth?: boolean;
// }

// export interface LogoProps {
//   className?: string;
// }

// export interface LinkButtonProps extends LinkProps {
//   buttonProps: ButtonProps;
//   href: string;
//   className?: string;
// }

// export interface ButtonProps {
//   variant: 'PRIMARY' | 'OUTLINE';
//   className?: string;
//   text: string;
//   onClick?: MouseEventHandler<HTMLButtonElement>;
//   active?: boolean;
// }

// export interface ProgramCardProps {
//   image: string;
//   imageAltText: string;
//   title: string;
//   content: string;
//   href: string;
//   active: boolean;
// }

// export interface PageLayoutProps {
//   children: React.ReactNode;
// }

// export interface SectionHeaderProps {
//   heading: string;
//   focusText: string;
//   headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
//   className?: string;
// }

// export interface CardSectionContainerProps {
//   children: React.ReactNode;
//   isWidthFull?: boolean;
//   className?: string;
// }

// export interface CardGradientContainerProps {
//   children: React.ReactNode;
//   className?: string;
//   backgroundColor?: string;
// }

// export interface SkillCardProps {
//   skilledDetails: SkillProps[];
//   title: string;
// }

// export interface WeGuideDifferentlyCardProps {
//   id?: string;
//   image: string;
//   imageAltText: string;
//   title: string;
//   content: string;
// }

// export interface NotAnotherTechCourseCardProps {
//   id?: string;
//   image: string;
//   imageAltText: string;
//   title: string;
//   content: string;
// }

// export interface FlexContainerProps {
//   children: React.ReactNode;
//   itemCenter?: boolean;
//   justifyCenter?: boolean;
//   className?: string;
//   direction?: 'row' | 'col';
// }

// export interface TestimonialCardProps {
//   id?: string;
//   image: string;
//   imageAltText: string;
//   title: string;
//   content: string;
// }

// export interface FooterLinkProps {
//   id?: string;
//   label: string;
//   href: string;
//   target?: 'BLANK';
// }

// export interface FooterLinksContainerProps {
//   title: string;
//   urls: FooterLinkProps[];
// }

// export interface MicroCampBGGradientContainerProps {
//   children: React.ReactNode;
// }

// export interface MicroCampFeatureCardProps {
//   title: string;
//   content: string;
// }

// export interface MicroCampFeaturePricingCardProps {
//   id: string;
//   content: string;
// }

// export interface TechEducationForEveryoneProps {
//   heading: string;
//   title: string;
//   content: string;
// }

// export interface GridContainerProps {
//   children: React.ReactNode;
//   className?: string;
// }

// export interface OpportunityCardProps {
//   id?: string;
//   heading: string;
//   title: string;
//   content: string;
// }

// export interface WhatWeDoForYouCardProps {
//   image: string;
//   imageAltText: string;
//   title: string;
//   content: string;
// }

// export interface WeToughtAtCardProps {
//   id?: string;
//   image: string;
//   imageAltText: string;
// }

// export type GenerateSectionPathProps = {
//   basePath: string;
//   sectionID: string;
// };

// export interface SEOProps {
//   slug: PageSlug;
// }

// export interface SkillsContainerProps {
//   skills: SkillsProps[];
// }
