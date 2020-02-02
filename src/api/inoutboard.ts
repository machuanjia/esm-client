import request from "@/utils/request";

export const getCompanyEvents = (params: any) =>
  request({
    url: "/company-events",
    method: "get",
    params
  });

export const addCompanyEvent = (data: any) =>
  request({
    url: "/company-events",
    method: "post",
    data
  });

export const getCompanyEvent = (id: number, params: any) =>
  request({
    url: `/company-events/${id}`,
    method: "get",
    params
  });

export const updateCompanyEvent = (id: number, data: any) =>
  request({
    url: `/company-events/${id}`,
    method: "put",
    data
  });

export const deleteCompanyEvent = (id: number) =>
  request({
    url: `/company-events/${id}`,
    method: "delete"
  });

export const getStatus = (params: any) =>
  request({
    url: "/company-events",
    method: "get",
    params
  });
