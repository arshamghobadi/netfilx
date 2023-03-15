import { PrismaClient } from '@prisma/client';

const client = global.prismadb || new PrismaClient();
const prisma = new PrismaClient();
if (process.env.NODE_ENV === 'production') global.prismadb = client;
export default client;
