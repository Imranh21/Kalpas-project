export interface AppContext {
  posts: Post[];
  page: number;
  showForm: boolean;
  next: () => void;
  paginatePage: (value: number) => void;
  handleForm: () => void;
  cardShowState: string;
  handleCardShow: (value: string) => void
}

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}
