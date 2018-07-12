export class VideoGame {
    public name: string;
    public publisher: string;
    public imagePath: string;
    public description: string;
    public dateOfRelease: string;
    public trailerPath: string;

    constructor(name: string, publisher: string, imagePath: string, description: string, dateOfRelease: string, trailerPath: string) {
        this.name = name;
        this.publisher = publisher;
        this.imagePath = imagePath;
        this.description = description;
        this.dateOfRelease = dateOfRelease;
        this.trailerPath = trailerPath;
    }
}
