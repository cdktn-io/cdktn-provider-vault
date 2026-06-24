/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OauthResourceServerConfigProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of allowed audiences (aud claim) to validate in JWTs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#audiences OauthResourceServerConfigProfile#audiences}
  */
  readonly audiences?: string[];
  /**
  * Leeway for clock skew in seconds when validating time-based claims. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#clock_skew_leeway OauthResourceServerConfigProfile#clock_skew_leeway}
  */
  readonly clockSkewLeeway?: number;
  /**
  * Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#enabled OauthResourceServerConfigProfile#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The issuer ID (iss claim) to validate against in incoming JWTs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#issuer_id OauthResourceServerConfigProfile#issuer_id}
  */
  readonly issuerId: string;
  /**
  * Optional CA certificate (PEM format) for JWKS URI TLS validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwks_ca_pem OauthResourceServerConfigProfile#jwks_ca_pem}
  */
  readonly jwksCaPem?: string;
  /**
  * The JWKS URI to fetch public keys from. Required when use_jwks=true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwks_uri OauthResourceServerConfigProfile#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwt_type OauthResourceServerConfigProfile#jwt_type}
  */
  readonly jwtType?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#namespace OauthResourceServerConfigProfile#namespace}
  */
  readonly namespace?: string;
  /**
  * If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#no_default_policy OauthResourceServerConfigProfile#no_default_policy}
  */
  readonly noDefaultPolicy?: boolean | cdktn.IResolvable;
  /**
  * When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. When set to true, authorization_details in the JWT token are optional. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#optional_authorization_details OauthResourceServerConfigProfile#optional_authorization_details}
  */
  readonly optionalAuthorizationDetails?: boolean | cdktn.IResolvable;
  /**
  * The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#profile_name OauthResourceServerConfigProfile#profile_name}
  */
  readonly profileName: string;
  /**
  * List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#supported_algorithms OauthResourceServerConfigProfile#supported_algorithms}
  */
  readonly supportedAlgorithms?: string[];
  /**
  * If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#use_jwks OauthResourceServerConfigProfile#use_jwks}
  */
  readonly useJwks?: boolean | cdktn.IResolvable;
  /**
  * The claim to use as the user identifier. Defaults to 'sub'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#user_claim OauthResourceServerConfigProfile#user_claim}
  */
  readonly userClaim?: string;
  /**
  * public_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#public_keys OauthResourceServerConfigProfile#public_keys}
  */
  readonly publicKeys?: OauthResourceServerConfigProfilePublicKeys[] | cdktn.IResolvable;
}
export interface OauthResourceServerConfigProfilePublicKeys {
  /**
  * The key ID (kid) for this public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#key_id OauthResourceServerConfigProfile#key_id}
  */
  readonly keyId: string;
  /**
  * The PEM-encoded public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#pem OauthResourceServerConfigProfile#pem}
  */
  readonly pem: string;
}

export function oauthResourceServerConfigProfilePublicKeysToTerraform(struct?: OauthResourceServerConfigProfilePublicKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
    pem: cdktn.stringToTerraform(struct!.pem),
  }
}


