import request from "@/utils/request";

export const getUsers = (params: any) =>
  request({
    url: "/users",
    method: "get",
    params
  });

export const getUserInfo = (data: any) =>
  request({
    url: "/user/info",
    method: "post",
    data
  });

export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: "get"
  });

export const getUser = (id: number, params: any) =>
  request({
    url: `/users/${id}`,
    method: "get",
    params
  });
export const getUserPermissions = (id: number, params: any) =>
  request({
    url: `/users/${id}/permissions`,
    method: "get",
    params
  });
export const addUser = (data: any) =>
  request({
    url: `/users`,
    method: "post",
    data
  });
export const updateUser = (id: number, data: any) =>
  request({
    url: `/users/${id}`,
    method: "put",
    data
  });

export const deleteUser = (username: string) =>
  request({
    url: `/users/${username}`,
    method: "delete"
  });

export const login = (data: any) =>
  request({
    url: "/login",
    method: "post",
    data
  });

export const logout = () =>
  request({
    url: "/logout",
    method: "post"
  });

export const register = (data: any) =>
  request({
    url: "/register",
    method: "post",
    data
  });
