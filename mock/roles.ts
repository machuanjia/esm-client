import { Response, Request } from "express";

export const getRoles = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        type: 0,
        permissions: [
          {
            id: 11,
            name: "管理员"
          },
          {
            id: 12,
            name: "所有者"
          }
        ],
        description: "这个是管理员",
        name: "管理员"
      },
      {
        id: 2,
        type: 0,
        permissions: [
          {
            id: 21,
            name: "普通成员"
          }
        ],
        description: "这个是普通成员",
        name: "普通成员"
      },
      {
        id: 3,
        type: 0,
        permissions: [
          {
            id: 31,
            name: "只读成员"
          }
        ],
        description: "这个是只读成员",
        name: "只读成员"
      },
      {
        id: 4,
        type: 1,
        name: "华北大区",
        children: [
          {
            id: 41,
            permissions: [
              {
                id: 411,
                name: "华北销售总监"
              }
            ],
            description: "这个是销售总监",
            name: "销售总监"
          },
          {
            id: 42,
            permissions: [
              {
                id: 421,
                name: "华北销售经理"
              }
            ],
            description: "这个是华北销售经理",
            name: "华北销售经理"
          }
        ]
      }
    ]
  });
};

export const addRole = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      permissions: [
        {
          id: 11,
          name: "华北销售经理"
        },
        {
          id: 21,
          name: "华北销售经理2"
        }
      ],
      description: "这个是华北销售经理",
      name: "华北销售经理"
    }
  });
};

export const getRoleMembers = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        name: "王小虎",
        role: "管理员",
        phone: "18401125500"
      },
      {
        name: "王小虎",
        role: "普通成员",
        phone: "18401125500"
      },
      {
        name: "王小虎",
        role: "只读成员",
        phone: "18401125500"
      }
    ]
  });
};

export const getRole = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      permissions: [
        {
          id: 11,
          name: "华北销售经理"
        },
        {
          id: 21,
          name: "华北销售经理2"
        }
      ],
      description: "这个是华北销售经理",
      name: "华北销售经理"
    }
  });
};

export const updateRole = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      permissions: [
        {
          id: 11,
          name: "华北销售经理"
        },
        {
          id: 21,
          name: "华北销售经理2"
        }
      ],
      description: "这个是华北销售经理",
      name: "华北销售经理"
    }
  });
};

export const deleteRole = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};

export const getGroups = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: [
      {
        id: 1,
        description: "华北大区分组",
        name: "华北大区"
      },
      {
        id: 2,
        description: "华东大区分组",
        name: "华东大区"
      },
      {
        id: 3,
        description: "华中大区分组",
        name: "华中大区"
      }
    ]
  });
};

export const getGroup = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      description: "华北大区分组",
      name: "华北大区"
    }
  });
};

export const addGroup = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      description: "华中大区分组",
      name: "华中大区"
    }
  });
};

export const updateGroup = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: {
      id: id,
      description: "华中大区分组",
      name: "华中大区"
    }
  });
};

export const deleteGroup = (req: Request, res: Response) => {
  const id = parseInt((Math.random() * 1000) as any);
  return res.json({
    code: 20000,
    data: true
  });
};
