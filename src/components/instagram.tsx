import React from "react"
import styled, { css } from "styled-components"
import useWindowSize from "../helpers/useWindowSize"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    background: ${theme.colors.primary};
    padding-top: 1.5rem;
  `
)

const Inner = styled.div<{ screenWidth: number }>(
  ({ theme, screenWidth }) => css`
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 100%;
    height: 100%;
    margin: 0 auto;
    height: ${screenWidth}px;
    overflow: hidden;

    @media ${theme.sizes.screenWidth.desktopLG} {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  `
)

export const Title = styled.h2(
  ({ theme }) => css`
    color: ${theme.colors.light};
    padding: 0 1rem;
  `
)

const InstagramTileWrapper = styled.div(
  () => css`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `
)

const InstagramTileInner = styled.a<{ bg: string }>(
  ({ theme, bg }) => css`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    color: ${theme.colors.light};
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    background: url(${bg});
    background-size: cover;
    background-position: center;
    transition: all 0.5s ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.1);

      > div {
        opacity: 1;
      }
    }
  `
)

const InstagramTileOverlay = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    bottom: 0.75rem;
    left: 0.75rem;
    background: rgba(0, 0, 0, 0.6);
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 1rem;
    text-align: center;
    z-index: 2;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.sizes.screenWidth.tablet} {
      top: 1.5rem;
      right: 1.5rem;
      bottom: 1.5rem;
      left: 1.5rem;
    }

    @media ${theme.sizes.screenWidth.desktopXL} {
      top: 2rem;
      right: 2rem;
      bottom: 2rem;
      left: 2rem;
    }
  `
)

const InstagramTileDescription = styled.span(
  ({ theme }) => css`
    color: rgba(255, 255, 255, 0.85);
    font-family: "Noto Sans", sans-serif;
    line-height: 2;
    text-align: center;
    font-size: 0.75rem;

    @media ${theme.sizes.screenWidth.desktopLG} {
      font-size: 1rem;
    }
  `
)

const InstagramTile = ({
  key,
  bg,
  link,
  description,
}: {
  key: string
  bg: string
  link: string
  description: string
}) => (
  <InstagramTileWrapper key={key} data-cy="igTile">
    <InstagramTileInner bg={bg} href={link} target="_blank" data-cy="igTileInner">
      <InstagramTileOverlay data-cy="igTileOverlay">
        <InstagramTileDescription data-cy="igTileDescription">
          {description.substring(0, 120)}...
        </InstagramTileDescription>
      </InstagramTileOverlay>
    </InstagramTileInner>
  </InstagramTileWrapper>
)

const IgFeed = ({ data }) => (
  <>
    {
      data?.map(({ node }) => (
        <InstagramTile
          key={node.id}
          bg={node.media_url}
          link={node.permalink}
          description={node.caption}
        />
      ))
    }
  </>
)

const Instagram = () => {
  const size = useWindowSize()
  const igGrid = size.width > 992 ? (size.width / 5) * 2 : size.width

  return (
    <Wrapper data-cy="igWrapper">
      <Title>Sledujte @beskydsketury na Instagramu!</Title>
      <Inner screenWidth={igGrid}>
      <StaticQuery
        query={graphql`
          query MyQuery {
            allInstagramContent {
              edges {
                node {
                  caption
                  media_url
                  permalink
                }
              }
            }
          }
        `}
        render={data => <IgFeed data={data.allInstagramContent.edges} />
        }
      />
      </Inner>
    </Wrapper>
  )
}

export default Instagram
