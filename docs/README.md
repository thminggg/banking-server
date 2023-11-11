## Banking Web App Server

This repository demonstrates a mock backend server for a banking web application which handles authentication, data retrieval and transactions.

## Tech Stack

1. GraphQL
2. Express
3. Docker
4. AWS Lambda
5. Typescript
6. Bash script
7. JWT

## Getting Started

Run server in localhost or in [Docker](#docker) (see below)

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

### Express Route

```
http://localhost:9000
```

### Appolo Server

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

## Docker

### Build docker image

```bash
docker build -t express-graphql .
```

### Run docker container

```bash
# i.e. docker run -d -p 9000:9000 --name express-graphql express-graphql
docker run -d -p <available_port>:9000 --name express-graphql express-graphql
```

### Access Server

Refer to above [Express Route](#express-route) & [Appolo Server](#appolo-server)

### Query & Mutation

Refer to above [Query](#query) & [Mutation](#mutation)
