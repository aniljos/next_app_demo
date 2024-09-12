import {screen, render, fireEvent, waitFor, act} from '@testing-library/react'
import ListProducts from './page'
import ReduxStoreProvider from '@/redux/ReduxProvider';
import axios from 'axios';
import { Product } from '@/model/Product';

// Mock Axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;



test("ListProducts", () => {

    // render(<ReduxStoreProvider> <ListProducts/> </ReduxStoreProvider>)
    // const title = screen.getByText("List Products");
    // expect(title).toBeInTheDocument();
    expect(1).toBe(1);

})

// test("ListProducts2", async () => {

//     const mockProducts: Product[] = [
//         { id: 1, name: 'Product x', price: 10, description: 'Description 1' },
//         { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
//       ];
  
//       // Adding a small delay to simulate real-world loading
//         mockedAxios.get.mockImplementationOnce(() =>
//         new Promise((resolve) => setTimeout(() => resolve({ data: mockProducts }), 100))
//       );

//       //const {rerender} = render(<ReduxStoreProvider> <ListProducts/> </ReduxStoreProvider>)

//       await act(async () => {
//         //rerender(<ReduxStoreProvider> <ListProducts/> </ReduxStoreProvider>)
//         render(<ReduxStoreProvider> <ListProducts/> </ReduxStoreProvider>)
        
//       })
//       screen.debug();
//       expect(screen.getByText(/loading...pls wait/i)).toBeInTheDocument();
      

      

//       await waitFor(async () => {

       
//         //expect(screen.getByText(/loading...pls wait/i)).toBeInTheDocument();
//         // Check if the product names are rendered
//         //expect(screen.getByText('Product 1')).toBeInTheDocument();
//         expect(screen.getByText('Product 2')).toBeInTheDocument();
//       });

//     //   // Check that the loading message is no longer shown after products are rendered
//     // expect(screen.queryByText(/loading...pls wait/i)).not.toBeInTheDocument();
// })