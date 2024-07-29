import { mergeTypeDefs } from "@graphql-tools/merge";
import transactionTypeDef from "./transaction.typeDef.js";
import userTypeDef from "./user.typeDef.js";

// typeDefs

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);
export default mergedTypeDefs;
