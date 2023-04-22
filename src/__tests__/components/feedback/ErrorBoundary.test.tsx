import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from 'components/feedback/ErrorBoundary';

describe('ErrorBoundary', () => {
    it('renders error message when child component throws an error', () => {
      render(
        <ErrorBoundary message="test error message" />
        
      );
      const errorMessage = screen.getByText(/Something went wrong./i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
  