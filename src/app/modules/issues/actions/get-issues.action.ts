
import { sleep } from "@helpers/sleep";
import { GithibIssue } from "../interfaces";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const GIHUB_TOKEN = environment.token;

export const getIssues = async (): Promise<GithibIssue[]> => {

  await sleep(5000);

  try {
    const resp = await fetch(
      `${BASE_URL}/issues`,
      {
        headers: {
          Authorization: `Bearer ${GIHUB_TOKEN}`
        }
      }
    )

    if (!resp.ok) throw "Can't load issues";

    const issues: GithibIssue[] = await resp.json();

    return issues;

  } catch (error) {
    throw "Can't load issues"
  }
}
