import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react'

import BlogPost from './'

describe('BlogPost', () => {

  afterEach(() => {
    cleanup()
  })

  it('this test will fail', () => {
    const component = renderComponent(<BlogPost />)
    component.debug();
    expect(true).toBe(false)
  })
})
