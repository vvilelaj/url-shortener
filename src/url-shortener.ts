import axios from 'axios';
import { UrlShortenerConfig } from './url.shortener-config';

export enum SuffixOption {
    UNGUESSABLE = 'UNGUESSABLE',
    SHORT = 'SHORT'
};

/**
 * A class that exposes two methods for shortening URLs.
 * It uses firebase dynamic links for shortening the urls.
 */
export class UrlShortener {
    private firebaseShortenerUrl = 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks';

    constructor(private readonly config: UrlShortenerConfig) { }

    async invokeShortLink(urlToBeShortenned: string, suffixOption: SuffixOption): Promise<string | null> {
        try {
            let req = {
                "longDynamicLink": `${this.config.urlPrefix}/?link=${urlToBeShortenned}`,
                "suffix": {
                    "option": suffixOption.toString()
                }
            };

            return (await axios
                .post(`${this.firebaseShortenerUrl}?key=${this.config.apiKey}`, req
                )).data.shortLink;
        } catch (error) {
            console.error(`There was an error invoking ${this.firebaseShortenerUrl}`);
            console.error(`Api Key ${this.config.apiKey}`);
            console.error(`Url Prefix ${this.config.urlPrefix}`);
            console.error(error);
            return Promise.resolve(null);
        }
    }
    /**
     * It shortens a URL passed as parameter
     * @param urlToBeShortenned the long url that would be shortened
     * @returns a string compose by urlPrefix and a suffix at least of 4 characters
     */
    async getMinimunUrl(urlToBeShortenned: string): Promise<string | null> {
        return await this.invokeShortLink(urlToBeShortenned, SuffixOption.SHORT);
    }

    /**
     *  It shortens a URL passed as parameter
     * @param urlToBeShortenned the long url that would be shortened
     * @returns a string compose by urlPrefix and a suffix of 17 characters
     */
    async getShortUrl(urlToBeShortenned: string): Promise<string | null> {
        return await this.invokeShortLink(urlToBeShortenned, SuffixOption.UNGUESSABLE);
    }
}
