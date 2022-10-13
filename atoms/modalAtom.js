import { atom } from 'recoil';

export const modalState = atom({
    key: 'modalState',
    default: false,
})

export const deletePostModalState = atom({
    key: 'deletePostModalState',
    default: false,
})