import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./userResolver";
import transactionResolver from "./transactoinResolver";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;
