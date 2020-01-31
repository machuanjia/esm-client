import request from "@/utils/request";

export const getRoles = (params: any) =>
  request({
    url: "/roles",
    method: "get",
    params
  });

export const addRole = (data: any) =>
  request({
    url: "/roles",
    method: "post",
    data
  });

export const getRole = (id: number, params: any) =>
  request({
    url: `/roles/role/${id}`,
    method: "get",
    params
  });
export const updateRole = (id: number, data: any) =>
  request({
    url: `/roles/role/${id}`,
    method: "put",
    data
  });

export const deleteRole = (id: number) =>
  request({
    url: `/roles/role/${id}`,
    method: "delete"
  });

export const getGroups = (params: any) =>
  request({
    url: `/roles/groups`,
    method: "get",
    params
  });
export const getGroup = (id: number, params: any) =>
  request({
    url: `/routes/group/${id}`,
    method: "get",
    params
  });

export const addGroup = (data: any) =>
  request({
    url: `/routes/group`,
    method: "post",
    data
  });

export const updateGroup = (id: number, data: any) =>
  request({
    url: `/routes/group/${id}`,
    method: "put",
    data
  });

export const deleteGroup = (id: number) =>
  request({
    url: `/routes/group/${id}`,
    method: "delete"
  });
