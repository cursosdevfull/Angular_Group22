type Item = {
    title: string;
    field: string;
    pipe?: (...args: any) => any;
}

export type Metadata = Item[];
