export interface IUserItemData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  isInvited?: any;
  onClickInvite?: (id: number) => void;
}
