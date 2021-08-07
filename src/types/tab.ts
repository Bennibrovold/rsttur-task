export interface ITabParams {
    name: string,
    value: number
}

export interface ITab {
    id: number,
    type: string,
    active: boolean,
    count: string,
    name: string,
    url: string,
    textLink: string,
    params: Array<ITabParams>
}
