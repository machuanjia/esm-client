import request from "@/utils/request";

export const getApplicationPermissions = (appId: number, params: any) =>
  request({
    url: `/permissions/${appId}`,
    method: "get",
    params
  });

export const addApplicationPermission = (appId: number, data: any) =>
  request({
    url: `/permissions/${appId}`,
    method: "post",
    data
  });

export const getApplicationPermission = (
  appId: number,
  id: number,
  params: any
) =>
  request({
    url: `/permissions/${appId}/${id}`,
    method: "get",
    params
  });

export const updateApplicationPermission = (
  appId: number,
  id: number,
  data: any
) =>
  request({
    url: `/permissions/${appId}/${id}`,
    method: "put",
    data
  });

export const deleteApplicationPermission = (appId: number, id: number) =>
  request({
    url: `/permissions/${appId}/${id}`,
    method: "delete"
  });
