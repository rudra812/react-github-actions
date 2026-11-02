import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Code step by step' })
    ).toBeInTheDocument()
  })

  it('renders the feature heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Feature changes' })
    ).toBeInTheDocument()
  })
})