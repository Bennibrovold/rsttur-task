export interface Image {
    sm: string;
    md: string;
    lg: string;
}

export interface Date {
    typeDate: string,
    date: Array<string>
}

export interface Images {
    sm: Array<string>,
    md: Array<string>,
    lg: Array<string>
}

export interface Duration {
    hour?: number,
    day?: number,
    night?: number
}

export interface Price {
    factPrice: number,
    price: number,
    currency: string,
    typePrice: string,
}

export interface ICard {
    id: number,
    url: string,
    image: Image,
    title: string,
    location: string,
    date: Date,
    images: Images,
    duration: Duration,
    price?: Price
}