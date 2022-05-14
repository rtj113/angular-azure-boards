export interface Boards {
  id: number;
  WorkItemType: string;
  title: string;
  AssignedTo: string;
  State: string;

  //   select [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State]
  //  from WorkItemLinks
}