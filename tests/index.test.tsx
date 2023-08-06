import Home from "../app/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Home test', () => {
    it('should render title correctly', () => {
        render(<Home />);
        const { getByText } = screen
        expect(getByText("Delicious Bites: A Culinary Adventure")).toBeInTheDocument();
    })
})