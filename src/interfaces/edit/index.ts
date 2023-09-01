import { UserInterface } from 'interfaces/user';
import { PaperInterface } from 'interfaces/paper';
import { GetQueryInterface } from 'interfaces';

export interface EditInterface {
  id?: string;
  content: string;
  status: string;
  editor_id: string;
  paper_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  paper?: PaperInterface;
  _count?: {};
}

export interface EditGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  status?: string;
  editor_id?: string;
  paper_id?: string;
}
