export class MainPost {
    id : string;
    author : string;
    body : string;
    score : number;
    createDate : string;
    numOfHiddenReplies : number;
    
    // meta data from key-value store
    title : string;
    subThread : string;
}
