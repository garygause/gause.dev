import { auth } from '@/auth';
import { JadeClient } from '@jade-and-lotus/jade-api-client';

export async function getJadeAdminClient() {
  const session = await auth();
  const client = new JadeClient();
  client.setToken(session?.user?.token || null);
  if (process.env.JADE_API_URL) {
    client.setBaseUrl(process.env.JADE_API_URL);
  }
  client.setDirectoryId(process.env.JADE_DIR_ID!);
  client.setBlogId(process.env.JADE_BLOG_ID!);
  client.setS3Id(process.env.JADE_S3_ID!);
  client.setApiKey(process.env.JADE_API_KEY!);
  console.log('JADE API URL: ', client.getBaseUrl());
  return client;
}

export async function getJadeClient() {
  const client = new JadeClient();
  if (process.env.JADE_API_URL) {
    client.setBaseUrl(process.env.JADE_API_URL);
  }
  client.setDirectoryId(process.env.JADE_DIR_ID!);
  client.setBlogId(process.env.JADE_BLOG_ID!);
  client.setS3Id(process.env.JADE_S3_ID!);
  client.setApiKey(process.env.JADE_API_KEY!);
  console.log('JADE API URL: ', client.getBaseUrl());
  return client;
}
