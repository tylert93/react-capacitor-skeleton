import { BrowserRouter } from 'react-router-dom';
import { Mock, vi } from 'vitest';

import { useAppMetaStore } from '@app/stores';
import { Platform, Section } from '@app/types';
import { render } from '@testing-library/react';

import Layout from './Layout';

vi.mock('../../stores/useAppMetaStore.ts', () => ({
  default: vi.fn().mockImplementation(() => ({
    pageTitle: 'title',
    appSection: Section.EXPLORE,
  })),
}));

describe('Layout', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should render without crashing', () => {
    const { baseElement } = render(<Layout platform={Platform.WEB} />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeDefined();
  });

  test('should render explore section', () => {
    (useAppMetaStore as Mock).mockImplementationOnce(() => ({
      pageTitle: 'title',
      appSection: Section.EXPLORE,
    }));
    const { baseElement } = render(<Layout platform={Platform.WEB} />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeDefined();
  });

  test('should render search section', () => {
    (useAppMetaStore as Mock).mockImplementationOnce(() => ({
      pageTitle: 'title',
      appSection: Section.SEARCH,
    }));
    const { baseElement } = render(<Layout platform={Platform.WEB} />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeDefined();
  });

  test('should render messages section', () => {
    (useAppMetaStore as Mock).mockImplementationOnce(() => ({
      pageTitle: 'title',
      appSection: Section.MESSAGES,
    }));
    const { baseElement } = render(<Layout platform={Platform.WEB} />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeDefined();
  });

  test('should render profile section', () => {
    (useAppMetaStore as Mock).mockImplementationOnce(() => ({
      pageTitle: 'title',
      appSection: Section.PROFILE,
    }));
    const { baseElement } = render(<Layout platform={Platform.WEB} />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeDefined();
  });
});
