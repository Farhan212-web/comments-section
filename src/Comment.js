import React from "react";
import Plus from './images/icon-plus.svg';
import Minus from './images/icon-minus.svg';
import Amy from './images/avatars/image-amyrobson.png';
import Reply from './images/icon-reply.svg';
import './css/Comment.css';

const Comment = (props) => {
    return (
        <div className="Comment">
            <div className="rating">
                <img src={Plus} alt="" />
                <p>0</p>
                <img src={Minus} alt="" />
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