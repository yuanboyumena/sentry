export function Team(params) {
  return {
    id: '1',
    slug: 'team-slug',
    name: 'Team Name',
    isMember: true,
    ...params,
  };
}
