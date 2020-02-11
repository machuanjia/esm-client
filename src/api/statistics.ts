import request from "@/utils/request";

export const getDataSources = (params: any) =>
  request({
    url: "/statistics/data-sources",
    method: "get",
    params
  });

export const addDataSource = (data: any) =>
  request({
    url: "/statistics/data-sources",
    method: "post",
    data
  });

export const getDataSource = (id: number, params: any) =>
  request({
    url: `/statistics/data-sources/${id}`,
    method: "get",
    params
  });

export const updateDataSource = (id: number, data: any) =>
  request({
    url: `/statistics/data-sources/${id}`,
    method: "put",
    data
  });

export const deleteDataSource = (id: number) =>
  request({
    url: `/statistics/data-sources/${id}`,
    method: "delete"
  });
