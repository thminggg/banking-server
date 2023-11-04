export default /* GraphQL */ `
  scalar JSON

  type Query {
    """
    Query a single account
    """
    account(id: String): Account
    """
    Query all accounts
    """
    accounts: [Account]
    """
    Query all accounts in one country
    """
    countryAccounts(country: String): [Account]
    """
    Return the raw format of data
    """
    rawAccounts: JSON
  }

  type Mutation {
    transfer(from: String, to: String, amount: Float): Transfer
  }

  """
  Fields of a banking account
  """
  type Account {
    _id: ID # random ID
    id: String!
    name: String
    amount: Float
    country: String
  }

  type Transfer {
    trackId: ID # random ID
    from: String
    to: String
    amount: Float
  }
`;
