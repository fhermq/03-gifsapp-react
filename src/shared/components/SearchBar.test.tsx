import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {

    test('Should render searchbar correctly', () => {
        const { container } = render(<SearchBar onQuery={() => { }} placeholder={""} button={""} />);

        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('Should call onQuery with the correct value after 700 ms', async () => {
        const onQuery = vi.fn();

        render(<SearchBar onQuery={onQuery} placeholder={""} button={""} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        // screen.debug();
        // await new Promise((resolve) => setTimeout(resolve, 701));

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        });

    });

    test('Should call only once with the last value (debounce)', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} placeholder={""} button={""} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });

    test('Should call on query when button clicked with the input value)', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} placeholder={""} button={""} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test');

    });

    test('Should the input has the correct placeholder value', () => {
        render(<SearchBar onQuery={ ()=>{} } placeholder={"Buscar un GIF"} button={""} />);
        expect(screen.getByPlaceholderText('Buscar un GIF')).toBeDefined;
        screen.debug();
    });




});