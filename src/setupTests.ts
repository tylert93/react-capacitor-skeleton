import { afterEach, expect } from 'vitest';

import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// Mock matchmedia
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// beforeAll(() => {
//   vi.mock('react-router', async () => {
//     const actual =
//       await vi.importActual<typeof import('react-router')>('react-router');
//     return {
//       ...actual,
//       useNavigate: vi.fn(),
//     };
//   });
// });
