/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface JwtAuthBackendConfig extends cdktn.TerraformMetaArguments {
  /**
  * The value against which to match the iss claim in a JWT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#bound_issuer JwtAuthBackend#bound_issuer}
  */
  readonly boundIssuer?: string;
  /**
  * The default role to use if none is provided during login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#default_role JwtAuthBackend#default_role}
  */
  readonly defaultRole?: string;
  /**
  * The description of the auth backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#description JwtAuthBackend#description}
  */
  readonly description?: string;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#disable_remount JwtAuthBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. If not set, system certificates are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#jwks_ca_pem JwtAuthBackend#jwks_ca_pem}
  */
  readonly jwksCaPem?: string;
  /**
  * List of JWKS URL and optional CA certificate pairs. Cannot be used with 'jwks_url' or 'jwks_ca_pem'. Requires Vault 1.16+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#jwks_pairs JwtAuthBackend#jwks_pairs}
  */
  readonly jwksPairs?: { [key: string]: string }[] | cdktn.IResolvable;
  /**
  * JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#jwks_url JwtAuthBackend#jwks_url}
  */
  readonly jwksUrl?: string;
  /**
  * A list of supported signing algorithms. Defaults to [RS256]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#jwt_supported_algs JwtAuthBackend#jwt_supported_algs}
  */
  readonly jwtSupportedAlgs?: string[];
  /**
  * A list of PEM-encoded public keys to use to authenticate signatures locally. Cannot be used with 'jwks_url' or 'oidc_discovery_url'. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#jwt_validation_pubkeys JwtAuthBackend#jwt_validation_pubkeys}
  */
  readonly jwtValidationPubkeys?: string[];
  /**
  * Specifies if the auth method is local only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#local JwtAuthBackend#local}
  */
  readonly local?: boolean | cdktn.IResolvable;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#namespace JwtAuthBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Pass namespace in the OIDC state parameter instead of as a separate query parameter. With this setting, the allowed redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating against it. Defaults to true for new configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#namespace_in_state JwtAuthBackend#namespace_in_state}
  */
  readonly namespaceInState?: boolean | cdktn.IResolvable;
  /**
  * Client ID used for OIDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_client_id JwtAuthBackend#oidc_client_id}
  */
  readonly oidcClientId?: string;
  /**
  * Client Secret used for OIDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_client_secret JwtAuthBackend#oidc_client_secret}
  */
  readonly oidcClientSecret?: string;
  /**
  * Write-only Client Secret used for OIDC. This field is recommended over oidc_client_secret for enhanced security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_client_secret_wo JwtAuthBackend#oidc_client_secret_wo}
  */
  readonly oidcClientSecretWo?: string;
  /**
  * Version counter for write-only oidc_client_secret field. Increment this value to force update of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_client_secret_wo_version JwtAuthBackend#oidc_client_secret_wo_version}
  */
  readonly oidcClientSecretWoVersion?: number;
  /**
  * The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. If not set, system certificates are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_discovery_ca_pem JwtAuthBackend#oidc_discovery_ca_pem}
  */
  readonly oidcDiscoveryCaPem?: string;
  /**
  * The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_discovery_url JwtAuthBackend#oidc_discovery_url}
  */
  readonly oidcDiscoveryUrl?: string;
  /**
  * The response mode to be used in the OAuth2 request. Allowed values are 'query' and 'form_post'. Defaults to 'query'. If using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_response_mode JwtAuthBackend#oidc_response_mode}
  */
  readonly oidcResponseMode?: string;
  /**
  * The response types to request. Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only be used if 'oidc_response_mode' is set to 'form_post'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_response_types JwtAuthBackend#oidc_response_types}
  */
  readonly oidcResponseTypes?: string[];
  /**
  * path to mount the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#path JwtAuthBackend#path}
  */
  readonly path?: string;
  /**
  * Provider specific handling configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#provider_config JwtAuthBackend#provider_config}
  */
  readonly providerConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}
  */
  readonly tune?: JwtAuthBackendTune[] | cdktn.IResolvable;
  /**
  * Type of backend. Can be either 'jwt' or 'oidc'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#type JwtAuthBackend#type}
  */
  readonly type?: string;
}
export interface JwtAuthBackendTune {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}
  */
  readonly allowedResponseHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}
  */
  readonly defaultLeaseTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}
  */
  readonly listingVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}
  */
  readonly maxLeaseTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}
  */
  readonly passthroughRequestHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}
  */
  readonly tokenType?: string;
}

