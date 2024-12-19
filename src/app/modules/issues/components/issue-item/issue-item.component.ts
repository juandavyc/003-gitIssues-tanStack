import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GithibIssue, State } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'issue-item',
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './issue-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueItemComponent {

  public issue = input.required<GithibIssue>();

  public isOpen = computed(()=>{
    return this.issue().state == State.Open
  })

}
