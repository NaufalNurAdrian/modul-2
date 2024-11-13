export interface IVideo {
    fields: {
        title: string;
        introduction: {
            fields: {
                file: {
                    url: string;
                };
            };
        };
    };
}