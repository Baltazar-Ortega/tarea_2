import express from "express";
import fetch from "node-fetch";
import { Album } from "./classes/Album";
import { Comment } from "./classes/Comment";
import { Photo } from "./classes/Photo";
import { Post } from "./classes/Post";
import { Todo } from "./classes/Todo";
import { User } from "./classes/User";
import { IAlbum } from "./classes/interfaces/IAlbum";
import { IComment } from "./classes/interfaces/IComment";
import { IPhoto } from "./classes/interfaces/IPhoto";
import { IPost } from "./classes/interfaces/IPost";
import { ITodo } from "./classes/interfaces/ITodo";
import { IUser } from "./classes/interfaces/IUser";

const app = express();
const port = 3000;
const baseUrl = "https://jsonplaceholder.typicode.com";

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/albums", async (req, res) => {
  const uri = `${baseUrl}/albums`;

  try {
    const response = await fetch(uri, { method: "GET" });
    const albums = await response.json();
    const decodedAlbums: IAlbum[] = [];

    albums.forEach((album: IAlbum) => {
      decodedAlbums.push(new Album(album.userId, album.id, album.title));
    });
    console.log("albums: ", decodedAlbums);
    res.send(decodedAlbums);
  } catch (e) {
    console.log("Error: ", e);
  }
});

app.get("/comments", async (req, res) => {
  const uri = `${baseUrl}/comments`;

  try {
    const response = await fetch(uri, { method: "GET" });
    const comments = await response.json();
    const decodedComment: IComment[] = [];

    comments.forEach((comment: IComment) => {
      decodedComment.push(
        new Comment(
          comment.postId,
          comment.id,
          comment.name,
          comment.email,
          comment.body
        )
      );
    });
    console.log("comments: ", decodedComment);
    res.send(decodedComment);
  } catch (e) {
    console.log("Error: ", e);
  }
});

app.get("/photos", async (req, res) => {
  const uri = `${baseUrl}/photos`;

  try {
    const response = await fetch(uri, { method: "GET" });
    const photos = await response.json();
    const decodedPhotos: IPhoto[] = [];

    photos.forEach((photo: IPhoto) => {
      decodedPhotos.push(
        new Photo(
          photo.albumId,
          photo.id,
          photo.title,
          photo.url,
          photo.thumbnailUrl
        )
      );
    });
    console.log("photos: ", decodedPhotos);
    res.send(decodedPhotos);
  } catch (e) {
    console.log("Error: ", e);
  }
});

app.get("/posts", async (req, res) => {
  const uri = `${baseUrl}/posts`;

  try {
    const response = await fetch(uri, { method: "GET" });
    const posts = await response.json();
    const decodedPosts: IPost[] = [];

    posts.forEach((post: IPost) => {
      decodedPosts.push(new Post(post.userId, post.id, post.title, post.body));
    });
    console.log("posts: ", decodedPosts);
    res.send(decodedPosts);
  } catch (e) {
    console.log("Error: ", e);
  }
});

app.get("/todos", async (req, res) => {
  const uri = `${baseUrl}/todos`;

  try {
    const response = await fetch(uri, { method: "GET" });
    const todos = await response.json();
    const decodedTodos: ITodo[] = [];

    todos.forEach((todo: ITodo) => {
      decodedTodos.push(
        new Todo(todo.userId, todo.id, todo.title, todo.completed)
      );
    });
    console.log("todos: ", decodedTodos);
    res.send(decodedTodos);
  } catch (e) {
    console.log("Error: ", e);
  }
});

app.get("/users", async (req, res) => {
  const uri = `${baseUrl}/users`;

  try {
    const response = await fetch(uri, { method: "GET" });
    const users = await response.json();
    const decodedUsers: IUser[] = [];

    users.forEach((user: IUser) => {
      decodedUsers.push(
        new User(
          user.id,
          user.name,
          user.username,
          user.email,
          user.address,
          user.phone,
          user.website,
          user.company
        )
      );
    });
    console.log("users: ", decodedUsers);
    res.send(decodedUsers);
  } catch (e) {
    console.log("Error: ", e);
  }
});

app.listen(port, () => {
  console.log("Running on port: ", port);
});
