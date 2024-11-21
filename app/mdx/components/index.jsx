import NextImage from 'next/image'
import {Code} from 'bright'
import {MDXThought} from './mdx-thought'
import {MDXImage} from './mdx-image'
import Info from '../../components/icons/other/info'
import Home from '../../components/icons/other/home'

Code.theme = {
  dark: 'solarized-dark',
  light: 'material-palenight',
  lightSelector: '[data-theme="light"]',
}

export const mdxComponents = {
  pre: ({children, ...props}) => {
    return <Code {...props}>{children}</Code>
  },
  img: MDXImage,
  Image: NextImage,
  Details: ({children, summary, ...props}) => (
    // Necessary due to a hydration error
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
  Thought: MDXThought,
  InfoIcon: Info,
  HomeIcon: Home,
}
