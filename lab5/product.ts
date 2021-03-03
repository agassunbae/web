
export class Product{
  title: string;
  img: string;
  link: string;
  rating: number;
  likes: number;
  description: string;

  constructor(title: string, img: string, link: string, description: string = '') {
    this.title = title;
    this.img = img;
    this.link = link;
    this.rating = 0;
    this.likes = 0;
    this.description = description;
  }
}
