import React, { render } from '@testing-library/react';
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
    });