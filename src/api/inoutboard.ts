import request from "@/utils/request";

export const getInoutBoardStatuses = (params: any) =>
  request({
    url: "/inoutboard/status",
    method: "get",
    params
  });

export const addInoutBoardStatus = (data: any) =>
  request({
    url: "/inoutboard/status",
    method: "post",
    data
  });

export const getInoutBoardStatus = (id: number, params: any) =>
  request({
    url: `/inoutboard/status/${id}`,
    method: "get",
    params
  });

export const updateInoutBoardStatus = (id: number, data: any) =>
  request({
    url: `/inoutboard/status/${id}`,
    method: "put",
    data
  });

export const deleteInoutBoardStatus = (id: number) =>
  request({
    url: `/inoutboard/status/${id}`,
    method: "delete"
  });

export const getCompanyEvents = (params: any) =>
  request({
    url: "/inoutboard/company-events",
    method: "get",
    params
  });

export const addCompanyEvent = (data: any) =>
  request({
    url: "/inoutboard/company-events",
    method: "post",
    data
  });

export const getCompanyEvent = (id: number, params: any) =>
  request({
    url: `/inoutboard/company-events/${id}`,
    method: "get",
    params
  });

export const updateCompanyEvent = (id: number, data: any) =>
  request({
    url: `/inoutboard/company-events/${id}`,
    method: "put",
    data
  });

export const deleteCompanyEvent = (id: number) =>
  request({
    url: `/inoutboard/company-events/${id}`,
    method: "delete"
  });

export const getStatus = (params: any) =>
  request({
    url: "/inoutboard/company-events",
    method: "get",
    params
  });

export const getMyHistory = (params: any) =>
  request({
    url: "/inoutboard/myHistory",
    method: "get",
    params
  });
export const getHistoryes = (params: any) =>
  request({
    url: "/inoutboard/historyes",
    method: "get",
    params
  });
export const getMyStatistics = (params: any) =>
  request({
    url: "/inoutboard/myStatistics",
    method: "get",
    params
  });
export const getStatistics = (params: any) =>
  request({
    url: "/inoutboard/statistics",
    method: "get",
    params
  });
