export interface IBuilder {
    getElement(
        text: string,
        id: string,
        klass: string,
        tag?: string): HTMLElement;
}
