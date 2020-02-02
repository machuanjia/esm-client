import { Response, Request } from "express";

export const getCompanyEvents = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        name: "春节放假",
        location: { id: 1, name: "东达物业" },
        start: 1580646618,
        statusCategory: {
          id: 1,
          name: "放假",
          color: "#ff0"
        },
        members: [
          {
            id: 1,
            name: "马传佳"
          },
          {
            id: 1,
            name: "唐丹丹"
          }
        ],
        status: 1,
        description: "春节放假"
      },
      {
        id: 2,
        name: "疫情办公",
        location: { id: 1, name: "东达物业" },
        start: 1580646618,
        statusCategory: {
          id: 1,
          name: "远程在线",
          color: "#ff0"
        },
        members: [
          {
            id: 1,
            name: "马传佳"
          },
          {
            id: 1,
            name: "唐丹丹"
          }
        ],
        status: 1,
        description: "疫情办公"
      }
    ]
  });
};

export const addCompanyEvent = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      name: "春节放假",
      location: { id: 1, name: "东达物业" },
      start: 1580646618,
      statusCategory: {
        id: 1,
        name: "放假",
        color: "#ff0"
      },
      members: [
        {
          id: 1,
          name: "马传佳"
        },
        {
          id: 1,
          name: "唐丹丹"
        }
      ],
      status: 1,
      description: "春节放假"
    }
  });
};

export const getCompanyEvent = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      name: "春节放假",
      location: { id: 1, name: "东达物业" },
      start: 1580646618,
      statusCategory: {
        id: 1,
        name: "放假",
        color: "#ff0"
      },
      members: [
        {
          id: 1,
          name: "马传佳"
        },
        {
          id: 1,
          name: "唐丹丹"
        }
      ],
      status: 1,
      description: "春节放假"
    }
  });
};

export const updateCompanyEvent = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      name: "春节放假",
      location: { id: 1, name: "东达物业" },
      start: 1580646618,
      statusCategory: {
        id: 1,
        name: "放假",
        color: "#ff0"
      },
      members: [
        {
          id: 1,
          name: "马传佳"
        },
        {
          id: 1,
          name: "唐丹丹"
        }
      ],
      status: 1,
      description: "春节放假"
    }
  });
};

export const deleteCompanyEvent = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};
