export class tidslinje {
  id!: Number;
  user!: String;
  timestampCreated?: any ;
  timestampChanged?: any;
  start?: Number | undefined;
  end?: Number | undefined;
  text!: String;
  like!: Boolean;
  dislike!: Boolean;
  isdeleted!: Boolean;
  texttocommentid!: Number;
}
