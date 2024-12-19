import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithibIssue } from '../../interfaces';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'issue-comment',
  imports: [
    MarkdownComponent,
  ],
  templateUrl: './issue-comment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueCommentComponent {

  issue = input.required<GithibIssue>();
}
