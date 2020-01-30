import { Response, Request } from "express";

export const getApplications = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        type: 1,
        status: 1,
        description: "这个是智慧看板",
        name: "智慧看板"
      },
      {
        id: 2,
        type: 1,
        status: 1,
        description: "这个是日程",
        name: "日程"
      },
      {
        id: 3,
        type: 1,
        status: 1,
        description: "这个是资源",
        name: "资源"
      },
      {
        id: 4,
        type: 1,
        status: 1,
        description: "这个是数据统计",
        name: "数据统计"
      }
    ]
  });
};

export const addApplication = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      type: 0,
      status: 1,
      description: "这个是 new" + id,
      name: "app" + id
    }
  });
};

export const getApplication = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      type: 0,
      status: 1,
      description: "这个是app detail" + id,
      name: "app detail" + id
    }
  });
};

export const updateApplication = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      type: 0,
      status: 1,
      description: "这个是app update new" + id,
      name: "app update new" + id
    }
  });
};

export const deleteApplication = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};
