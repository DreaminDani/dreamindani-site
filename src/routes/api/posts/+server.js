import { json } from '@sveltejs/kit'

async function getPosts() {
    let posts = []

    const paths = import.meta.glob('/src/content/posts/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        let slug = "";
        if (file?.metadata?.slug) {
            if (file?.metadata?.slug.startsWith('/')) {
                slug = file.metadata.slug = file.metadata.slug.slice(1);
            } else {
                slug = file.metadata.slug;
            }
        } else {
            slug = '/posts/' + path.split('/').at(-1)?.replace('.md', '')
        }

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata
            const post = { ...metadata, slug, path }
            post.published && posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
