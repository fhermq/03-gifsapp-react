import { describe, expect, test } from "vitest";
import { useGifs } from "./useGifs";
import { act, renderHook } from "@testing-library/react";

describe('useGifs', () => {

    test('Should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());
        expect(result.current.gifs.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined;
        expect(result.current.handleTermClicked).toBeDefined;
        expect(result.current.previousTerms.length).toBe(0);
    });

    test('Should return a list of gifs',  async () => {
        const { result } = renderHook(() => useGifs());
        //Se ejecuta una sola vez.
        await act(async () => {
            await result.current.handleSearch('goku');
        });
        // console.log(result.current.gifs);
        expect(result.current.gifs.length).toBe(10);

    });

    test('Should return a list of gifs when hanldeTermClicked is called',  async () => {
        const { result } = renderHook(() => useGifs());
        //Se ejecuta una sola vez.
        await act(async () => {
            await result.current.handleTermClicked('dragon ball');
        });
        expect(result.current.gifs.length).toBe(10);
    });

});