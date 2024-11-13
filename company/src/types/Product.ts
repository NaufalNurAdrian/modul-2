export interface IProduct {
    fields: {
        title: string;
        slug: string;
        thumbnail: {
            fields: {
                file: {
                    url: string
                }
            }
        };
        price: string;
        description: string
    }
}