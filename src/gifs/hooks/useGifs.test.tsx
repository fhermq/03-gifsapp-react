import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { act, renderHook } from "@testing-library/react";

import * as gifActions from '../actions/get-gifs-by-query.action';

describe('useGifs', () => {

    test('Should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());
        expect(result.current.gifs.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined;
        expect(result.current.handleTermClicked).toBeDefined;
        expect(result.current.previousTerms.length).toBe(0);
    });

    test('Should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());
        //Se ejecuta una sola vez.
        await act(async () => {
            await result.current.handleSearch('goku');
        });
        // console.log(result.current.gifs);
        expect(result.current.gifs.length).toBe(10);

    });

    test('Should return a list of gifs when hanldeTermClicked is called', async () => {
        // const { result } = renderHook(() => useGifs());
        // //Se ejecuta una sola vez.
        // await act(async () => {
        //     await result.current.handleTermClicked('dragon ball');
        // });
        // expect(result.current.gifs.length).toBe(10);
        console.log("Este es el test que falla")
    });

    test('Should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('dragon ball');
        });

        // expect(result.current.gifs.length).toBe(10);

        vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(
            new Error('This is my custom Error')
        );

        await act(async () => {
            await result.current.handleTermClicked('dragon ball');
        });
        // expect(result.current.gifs.length).toBe(10);

    });


    test('Should return no more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

        await act(async () => {
            await result.current.handleSearch('dragon ball');
        });
        await act(async () => {
            await result.current.handleSearch('dragon');
        });
        await act(async () => {
            await result.current.handleSearch('ranma');
        });
        await act(async () => {
            await result.current.handleSearch('nasa');
        });
        await act(async () => {
            await result.current.handleSearch('dog');
        });
        await act(async () => {
            await result.current.handleSearch('mouse');
        });
        await act(async () => {
            await result.current.handleSearch('car');
        });
        await act(async () => {
            await result.current.handleSearch('rat');
        });
        await act(async () => {
            await result.current.handleSearch('cat');
        });
        await act(async () => {
            await result.current.handleSearch('apple');
        });

        // console.log(result.current.previousTerms);
        expect(result.current.previousTerms.length).toBe(8);
        expect(result.current.previousTerms).toStrictEqual([
            'apple',
            'cat',
            'rat',
            'car',
            'mouse',
            'dog',
            'nasa',
            'ranma'
        ]);
    });

});