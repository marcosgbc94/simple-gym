import { AuthEntity } from "../../domain/entities/AuthEntity";
import { AuthModel } from "../models/AuthModel";

export class AuthMapper {

  static toDomain(model: AuthModel): AuthEntity {
    return AuthEntity.reconstitute({
      uuid: model.uuid,
      email: model.email,
      accessToken: model.access_token,
      refreshToken: model.refresh_token,
      expiresIn: model.expires_in,
      tokenType: model.token_type
    });
  }

  static toModel(entity: AuthEntity): AuthModel {
    return {
      uuid: entity.uuid,
      email: entity.email,
      access_token: entity.accessToken,
      refresh_token: entity.refreshToken,
      expires_in: entity.expiresIn,
      token_type: entity.tokenType
    };
  }
}