import { useState } from "react";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodosQuery,
  usePostTodoMutation,
} from "../../redux/api/crud";
import scss from "./todo.module.scss";


const TodoList = () => {
  const [edit, setEdit] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [postTodo] = usePostTodoMutation();
  const { data, isLoading } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();
  const addFunc = async () => {
    if (title !== "" || url !== "") {
      const newData = {
        title,
        img: url,
      };
      await postTodo(newData);
      setTitle("");
      setUrl("");
    }
  };

  const deletefunc = async (_id: number) => {
    await deleteTodo(_id);
  };

  const upData = async (_id: number) => {
    const newData = {
      title: editTitle,
      img: editUrl,
    };
    await editTodo({ _id, newData });
    setEdit(null);
  };



  return (
    <div className={scss.mainTodo}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className={scss.addButton} onClick={addFunc}>
          add
        </button>
      </div>
      {isLoading ? <h1>...isLoadind</h1> : null}
      <div className={scss.todoCard}>
        {data?.map((item) => (
          <div key={item._id} className={scss.todo}>
            {edit === item._id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={editUrl}
                  onChange={(e) => setEditUrl(e.target.value)}
                />
                <button onClick={() => upData(item._id)}>save</button>
              </>
            ) : (
              <>
                <h1>{item.title}</h1>
                <img src={item.img} alt="" />
                <button
                  className={scss.deleteButton}
                  onClick={() => deletefunc(item._id)}
                >
                  delete
                </button>
                <button
                  onClick={() => {
                     setEditTitle(item.title);
                     setEditUrl(item.img);
                     setEdit(item._id);
                  }}
                >
                  edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
