import request from "@/utils/request";

export const getResources = (params: any) =>
  request({
    url: "/resources",
    method: "get",
    params
  });

export const addResource = (data: any) =>
  request({
    url: "/resources",
    method: "post",
    data
  });

export const getResource = (id: number, params: any) =>
  request({
    url: `/resources/${id}`,
    method: "get",
    params
  });

export const updateResource = (id: number, data: any) =>
  request({
    url: `/resources/${id}`,
    method: "put",
    data
  });

export const deleteResource = (id: number) =>
  request({
    url: `/resources/${id}`,
    method: "delete"
  });

export const getResourceCategorys = (params: any) =>
  request({
    url: "/resources_category",
    method: "get",
    params
  });

export const addResourceCategory = (data: any) =>
  request({
    url: "/resources_category",
    method: "post",
    data
  });

export const getResourceCategory = (id: number, params: any) =>
  request({
    url: `/resources_category/${id}`,
    method: "get",
    params
  });

export const updateResourceCategory = (id: number, data: any) =>
  request({
    url: `/resources_category/${id}`,
    method: "put",
    data
  });

export const deleteResourceCategory = (id: number) =>
  request({
    url: `/resources_category/${id}`,
    method: "delete"
  });

export const getResourceStatuses = (params: any) =>
  request({
    url: "/resources_status",
    method: "get",
    params
  });

export const addResourceStatus = (data: any) =>
  request({
    url: "/resources_status",
    method: "post",
    data
  });

export const getResourceStatus = (id: number, params: any) =>
  request({
    url: `/resources_status/${id}`,
    method: "get",
    params
  });

export const updateResourceStatus = (id: number, data: any) =>
  request({
    url: `/resources_status/${id}`,
    method: "put",
    data
  });

export const deleteResourceStatus = (id: number) =>
  request({
    url: `/resources_status/${id}`,
    method: "delete"
  });
