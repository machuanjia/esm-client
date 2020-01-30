import request from "@/utils/request";

export const getApplications = (params: any) =>
  request({
    url: "/applications",
    method: "get",
    params
  });

export const addApplication = (data: any) =>
  request({
    url: "/applications",
    method: "post",
    data
  });

export const getApplication = (id: number, params: any) =>
  request({
    url: `/applications/${id}`,
    method: "get",
    params
  });

export const updateApplication = (id: number, data: any) =>
  request({
    url: `/applications/${id}`,
    method: "put",
    data
  });

export const deleteApplication = (id: number) =>
  request({
    url: `/applications/${id}`,
    method: "delete"
  });
