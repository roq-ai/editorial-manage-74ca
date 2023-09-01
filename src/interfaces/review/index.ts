import { UserInterface } from 'interfaces/user';
import { PaperInterface } from 'interfaces/paper';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  comment: string;
  status: string;
  reviewer_id: string;
  paper_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  paper?: PaperInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  status?: string;
  reviewer_id?: string;
  paper_id?: string;
}
