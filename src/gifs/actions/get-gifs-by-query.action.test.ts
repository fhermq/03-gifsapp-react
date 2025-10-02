import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";
import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from '../../../test/mock/giphy.response.data';


describe('getGifByQuery', () => {
    let mock = new AxiosMockAdapter(giphyApi);

    beforeEach(() => {
        mock = new AxiosMockAdapter(giphyApi);
    });

    // test('Should return a list of gifs', async() => {
    //     const gifs = await getGifsByQuery('Goku');

    //     const[gif1 ] = gifs;
    //     // console.log(gif1);
    //     expect(gifs.length).toBe(10);
    //     expect(gif1).toStrictEqual({
    //         id: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //     });
    // });

    test('Should return a list of gifs', async () => {
        mock.onGet('/search').reply(200, giphySearchResponseMock);
        const gifs = await getGifsByQuery('goku');

        expect(gifs.length).toBe(10);

        gifs.forEach(gif => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
        });
        // console.log(gifs)
    });

    test('Should return an empty list of gifs if query is empty', async () => {
        // mock.onGet('/search').reply(200, giphySearchResponseMock);
        mock.restore();
        const gifs = await getGifsByQuery('');
        // console.log(gifs);
        expect(gifs.length).toBe(0);

    });

    test('Should handle error when the API returns and error ', async () => {
        // mock.onGet('/search').reply(200, giphySearchResponseMock);
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {
            // console.log("Probando el Mock Test Error")
        });

        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request',
            }
        });
        const gifs = await getGifsByQuery('goku');
        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
        // console.log(gifs);

    });
});