export interface Country {
    name: string,
    language: string,
    population?: number,
    area?: number,
    economy: {
        agriculture?: number,
        energy?: number,
        turism?: number
    },
    hideMain?: boolean,
    hideSub?: boolean,
    show?: boolean

}