## Memberstack Coding Challenge

This repo consists of two folders:

- `/client` for the React frontend.
- `/server` for the Express backend.

---

In order to get started with the client, you can run:

```
$ cd client
$ yarn (or npm install)
$ yarn start
```

In order to get started with the server, you can run:

```
$ cd server
$ yarn (or npm install)
$ ts-node index.ts
```

---

The `client/package.json` file contains a `proxy` field that proxies requests to the port `5000` that the server uses by default.
