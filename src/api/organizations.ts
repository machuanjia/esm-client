import request from "@/utils/request";
import { IArticleData } from "./types";

export const defaultArticleData: any = {
  id: 0,
  status: "draft",
  title: "",
  fullContent: "",
  abstractContent: "",
  sourceURL: "",
  imageURL: "",
  timestamp: "",
  platforms: ["a-platform"],
  disableComment: false,
  importance: 0,
  author: "",
  reviewer: "",
  type: "",
  pageviews: 0
};

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
