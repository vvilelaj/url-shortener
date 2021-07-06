/**
 * A class that holds the configuration parameter needed to instantiate a  UrlShortener instance.
 */
export class UrlShortenerConfig {
    /**
     * The API key created by the firebase web application. 
     * Go to Firebase console > firebase project > settings > general > you apps
     * @param apiKey 
     * The subdomain registered for shortening the urls.
     * Go to Firebase console > firebase project > engage > dynamyc links
     * @param urlPrefix 
     */
    constructor(public readonly apiKey: string, public readonly urlPrefix: string) { }
}
