import { api } from "./index";

const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: ({limit=10}) => `/products?limit=${limit}`,
        }),
         getProductById: build.query({
            query: (id) => `/products/${id}`,
        }),
    }),
    overrideExisting: false
})

export const {useGetProductsQuery, useGetProductByIdQuery} = productApi