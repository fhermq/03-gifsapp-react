import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {
    const title = 'Test Tittle';
    const description = 'Description test';

    test('Should render the tittle Correctly', () => {
        render(<CustomHeader title={title} />);
        //Validate that assert the title
        expect(screen.getByText(title)).toBeDefined();
        expect(screen.getByText(title)).not.toBeNull();
    });

    test('Should render the descripction when provided', () => {
        render(<CustomHeader title={title} description={description} />);
        //Validate that assert the description
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByText(description)).not.toBeNull();

    });

    test('Should render the descripction when provided - ByRole', () => {
        render(<CustomHeader title={title} description={description} />);
        //Validate that assert the description
        expect(screen.getByRole('paragraph')).toBeDefined;
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);        
    });

    test('Should not render the description when not provided <p>', async () => {
        // const { container } = render(<CustomHeader title={title} description={description} />);
        const { container } = render(<CustomHeader title={title} />);
        const pElement = container.querySelector('p');
        console.log(pElement?.innerHTML);
        expect(pElement).toBeNull();
    });

});