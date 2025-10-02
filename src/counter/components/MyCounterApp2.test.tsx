import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
// import { useCounter } from "../hooks/useCounter";

const handleAddMock = vi.fn();
const handleSusbtracMock = vi.fn();
const handleResetMock = vi.fn();


vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 30,
        handleAdd: handleAddMock,
        handleReset: handleResetMock,
        handleSusbtract: handleSusbtracMock,
    })
}));


describe('MyCounterApp', () => {

    test('Should Render Componente', () => {
        render(<MyCounterApp />);
        // screen.debug();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('counter: 30');
        expect(screen.getByRole('button', { name: '+1' }).innerHTML).toBeDefined()
        expect(screen.getByRole('button', { name: '-1' }).innerHTML).toBeDefined()
        expect(screen.getByRole('button', { name: 'Reset' }).innerHTML).toBeDefined()

    });

    test('Should Call hanldeAdd if button us clicked', () => {
        render(<MyCounterApp />);

        const button = screen.getByRole('button', { name: '+1' });
        fireEvent.click(button);
        expect(handleAddMock).toHaveBeenCalled();
        expect(handleAddMock).toHaveBeenCalledTimes(1);
        expect(handleSusbtracMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
    });

});