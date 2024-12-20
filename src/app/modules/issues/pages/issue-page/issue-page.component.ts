import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';
import { MarkdownComponent } from 'ngx-markdown';


@Component({
  selector: 'app-issue-page',
  standalone: true,
  imports: [
    RouterLink,
    IssueCommentComponent,
    MarkdownComponent
  ],
  templateUrl: './issue-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuePageComponent {
  route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  issueNumber = toSignal<String>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((number) => {
        this.issueService.setIssueNumber(number);
      })
    )
  );

  get issueQuery() {
    return this.issueService.issueQuery;
  }

  get issueCommentsQuery(){
    return this.issueService.issueCommentsQuery
  }
}
