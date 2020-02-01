import request from "@/utils/request";

export const getCalenderCategorys = (params: any) =>
  request({
    url: "/schedule/calender-categoryes",
    method: "get",
    params
  });

export const addCalenderCategory = (data: any) =>
  request({
    url: "/schedule/calender-categoryes",
    method: "post",
    data
  });

export const getCalenderCategory = (id: number, params: any) =>
  request({
    url: `/schedule/calender-categoryes/${id}`,
    method: "get",
    params
  });

export const updateCalenderCategory = (id: number, data: any) =>
  request({
    url: `/schedule/calender-categoryes/${id}`,
    method: "put",
    data
  });

export const deleteCalenderCategory = (id: number) =>
  request({
    url: `/schedule/calender-categoryes/${id}`,
    method: "delete"
  });

export const getEventCategorys = (params: any) =>
  request({
    url: "/schedule/event-categoryes",
    method: "get",
    params
  });

export const addEventCategory = (data: any) =>
  request({
    url: "/schedule/event-categoryes",
    method: "post",
    data
  });

export const getEventCategory = (id: number, params: any) =>
  request({
    url: `/schedule/event-categoryes/${id}`,
    method: "get",
    params
  });

export const updateEventCategory = (id: number, data: any) =>
  request({
    url: `/schedule/event-categoryes/${id}`,
    method: "put",
    data
  });

export const deleteEventCategory = (id: number) =>
  request({
    url: `/schedule/event-categoryes/${id}`,
    method: "delete"
  });
