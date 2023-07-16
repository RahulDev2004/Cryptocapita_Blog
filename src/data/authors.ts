export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Pranshu Jha",
    slug: "pranshu-jha",
    image: "../src/assets/authors/pranshu.jpg",
    bio: "Pranshu is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Crypto Capita and the content management system.",
  },
  {
    name: "Ram Kishor",
    slug: "ram-kishor",
    image: "./src/assets/authors/ram.jpg",
    bio: "Ram is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.",
  },
  {
    name: "Ravi Rohith",
    slug: "ravi-rohith",
    image: "./src/assets/authors/ravi.jpg",
    bio: "Ravi Rohith is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
  },
];
