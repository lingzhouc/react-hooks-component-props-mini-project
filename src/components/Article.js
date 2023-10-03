import React from "react";
import blogData from "../data/blog";

function Article(prop,obj){
let date = prop.date
if (!date){date='January 1, 1970'}
return (
    <article>
        <h3>{prop.title}</h3>
            <small> {date}</small>
                <p>   {prop.preview}</p>
    </article>
)
}

export default Article