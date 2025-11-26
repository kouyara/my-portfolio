module.exports = {
  apps: [
    {
      name: 'my-portfolio',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/my-portfolio',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
