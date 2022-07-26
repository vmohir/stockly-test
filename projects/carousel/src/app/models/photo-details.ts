export interface PhotoDetails {
  comments?: Comment[];
  postedBy: number; // userId
  postedAt: number;
  src: string;
  description: string;
}

export interface Comment {
  content: string;
  postedBy: number; // userId
  postedAt: number;
}
