import { Reactions, User } from "./github-issue.interface";

export interface GithubIssueComment {
  url:                      string;
  html_url:                 string;
  issue_url:                string;
  id:                       number;
  node_id:                  string;
  user:                     User;
  created_at:               string;
  updated_at:               string;
  author_association:       string;
  body:                     string;
  reactions:                Reactions;
  performed_via_github_app: null;
}


