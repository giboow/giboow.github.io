import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from "remark";
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism';

remarkPrism()
const postsDirectory = path.join(process.cwd(), 'data/posts');

/**
 * Get All postIds
 * @returns {*}
 */
export const getAllPostIds = () => {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    });
}


export async function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsDataPromise = Promise.all(fileNames.map(async fileName => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.md$/, '')

            return getPostData(id);
        })
    );
    // Sort posts by date
    return await Promise.resolve(allPostsDataPromise).then((allPostsData) => {
        return allPostsData.sort((a, b) => {
            if (a.date < b.date) {
                return 1
            } else {
                return -1
            }
        });
    });

}

function readingTime(text){
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
   return Math.ceil(words / wpm);
}


export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Get content html
    const contentHtml = (await remark()
        .use(remarkPrism)
        .use(remarkHtml,  { sanitize: false })
        .process(matterResult.content)).toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
        readingTime: readingTime(matterResult.content)
    }
}

