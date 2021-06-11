export interface Nav {
  id: number | string;
  color: string;
  name: string;
}

export function createNav(params: Partial<Nav>) {
  return {
    id: params.id,
    color: params.color ?? '',
    name: params.name ?? ''
  } as Nav;
}
