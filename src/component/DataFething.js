import React, { Fragment, useState, useEffect } from 'react';
import { isNull, isObject, isUndefined } from 'lodash';
import axios from 'axios';

const DataFetching = () => {

    const [posts, setPosts] = useState([]);
    const [id, setId] = useState("");

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                const { status, data } = response;
                if (status === 200) {
                    setPosts(data);
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }, [id])

    return (
        <Fragment>
            <input
                type="number"
                style={{ width: 400, height: 80, fontSize: 50 }}
                value={id}
                onChange={(e) => setId(e.target.value)} />
            <h5 style={{ fontSize: 40, }}> {posts.title} </h5>

            {/* <ul>
                {posts.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul> */}

        </Fragment >
    );
}

export default DataFetching;