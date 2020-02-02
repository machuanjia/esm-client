import { Response, Request } from "express";

export const getResources = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        status: 1,
        type: { id: 1, name: "会议室" },
        location: { id: 1, name: "东达物业" },
        description: "这个是会议室",
        name: "会议室"
      },
      {
        id: 2,
        type: { id: 1, name: "办公电器" },
        location: { id: 1, name: "东达物业" },
        status: 1,
        description: "这个是显示器",
        name: "显示器"
      }
    ]
  });
};

export const getResource = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: {
      id: 2,
      type: { id: 1, name: "办公电器" },
      location: { id: 1, name: "东达物业" },
      status: 1,
      description: "这个是显示器",
      name: "显示器"
    }
  });
};

export const addResource = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      status: 1,
      type: { id: 1, name: "办公电器" },
      location: { id: 1, name: "东达物业" },
      description: "这个是显示器",
      name: "显示器"
    }
  });
};

export const updateResource = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      status: 1,
      type: { id: 1, name: "办公电器" },
      location: { id: 1, name: "东达物业" },
      description: "这个是显示器",
      name: "显示器"
    }
  });
};

export const deleteResource = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};

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

export const getResourceLocations = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        description: "东达物业",
        name: "东达物业",
        code: "001",
        phone: "010-8763912",
        fax: "010-8763912",
        country: "China",
        city: "北京",
        address: "海淀区罗庄西里东达物业",
        postal: "100000"
      },
      {
        id: 2,
        description: "东达物业",
        name: "东达物业",
        code: "001",
        phone: "010-8763912",
        fax: "010-8763912",
        country: "China",
        city: "长沙",
        address: "海淀区罗庄西里东达物业",
        postal: "100000"
      }
    ]
  });
};

export const getResourceLocation = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: {
      id: 2,
      description: "东达物业",
      name: "东达物业",
      code: "001",
      phone: "010-8763912",
      fax: "010-8763912",
      country: "China",
      city: "北京",
      address: "海淀区罗庄西里东达物业",
      postal: "100000"
    }
  });
};

export const addResourceLocation = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      description: "东达物业",
      name: "东达物业",
      code: "001",
      phone: "010-8763912",
      fax: "010-8763912",
      country: "China",
      city: "北京",
      address: "海淀区罗庄西里东达物业",
      postal: "100000"
    }
  });
};

export const updateResourceLocation = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      description: "东达物业",
      name: "东达物业",
      code: "001",
      phone: "010-8763912",
      fax: "010-8763912",
      country: "China",
      city: "北京",
      address: "海淀区罗庄西里东达物业",
      postal: "100000"
    }
  });
};

export const deleteResourceLocation = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};
