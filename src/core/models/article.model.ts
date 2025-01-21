import { Author } from "./author.model";
import { Category } from "./category.model";
import { Source } from "./source.model";

export interface Article {
  id: number;
  title: string;
  content: string;
  image_url?: string;
  source?: Source;
  category?: Category;
  author: Author;
  published_at: string;
}
