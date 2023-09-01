import { EditInterface } from 'interfaces/edit';
import { PublicationInterface } from 'interfaces/publication';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PaperInterface {
  id?: string;
  title: string;
  content: string;
  status: string;
  plagiarism_check: boolean;
  relevancy_check: boolean;
  author_id: string;
  created_at?: any;
  updated_at?: any;
  edit?: EditInterface[];
  publication?: PublicationInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    edit?: number;
    publication?: number;
    review?: number;
  };
}

export interface PaperGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  status?: string;
  author_id?: string;
}
