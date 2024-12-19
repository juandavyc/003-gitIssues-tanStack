
import { sleep } from "@helpers/sleep";
import { GithubLabel } from "../interfaces";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const GIHUB_TOKEN = environment.token;

export const getLabels = async (): Promise<GithubLabel[]> => {

  await sleep(5000);

  try {
    const resp = await fetch(
      `${BASE_URL}/labels`,
      {
        headers: {
          Authorization: `Bearer ${GIHUB_TOKEN}`
        }
      }
    )

    if (!resp.ok) throw "Can't load labels";

    const labels: GithubLabel[] = await resp.json();

    return labels;

  } catch (error) {
    throw "Can't load labels"
  }
}
