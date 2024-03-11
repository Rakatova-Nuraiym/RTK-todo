/* eslint-disable @typescript-eslint/no-unused-vars */

export namespace TODO {
  type GetTodoRequest = void;
  type GetTodoResponse = {
    title: string;
    _id: number;
    img: string;
  }[];
  type CreateRequests = {
    title: string;
    img: string;
  };
  type CreateResponse = {
    title: string;
    _id: number;
    img: string;
  }[];
  type UpdataResponse = {
    _id?: number;
    newData: {
      title: string;
      img: string;
    };
  };
  type UpdataRequest = {
    newData: {
      _id?: number;
      title: string;
      img: string;
    };
  }[];
}
