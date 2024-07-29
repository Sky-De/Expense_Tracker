import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./userResolver.js";
import transactionResolver from "./transactoinResolver.js";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;
