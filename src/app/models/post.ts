export class Post {
    id : string;
    parentId : string;
    depth : number;
    numOfHiddenReplies : number;
    replies : Post[];
}
