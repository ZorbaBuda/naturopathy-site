import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    

    const routes = ["", "/services","/contact", "/schedule", "/about", "/privacy"].map((route) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes];
}

// https://alsiam.medium.com/generating-dynamic-sitemaps-for-next-js-14-app-router-c5009fd1552e

// export default async function sitemap() {
//     const blog = await sanityFetch({
//         query: postsQuery,
//         tags: ["post"],
//     });

//     const posts = blog.map(({ slug, _updatedAt }) => ({
//         url: `${URL}/blog/${slug}`,
//         lastModified: _updatedAt,
//     }));

//     const routes = ["", "/blog", "/about",].map((route) => ({
//         url: `${URL}${route}`,
//         lastModified: new Date().toISOString(),
//     }));

//     return [...routes, ...posts];
// }