declare module "@hcsc/single-spa-styles" {
  export interface IAuthenticatedUser {
    name: string;
    token: string;
  }

  export function getAuthenticatedUser(): IAuthenticatedUser | null;

  export function authenticate(name): Promise<IAuthenticatedUser>;
}
