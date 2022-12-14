import Layout from '@/components/Layout';
import Grid from '@/components/Grid';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const photos = await prisma.photos.findMany();
  return {
    props: {
      photos: JSON.parse(JSON.stringify(photos)),
    },
  };
}

export default function Home({ photos = [] }) {
  return (
    <Layout>
      <h1 className="text-xl font-medium text-gray-800">
        Top-rated places to stay
      </h1>
      <p className="text-gray-500">
        Explore some of the best places in the world
      </p>
      <div className="mt-8">
        <Grid photos={photos} />
      </div>
    </Layout>
  );
}
