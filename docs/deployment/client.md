---
sidebar_label: 💻 Client
title: Client
---

The client is the web app that users interact with. It is comprised of a Next.js website, a MySQL database, and an S3-compatible storage bucket.

## Deployment

:::tip

Check out the [official Next.js docs](https://nextjs.org/docs/deployment) for more information on deploying Next.js apps.

:::

### Requirements

- [pnpm](https://pnpm.io/)
- Hosting provider (such as [AWS EC2](https://aws.amazon.com/ec2/) or [Vercel](https://vercel.com/))
- (optional) MySQL database provider (such as [AWS RDS](https://aws.amazon.com/rds/) or [Planetscale](https://planetscale.com/))
- (optional) S3-compatible storage (such as [AWS S3](https://aws.amazon.com/tw/s3/) or [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces))

### Clone the repository

```bash
git clone https://github.com/unavi-xyz/unavi.git
cd unavi
```

### Install dependencies

```bash
pnpm install
```

### Update environment variables

Within your **hosting provider**, the following environment variables need to be set for the Next.js app to run:

| Variable                 | Description                                                             |
| ------------------------ | ----------------------------------------------------------------------- |
| NEXT_PUBLIC_DEFAULT_HOST | Host app endpoint                                                       |
| NEXT_PUBLIC_DEPLOYED_URL | Where the client will be accessible from                                |
| NEXT_PUBLIC_DOCS_URL     | Documentation URL (ie [https://docs.unavi.xyz](https://docs.unavi.xyz)) |
| ETH_PROVIDER             | Ethereum rpc http URI                                                   |

#### With S3

If using S3, the following environment variables will also need to be set within your **hosting provider**:

| Variable           | Description                         |
| ------------------ | ----------------------------------- |
| NEXT_PUBLIC_HAS_S3 | Set to `"true"` if you are using S3 |
| S3_ACCESS_KEY_ID   | AWS S3 key ID                       |
| S3_BUCKET          | AWS S3 bucket name                  |
| S3_ENDPOINT        | AWS S3 source endpoint              |
| S3_REGION          | AWS S3 source region                |
| S3_SECRET          | AWS S3 secret                       |

#### With Database

If using a database, the following environment variables will need to be set on **both your local machine and your hosting provider**:

| Variable                 | Description                                 |
| ------------------------ | ------------------------------------------- |
| DATABASE_URL             | Database connection URI                     |
| MYSQL_ROOT_HOST          | Database root for container                 |
| MYSQL_DATABASE           | Database name                               |
| MYSQL_USER               | Database username                           |
| MYSQL_PASSWORD           | Database user password                      |
| MYSQL_ROOT_PASSWORD      | Database root user password                 |
| NEXT_PUBLIC_HAS_DATABASE | Set to `"true"` if you are using a database |
| NEXT_PUBLIC_CDN_ENDPOINT | (optional) CDN endpoint for S3              |

### Initialize database

Run the following command to create the database tables:

```bash
pnpm prisma db push
```

### Update CORS

Adjust your S3 CORS configuration to allow communication from your domain (check out [AWS S3 CORS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/add-cors-configuration.html) or [DigitalOcean Spaces CORS](https://docs.digitalocean.com/products/spaces/how-to/configure-cors/)).
