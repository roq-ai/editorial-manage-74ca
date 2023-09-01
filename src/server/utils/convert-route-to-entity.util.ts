const mapping: Record<string, string> = {
  edits: 'edit',
  organizations: 'organization',
  papers: 'paper',
  publications: 'publication',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
