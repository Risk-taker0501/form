import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/CompanyRegistration';
import { MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <div className="w-screen">
      <MantineProvider
        theme={{
          colorScheme: 'dark',
          components: {
            Input: {
              styles: () => ({
                root: {
                  color: 'black',
                },
                input: {
                  background: '#16293c',
                },
                label: {
                  color: 'white',
                },
              }),
            },
            TextInput: {
              styles: () => ({
                root: {
                  color: 'black',
                },
                input: {
                  background: '#16293c',
                },
                label: {
                  color: 'white',
                },
              }),
            },
            NumberInput: {
              styles: () => ({
                root: {
                  color: 'black',
                },
                input: {
                  background: '#16293c',
                },
                label: {
                  color: 'white',
                },
              }),
            },
            Text: {
              styles: () => ({
                root: {
                  color: 'white',
                },
              }),
            },
            Select: {
              styles: () => ({
                root: {
                  color: 'black',
                },
                dropdown: {
                  background: '#16293c',
                },
                input: {
                  background: '#16293c',
                },
                item: {
                  '&[data-hovered]': {
                    background: '#1e3a5a', // Lighter/darker shade for hover
                    color: 'white',
                  },
                },
                label: {
                  color: 'white',
                },
              }),
            },
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}
