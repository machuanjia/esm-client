import request from "@/utils/request";

export const getOrganizations = (params: any) =>
  request({
    url: "/organizations",
    method: "get",
    params
  });
export const addOrganization = (data: any) =>
  request({
    url: "/organizations",
    method: "post",
    data
  });
export const getOrganization = (id: number, params: any) =>
  request({
    url: `/organizations/${id}`,
    method: "get",
    params
  });
export const updateOrganization = (id: number, data: any) =>
  request({
    url: `/organizations/${id}`,
    method: "put",
    data
  });

export const deleteOrganization = (id: number) =>
  request({
    url: `/organizations/${id}`,
    method: "delete"
  });
