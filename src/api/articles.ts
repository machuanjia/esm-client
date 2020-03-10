import request from "@/utils/request";
import { IArticleData } from "./types";

export const defaultArticleData: IArticleData = {
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

export const getArticles = (params: any) =>
  request({
    url: "/articles",
    method: "get",
    params
  });

export const getArticle = (id: number, params: any) =>
  request({
    url: `/articles/${id}`,
    method: "get",
    params
  });

export const createArticle = (data: any) =>
  request({
    url: "/articles",
    method: "post",
    data
  });

export const updateArticle = (id: number, data: any) =>
  request({
    url: `/articles/${id}`,
    method: "put",
    data
  });

export const deleteArticle = (id: number) =>
  request({
    url: `/articles/${id}`,
    method: "delete"
  });

export const getArticlesCategory = (params: any) =>
  request({
    url: "/articles/category",
    method: "get",
    params
  });

export const getArticleCategory = (id: number, params: any) =>
  request({
    url: `/articles/category/${id}`,
    method: "get",
    params
  });

export const createArticleCategory = (data: any) =>
  request({
    url: "/articles/category",
    method: "post",
    data
  });

export const updateArticleCategory = (id: number, data: any) =>
  request({
    url: `/articles/category/${id}`,
    method: "put",
    data
  });

export const deleteArticleCategory = (id: number) =>
  request({
    url: `/articles/category/${id}`,
    method: "delete"
  });

export const getPageviews = (payload:any) => {};
