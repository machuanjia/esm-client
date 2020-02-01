import faker from "faker";
import { Response, Request } from "express";
import { IUserData } from "../src/api/types";

const userList: IUserData[] = [
  {
    id: 0,
    username: "admin",
    password: "any",
    name: "Super Admin",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    introduction: "I am a super administrator",
    email: "admin@test.com",
    phone: "1234567890",
    roles: ["admin"],
    permissions: ["*"]
  },
  {
    id: 1,
    username: "editor",
    password: "any",
    name: "Normal Editor",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    introduction: "I am an editor",
    email: "editor@test.com",
    phone: "1234567890",
    roles: ["editor"],
    permissions: ["*"]
  }
];
const userCount = 100;

for (let i = 2; i < userCount; i++) {
  userList.push({
    id: i,
    username: "user_" + faker.random.alphaNumeric(9),
    password: faker.random.alphaNumeric(20),
    name: faker.name.findName(),
    avatar: faker.image.imageUrl(),
    introduction: faker.lorem.sentence(20),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    roles: ["visitor"],
    permissions: ["*"]
  });
}

export const register = (req: Request, res: Response) => {
  return res.json({
    code: 20000
  });
};

export const login = (req: Request, res: Response) => {
  const { username } = req.body;
  for (const user of userList) {
    if (user.username === username) {
      return res.json({
        code: 20000,
        data: {
          accessToken: username + "-token"
        }
      });
    }
  }
  return res.status(400).json({
    code: 50004,
    messaege: "Invalid User"
  });
};

export const logout = (req: Request, res: Response) => {
  return res.json({
    code: 20000
  });
};

export const getUsers = (req: Request, res: Response) => {
  const { name } = req.query;
  return res.json({
    code: 20000,
    data: userList
  });
};

export const getUser = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: userList[0]
  });
};

export const addUser = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: userList[0]
  });
};

export const getUserInfo = (req: Request, res: Response) => {
  // Mock data based on access token
  return res.json({
    code: 20000,
    data: {
      user:
        req.header("X-Access-Token") === "admin-token"
          ? userList[0]
          : userList[1]
    }
  });
};

export const getUserByName = (req: Request, res: Response) => {
  const { username } = req.params;
  for (const user of userList) {
    if (user.username === username) {
      return res.json({
        code: 20000,
        data: {
          user
        }
      });
    }
  }
  return res.status(400).json({
    code: 50004,
    messaege: "Invalid User"
  });
};
export const getUserPermissions = (req: Request, res: Response) => {
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
export const updateUser = (req: Request, res: Response) => {
  const { username } = req.params;
  const { user } = req.body;
  return res.json({
    code: 20000,
    data: userList[0]
  });
};

export const deleteUser = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: true
  });
};
