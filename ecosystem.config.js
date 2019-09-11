module.exports = {
  /**
	 * Application configuration section
	 * http://pm2.keymetrics.io/docs/usage/application-declaration/
	 */
  apps: [
    // First application
    {
      name: 'dx_api',
      script: 'index.js',
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: '3000',
        JWT_SECRET: '2w68xFSSlUMOcF+iUdhs',
        MONGO_CONN_URL: 'mongodb://localhost:27017/',
        S3_ACCESS_KEY: 'XXXXXXXXXX',
        S3_SECRET_KEY: 'xxxxxxxxxxxxxxx',
        S3_BUCKET: 'XXXXXXX',
        S3_BUCKET_URL: 'http://xxxxxx.s3.amazonaws.com',
      },
    },
  ]
};
