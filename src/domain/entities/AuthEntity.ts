export class AuthEntity {
    constructor(
      public readonly uuid: string,
      public readonly email: string,
      public readonly accessToken: string,
      public readonly refreshToken: string,
      public readonly expiresIn: number,
      public readonly tokenType: string
    ) {}

    static reconstitute(props: {
      uuid: string;
      email: string;
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
      tokenType: string;
    }): AuthEntity {
      return new AuthEntity(
        props.uuid,
        props.email,
        props.accessToken,
        props.refreshToken,
        props.expiresIn,
        props.tokenType
      );
    }
  }