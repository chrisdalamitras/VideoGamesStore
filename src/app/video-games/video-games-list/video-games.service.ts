import { VideoGame } from '../video-games.model';

export class VideoGamesService {

    private videoGameList: VideoGame[] = [
        new VideoGame('Resident Evil', 'Capcom',
            'https://cdn.shopify.com/s/files/1/0942/1228/products/3xy8D58.jpeg?v=1439151127',
            'Survive the horrors that lie in an abandoned, full of secrets mansion', '22-3-1996',
            'https://www.youtube.com/embed/9uawuVAj3vo',
            ['PlayStation', 'Microsoft Windows', 'Sega Saturn', 'Nintendo DS'],
            ['Survival horror'],
            ['Single-player'],
            '91/100',
            4.5),

        new VideoGame('Devil May Cry', 'Capcom',
            'https://images-na.ssl-images-amazon.com/images/I/51YCB6D1ECL.jpg',
            'Use your demonic powers to save the earth from total destruction', '23-8-2001',
            'https://www.youtube.com/embed/zZIKeE199Tk',
            ['PlayStation 2', 'PlayStation 3 (HD)', 'PlayStation 4 (HD)', 'Xbox 360 (HD)', 'Xbox One (HD)', 'Microsoft Windows (HD)'],
            ['Action-adventure', 'hack and slash'],
            ['Single-player'],
            '94/100',
            5)
    ];

    getVideoGamesList() {
        return this.videoGameList.slice(); // we use slice so we get o copy of the array not the actual reference to the array
    }

    getVideoGame(index: number) {
        return this.videoGameList[index];
    }

}

