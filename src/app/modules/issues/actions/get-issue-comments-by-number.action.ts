import { sleep } from '@helpers/sleep';
import { environment } from 'src/environments/environment.development';
import { GithibIssue } from '../interfaces';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.token;
export const getIssueCommentsByNumber = async (issueNumber: string): Promise<GithibIssue[]> => {
  await sleep(5000);
  try {

    const resp = await fetch(
      `${BASE_URL}/issues/${issueNumber}/comments`,
      {
        headers:{
          Authorization: `Bearer ${GITHUB_TOKEN}`
        }
      }
    );
    if (!resp.ok) throw new Error("Can't load comments");
    const comments: GithibIssue[] = await resp.json();
    return comments;

  } catch (error) {
    throw new Error("Can't load comments");
  }
};
