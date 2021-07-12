import { render, screen } from '@testing-library/react';
import Index from '../../src/pages/index';

test('Index', async () => {
   render(<Index />);

   const item = await screen.getByText('Hello, world!');
   expect(item).toBeTruthy();
   expect(item).toMatchSnapshot();
});
