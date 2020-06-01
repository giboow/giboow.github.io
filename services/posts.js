import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from "remark";
import remarkHtml from 'remark-html';

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
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Get content html
    const processedContent =  await remark()
      .use(remarkHtml)
      .process(matterResult.content);
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}