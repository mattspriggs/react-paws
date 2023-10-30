// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { test, describe, expect } from 'vitest'
import '../../test/setup.tsx'

import Dog from '../Dog.tsx'

describe('<Dog /> component', () => {
  test("Renders a dog's name", () => {
    // Arrange
    render(<Dog name="Toodles" breed="Poodle" superpower="Rocket Paws" />)
  })
  // Act

  // Assert
  const heading = screen.getByRole('heading')
  expect(heading).toHaveTextContent('Toodles')
})
