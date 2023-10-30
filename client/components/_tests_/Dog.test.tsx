// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { test, describe, expect } from 'vitest'
import '../../test/setup.tsx'

import Dog from '../Dog.tsx'

describe('<Dog /> component', () => {
  test("Renders a dog's name", () => {
    // Arrange
    render(<Dog name="Toodles" breed="Poodle" superpower="Rocket Paws" />)

    // Act

    // Assert
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent('Toodles')
  })

  test('Renders an appropriate alt tag for an image', () => {
    // Arrange
    render(
      <Dog
        name="Toodles"
        breed="Pug"
        superpower="Rocket Paws"
        image="/images/pug.png"
      />
    )
    // Act

    // Assert
    const alt = screen.getByAltText('Toodles is a Pug')
    // const altText = screen.getByRole('alt')
    expect(alt).toHaveAttribute('src', '/images/pug.png')
    // expect(altText).toHaveTextContent('Toodles is a Poodle')
  })
})
