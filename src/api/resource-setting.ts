import request from "@/utils/request";

export const getResourceCategorys = (params: any) =>
  request({
    url: "/resources/category",
    method: "get",
    params
  });

export const addResourceCategory = (data: any) =>
  request({
    url: "/resources/category",
    method: "post",
    data
  });

export const getResourceCategory = (id: number, params: any) =>
  request({
    url: `/resources/category/${id}`,
    method: "get",
    params
  });

export const updateResourceCategory = (id: number, data: any) =>
  request({
    url: `/resources/category/${id}`,
    method: "put",
    data
  });

export const deleteResourceCategory = (id: number) =>
  request({
    url: `/resources/category/${id}`,
    method: "delete"
  });

export const getResourceStatuses = (params: any) =>
  request({
    url: "/resources/status",
    method: "get",
    params
  });

export const addResourceStatus = (data: any) =>
  request({
    url: "/resources/status",
    method: "post",
    data
  });

export const getResourceStatus = (id: number, params: any) =>
  request({
    url: `/resources/status/${id}`,
    method: "get",
    params
  });

export const updateResourceStatus = (id: number, data: any) =>
  request({
    url: `/resources/status/${id}`,
    method: "put",
    data
  });

export const deleteResourceStatus = (id: number) =>
  request({
    url: `/resources/status/${id}`,
    method: "delete"
  });
