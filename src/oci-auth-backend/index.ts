/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OciAuthBackendConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#description OciAuthBackend#description}
  */
  readonly description?: string;
  /**
  * Stops rotation of the root credential until set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#disable_automated_rotation OciAuthBackend#disable_automated_rotation}
  */
  readonly disableAutomatedRotation?: boolean | cdktn.IResolvable;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#disable_remount OciAuthBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktn.IResolvable;
  /**
  *  The Tenancy OCID of your OCI account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#home_tenancy_id OciAuthBackend#home_tenancy_id}
  */
  readonly homeTenancyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#id OciAuthBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#namespace OciAuthBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#path OciAuthBackend#path}
  */
  readonly path?: string;
  /**
  * The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#rotation_period OciAuthBackend#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#rotation_schedule OciAuthBackend#rotation_schedule}
  */
  readonly rotationSchedule?: string;
  /**
  * The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. Can only be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#rotation_window OciAuthBackend#rotation_window}
  */
  readonly rotationWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#tune OciAuthBackend#tune}
  */
  readonly tune?: OciAuthBackendTune[] | cdktn.IResolvable;
}
export interface OciAuthBackendTune {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#allowed_response_headers OciAuthBackend#allowed_response_headers}
  */
  readonly allowedResponseHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#audit_non_hmac_request_keys OciAuthBackend#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#audit_non_hmac_response_keys OciAuthBackend#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#default_lease_ttl OciAuthBackend#default_lease_ttl}
  */
  readonly defaultLeaseTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#listing_visibility OciAuthBackend#listing_visibility}
  */
  readonly listingVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#max_lease_ttl OciAuthBackend#max_lease_ttl}
  */
  readonly maxLeaseTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#passthrough_request_headers OciAuthBackend#passthrough_request_headers}
  */
  readonly passthroughRequestHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#token_type OciAuthBackend#token_type}
  */
  readonly tokenType?: string;
}

export function ociAuthBackendTuneToTerraform(struct?: OciAuthBackendTune | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_response_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedResponseHeaders),
    audit_non_hmac_request_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.auditNonHmacRequestKeys),
    audit_non_hmac_response_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.auditNonHmacResponseKeys),
    default_lease_ttl: cdktn.stringToTerraform(struct!.defaultLeaseTtl),
    listing_visibility: cdktn.stringToTerraform(struct!.listingVisibility),
    max_lease_ttl: cdktn.stringToTerraform(struct!.maxLeaseTtl),
    passthrough_request_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.passthroughRequestHeaders),
    token_type: cdktn.stringToTerraform(struct!.tokenType),
  }
}


