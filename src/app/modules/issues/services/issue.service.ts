import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssueByNumer } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issueNumber = signal<string | null>(null);

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumer(this.issueNumber()!),
    enabled: this.issueNumber() !== null, // se dispare cuando no sea null
  }));

  setIssueNumber(issueNumber:string):void{
    console.log({issueNumber});
    this.issueNumber.set(issueNumber);
  }
}
