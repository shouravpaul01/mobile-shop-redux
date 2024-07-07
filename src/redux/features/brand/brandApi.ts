import { baseApi } from "../../api/baseApi";

type TBrand = {
  id?: string;
  name: string;
  description?: string;
};
const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBrand: builder.mutation({
      query: (data) => ({
        url: "/brands",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["brands"],
    }),
    getAllBrands: builder.query({
      query: (query) => ({
        url: `/brands?searchTerm=${query.searchTerm || ''}&page=${query.page || ''}`,
        method: "GET",
      }),
      providesTags: ["brands"],
    }),
    getSingleBrand: builder.query({
      query: (brandId) => ({
        url: `/brands/${brandId}`,
        method: "GET",
      }),
    }),
    updateBrand: builder.mutation({
      query: (data) => {
        return {
          url: `/brands/${data._id}`,
          method: "PATCH",
          body: data.brand,
        };
      },
      invalidatesTags: ["brands"],
    }),
    updateStatusBrand: builder.mutation({
      query: (data) => ({
        url: `/brands/update-status/${data.brandId}?status=${data.status}`,
        method: "PATCH",
      }),
      invalidatesTags: ["brands"],
    }),
  }),
});

export const {
  useCreateBrandMutation,
  useGetAllBrandsQuery,
  useGetSingleBrandQuery,
  useUpdateBrandMutation,
  useUpdateStatusBrandMutation,
} = brandApi;
