import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import RemoveBackground from './RemoveBackground';

jest.mock('axios');
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
    status: {
        bgRemoved: false,
    },
});

test('renders RemoveBackground component', () => {
    const { getByText } = render(
        <Provider store={store}>
            <RemoveBackground />
        </Provider>
    );
    expect(getByText(/Remove Background from Images/i)).toBeInTheDocument();
});

test('handles file selection', () => {
    const { getByLabelText } = render(
        <Provider store={store}>
            <RemoveBackground />
        </Provider>
    );
    const fileInput = getByLabelText(/choose files/i);
    const files = [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })];
    
    fireEvent.change(fileInput, { target: { files } });
    expect(fileInput.files).toHaveLength(1);
    expect(fileInput.files[0].name).toBe('chucknorris.png');
});

test('removes background from selected images', async () => {
    const mockResponse = { data: { result: 'https://example.com/processed.png' } };
    axios.post.mockResolvedValueOnce(mockResponse);
    
    const { getByText, getByLabelText, findByAltText } = render(
        <Provider store={store}>
            <RemoveBackground />
        </Provider>
    );
    const fileInput = getByLabelText(/choose files/i);
    const files = [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })];
    
    fireEvent.change(fileInput, { target: { files } });
    fireEvent.click(getByText(/remove background/i));
    
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(await findByAltText(/processed/i)).toBeInTheDocument();
});
