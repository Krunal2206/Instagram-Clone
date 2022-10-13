import React, { useEffect, useRef, useState } from 'react'
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled, BookmarkIcon as BookmarkIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';
import Picker from 'emoji-picker-react'
import { useRecoilState } from 'recoil'
import { deletePostModalState } from '../atoms/modalAtom'
import DeletePostModal from '../Components/DeletePostModal'

function Post({ id, username, userImg, img, caption }) {

    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(deletePostModalState);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const ref = useRef(null);

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        });

        setShowPicker(false)
    }

    useEffect(() => {
        onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), (snapshot) => setComments(snapshot.docs))
    }, [db, id]);

    useEffect(() => {
        onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => setLikes(snapshot.docs))
    }, [db, id]);

    useEffect(() => {
        setHasLiked(likes.findIndex(like => like.id === session?.user?.uid) !== -1)
    }, [likes]);

    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username
            })
        }
    }

    const handleChat = () => {
        ref.current.focus();
    };

    const onEmojiClick = (emojiObject) => {
        setComment((prevInput) => prevInput + emojiObject.emoji)
    }

    return (
        <div className='bg-white my-7 border rounded-sm'>
            <div className='flex items-center p-5'>
                <img src={userImg} alt="" className='rounded-full h-12 w-12 object-contain border p-1 mr-3' />
                <p className='flex-1 font-bold'>{username}</p>

                {session && session.user.username == username &&
                    <DotsHorizontalIcon className='h-5 btn' onClick={() => setOpen(true)} />
                }
            </div>

            <img src={img} className='object-cover w-full' alt="" />


            {session && (
                <div className='flex justify-between px-3 pt-4'>
                    <div className='flex space-x-4'>
                        {
                            hasLiked ? (
                                <HeartIconFilled onClick={likePost} className='btn text-red-500' />
                            ) : (
                                <HeartIcon onClick={likePost} className='btn' />
                            )
                        }
                        <ChatIcon className='btn' onClick={handleChat} />
                        <PaperAirplaneIcon className='btn rotate-45 -mt-1' />
                    </div>
                    {
                        bookmark ? (
                            <BookmarkIconFilled className='btn' onClick={() => { setBookmark(!bookmark) }} />
                        ) : (
                            <BookmarkIcon className='btn' onClick={() => { setBookmark(!bookmark) }} />
                        )
                    }
                </div>
            )}

            <div className='p-5 truncate'>
                {likes.length > 0 && (
                    <p className='font-bold mb-1 -mt-3'>{likes.length} likes</p>
                )}
                <span className='font-bold mr-1'>{username} </span>{caption}
            </div>

            {/* comments */}

            {comments.length > 0 && (
                <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                    {
                        comments.map(val => {
                            return (
                                <div key={val.id} className='flex items-center space-x-2 mb-2'>
                                    <img className='h-7 rounded-full' src={val.data().userImage} alt="" />
                                    <p className='text-sm flex-1'>
                                        <span className='font-bold'>{val.data().username}</span>{" "}{val.data().comment}
                                    </p>
                                    <Moment className='text-sm pr-5' fromNow>{val.data().timestamp?.toDate()}</Moment>
                                </div>
                            )
                        })
                    }
                </div>
            )
            }

            {
                session && (
                    <>
                        <form className='flex items-center p-4'>
                            <EmojiHappyIcon className='h-7 btn' onClick={() => { setShowPicker(!showPicker) }} />
                            <input type="text" placeholder='Add a comment...' className='border-none flex-1 focus:ring-0 outline-none' value={comment} onChange={e => setComment(e.target.value)} ref={ref} />
                            <button type='submit' disabled={!comment.trim()} onClick={sendComment} className='font-semibold text-blue-400'>Post</button>
                        </form>
                        {
                            showPicker &&
                            <Picker onEmojiClick={onEmojiClick} skinTonesDisabled={true} autoFocusSearch={false} />
                        }
                    </>
                )
            }

            <DeletePostModal id={id} />
        </div>
    )
}

export default Post