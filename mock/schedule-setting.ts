import { Response, Request } from "express";

export const getCalenderCategorys = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        description: "研发日程",
        name: "研发日程",
        status: 1
      },
      {
        id: 2,
        description: "销售日程",
        name: "销售日程",
        status: 1
      }
    ]
  });
};

export const getCalenderCategory = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: {
      id: 2,
      description: "销售日程",
      name: "销售日程",
      status: 1
    }
  });
};

export const addCalenderCategory = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      description: "销售日程",
      name: "销售日程",
      status: 1
    }
  });
};

export const updateCalenderCategory = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      description: "销售日程",
      name: "销售日程",
      status: 1
    }
  });
};

export const deleteCalenderCategory = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};

export const getEventCategorys = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        description: "日程",
        color: "#f00",
        name: "日程"
      },
      {
        id: 2,
        description: "会议",
        color: "#f00",
        name: "会议"
      }
    ]
  });
};

export const getEventCategory = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: 2,
      description: "会议",
      color: "#f00",
      name: "会议"
    }
  });
};

export const addEventCategory = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      description: "会议new",
      color: "#f00",
      name: "会议new"
    }
  });
};

export const updateEventCategory = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      description: "会议update",
      color: "#f00",
      name: "会议update"
    }
  });
};

export const deleteEventCategory = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};
