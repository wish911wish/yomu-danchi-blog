import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import 'twin.macro'
import tw, { styled } from 'twin.macro'

type Props = {}

const Footer = styled.footer`
    ${tw`mt-8`}
`

const Container = tw.div`
    mx-auto my-0 max-w-4xl px-2 pb-4
`

const Layout: React.FC<Props> = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <Container>
                <main>{children}</main>
                <Footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </Footer>
            </Container>
        </>
    )
}

export default Layout
