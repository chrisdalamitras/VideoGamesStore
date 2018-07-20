export class VideoGame {
    public name: string;
    public publisher: string;
    public platforms: string[];
    public genres: string[];
    public modes: string[];
    public metaCritic: string;
    public imagePath: string;
    public description: string;
    public dateOfRelease: string;
    public trailerPath: string;
    public userRating: number;

    constructor(name: string, publisher: string, imagePath: string, description: string, dateOfRelease: string, trailerPath: string,
        platforms: string[], genres: string[], modes: string[], metaCritic: string, userRating: number) {
        this.name = name;
        this.publisher = publisher;
        this.imagePath = imagePath;
        this.description = description;
        this.dateOfRelease = dateOfRelease;
        this.trailerPath = trailerPath;
        this.platforms = platforms;
        this.genres = genres;
        this.modes = modes;
        this.metaCritic = metaCritic;
        this.userRating = userRating;
    }
}
