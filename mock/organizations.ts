import { Response, Request } from "express";

export const getOrganizations = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        description: "这个是架构部",
        name: "架构部"
      },
      {
        id: 2,
        description: "这个是测试部",
        name: "测试部"
      },
      {
        id: 3,
        description: "这个是销售部",
        name: "销售部",
        children: [
          {
            id: 31,
            description: "这个是人力资源部",
            name: "人力资源部"
          },
          {
            id: 32,
            description: "这个是市场部",
            name: "市场部"
          }
        ]
      }
    ]
  });
};
