# **Banking App**

## **Tech Stack**

- Next.js, TypeScript
    <p>
    <a href="https://nextjs.org/">
        <img src="https://skillicons.dev/icons?i=nextjs" />
    </a>
    <a href="https://www.typescriptlang.org/">
        <img src="https://skillicons.dev/icons?i=ts" />
    </a>
    </p>

- TailwindCSS
    <p>
    <a href="https://tailwindcss.com/">
        <img src="https://skillicons.dev/icons?i=tailwind"/>
    </a>
    </p>

- Appwrite
    <p>
    <a href="https://appwrite.io/">
        <img width="48" height="48" src="https://appwrite.io/assets/logotype/black.svg"/>
    </a>
    </p>
- Plaid, Dwolla
    <p>
    <a href="https://plaid.com/">
        <img width="48" height="48" src="https://www.logo.wine/a/logo/Plaid_(company)/Plaid_(company)-White-Dark-Background-Logo.wine.svg" />
    </a>
    <a href="https://www.dwolla.com/">
        <img width="48" height="48" src="https://www.svgrepo.com/show/508422/dwolla.svg" />
    </a>
    </p>
- ShadCN
    <p>
    <a href="https://ui.shadcn.com/">
        <img width="48" height="48"  src="https://ia800801.us.archive.org/14/items/github.com-shadcn-ui-ui_-_2023-08-09_16-03-10/cover.jpg"/>
    </a>
    </p>

## **Run Locally**

### Clone the repository

```shell
https://github.com/abhijaykheechee/banking-app.git
cd banking-app
```

### Install project dependencies

```shell
npm install
```

### Set environment variables

```js
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

```

### Run app

```shell
npm run dev
```
