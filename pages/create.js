import Layout from '@/components/Layout';
import ListingForm from '@/components/ListingForm';

const Create = () => {
  const addHome = () => null;

  return (
    <Layout>
      <div className="max-w-screen-sm mx-auto">
        <h1 className="text-xl font-medium text-gray-800">Upload your photo</h1>
        <p className="text-gray-500">
          Fill out the form below to upload your photo.
        </p>
        <div className="mt-8">
          <ListingForm
            buttonText="Add Photo"
            redirectPath="/"
            onSubmit={addHome}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Create;
