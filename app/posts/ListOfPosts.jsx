import LikeButton from "./LikeButton";
import Link from 'next/link';

const fetchPosts = () =>{
  return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})
  .then(res => res.json());
}

export default async function ListOfPosts() {
  const posts = await fetchPosts();
  return (
    <section>
      {posts.map(post=>{
        return <article key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          <LikeButton/>
          </Link>
        </article>
      })}
    </section>
  )
}
