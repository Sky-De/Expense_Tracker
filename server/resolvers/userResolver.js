import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: () => users,
  },
};

export default userResolver;
