import CSSImage from '../public/css.jpg'
import Linux from '../public/linux.jpg'
import SoftwareArchitecture from '../public/architecture.jpg'
import Copilot from '../public/copilot.png'

export const navLinks = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Related",
    hash: "#related",
  }
] as const;

export const filters = [
  {
    filter: "CSS",
  },
  {
    filter: "HTML",
  },
  {
    filter: "JavaScript",
  },
  {
    filter: "TypeScript",
  },
  {
    filter: "Java",
  },
  {
    filter: "Node.js",
  },
  {
    filter: "Next.js",
  },
  {
    filter: "Books",
  },
  {
    filter: "Linux",
  },
  {
    filter: "Other",
  },
] as const;

export const blogCardsData = [
  { 
    image: CSSImage,
    title: 'Learning CSS the correct way with Frontend Mentor',
    description: 'As a front-end developer knowing CSS is a must, here is how I learn it the correct way.',
    topics: 'CSS',
    readTime: '5min',
    date: '01 Dec, 2024',
    link: '/articles/frontendmentor'
  },
  { 
    image: Linux,
    title: 'Why you should learn Linux, even if you do not use it',
    description: 'Linux is an operating system, used across servers, computers and other devices, here is why you should learn it.',
    topics: 'Linux',
    readTime: '5min',
    date: '01 Dec, 2024',
    link: '/articles/linux'
  },
  { 
    image: SoftwareArchitecture,
    title: 'Review Fundamentals of Software Architecture',
    description: 'Review of Neal Ford & Mark Richards book, and why you should read it as a software developer.',
    topics: 'Book',
    readTime: '5min',
    date: '01 Dec, 2024',
    link: '/articles/softwarearchitecture'
  },
  { 
    image: Copilot,
    title: 'Deactivating Github Copilot',
    description: 'In this article I list a number of reasons why you should deactivate Copilot or similar AI tools as a student.',
    topics: 'Other',
    readTime: '3min',
    date: '01 Dec, 2024',
    link: '/articles/copilot'
  },
];

/* To pass to the article page */
export type ArticleTypes = typeof blogCardsData[number];
export interface ArticlePageProps extends ArticleTypes {}
