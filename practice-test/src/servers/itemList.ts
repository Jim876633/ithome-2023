import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export type ItemType = {
  title: string;
  id: number;
};

type ResponseType<T> = {
  data: T;
};

type ResponseErrorType = {
  message: string;
};

const customBaseQuery: BaseQueryFn<string | FetchArgs, unknown> = async (
  args,
  api,
  extraOptions
) => {
  const result = await fetchBaseQuery({ baseUrl: "/itemList" })(
    args,
    api,
    extraOptions
  );
  if (result.error) {
    const { data } = result.error;
    const errorData = data as ResponseErrorType;
    alert(errorData.message);
  }
  if (result.data) {
    const responseData = result.data as ResponseType<unknown>;
    result.data = responseData.data;
  }
  return result;
};

export const itemListApi = createApi({
  reducerPath: "itemListApi",
  baseQuery: customBaseQuery,
  tagTypes: ["Item"],
  endpoints: (builder) => ({
    getList: builder.query<ItemType[], void>({
      query: () => "/list",
      providesTags: ["Item"],
    }),
    addItem: builder.mutation<ItemType[], ItemType>({
      query: (item) => ({
        url: "/add",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["Item"],
    }),
    removeItem: builder.mutation<ItemType[], number>({
      query: (id) => ({
        url: "/delete",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Item"],
    }),
  }),
});

export const { useGetListQuery, useAddItemMutation, useRemoveItemMutation } =
  itemListApi;
