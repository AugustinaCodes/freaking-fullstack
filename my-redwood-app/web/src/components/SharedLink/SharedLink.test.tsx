import { render, screen } from '@redwoodjs/testing/web'

import SharedLink from './SharedLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Link', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SharedLink
          title={''}
          username={''}
          points={123}
          commentCount={8}
          link={''}
        />
      )
    }).not.toThrow()
  })

  it('has title', () => {
    const title = 'Freaking Fullstack'
    render(
      <SharedLink
        title={title}
        username={'august'}
        points={123}
        commentCount={8}
        link={'https://freakingfullstack.com'}
      />
    )

    // act
    const titleElement = screen.getByText(title)

    // assert
    expect(titleElement).toBeInTheDocument()
  })

  it('has 0 points by default', () => {
    render(
      <SharedLink
        title="freaking fullstack"
        username="august"
        points={123}
        commentCount={8}
        link={'https://freakingfullstack.com'}
      />
    )
    const points = screen.getByTestId('point')
    expect(points).toBeInTheDocument()
  })

  it.skip('has a username for the person that submitted a link', () => {})
  it.skip('links to the person person that submitted a link', () => {})
  it.skip('has a comment count', () => {})
  it.skip('links to and individal shared link page', () => {})
  it.skip('links to the original URL', () => {})
  it('vote up', () => {
    // Mock a vote up function
    const handleVote = Jest.fn()

    render(
      <SharedLink
        title="freaking fullstack"
        username="august"
        points={123}
        commentCount={8}
        link={'https://freakingfullstack.com'}
      />
    )
    const voteUp = screen.getByText('VOTE UP')
    expect(voteUp).toBeInTheDocument()
  })
})
