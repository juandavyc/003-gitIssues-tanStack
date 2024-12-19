import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { CommonModule } from '@angular/common';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';

@Component({
    selector: 'app-issues-list-page',
    imports: [
        CommonModule,
        RouterLink,
        //
        IssueItemComponent,
        LabelsSelectorComponent,
    ],
    templateUrl: './issues-list-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class IssuesListPageComponent {

  private issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelQuery
  }

  get issuesQuery(){
    return this.issuesService.issuesQuery
  }
}
