# Simple TypeScript + Next.js + Custom Express Server Boilerplate

> JavaScript Version: [simple-next-express-boilerplate](https://github.com/JaeSeoKim/simple-next-express-boilerplate)

`/api` -> `Express Server`

`*` -> `Next RequestHandler`

---

### Script

- dev - Next Dev (`nodemon --exec ts-node --project tsconfig.server.json server/server.ts`)
- dev:api - Only `/api` requests work (`nodemon --exec ts-node --project tsconfig.server.json server/server-dev-api.ts`)
- build - Next Build (`next build && tsc --project tsconfig.server.json`)
- start - Next Start (`cross-env NODE_ENV=production node dist/server.js`)
- pm2 - Run with pm2 Cluster Mode (`pm2 start ecosystem.config.js --env production`)
- pm2:dev - Run with pm2 Cluster Mode(dev) (`pm2 start ecosystem.config.js`)

---

### Docker

Default Tag: `simple-type-next-express`

Test Run Command: `docker run -p 3000:3000 simple-type-next-express`

- build - `./cicd/build.sh`
- build(with pm2) - `./cicd/build-pm2.sh`

---

### File Tree

```
.
├── LICENSE
├── README.md
├── cicd
│   ├── Dockerfile
│   ├── Dockerfile-pm2
│   ├── build-pm2.sh
│   └── build.sh
├── ecosystem.config.js
├── lib
│   └── utils
│       └── useRequest.ts
├── next-env.d.ts
├── next.config.js
├── nodemon.json
├── package-lock.json
├── package.json
├── pages
│   ├── [id].tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public
│   └── robots.txt
├── server
│   ├── api
│   │   └── user
│   │       └── getUser.ts
│   ├── routes
│   │   ├── apiRouter.ts
│   │   └── userRouter.ts
│   ├── server-dev-api.ts
│   └── server.ts
├── tsconfig.json
└── tsconfig.server.json
```

### ToDo

- ETC...
