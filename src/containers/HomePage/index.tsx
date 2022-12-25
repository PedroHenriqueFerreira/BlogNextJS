import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { SITE_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { Category, Container } from './styled';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

const HomePage = ({ posts, category }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>{`${SITE_NAME}${category ? ` - ${category}` : ''}`}</title>
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.attributes.slug}
              cover={post.attributes.cover.data.attributes.url}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default HomePage;
