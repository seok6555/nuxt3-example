export interface FeatureType {
    id: string;
    type: "Feature";
    geometry: {
        type: "Point";
        coordinates: number[];
    };
    properties: {
        fac_nam: string;
        fac_tel: string;
        cat_nam: string;
        fac_o_add: string;
        fac_n_add: string;
    };
}