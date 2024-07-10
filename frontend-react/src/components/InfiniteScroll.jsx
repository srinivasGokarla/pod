
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { fetchPosts } from '../api';

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const newPosts = await fetchPosts(page);
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setLoading(false);
    };
    loadPosts();
  }, [page]);

  const lastPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div>
      <h1>Infinite Scroll</h1>
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return (
            <div ref={lastPostRef} key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        } else {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        }
      })}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
