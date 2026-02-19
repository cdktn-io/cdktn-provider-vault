/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AuthBackendConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the auth backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#description AuthBackend#description}
  */
  readonly description?: string;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#disable_remount AuthBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#id AuthBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key to use for signing identity tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#identity_token_key AuthBackend#identity_token_key}
  */
  readonly identityTokenKey?: string;
  /**
  * Specifies if the auth method is local only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#local AuthBackend#local}
  */
  readonly local?: boolean | cdktn.IResolvable;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#namespace AuthBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * path to mount the backend. This defaults to the type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#path AuthBackend#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#tune AuthBackend#tune}
  */
  readonly tune?: AuthBackendTune[] | cdktn.IResolvable;
  /**
  * Name of the auth backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#type AuthBackend#type}
  */
  readonly type: string;
}
export interface AuthBackendTune {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#allowed_response_headers AuthBackend#allowed_response_headers}
  */
  readonly allowedResponseHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#audit_non_hmac_request_keys AuthBackend#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#audit_non_hmac_response_keys AuthBackend#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#default_lease_ttl AuthBackend#default_lease_ttl}
  */
  readonly defaultLeaseTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#listing_visibility AuthBackend#listing_visibility}
  */
  readonly listingVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#max_lease_ttl AuthBackend#max_lease_ttl}
  */
  readonly maxLeaseTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#passthrough_request_headers AuthBackend#passthrough_request_headers}
  */
  readonly passthroughRequestHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#token_type AuthBackend#token_type}
  */
  readonly tokenType?: string;
}

export function authBackendTuneToTerraform(struct?: AuthBackendTune | cdktn.IResolvable): any {
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


export function authBackendTuneToHclTerraform(struct?: AuthBackendTune | cdktn.IResolvable): any {
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

export class AuthBackendTuneOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthBackendTune | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AuthBackendTune | cdktn.IResolvable | undefined) {
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

export class AuthBackendTuneList extends cdktn.ComplexList {
  public internalValue? : AuthBackendTune[] | cdktn.IResolvable

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
  public get(index: number): AuthBackendTuneOutputReference {
    return new AuthBackendTuneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend vault_auth_backend}
*/
export class AuthBackend extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_auth_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AuthBackend resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthBackend to import
  * @param importFromId The id of the existing AuthBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_auth_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/auth_backend vault_auth_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthBackendConfig
  */
  public constructor(scope: Construct, id: string, config: AuthBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_auth_backend',
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
    this._description = config.description;
    this._disableRemount = config.disableRemount;
    this._id = config.id;
    this._identityTokenKey = config.identityTokenKey;
    this._local = config.local;
    this._namespace = config.namespace;
    this._path = config.path;
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

  // identity_token_key - computed: false, optional: true, required: false
  private _identityTokenKey?: string; 
  public get identityTokenKey() {
    return this.getStringAttribute('identity_token_key');
  }
  public set identityTokenKey(value: string) {
    this._identityTokenKey = value;
  }
  public resetIdentityTokenKey() {
    this._identityTokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenKeyInput() {
    return this._identityTokenKey;
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

  // path - computed: true, optional: true, required: false
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

  // tune - computed: true, optional: true, required: false
  private _tune = new AuthBackendTuneList(this, "tune", false);
  public get tune() {
    return this._tune;
  }
  public putTune(value: AuthBackendTune[] | cdktn.IResolvable) {
    this._tune.internalValue = value;
  }
  public resetTune() {
    this._tune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuneInput() {
    return this._tune.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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
      description: cdktn.stringToTerraform(this._description),
      disable_remount: cdktn.booleanToTerraform(this._disableRemount),
      id: cdktn.stringToTerraform(this._id),
      identity_token_key: cdktn.stringToTerraform(this._identityTokenKey),
      local: cdktn.booleanToTerraform(this._local),
      namespace: cdktn.stringToTerraform(this._namespace),
      path: cdktn.stringToTerraform(this._path),
      tune: cdktn.listMapper(authBackendTuneToTerraform, false)(this._tune.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      identity_token_key: {
        value: cdktn.stringToHclTerraform(this._identityTokenKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tune: {
        value: cdktn.listMapperHcl(authBackendTuneToHclTerraform, false)(this._tune.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthBackendTuneList",
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
