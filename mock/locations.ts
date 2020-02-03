import { Response, Request } from "express";

export const getLocations = (req: Request, res: Response) => {
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

export const getLocation = (req: Request, res: Response) => {
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

export const addLocation = (req: Request, res: Response) => {
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

export const updateLocation = (req: Request, res: Response) => {
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

export const deleteLocation = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};
