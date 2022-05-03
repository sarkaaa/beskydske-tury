import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

type Props = {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
};

const SeoComponent = ({ data, description, title, meta, lang }) => {
  const metaDescription = description || data?.site.siteMetadata.description;

  const metaTypes = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: data?.site.siteMetadata.image,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: data?.site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: `twitter:image`,
      content: data?.site.siteMetadata.image,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data?.site.siteMetadata.title}`}
      meta={metaTypes.concat(meta)}
    />
  );
}

const SEO = ({
  description = `Beskydské túry - turistické trasy v Beskydech`,
  lang = `cz`,
  meta = [],
  title,
}: Props) => {
  return (
    <StaticQuery
      query={
        graphql`
          query siteData {
            site {
              siteMetadata {
                title
                description
                author
                image
              }
            }
          }
        `
      }
      render={data => <SeoComponent data={data} title={title} description={description} meta={meta} lang={lang} />}
    />
  )
};

export default SEO;