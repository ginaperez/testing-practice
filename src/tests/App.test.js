import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';
import { exportAllDeclaration } from '@babel/types';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container)
});

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null;
});

it('Renders todos', () => {
    act(() => {
        render(<App />, container)
    })
    expect(container.textContent).toContain('Get drivers license')
})