import { GatsbySSR } from 'gatsby'
import Layout from './src/components/common/Layout'

//전역 스타일 적용을 위한 create global style 함수에서 import를 비권장하는 함수가 뜨는데, 이를 해결하기 위한 방법. 검색엔진 최적화.
//index.tsx 에 export할 head 컴포넌트를 작성하여 이용했으나, ssr api를 사용해 빌드시 link태그를 작성, 반복을 줄이기 위해 변경됨
const HeadComponents = [
  <link
    rel="stylesheet"
    as="style"
    crossOrigin="anonymous"
    href="<https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css>"
    key="pretendard-font"
  />,
]

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
}) => {
  setHeadComponents(HeadComponents)
}

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}