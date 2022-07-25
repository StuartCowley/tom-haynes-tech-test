import React, { render, screen} from '@testing-library/react';
import SearchResults from "../components/SearchResults";

describe("Search", () => {
    const validProps = {
        searchResults: ["moon", "venus"]
    };

    it("renders search result component correctly", () => {
        const { asFragment } = render(
            <SearchResults searchResults={validProps.searchResults} />);
            expect(asFragment()).toMatchSnapshot();
        });

        it("renders placeholder if no results returned", () => {
            const validProps = [];
            render(<SearchResults results={validProps} />);
      
            const placeholderMessage = screen.getByText("No results");
      
            expect(placeholderMessage).toBeInTheDocument();
          });
      });