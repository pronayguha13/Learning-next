import Link from "next/link";
import Head from "next/head";
import Layout from "../../Components/Layout.js";
const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h3>
        <Link href="/">Back to home</Link>
      </h3>
    </Layout>
  );
};

export default FirstPost;
