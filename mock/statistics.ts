import { Response, Request } from "express";

export const getDataSources = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        type: {
          id: 1,
          name: "Excel"
        },
        status: 1,
        description: "这个是Excel",
        name: "Excel"
      },
      {
        id: 2,
        type: {
          id: 1,
          name: "Mysql"
        },
        status: 1,
        description: "这个是Mysql",
        name: "Mysql"
      }
    ]
  });
};

export const addDataSource = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      type: {
        id: 1,
        name: "Mysql"
      },
      status: 1,
      description: "这个是Mysql",
      name: "Mysql"
    }
  });
};

export const getDataSource = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      type: {
        id: 1,
        name: "Mysql"
      },
      status: 1,
      description: "这个是Mysql",
      name: "Mysql"
    }
  });
};

export const updateDataSource = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      type: {
        id: 1,
        name: "Mysql"
      },
      status: 1,
      description: "这个是Mysql",
      name: "Mysql"
    }
  });
};

export const deleteDataSource = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};
