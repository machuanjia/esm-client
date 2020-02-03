import request from "@/utils/request";

export const getLocations = (params: any) =>
  request({
    url: "/locations",
    method: "get",
    params
  });

export const addLocation = (data: any) =>
  request({
    url: "/locations",
    method: "post",
    data
  });

export const getLocation = (id: number, params: any) =>
  request({
    url: `/locations/${id}`,
    method: "get",
    params
  });

export const updateLocation = (id: number, data: any) =>
  request({
    url: `/locations/${id}`,
    method: "put",
    data
  });

export const deleteLocation = (id: number) =>
  request({
    url: `/locations/${id}`,
    method: "delete"
  });
