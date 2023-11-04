## Backend server of a Banking Web App

This repository is to demonstrate a mock backend server for a banking web application which handles authentication, data retrieval and transactions.

## Tech Stack

1. GraphQL
2. Express
3. Typescript
4. JWT

## Getting Started

### Install npm packages:

```bash
yarn
```

### Run the development server:

```bash
yarn run dev

# Or with auto refresh
yarn run dev:watch
```

### Express Route:

```
http://localhost:9000
```

### Appolo Server:

```
http://localhost:9000/graphql
```

## Query & Mutation

Paste following Query / Mutation in Apollo Server to see the results.

### Query:

```GraphQL
query AccountQuery {
  # Query single account
  account(id: "883-677522-001") {
    _id
    id
    name
    amount
    country
  }
  # Query all accounts
  accounts {
    id
  }
  # Query all accounts in one conutry
  countryAccounts(country: "CA") {
    id
    country
  }
  # Query raw account data
  rawAccounts
}
```

### Mutation:

```GraphQL
mutation Transfer {
  # Transfer money from one account to another
  transfer(from: "123", to: "456", amount: 789) {
    trackId
    from
    to
    amount
  }
}
```
