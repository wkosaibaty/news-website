export interface ArticleFilters {
  search?: string;
  category_id?: number;
  source_id?: number;
  published_at_from?: Date;
  published_at_to?: Date;
  page?: number;
  page_limit?: number;
}
