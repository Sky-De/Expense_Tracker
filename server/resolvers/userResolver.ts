import { users } from "../dummyData/data.ts";

const userResolver = {
  Query: {
    users: () => users,
  },
};

export default userResolver;
