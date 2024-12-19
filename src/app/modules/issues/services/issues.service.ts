import { Injectable } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssues, getLabels } from '../actions';

@Injectable({
  providedIn: 'root'
})

export class IssuesService {

  public labelQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels()
  }))

  public issuesQuery = injectQuery(() => ({
    queryKey: ['issues'],
    queryFn: () => getIssues()
  }))

}
