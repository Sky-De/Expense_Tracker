import { mergeTypeDefs } from "@graphql-tools/merge";
import transactionTypeDef from "./transaction.typeDef";
import userTypeDef from "./user.typeDef";

// typeDefs

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);
export default mergedTypeDefs;
