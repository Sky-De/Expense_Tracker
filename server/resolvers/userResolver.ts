import { users } from "../dummyData/data";

const userResolver = {
  Query: {
    users: () => users,
  },
};

export default userResolver;
