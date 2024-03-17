import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue, update, remove, serverTimestamp, off } from 'firebase/database';
import { firebase, auth } from './firebase'; 
import './board.css'

const Board = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const postsRef = ref(db, 'posts');
  
    const fetchData = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      const postsArray = data ? Object.entries(data).map(([key, value]) => ({ ...value, id: key })) : [];
      setPosts(postsArray);
    });
  
    return () => {
      off(postsRef, fetchData);
    };
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const db = getDatabase();
    try {
      await push(ref(db, 'posts'), {
        title,
        content,
        createdAt: serverTimestamp(),
        userId: currentUser.uid
      });
      setTitle('');
      setContent('');
      alert('글쓰기 완료!');
    } catch (error) {
      console.error('게시글 작성 오류:', error);
    }
  };

  const handleEdit = async (post) => {
    if (currentUser && post.userId === currentUser.uid) {
      setEditingPost(post);
      setTitle(post.title);
      setContent(post.content);
    } else {
      alert('수정할 수 있는 권한이 없습니다.');
    }
  };

  const handleUpdate = async () => {
    const db = getDatabase();
    try {
      await update(ref(db, `posts/${editingPost.id}`), {
        title,
        content
      });
      setTitle('');
      setContent('');
      setEditingPost(null);
    } catch (error) {
      console.error('게시글 수정 오류:', error);
    }
  };

  const handleDelete = async (postId) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const db = getDatabase();
      try {
        await remove(ref(db, `posts/${postId}`));
      } catch (error) {
        console.error('게시글 삭제 오류:', error);
      }
    }
  };

  return (
    <div className='board_wrap'>
      <h2>축구 토론</h2>
      <form onSubmit={editingPost ? handleUpdate : handleCreate}>
        <input
          type="text"
          placeholder="제목 작성"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="내용 작성"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <button type="submit">{editingPost ? '수정' : '게시'}</button>
      </form>
      <h3>- 게시글 목록 -</h3>
      <div className='board_container'>
        {posts.map(post => (
          <div className='board_list' key={post.id}>
            <h4>{post.title}</h4>
            <h5>{post.content}</h5>
            {/* <p>작성자: {post.userId}</p> */}
            <p>작성 일시: {new Date(post.createdAt).toLocaleString()}</p>
            {currentUser && post.userId === currentUser.uid && (
              <div className='ud_btn'>
                <button onClick={() => handleEdit(post)}>수정</button>
                <button onClick={() => handleDelete(post.id)}>삭제</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
