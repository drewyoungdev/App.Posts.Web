export class Post {
    id : number;
    parentId : number;
    depth : number;
    numOfHiddenReplies : number;
    replies : Post[];
}
