import { render, screen } from '@testing-library/react'
import PostCard from '../PostCard'
import teamData from '@/data/team.json'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('PostCard Component', () => {
  it('renders all team members from JSON data', () => {
    render(<PostCard />)

    // Check that the first team member is rendered
    expect(screen.getByText(teamData[0].name)).toBeInTheDocument()
    expect(screen.getByText(teamData[0].role)).toBeInTheDocument()
  })

  it('renders correct number of team member cards', () => {
    render(<PostCard />)

    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(teamData.length)
  })

  it('renders team member images with proper alt text', () => {
    render(<PostCard />)

    const firstMember = teamData[0]
    const altText = `${firstMember.name} - ${firstMember.role}`
    const image = screen.getByAltText(altText)

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', firstMember.image)
  })

  it('renders links to individual team member pages', () => {
    render(<PostCard />)

    const firstMemberLink = screen.getAllByRole('link', { name: /read more/i })[0]
    expect(firstMemberLink).toHaveAttribute('href', `/team/${teamData[0].slug}`)
  })

  it('displays team member dates', () => {
    render(<PostCard />)

    const dates = screen.getAllByText(teamData[0].date)
    expect(dates.length).toBeGreaterThan(0)
  })
})
