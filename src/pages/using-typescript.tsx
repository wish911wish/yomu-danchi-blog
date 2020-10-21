import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'

type DataProps = {
    site: {
        buildTime: string
    }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
    <Layout>
        <SEO title="Using TypeScript" />
        <p>
            currently on the page:{path}
            {data.site.buildTime}
        </p>
        <p>
            <a href="https://www.gatsbyjs.com/docs/typescript/">documentation about TypeScript</a>
        </p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default UsingTypescript

export const query = graphql`
    {
        site {
            buildTime(formatString: "YYYY-MM-DD hh:mm a z")
        }
    }
`
