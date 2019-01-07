export class Post {
    id : string;
    parentId : string;
    author : string;
    body : string;
    depth : number;
    score : number;
    createDate : string;
    mustContinueInNewThread : boolean
    numOfHiddenReplies : number;
    replies : Post[] = [];
}
