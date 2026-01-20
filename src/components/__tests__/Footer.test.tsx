import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer Component', () => {
  it('renders footer navigation links', () => {
    render(<Footer />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Programs')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('renders copyright text with current year', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${currentYear} NWRFHP`, 'i'))).toBeInTheDocument()
  })

  it('all social links open in new tab', () => {
    render(<Footer />)

    const socialLinks = screen.getAllByRole('link', { name: /facebook|instagram|twitter/i })
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
