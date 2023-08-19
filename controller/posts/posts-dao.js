import postsModel from './posts-model.js';

export const findposts  = ()          => postsModel.find();
export const createpost = (post)      => postsModel.create(post);
export const deletepost = (pid)       => postsModel.deleteOne({_id: pid});
export const updatepost = (pid, post) => postsModel.updateOne({_id: pid}, {$set: post})