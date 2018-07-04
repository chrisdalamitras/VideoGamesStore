export class VideoGame {
    public name: string;
    public publisher: string;
    public imagePath: string;
    public description: string;
    public dateOfRelease: string;

    constructor(name: string, publisher: string, imagePath: string, description: string, dateOfRelease: string) {
        this.name = name;
        this.publisher = publisher;
        this.imagePath = imagePath;
        this.description = description;
        this.dateOfRelease = dateOfRelease;
    }
}
