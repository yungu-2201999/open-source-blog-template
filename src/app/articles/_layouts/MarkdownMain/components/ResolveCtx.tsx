// components/mdx-remote.js
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import H1 from './layout/h-title/h1'
import { JSX, ReactNode } from 'react'

const components = {
  h1: (props: JSX.IntrinsicAttributes & { children?: ReactNode | undefined }) => (
    <H1 {...props} className="large-text">
      {props.children}
    </H1>
  ),
}

export default function CustomMDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}