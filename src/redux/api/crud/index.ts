import { api as index } from "..";
import { TODO } from "./trype";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TODO.GetTodoResponse, TODO.GetTodoRequest>({
      query: () => ({
        url: "",
        method: "Get",
      }),
      providesTags: ["crud"],
    }),
    postTodo: builder.mutation<TODO.CreateResponse, TODO.CreateRequests>({
      query: (newData) => ({
        url: "",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["crud"],
    }),
    deleteTodo: builder.mutation({
      query: (_id) => ({
        url: `/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["crud"],
    }),
    editTodo: builder.mutation<TODO.UpdataResponse, TODO.UpdataRequest>({
      query: ({ _id, newData }) => ({
        url: `/${_id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["crud"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = api;
