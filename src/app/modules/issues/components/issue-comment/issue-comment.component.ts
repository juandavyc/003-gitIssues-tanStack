import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithibIssue } from '../../interfaces';

@Component({
  selector: 'issue-comment',
  standalone: true,
  imports: [],
  templateUrl: './issue-comment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueCommentComponent {

  issue = input.required<GithibIssue>();
 }
