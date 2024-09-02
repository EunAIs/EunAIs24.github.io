import styled from 'styled-components'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid'
import PostItem from './PostItem'

type PostListProps = {
    posts: Queries.IndexPageQuery['allContentfulPost']['nodes']
}

const Wrapper = styled(MasonryInfiniteGrid)`
  margin-top: 40px;
`

// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   margin-top: 40px;
// `

export default function PostList({ posts }: PostListProps) {
    return (
        <Wrapper gap={20}>
            {posts.map(({ title, category, slug, date, thumbnail, description }) => (
                // <div key={slug}>
                //   <GatsbyImage
                //     image={thumbnail?.gatsbyImageData as IGatsbyImageData}
                //     alt={title as string}
                //   />
                //   <div>
                //     {title} / {date} / {slug}
                //   </div>
                //   <div>{description?.description}</div>
                // </div>
                <PostItem
                    title={title as string}
                    date={date as string}
                    category={category as string[]}
                    thumbnail={thumbnail?.gatsbyImageData as IGatsbyImageData}
                    description={description?.description as string}
                    slug={slug as string}
                    key={slug}
                />
            ))}
        </Wrapper>
    )
}
