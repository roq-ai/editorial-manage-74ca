import { UserInterface } from 'interfaces/user';
import { PaperInterface } from 'interfaces/paper';
import { GetQueryInterface } from 'interfaces';

export interface PublicationInterface {
  id?: string;
  status: string;
  editor_in_chief_id: string;
  paper_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  paper?: PaperInterface;
  _count?: {};
}

export interface PublicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  editor_in_chief_id?: string;
  paper_id?: string;
}
