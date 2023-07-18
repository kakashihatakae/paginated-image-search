export interface hit {
  id: number;
  tags: string;
  webformatURL: string;
  previewURL: string;
  user: string;
  userImageURL: string;
  webformatWidth: number;
  webformatHeight: number;
  likes: number;
  comments: number;
}

export interface imageResponse {
  total: number;
  totalHits: number;
  hits: hit[];
}
