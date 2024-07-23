import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./userResolver.ts";
import transactionResolver from "./transactoinResolver.ts";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;
