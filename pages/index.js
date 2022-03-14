import Link from "next/link";
import { client } from "../libs/client";
import axios from "axios";
import Article from "../components/Article";

export default function Home({ blog }) {
  console.log(blog)
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
            <Article blog={blog} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  // const data = await client.get({ endpoint: "blog" });
  const data = await axios.get(
    'https://xwpq69robn.microcms.io/api/v1/blog',
    {
      headers: {'X-MICROCMS-API-KEY': '7e091e15aed84603a8eef1b003ca7d514e85'}
    }
  ).then(r => r.data)

  return {
    props: {
      blog: data.contents,
    },
  };
};