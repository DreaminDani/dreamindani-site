import { error } from '@sveltejs/kit'

export async function load({ params, fetch }) {
    try {
        const posts = await fetch(`/api/posts`);
        const postsList = await posts.json();
        // console.log(postsList);

        const foundPost = postsList.find(post => post.slug === params.postid);
        console.log('foundPost', foundPost);

        if (!foundPost) {
            error(404, `Could not find ${params.postid}`)
        } else {
            console.log('foundPost.path', foundPost.path);
            const filename = foundPost.path.split('/').at(-1).split('.md')[0];
            const post = await import(`../../../content/posts/${filename}.md`);
            return {
                content: post.default,
                meta: post.metadata
            }
        }
        // const foundPost = postsList.filter(post => post.metadata.slug === params.postid);

        // if (foundPost.length === 0) {
        //     error(404, `Could not find ${params.postid}`)
        // } else {
        //     const post = await import(foundPost.path);
        //     return {
        //         content: post.default,
        //         meta: post.metadata
        //     }
        // }

    } catch (e) {
        error(404, `Could not find ${params.postid}`)
    }
}