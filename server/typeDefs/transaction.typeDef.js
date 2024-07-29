const transactionTypeDef = `#graphql
type Transaction {
    _id: ID!
    description: String!
    paymentType: String!
    category: String!
    amout: Float!
    location: String
    date: String!
}

type Query {
    transactions: [Transaction!]
    transaction(transactionId: ID!): Transaction
}

type Mutation {
    createTransactin(input: CreateTransActionInput!): Transaction!
    updateTransactin(input: UpdateTransActionInput!): Transaction!
    deleteTransactin(transactionId: ID!): Transaction!
}

input CreateTransActionInput {
    description: String!
    paymentType: String!
    category: String!
    amout: Float!
    date: String!
    location: String
}

input UpdateTransActionInput {
    transactionId: ID!
    description: String
    paymentType: String
    category: String
    amout: Float
    date: String
    location: String
}
`;

export default transactionTypeDef;