export function jwtAuthBackendTuneToTerraform(struct?: JwtAuthBackendTune | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_response_headers: struct!.allowedResponseHeaders === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedResponseHeaders),
    audit_non_hmac_request_keys: struct!.auditNonHmacRequestKeys === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.auditNonHmacRequestKeys),
    audit_non_hmac_response_keys: struct!.auditNonHmacResponseKeys === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.auditNonHmacResponseKeys),
    default_lease_ttl: struct!.defaultLeaseTtl === undefined ? null : cdktn.stringToTerraform(struct!.defaultLeaseTtl),
    listing_visibility: struct!.listingVisibility === undefined ? null : cdktn.stringToTerraform(struct!.listingVisibility),
    max_lease_ttl: struct!.maxLeaseTtl === undefined ? null : cdktn.stringToTerraform(struct!.maxLeaseTtl),
    passthrough_request_headers: struct!.passthroughRequestHeaders === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.passthroughRequestHeaders),
    token_type: struct!.tokenType === undefined ? null : cdktn.stringToTerraform(struct!.tokenType),
  }
}


export function jwtAuthBackendTuneToHclTerraform(struct?: JwtAuthBackendTune | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_response_headers: {
      value: struct!.allowedResponseHeaders === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedResponseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audit_non_hmac_request_keys: {
      value: struct!.auditNonHmacRequestKeys === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.auditNonHmacRequestKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audit_non_hmac_response_keys: {
      value: struct!.auditNonHmacResponseKeys === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.auditNonHmacResponseKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_lease_ttl: {
      value: struct!.defaultLeaseTtl === undefined ? null : cdktn.stringToHclTerraform(struct!.defaultLeaseTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listing_visibility: {
      value: struct!.listingVisibility === undefined ? null : cdktn.stringToHclTerraform(struct!.listingVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lease_ttl: {
      value: struct!.maxLeaseTtl === undefined ? null : cdktn.stringToHclTerraform(struct!.maxLeaseTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passthrough_request_headers: {
      value: struct!.passthroughRequestHeaders === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.passthroughRequestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_type: {
      value: struct!.tokenType === undefined ? null : cdktn.stringToHclTerraform(struct!.tokenType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JwtAuthBackendTuneOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JwtAuthBackendTune | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedResponseHeaders = this._allowedResponseHeaders;
    }
    if (this._auditNonHmacRequestKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditNonHmacRequestKeys = this._auditNonHmacRequestKeys;
    }
    if (this._auditNonHmacResponseKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditNonHmacResponseKeys = this._auditNonHmacResponseKeys;
    }
    if (this._defaultLeaseTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLeaseTtl = this._defaultLeaseTtl;
    }
    if (this._listingVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.listingVisibility = this._listingVisibility;
    }
    if (this._maxLeaseTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLeaseTtl = this._maxLeaseTtl;
    }
    if (this._passthroughRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthroughRequestHeaders = this._passthroughRequestHeaders;
    }
    if (this._tokenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenType = this._tokenType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JwtAuthBackendTune | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedResponseHeaders = undefined;
      this._auditNonHmacRequestKeys = undefined;
      this._auditNonHmacResponseKeys = undefined;
      this._defaultLeaseTtl = undefined;
      this._listingVisibility = undefined;
      this._maxLeaseTtl = undefined;
      this._passthroughRequestHeaders = undefined;
      this._tokenType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedResponseHeaders = value.allowedResponseHeaders;
      this._auditNonHmacRequestKeys = value.auditNonHmacRequestKeys;
      this._auditNonHmacResponseKeys = value.auditNonHmacResponseKeys;
      this._defaultLeaseTtl = value.defaultLeaseTtl;
      this._listingVisibility = value.listingVisibility;
      this._maxLeaseTtl = value.maxLeaseTtl;
      this._passthroughRequestHeaders = value.passthroughRequestHeaders;
      this._tokenType = value.tokenType;
    }
  }

  // allowed_response_headers - computed: true, optional: true, required: false
  private _allowedResponseHeaders?: string[]; 
  public get allowedResponseHeaders() {
    return this.getListAttribute('allowed_response_headers');
  }
  public set allowedResponseHeaders(value: string[]) {
    this._allowedResponseHeaders = value;
  }
  public resetAllowedResponseHeaders() {
    this._allowedResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedResponseHeadersInput() {
    return this._allowedResponseHeaders;
  }

  // audit_non_hmac_request_keys - computed: true, optional: true, required: false
  private _auditNonHmacRequestKeys?: string[]; 
  public get auditNonHmacRequestKeys() {
    return this.getListAttribute('audit_non_hmac_request_keys');
  }
  public set auditNonHmacRequestKeys(value: string[]) {
    this._auditNonHmacRequestKeys = value;
  }
  public resetAuditNonHmacRequestKeys() {
    this._auditNonHmacRequestKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacRequestKeysInput() {
    return this._auditNonHmacRequestKeys;
  }

  // audit_non_hmac_response_keys - computed: true, optional: true, required: false
  private _auditNonHmacResponseKeys?: string[]; 
  public get auditNonHmacResponseKeys() {
    return this.getListAttribute('audit_non_hmac_response_keys');
  }
  public set auditNonHmacResponseKeys(value: string[]) {
    this._auditNonHmacResponseKeys = value;
  }
  public resetAuditNonHmacResponseKeys() {
    this._auditNonHmacResponseKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacResponseKeysInput() {
    return this._auditNonHmacResponseKeys;
  }

  // default_lease_ttl - computed: true, optional: true, required: false
  private _defaultLeaseTtl?: string; 
  public get defaultLeaseTtl() {
    return this.getStringAttribute('default_lease_ttl');
  }
  public set defaultLeaseTtl(value: string) {
    this._defaultLeaseTtl = value;
  }
  public resetDefaultLeaseTtl() {
    this._defaultLeaseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTtlInput() {
    return this._defaultLeaseTtl;
  }

  // listing_visibility - computed: true, optional: true, required: false
  private _listingVisibility?: string; 
  public get listingVisibility() {
    return this.getStringAttribute('listing_visibility');
  }
  public set listingVisibility(value: string) {
    this._listingVisibility = value;
  }
  public resetListingVisibility() {
    this._listingVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listingVisibilityInput() {
    return this._listingVisibility;
  }

  // max_lease_ttl - computed: true, optional: true, required: false
  private _maxLeaseTtl?: string; 
  public get maxLeaseTtl() {
    return this.getStringAttribute('max_lease_ttl');
  }
  public set maxLeaseTtl(value: string) {
    this._maxLeaseTtl = value;
  }
  public resetMaxLeaseTtl() {
    this._maxLeaseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlInput() {
    return this._maxLeaseTtl;
  }

  // passthrough_request_headers - computed: true, optional: true, required: false
  private _passthroughRequestHeaders?: string[]; 
  public get passthroughRequestHeaders() {
    return this.getListAttribute('passthrough_request_headers');
  }
  public set passthroughRequestHeaders(value: string[]) {
    this._passthroughRequestHeaders = value;
  }
  public resetPassthroughRequestHeaders() {
    this._passthroughRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughRequestHeadersInput() {
    return this._passthroughRequestHeaders;
  }

  // token_type - computed: true, optional: true, required: false
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  public resetTokenType() {
    this._tokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }
}

export class JwtAuthBackendTuneList extends cdktn.ComplexList {
  public internalValue? : JwtAuthBackendTune[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): JwtAuthBackendTuneOutputReference {
    return new JwtAuthBackendTuneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend vault_jwt_auth_backend}
*/
export class JwtAuthBackend extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_jwt_auth_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a JwtAuthBackend resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JwtAuthBackend to import
  * @param importFromId The id of the existing JwtAuthBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JwtAuthBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_jwt_auth_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend vault_jwt_auth_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JwtAuthBackendConfig = {}
  */
  public constructor(scope: Construct, id: string, config: JwtAuthBackendConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_jwt_auth_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.7.0',
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
    this._boundIssuer = config.boundIssuer;
    this._defaultRole = config.defaultRole;
    this._description = config.description;
    this._disableRemount = config.disableRemount;
    this._id = config.id;
    this._jwksCaPem = config.jwksCaPem;
    this._jwksPairs = config.jwksPairs;
    this._jwksUrl = config.jwksUrl;
    this._jwtSupportedAlgs = config.jwtSupportedAlgs;
    this._jwtValidationPubkeys = config.jwtValidationPubkeys;
    this._local = config.local;
    this._namespace = config.namespace;
    this._namespaceInState = config.namespaceInState;
    this._oidcClientId = config.oidcClientId;
    this._oidcClientSecret = config.oidcClientSecret;
    this._oidcClientSecretWo = config.oidcClientSecretWo;
    this._oidcClientSecretWoVersion = config.oidcClientSecretWoVersion;
    this._oidcDiscoveryCaPem = config.oidcDiscoveryCaPem;
    this._oidcDiscoveryUrl = config.oidcDiscoveryUrl;
    this._oidcResponseMode = config.oidcResponseMode;
    this._oidcResponseTypes = config.oidcResponseTypes;
    this._path = config.path;
    this._providerConfig = config.providerConfig;
    this._tune.internalValue = config.tune;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // bound_issuer - computed: false, optional: true, required: false
  private _boundIssuer?: string; 
  public get boundIssuer() {
    return this.getStringAttribute('bound_issuer');
  }
  public set boundIssuer(value: string) {
    this._boundIssuer = value;
  }
  public resetBoundIssuer() {
    this._boundIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIssuerInput() {
    return this._boundIssuer;
  }

  // default_role - computed: false, optional: true, required: false
  private _defaultRole?: string; 
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }
  public set defaultRole(value: string) {
    this._defaultRole = value;
  }
  public resetDefaultRole() {
    this._defaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_remount - computed: false, optional: true, required: false
  private _disableRemount?: boolean | cdktn.IResolvable; 
  public get disableRemount() {
    return this.getBooleanAttribute('disable_remount');
  }
  public set disableRemount(value: boolean | cdktn.IResolvable) {
    this._disableRemount = value;
  }
  public resetDisableRemount() {
    this._disableRemount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRemountInput() {
    return this._disableRemount;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // jwks_pairs - computed: false, optional: true, required: false
  private _jwksPairs?: { [key: string]: string }[] | cdktn.IResolvable; 
  public get jwksPairs() {
    return this.interpolationForAttribute('jwks_pairs');
  }
  public set jwksPairs(value: { [key: string]: string }[] | cdktn.IResolvable) {
    this._jwksPairs = value;
  }
  public resetJwksPairs() {
    this._jwksPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksPairsInput() {
    return this._jwksPairs;
  }

  // jwks_url - computed: false, optional: true, required: false
  private _jwksUrl?: string; 
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }
  public set jwksUrl(value: string) {
    this._jwksUrl = value;
  }
  public resetJwksUrl() {
    this._jwksUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUrlInput() {
    return this._jwksUrl;
  }

  // jwt_supported_algs - computed: false, optional: true, required: false
  private _jwtSupportedAlgs?: string[]; 
  public get jwtSupportedAlgs() {
    return this.getListAttribute('jwt_supported_algs');
  }
  public set jwtSupportedAlgs(value: string[]) {
    this._jwtSupportedAlgs = value;
  }
  public resetJwtSupportedAlgs() {
    this._jwtSupportedAlgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSupportedAlgsInput() {
    return this._jwtSupportedAlgs;
  }

  // jwt_validation_pubkeys - computed: false, optional: true, required: false
  private _jwtValidationPubkeys?: string[]; 
  public get jwtValidationPubkeys() {
    return this.getListAttribute('jwt_validation_pubkeys');
  }
  public set jwtValidationPubkeys(value: string[]) {
    this._jwtValidationPubkeys = value;
  }
  public resetJwtValidationPubkeys() {
    this._jwtValidationPubkeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtValidationPubkeysInput() {
    return this._jwtValidationPubkeys;
  }

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktn.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktn.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
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

  // namespace_in_state - computed: false, optional: true, required: false
  private _namespaceInState?: boolean | cdktn.IResolvable; 
  public get namespaceInState() {
    return this.getBooleanAttribute('namespace_in_state');
  }
  public set namespaceInState(value: boolean | cdktn.IResolvable) {
    this._namespaceInState = value;
  }
  public resetNamespaceInState() {
    this._namespaceInState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInStateInput() {
    return this._namespaceInState;
  }

  // oidc_client_id - computed: false, optional: true, required: false
  private _oidcClientId?: string; 
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }
  public set oidcClientId(value: string) {
    this._oidcClientId = value;
  }
  public resetOidcClientId() {
    this._oidcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientIdInput() {
    return this._oidcClientId;
  }

  // oidc_client_secret - computed: false, optional: true, required: false
  private _oidcClientSecret?: string; 
  public get oidcClientSecret() {
    return this.getStringAttribute('oidc_client_secret');
  }
  public set oidcClientSecret(value: string) {
    this._oidcClientSecret = value;
  }
  public resetOidcClientSecret() {
    this._oidcClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientSecretInput() {
    return this._oidcClientSecret;
  }

  // oidc_client_secret_wo - computed: false, optional: true, required: false
  private _oidcClientSecretWo?: string; 
  public get oidcClientSecretWo() {
    return this.getStringAttribute('oidc_client_secret_wo');
  }
  public set oidcClientSecretWo(value: string) {
    this._oidcClientSecretWo = value;
  }
  public resetOidcClientSecretWo() {
    this._oidcClientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientSecretWoInput() {
    return this._oidcClientSecretWo;
  }

  // oidc_client_secret_wo_version - computed: false, optional: true, required: false
  private _oidcClientSecretWoVersion?: number; 
  public get oidcClientSecretWoVersion() {
    return this.getNumberAttribute('oidc_client_secret_wo_version');
  }
  public set oidcClientSecretWoVersion(value: number) {
    this._oidcClientSecretWoVersion = value;
  }
  public resetOidcClientSecretWoVersion() {
    this._oidcClientSecretWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientSecretWoVersionInput() {
    return this._oidcClientSecretWoVersion;
  }

  // oidc_discovery_ca_pem - computed: false, optional: true, required: false
  private _oidcDiscoveryCaPem?: string; 
  public get oidcDiscoveryCaPem() {
    return this.getStringAttribute('oidc_discovery_ca_pem');
  }
  public set oidcDiscoveryCaPem(value: string) {
    this._oidcDiscoveryCaPem = value;
  }
  public resetOidcDiscoveryCaPem() {
    this._oidcDiscoveryCaPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcDiscoveryCaPemInput() {
    return this._oidcDiscoveryCaPem;
  }

  // oidc_discovery_url - computed: false, optional: true, required: false
  private _oidcDiscoveryUrl?: string; 
  public get oidcDiscoveryUrl() {
    return this.getStringAttribute('oidc_discovery_url');
  }
  public set oidcDiscoveryUrl(value: string) {
    this._oidcDiscoveryUrl = value;
  }
  public resetOidcDiscoveryUrl() {
    this._oidcDiscoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcDiscoveryUrlInput() {
    return this._oidcDiscoveryUrl;
  }

  // oidc_response_mode - computed: false, optional: true, required: false
  private _oidcResponseMode?: string; 
  public get oidcResponseMode() {
    return this.getStringAttribute('oidc_response_mode');
  }
  public set oidcResponseMode(value: string) {
    this._oidcResponseMode = value;
  }
  public resetOidcResponseMode() {
    this._oidcResponseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcResponseModeInput() {
    return this._oidcResponseMode;
  }

  // oidc_response_types - computed: false, optional: true, required: false
  private _oidcResponseTypes?: string[]; 
  public get oidcResponseTypes() {
    return this.getListAttribute('oidc_response_types');
  }
  public set oidcResponseTypes(value: string[]) {
    this._oidcResponseTypes = value;
  }
  public resetOidcResponseTypes() {
    this._oidcResponseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcResponseTypesInput() {
    return this._oidcResponseTypes;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig?: { [key: string]: string }; 
  public get providerConfig() {
    return this.getStringMapAttribute('provider_config');
  }
  public set providerConfig(value: { [key: string]: string }) {
    this._providerConfig = value;
  }
  public resetProviderConfig() {
    this._providerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig;
  }

  // tune - computed: true, optional: true, required: false
  private _tune = new JwtAuthBackendTuneList(this, "tune", false);
  public get tune() {
    return this._tune;
  }
  public putTune(value: JwtAuthBackendTune[] | cdktn.IResolvable) {
    this._tune.internalValue = value;
  }
  public resetTune() {
    this._tune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuneInput() {
    return this._tune.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bound_issuer: cdktn.stringToTerraform(this._boundIssuer),
      default_role: cdktn.stringToTerraform(this._defaultRole),
      description: cdktn.stringToTerraform(this._description),
      disable_remount: cdktn.booleanToTerraform(this._disableRemount),
      id: cdktn.stringToTerraform(this._id),
      jwks_ca_pem: cdktn.stringToTerraform(this._jwksCaPem),
      jwks_pairs: cdktn.listMapper(cdktn.hashMapper(cdktn.stringToTerraform), false)(this._jwksPairs),
      jwks_url: cdktn.stringToTerraform(this._jwksUrl),
      jwt_supported_algs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._jwtSupportedAlgs),
      jwt_validation_pubkeys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._jwtValidationPubkeys),
      local: cdktn.booleanToTerraform(this._local),
      namespace: cdktn.stringToTerraform(this._namespace),
      namespace_in_state: cdktn.booleanToTerraform(this._namespaceInState),
      oidc_client_id: cdktn.stringToTerraform(this._oidcClientId),
      oidc_client_secret: cdktn.stringToTerraform(this._oidcClientSecret),
      oidc_client_secret_wo: cdktn.stringToTerraform(this._oidcClientSecretWo),
      oidc_client_secret_wo_version: cdktn.numberToTerraform(this._oidcClientSecretWoVersion),
      oidc_discovery_ca_pem: cdktn.stringToTerraform(this._oidcDiscoveryCaPem),
      oidc_discovery_url: cdktn.stringToTerraform(this._oidcDiscoveryUrl),
      oidc_response_mode: cdktn.stringToTerraform(this._oidcResponseMode),
      oidc_response_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._oidcResponseTypes),
      path: cdktn.stringToTerraform(this._path),
      provider_config: cdktn.hashMapper(cdktn.stringToTerraform)(this._providerConfig),
      tune: cdktn.listMapper(jwtAuthBackendTuneToTerraform, false)(this._tune.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bound_issuer: {
        value: cdktn.stringToHclTerraform(this._boundIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_role: {
        value: cdktn.stringToHclTerraform(this._defaultRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_remount: {
        value: cdktn.booleanToHclTerraform(this._disableRemount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      jwks_pairs: {
        value: cdktn.listMapperHcl(cdktn.hashMapperHcl(cdktn.stringToHclTerraform), false)(this._jwksPairs),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      jwks_url: {
        value: cdktn.stringToHclTerraform(this._jwksUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_supported_algs: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._jwtSupportedAlgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      jwt_validation_pubkeys: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._jwtValidationPubkeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      local: {
        value: cdktn.booleanToHclTerraform(this._local),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_in_state: {
        value: cdktn.booleanToHclTerraform(this._namespaceInState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_client_id: {
        value: cdktn.stringToHclTerraform(this._oidcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_secret: {
        value: cdktn.stringToHclTerraform(this._oidcClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_secret_wo: {
        value: cdktn.stringToHclTerraform(this._oidcClientSecretWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_secret_wo_version: {
        value: cdktn.numberToHclTerraform(this._oidcClientSecretWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oidc_discovery_ca_pem: {
        value: cdktn.stringToHclTerraform(this._oidcDiscoveryCaPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_discovery_url: {
        value: cdktn.stringToHclTerraform(this._oidcDiscoveryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_response_mode: {
        value: cdktn.stringToHclTerraform(this._oidcResponseMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_response_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._oidcResponseTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._providerConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tune: {
        value: cdktn.listMapperHcl(jwtAuthBackendTuneToHclTerraform, false)(this._tune.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JwtAuthBackendTuneList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