export function oauthResourceServerConfigProfilePublicKeysToHclTerraform(struct?: OauthResourceServerConfigProfilePublicKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem: {
      value: cdktn.stringToHclTerraform(struct!.pem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthResourceServerConfigProfilePublicKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OauthResourceServerConfigProfilePublicKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.pem = this._pem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthResourceServerConfigProfilePublicKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._pem = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._pem = value.pem;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // pem - computed: false, optional: false, required: true
  private _pem?: string; 
  public get pem() {
    return this.getStringAttribute('pem');
  }
  public set pem(value: string) {
    this._pem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }
}

export class OauthResourceServerConfigProfilePublicKeysList extends cdktn.ComplexList {
  public internalValue? : OauthResourceServerConfigProfilePublicKeys[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OauthResourceServerConfigProfilePublicKeysOutputReference {
    return new OauthResourceServerConfigProfilePublicKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile vault_oauth_resource_server_config_profile}
*/
export class OauthResourceServerConfigProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_oauth_resource_server_config_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthResourceServerConfigProfile to import
  * @param importFromId The id of the existing OauthResourceServerConfigProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthResourceServerConfigProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_oauth_resource_server_config_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile vault_oauth_resource_server_config_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthResourceServerConfigProfileConfig
  */
  public constructor(scope: Construct, id: string, config: OauthResourceServerConfigProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_oauth_resource_server_config_profile',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audiences = config.audiences;
    this._clockSkewLeeway = config.clockSkewLeeway;
    this._enabled = config.enabled;
    this._issuerId = config.issuerId;
    this._jwksCaPem = config.jwksCaPem;
    this._jwksUri = config.jwksUri;
    this._jwtType = config.jwtType;
    this._namespace = config.namespace;
    this._noDefaultPolicy = config.noDefaultPolicy;
    this._optionalAuthorizationDetails = config.optionalAuthorizationDetails;
    this._profileName = config.profileName;
    this._supportedAlgorithms = config.supportedAlgorithms;
    this._useJwks = config.useJwks;
    this._userClaim = config.userClaim;
    this._publicKeys.internalValue = config.publicKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // clock_skew_leeway - computed: true, optional: true, required: false
  private _clockSkewLeeway?: number; 
  public get clockSkewLeeway() {
    return this.getNumberAttribute('clock_skew_leeway');
  }
  public set clockSkewLeeway(value: number) {
    this._clockSkewLeeway = value;
  }
  public resetClockSkewLeeway() {
    this._clockSkewLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewLeewayInput() {
    return this._clockSkewLeeway;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_id - computed: false, optional: false, required: true
  private _issuerId?: string; 
  public get issuerId() {
    return this.getStringAttribute('issuer_id');
  }
  public set issuerId(value: string) {
    this._issuerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerIdInput() {
    return this._issuerId;
  }

  // jwks_ca_pem - computed: false, optional: true, required: false
  private _jwksCaPem?: string; 
  public get jwksCaPem() {
    return this.getStringAttribute('jwks_ca_pem');
  }
  public set jwksCaPem(value: string) {
    this._jwksCaPem = value;
  }
  public resetJwksCaPem() {
    this._jwksCaPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksCaPemInput() {
    return this._jwksCaPem;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // jwt_type - computed: true, optional: true, required: false
  private _jwtType?: string; 
  public get jwtType() {
    return this.getStringAttribute('jwt_type');
  }
  public set jwtType(value: string) {
    this._jwtType = value;
  }
  public resetJwtType() {
    this._jwtType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTypeInput() {
    return this._jwtType;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // no_default_policy - computed: true, optional: true, required: false
  private _noDefaultPolicy?: boolean | cdktn.IResolvable; 
  public get noDefaultPolicy() {
    return this.getBooleanAttribute('no_default_policy');
  }
  public set noDefaultPolicy(value: boolean | cdktn.IResolvable) {
    this._noDefaultPolicy = value;
  }
  public resetNoDefaultPolicy() {
    this._noDefaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDefaultPolicyInput() {
    return this._noDefaultPolicy;
  }

  // optional_authorization_details - computed: true, optional: true, required: false
  private _optionalAuthorizationDetails?: boolean | cdktn.IResolvable; 
  public get optionalAuthorizationDetails() {
    return this.getBooleanAttribute('optional_authorization_details');
  }
  public set optionalAuthorizationDetails(value: boolean | cdktn.IResolvable) {
    this._optionalAuthorizationDetails = value;
  }
  public resetOptionalAuthorizationDetails() {
    this._optionalAuthorizationDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAuthorizationDetailsInput() {
    return this._optionalAuthorizationDetails;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // supported_algorithms - computed: true, optional: true, required: false
  private _supportedAlgorithms?: string[]; 
  public get supportedAlgorithms() {
    return this.getListAttribute('supported_algorithms');
  }
  public set supportedAlgorithms(value: string[]) {
    this._supportedAlgorithms = value;
  }
  public resetSupportedAlgorithms() {
    this._supportedAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedAlgorithmsInput() {
    return this._supportedAlgorithms;
  }

  // use_jwks - computed: true, optional: true, required: false
  private _useJwks?: boolean | cdktn.IResolvable; 
  public get useJwks() {
    return this.getBooleanAttribute('use_jwks');
  }
  public set useJwks(value: boolean | cdktn.IResolvable) {
    this._useJwks = value;
  }
  public resetUseJwks() {
    this._useJwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useJwksInput() {
    return this._useJwks;
  }

  // user_claim - computed: true, optional: true, required: false
  private _userClaim?: string; 
  public get userClaim() {
    return this.getStringAttribute('user_claim');
  }
  public set userClaim(value: string) {
    this._userClaim = value;
  }
  public resetUserClaim() {
    this._userClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userClaimInput() {
    return this._userClaim;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys = new OauthResourceServerConfigProfilePublicKeysList(this, "public_keys", false);
  public get publicKeys() {
    return this._publicKeys;
  }
  public putPublicKeys(value: OauthResourceServerConfigProfilePublicKeys[] | cdktn.IResolvable) {
    this._publicKeys.internalValue = value;
  }
  public resetPublicKeys() {
    this._publicKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audiences: cdktn.listMapper(cdktn.stringToTerraform, false)(this._audiences),
      clock_skew_leeway: cdktn.numberToTerraform(this._clockSkewLeeway),
      enabled: cdktn.booleanToTerraform(this._enabled),
      issuer_id: cdktn.stringToTerraform(this._issuerId),
      jwks_ca_pem: cdktn.stringToTerraform(this._jwksCaPem),
      jwks_uri: cdktn.stringToTerraform(this._jwksUri),
      jwt_type: cdktn.stringToTerraform(this._jwtType),
      namespace: cdktn.stringToTerraform(this._namespace),
      no_default_policy: cdktn.booleanToTerraform(this._noDefaultPolicy),
      optional_authorization_details: cdktn.booleanToTerraform(this._optionalAuthorizationDetails),
      profile_name: cdktn.stringToTerraform(this._profileName),
      supported_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._supportedAlgorithms),
      use_jwks: cdktn.booleanToTerraform(this._useJwks),
      user_claim: cdktn.stringToTerraform(this._userClaim),
      public_keys: cdktn.listMapper(oauthResourceServerConfigProfilePublicKeysToTerraform, true)(this._publicKeys.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audiences: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._audiences),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      clock_skew_leeway: {
        value: cdktn.numberToHclTerraform(this._clockSkewLeeway),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issuer_id: {
        value: cdktn.stringToHclTerraform(this._issuerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_ca_pem: {
        value: cdktn.stringToHclTerraform(this._jwksCaPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_uri: {
        value: cdktn.stringToHclTerraform(this._jwksUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_type: {
        value: cdktn.stringToHclTerraform(this._jwtType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_default_policy: {
        value: cdktn.booleanToHclTerraform(this._noDefaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optional_authorization_details: {
        value: cdktn.booleanToHclTerraform(this._optionalAuthorizationDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_name: {
        value: cdktn.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_algorithms: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._supportedAlgorithms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      use_jwks: {
        value: cdktn.booleanToHclTerraform(this._useJwks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_claim: {
        value: cdktn.stringToHclTerraform(this._userClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_keys: {
        value: cdktn.listMapperHcl(oauthResourceServerConfigProfilePublicKeysToHclTerraform, true)(this._publicKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OauthResourceServerConfigProfilePublicKeysList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
