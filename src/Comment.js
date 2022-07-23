import {React, useState} from "react";
import Plus from './images/icon-plus.svg';
import Minus from './images/icon-minus.svg';
import Amy from './images/avatars/image-amyrobson.png';
import Reply from './images/icon-reply.svg';
import './css/Comment.css';

const Comment = (props) => {
    const [voteCount, setVoteCount] = useState(0);
    const [hasUpVoted, setHasUpVoted] = useState(false);
    const [hasDownVoted, setHasDownVoted] = useState(false);


    const incrementVote = () => {
        if(hasUpVoted) {
            return;
        }

        if(hasDownVoted) {
            setVoteCount(voteCount + 2)
        } else {
            setVoteCount(voteCount + 1);
        }

        setHasUpVoted(true);
        setHasDownVoted(false)
    }

    const decrementVote = () => {

        if(hasDownVoted) {
            return;
        }

        if(hasUpVoted) {
            setVoteCount(voteCount - 2)
        } else {
            setVoteCount(voteCount - 1);
        }

        setHasDownVoted(true);
        setHasUpVoted(false)
    }

    return (
        <div className="Comment">
            <div className="rating">
                <img onClick={incrementVote} className="vote-logo" src={Plus} alt="" />
                <p>{voteCount}</p>
                <img onClick={decrementVote} className="vote-logo" src={Minus} alt="" />
            </div>

            <div className="text">

                <div className="comment-info">
                    <div className="author-info">
                        <img src={Amy} alt="" />
                        <span>amyrobson</span>
                        <span>1 month ago</span>
                    </div>

                    <div className="Reply">
                        <img src={Reply} alt="" />
                        <span>Reply</span>
                    </div>
                </div>

                <p className="main-text">{props.text}</p>

            </div>


        </div>
         
    )
}

export default Comment;