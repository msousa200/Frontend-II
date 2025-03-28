import { useQuery } from '@tanstack/react-query';

interface Post {
  id: number;
  title: string;
  body: string;
}

function fetchArticles(): Promise<Post[]> {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
}

function ArticlesList() {
  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ['articles'],
    queryFn: fetchArticles
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>
          {post.title} - {post.body}
        </li>
      ))}
    </ul>
  );
}

export default ArticlesList;