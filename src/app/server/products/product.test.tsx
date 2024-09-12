import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FetchProducts from './page'; // Adjust this import path based on your project structure

// Mock the global fetch function
beforeEach(() => {
  fetchMock.resetMocks();
});

describe('FetchProducts Component', () => {
  it('renders a list of products after fetching', async () => {
    // Mock the fetch API response
    const mockProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
    fetchMock.mockResponseOnce(
      JSON.stringify(mockProducts)
    );

    // Render the server component
    const { container } = render(await FetchProducts());

    // Check if the product heading is rendered
    expect(screen.getByText('Products')).toBeInTheDocument();

    // Check if the product names are rendered
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 22')).toBeInTheDocument();

    // Check if the links are rendered correctly
    const product1Link = container.querySelector('a[href="/server/products/1"]');
    const product2Link = container.querySelector('a[href="/server/products/2"]');

    expect(product1Link).toBeInTheDocument();
    expect(product2Link).toBeInTheDocument();
  });

  it('renders empty list when no products are returned', async () => {
    // Mock an empty fetch API response
    fetchMock.mockResponseOnce(JSON.stringify([]));

    // Render the server component
    render(await FetchProducts());

    // Check if the product heading is rendered
    expect(screen.getByText('Products')).toBeInTheDocument();

    // Ensure no product links are rendered
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
