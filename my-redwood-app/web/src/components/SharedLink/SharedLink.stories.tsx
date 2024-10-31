// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Link from './SharedLink'

const meta: Meta<typeof Link> = {
  component: Link,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Link>

export const Primary: Story = {
  args: {
    title: 'My Link',
    // points: 132,
    username: 'August',
    // commentCount: 8,
    link: 'hehe'
  }
}

export const LinkWithPointsAndComments: Story = {
  args: {
    title: 'My Link',
    points: 132,
    username: 'August',
    commentCount: 8,
    link: 'hehe'
  }
}