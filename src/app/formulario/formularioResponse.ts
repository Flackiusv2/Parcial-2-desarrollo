export class FormularioResponse {
    joke: string;
    title: string;
    rating: number;

    constructor(joke: string, title: string, rating: number) {
        this.joke = joke;
        this.title = title;
        this.rating = rating;
    }
}