export function ociAuthBackendTuneToHclTerraform(struct?: OciAuthBackendTune | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_response_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedResponseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audit_non_hmac_request_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.auditNonHmacRequestKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audit_non_hmac_response_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.auditNonHmacResponseKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_lease_ttl: {
      value: cdktn.stringToHclTerraform(struct!.defaultLeaseTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listing_visibility: {
      value: cdktn.stringToHclTerraform(struct!.listingVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lease_ttl: {
      value: cdktn.stringToHclTerraform(struct!.maxLeaseTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passthrough_request_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.passthroughRequestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_type: {
      value: cdktn.stringToHclTerraform(struct!.tokenType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OciAuthBackendTuneOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OciAuthBackendTune | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OciAuthBackendTune | cdktn.IResolvable | undefined) {
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

export class OciAuthBackendTuneList extends cdktn.ComplexList {
  public internalValue? : OciAuthBackendTune[] | cdktn.IResolvable

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
  public get(index: number): OciAuthBackendTuneOutputReference {
    return new OciAuthBackendTuneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend vault_oci_auth_backend}
*/
export class OciAuthBackend extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_oci_auth_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OciAuthBackend resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciAuthBackend to import
  * @param importFromId The id of the existing OciAuthBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciAuthBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_oci_auth_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/oci_auth_backend vault_oci_auth_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciAuthBackendConfig
  */
  public constructor(scope: Construct, id: string, config: OciAuthBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_oci_auth_backend',
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
    this._disableAutomatedRotation = config.disableAutomatedRotation;
    this._disableRemount = config.disableRemount;
    this._homeTenancyId = config.homeTenancyId;
    this._id = config.id;
    this._namespace = config.namespace;
    this._path = config.path;
    this._rotationPeriod = config.rotationPeriod;
    this._rotationSchedule = config.rotationSchedule;
    this._rotationWindow = config.rotationWindow;
    this._tune.internalValue = config.tune;
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

  // disable_automated_rotation - computed: false, optional: true, required: false
  private _disableAutomatedRotation?: boolean | cdktn.IResolvable; 
  public get disableAutomatedRotation() {
    return this.getBooleanAttribute('disable_automated_rotation');
  }
  public set disableAutomatedRotation(value: boolean | cdktn.IResolvable) {
    this._disableAutomatedRotation = value;
  }
  public resetDisableAutomatedRotation() {
    this._disableAutomatedRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomatedRotationInput() {
    return this._disableAutomatedRotation;
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

  // home_tenancy_id - computed: false, optional: false, required: true
  private _homeTenancyId?: string; 
  public get homeTenancyId() {
    return this.getStringAttribute('home_tenancy_id');
  }
  public set homeTenancyId(value: string) {
    this._homeTenancyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get homeTenancyIdInput() {
    return this._homeTenancyId;
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

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: number; 
  public get rotationPeriod() {
    return this.getNumberAttribute('rotation_period');
  }
  public set rotationPeriod(value: number) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // rotation_schedule - computed: false, optional: true, required: false
  private _rotationSchedule?: string; 
  public get rotationSchedule() {
    return this.getStringAttribute('rotation_schedule');
  }
  public set rotationSchedule(value: string) {
    this._rotationSchedule = value;
  }
  public resetRotationSchedule() {
    this._rotationSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationScheduleInput() {
    return this._rotationSchedule;
  }

  // rotation_window - computed: false, optional: true, required: false
  private _rotationWindow?: number; 
  public get rotationWindow() {
    return this.getNumberAttribute('rotation_window');
  }
  public set rotationWindow(value: number) {
    this._rotationWindow = value;
  }
  public resetRotationWindow() {
    this._rotationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationWindowInput() {
    return this._rotationWindow;
  }

  // tune - computed: true, optional: true, required: false
  private _tune = new OciAuthBackendTuneList(this, "tune", false);
  public get tune() {
    return this._tune;
  }
  public putTune(value: OciAuthBackendTune[] | cdktn.IResolvable) {
    this._tune.internalValue = value;
  }
  public resetTune() {
    this._tune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuneInput() {
    return this._tune.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      disable_automated_rotation: cdktn.booleanToTerraform(this._disableAutomatedRotation),
      disable_remount: cdktn.booleanToTerraform(this._disableRemount),
      home_tenancy_id: cdktn.stringToTerraform(this._homeTenancyId),
      id: cdktn.stringToTerraform(this._id),
      namespace: cdktn.stringToTerraform(this._namespace),
      path: cdktn.stringToTerraform(this._path),
      rotation_period: cdktn.numberToTerraform(this._rotationPeriod),
      rotation_schedule: cdktn.stringToTerraform(this._rotationSchedule),
      rotation_window: cdktn.numberToTerraform(this._rotationWindow),
      tune: cdktn.listMapper(ociAuthBackendTuneToTerraform, false)(this._tune.internalValue),
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
      disable_automated_rotation: {
        value: cdktn.booleanToHclTerraform(this._disableAutomatedRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_remount: {
        value: cdktn.booleanToHclTerraform(this._disableRemount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      home_tenancy_id: {
        value: cdktn.stringToHclTerraform(this._homeTenancyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_period: {
        value: cdktn.numberToHclTerraform(this._rotationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotation_schedule: {
        value: cdktn.stringToHclTerraform(this._rotationSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_window: {
        value: cdktn.numberToHclTerraform(this._rotationWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tune: {
        value: cdktn.listMapperHcl(ociAuthBackendTuneToHclTerraform, false)(this._tune.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OciAuthBackendTuneList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
