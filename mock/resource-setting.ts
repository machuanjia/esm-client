import { Response, Request } from "express";

export const getResourceCategorys = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        status: "1",
        description: "这个是会议室",
        name: "会议室"
      },
      {
        id: 2,
        status: "1",
        description: "这个是显示器",
        name: "显示器"
      }
    ]
  });
};

export const getResourceCategory = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: {
      id: 2,
      status: "1",
      description: "这个是显示器",
      name: "显示器"
    }
  });
};

export const addResourceCategory = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      status: "1",
      description: "这个是显示器",
      name: "显示器"
    }
  });
};

export const updateResourceCategory = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      status: "1",
      description: "这个是显示器",
      name: "显示器"
    }
  });
};

export const deleteResourceCategory = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};

export const getResourceStatuses = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        color: "#f00",
        description: "正在使用",
        name: "使用中"
      },
      {
        id: 2,
        color: "#f00",
        description: "未使用",
        name: "闲置"
      }
    ]
  });
};

export const getResourceStatus = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: {
      id: 2,
      color: "#f00",
      description: "未使用",
      name: "闲置"
    }
  });
};

export const addResourceStatus = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      color: "#f00",
      description: "未使用",
      name: "闲置"
    }
  });
};

export const updateResourceStatus = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      color: "#f00",
      description: "未使用",
      name: "闲置"
    }
  });
};

export const deleteResourceStatus = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};
