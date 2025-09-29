import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', () => {

    test("Should render the component ", () => {
        render(<MyCounterApp />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('counter: 5');
        expect(screen.getByRole('button', { name: '+1' }).innerHTML).toBeDefined()
        expect(screen.getByRole('button', { name: '-1' }).innerHTML).toBeDefined()
        expect(screen.getByRole('button', { name: 'Reset' }).innerHTML).toBeDefined()
    });


    test("Should increment the counter ", () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const buttonAdd = screen.getByRole('button', { name: '+1' });
        fireEvent.click(buttonAdd);
        expect(labelH1.innerHTML).toContain('counter: 6');
    });


    test("Should decrement the counter ", () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const buttonSusbtract = screen.getByRole('button', { name: '-1' });
        fireEvent.click(buttonSusbtract);
        expect(labelH1.innerHTML).toContain('counter: 4');

    });

    // test("Should reset the counter ", () => {
    //     render(<MyCounterApp />);

    //     const labelH1 = screen.getByRole('heading', { level: 1 });
    //     const buttonReset = screen.getByRole('button', { name: 'Reset' });
    //     const buttonSusbtract = screen.getByRole('button', { name: '-1' });
    //     fireEvent.click(buttonSusbtract);
    //     fireEvent.click(buttonSusbtract);
    //     fireEvent.click(buttonReset);
    //     expect(labelH1.innerHTML).toContain('counter: 5');

    // });

});