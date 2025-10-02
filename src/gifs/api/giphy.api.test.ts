import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphy.api', () => {

    test('should be configured correctly.', () => {
        // console.log(giphyApi.defaults);
        const params = giphyApi.defaults.params;

        //To Be para primitivos
        expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');

        expect(params).toStrictEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY,
        });
    })
});