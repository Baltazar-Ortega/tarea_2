import { IAlbum } from "./interfaces/IAlbum";

export class Album implements IAlbum {
  userId: number;
  id: number;
  title: string;

  constructor(userId: number, id: number, title: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
  }
}
