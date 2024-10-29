import { GraphQLClient, gql } from "graphql-request";

export const grahcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clx1p27gj02r707uqpglxbfpq/master"
);

const category = `
  id
  name
  slug
`;

const post = `
  id
  title
  bannerImage { 
    url 
  }
  content { 
    html 
  }
  description,
  createdAt,
  slug
`;

const career = `
  image {
      url
      createdAt
    }
    title
    location
    jobDescription {
      html
    }
  `;

export const QUERY_SLUG_CATEGORIES = gql`
  {
    categories {
      ${category}
    }
  }
`;

export const QUERY_SLUG_POSTS = gql`
  {
    posts(first: 100, orderBy: createdAt_DESC) {
      ${post}
      categories {
        ${category}
      }
    }
  }
`;

export const QUERY_SLUG_CAREERS = gql`
  {
    careers {
      ${career}
    }
  }
`;
