import * as postsDao from './posts-dao.js'

const createPost = async (req, res) => {
    const newPost = req.body;
    //newPost._id = (new Date()).getTime() + '';
    newPost.username = "Gwen Stacy";
    newPost.likes = 0;
    newPost.dislikes = 0;
    newPost.liked = false;
    newPost.disliked = false;
    newPost.createAt = "1 min",
    newPost.title = "Untitled";
    newPost.reposts = 0;
    newPost.replies = 0;
    const insertedpost = await postsDao.createpost(newPost); // actual post inserted in database with DAO's createpost
    res.json(insertedpost);
}

const findposts = async (req, res) => {
    const posts = await postsDao.findposts()
    res.json(posts);
 }
 
const updatepost = async (req, res) => {  
    const postdIdToUpdate = req.params.pid;
    const updates = req.body;
    const status = await postsDao.updatepost(postdIdToUpdate, updates);
    res.json(status);
}

const deletepost = async (req, res) => {
    const postdIdToDelete = req.params.pid;
    const status = await postsDao.deletepost(postdIdToDelete); //success or failure status deleting record from database
    res.json(status);
}

const PostsController = (app) =>{
    app.post('/api/posts', createPost);
    app.get('/api/posts', findposts);
    app.put('/api/posts/:pid', updatepost);
    app.delete('/api/posts/:pid', deletepost);
}

export default PostsController;