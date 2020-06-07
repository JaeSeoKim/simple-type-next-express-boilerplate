module.exports = {
  apps: [
    {
      name: 'server',
      script: 'node_modules/.bin/ts-node',
      args: '--project tsconfig.server.json server/server.ts',
      instances: 2,
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
      env: {
        PM2: 'PM2',
        NODE_ENV: 'development'
      },
      env_production: {
        PM2: 'PM2',
        NODE_ENV: 'production'
      }
    }
  ]
}
