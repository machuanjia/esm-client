import { Response, Request } from "express";

export const getApplicationPermissions = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        type: 0,
        description: "这个是管理员",
        name: "管理员"
      },
      {
        id: 2,
        type: 0,
        description: "这个是普通成员",
        name: "普通成员"
      },
      {
        id: 3,
        type: 0,
        description: "这个是只读成员",
        name: "只读成员"
      },
      {
        id: 4,
        type: 1,
        description: "这个是自定义权限",
        name: "自定义权限"
      }
    ]
  });
};

export const addApplicationPermission = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      key: "key",
      type: 1,
      description: "这个是自定义权限",
      name: "自定义权限"
    }
  });
};

export const getApplicationPermission = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      key: "key",
      type: 1,
      description: "这个是自定义权限",
      name: "自定义权限"
    }
  });
};

export const updateApplicationPermission = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      key: "key",
      type: 1,
      description: "这个是自定义权限",
      name: "自定义权限"
    }
  });
};

export const deleteApplicationPermission = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};
