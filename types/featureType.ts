interface featureType {
    id: string,
    type: string,
    geometry: {
        type: string,
        coordinates: [
            number,
            number
        ]
    },
    properties: {
        fac_nam: string,
        fac_tel: string,
        cat_nam: string,
        fac_o_add: string,
        fac_n_add: string,
    },
}