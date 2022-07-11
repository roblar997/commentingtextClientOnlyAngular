export class tidslinje {
  constructor(id?: Number, user?: String, timestampCreated?: any, timestampChanged?: any, start?: Number | undefined,
    end?: Number | undefined, text?: string, like?: boolean, dislike?: boolean, isdeleted?: boolean, texttocommentid? : Number) {
    if (id) this.id = id;
    if (user) this.user = user;
    if (timestampCreated) this.timestampCreated = timestampCreated;
    if (timestampChanged) this.timestampChanged = timestampChanged;
    if (start) this.start = start;
    if (end) this.end = end;
    if (text) this.text = text;
    if (like != undefined) this.like = like;
    if (dislike != undefined)  this.dislike = dislike;
    if (isdeleted != undefined) this.isdeleted = isdeleted;
    if (texttocommentid) this.texttocommentid = texttocommentid;
  }
  id!: Number;
  user!: String;
  timestampCreated?: any ;
  timestampChanged?: any;
  start?: Number | undefined;
  end?: Number | undefined;
  text!: string;
  like!:boolean;
  dislike!: boolean;
  isdeleted!: boolean;
  texttocommentid!: Number;
}
