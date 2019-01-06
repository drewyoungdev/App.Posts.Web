export class Post {
    id : string;
    parentId : string;
    body : string;
    depth : number;
    mustContinueInNewThread : boolean
    numOfHiddenReplies : number;
    replies : Post[] = [];
}
