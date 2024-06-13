import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store'; // Adjust the path to the store file
import App from './App';

test('renders learn react link', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(getByText(/learn react/i)).toBeInTheDocument();
});
