import { UrlShortener } from './url-shortener';
import { UrlShortenerConfig } from './url.shortener-config';

const urlToBeShortenned = 'https://vvilelaj.dev?q=qweqweqweqweqweqweqweqweqweqweqweqweqweqweqwedadsadads09'
const apiKey = 'AIzaSyAORTPAW2ItgZupvWHGjnJOR5MnaB2fIh8';
const urlPrefix = 'https://dl.vvilelaj.dev';

const shortener = new UrlShortener(new UrlShortenerConfig(apiKey, urlPrefix));

shortener.getMinimunUrl(urlToBeShortenned).then((result) => {
    console.log(result);
})

shortener.getShortUrl(urlToBeShortenned).then((result) => {
    console.log(result);
})



