import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {

    test('Should initialize with default value of 10', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
    });

    test('Should initialize with value', () => {
        const initialValue = 20;
        const { result } = renderHook(() => useCounter(initialValue));
        expect(result.current.counter).toBe(initialValue);
    });

    test('Should call handleAdd and increment counter +1', () => {
        const { result } = renderHook(() => useCounter());

        //Se ejecuta una sola vez.
        act(() => {
            result.current.handleAdd();
        });
        expect(result.current.counter).toBe(11);
    });

    test('Should call handleSusbtract and decrement counter -1', () => {
        const { result } = renderHook(() => useCounter());
        //Se ejecuta una sola vez.
        act(() => {
            result.current.handleSusbtract();
        });
        expect(result.current.counter).toBe(9);
    });

    test('Should call handleReset and reset counter to Initial Value(10)', () => {
        const { result } = renderHook(() => useCounter());
        //Se ejecuta una sola vez.
        act(() => {
            result.current.handleAdd();
            result.current.handleAdd();
        });

        act(() => {
            result.current.handleReset();
        });
        expect(result.current.counter).toBe(10);
    });

});