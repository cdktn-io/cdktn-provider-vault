/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AwsSecretBackendConfig extends cdktn.TerraformMetaArguments {
  /**
  * The AWS Access Key ID to use when generating new credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#access_key AwsSecretBackend#access_key}
  */
  readonly accessKey?: string;
  /**
  * List of managed key registry entry names that the mount in question is allowed to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#allowed_managed_keys AwsSecretBackend#allowed_managed_keys}
  */
  readonly allowedManagedKeys?: string[];
  /**
  * List of headers to allow and pass from the request to the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#allowed_response_headers AwsSecretBackend#allowed_response_headers}
  */
  readonly allowedResponseHeaders?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#audit_non_hmac_request_keys AwsSecretBackend#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#audit_non_hmac_response_keys AwsSecretBackend#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Default lease duration for secrets in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#default_lease_ttl_seconds AwsSecretBackend#default_lease_ttl_seconds}
  */
  readonly defaultLeaseTtlSeconds?: number;
  /**
  * List of headers to allow and pass from the request to the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#delegated_auth_accessors AwsSecretBackend#delegated_auth_accessors}
  */
  readonly delegatedAuthAccessors?: string[];
  /**
  * Human-friendly description of the mount for the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#description AwsSecretBackend#description}
  */
  readonly description?: string;
  /**
  * Stops rotation of the root credential until set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#disable_automated_rotation AwsSecretBackend#disable_automated_rotation}
  */
  readonly disableAutomatedRotation?: boolean | cdktn.IResolvable;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#disable_remount AwsSecretBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktn.IResolvable;
  /**
  * Enable the secrets engine to access Vault's external entropy source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#external_entropy_access AwsSecretBackend#external_entropy_access}
  */
  readonly externalEntropyAccess?: boolean | cdktn.IResolvable;
  /**
  * If set to true, disables caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#force_no_cache AwsSecretBackend#force_no_cache}
  */
  readonly forceNoCache?: boolean | cdktn.IResolvable;
  /**
  * Specifies a custom HTTP IAM endpoint to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#iam_endpoint AwsSecretBackend#iam_endpoint}
  */
  readonly iamEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#id AwsSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The audience claim value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#identity_token_audience AwsSecretBackend#identity_token_audience}
  */
  readonly identityTokenAudience?: string;
  /**
  * The key to use for signing identity tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#identity_token_key AwsSecretBackend#identity_token_key}
  */
  readonly identityTokenKey?: string;
  /**
  * The TTL of generated identity tokens in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#identity_token_ttl AwsSecretBackend#identity_token_ttl}
  */
  readonly identityTokenTtl?: number;
  /**
  * Specifies whether to show this mount in the UI-specific listing endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#listing_visibility AwsSecretBackend#listing_visibility}
  */
  readonly listingVisibility?: string;
  /**
  * Specifies if the secret backend is local only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#local AwsSecretBackend#local}
  */
  readonly local?: boolean | cdktn.IResolvable;
  /**
  * Maximum possible lease duration for secrets in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#max_lease_ttl_seconds AwsSecretBackend#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Number of max retries the client should use for recoverable errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#max_retries AwsSecretBackend#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#namespace AwsSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies mount type specific options that are passed to the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#options AwsSecretBackend#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * List of headers to allow and pass from the request to the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#passthrough_request_headers AwsSecretBackend#passthrough_request_headers}
  */
  readonly passthroughRequestHeaders?: string[];
  /**
  * Path to mount the backend at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#path AwsSecretBackend#path}
  */
  readonly path?: string;
  /**
  * Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#plugin_version AwsSecretBackend#plugin_version}
  */
  readonly pluginVersion?: string;
  /**
  * The AWS region to make API calls against. Defaults to us-east-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#region AwsSecretBackend#region}
  */
  readonly region?: string;
  /**
  * Role ARN to assume for plugin identity token federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#role_arn AwsSecretBackend#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#rotation_period AwsSecretBackend#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#rotation_schedule AwsSecretBackend#rotation_schedule}
  */
  readonly rotationSchedule?: string;
  /**
  * The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. Can only be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#rotation_window AwsSecretBackend#rotation_window}
  */
  readonly rotationWindow?: number;
  /**
  * Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#seal_wrap AwsSecretBackend#seal_wrap}
  */
  readonly sealWrap?: boolean | cdktn.IResolvable;
  /**
  * The AWS Secret Access Key to use when generating new credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#secret_key AwsSecretBackend#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The AWS Secret Access Key to use when generating new credentials. This is a write-only field and will not be read back from Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#secret_key_wo AwsSecretBackend#secret_key_wo}
  */
  readonly secretKeyWo?: string;
  /**
  * A version counter for the write-only secret_key_wo field. Incrementing this value will trigger an update to the secret_key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#secret_key_wo_version AwsSecretBackend#secret_key_wo_version}
  */
  readonly secretKeyWoVersion?: number;
  /**
  * Specifies a custom HTTP STS endpoint to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#sts_endpoint AwsSecretBackend#sts_endpoint}
  */
  readonly stsEndpoint?: string;
  /**
  * Specifies a list of custom STS fallback endpoints to use (in order).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#sts_fallback_endpoints AwsSecretBackend#sts_fallback_endpoints}
  */
  readonly stsFallbackEndpoints?: string[];
  /**
  * Specifies a list of custom STS fallback regions to use (in order).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#sts_fallback_regions AwsSecretBackend#sts_fallback_regions}
  */
  readonly stsFallbackRegions?: string[];
  /**
  * Specifies a custom STS region to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#sts_region AwsSecretBackend#sts_region}
  */
  readonly stsRegion?: string;
  /**
  * Template describing how dynamic usernames are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#username_template AwsSecretBackend#username_template}
  */
  readonly usernameTemplate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend vault_aws_secret_backend}
*/
export class AwsSecretBackend extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_secret_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSecretBackend resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSecretBackend to import
  * @param importFromId The id of the existing AwsSecretBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSecretBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_aws_secret_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_secret_backend vault_aws_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSecretBackendConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsSecretBackendConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_secret_backend',
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
    this._accessKey = config.accessKey;
    this._allowedManagedKeys = config.allowedManagedKeys;
    this._allowedResponseHeaders = config.allowedResponseHeaders;
    this._auditNonHmacRequestKeys = config.auditNonHmacRequestKeys;
    this._auditNonHmacResponseKeys = config.auditNonHmacResponseKeys;
    this._defaultLeaseTtlSeconds = config.defaultLeaseTtlSeconds;
    this._delegatedAuthAccessors = config.delegatedAuthAccessors;
    this._description = config.description;
    this._disableAutomatedRotation = config.disableAutomatedRotation;
    this._disableRemount = config.disableRemount;
    this._externalEntropyAccess = config.externalEntropyAccess;
    this._forceNoCache = config.forceNoCache;
    this._iamEndpoint = config.iamEndpoint;
    this._id = config.id;
    this._identityTokenAudience = config.identityTokenAudience;
    this._identityTokenKey = config.identityTokenKey;
    this._identityTokenTtl = config.identityTokenTtl;
    this._listingVisibility = config.listingVisibility;
    this._local = config.local;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._maxRetries = config.maxRetries;
    this._namespace = config.namespace;
    this._options = config.options;
    this._passthroughRequestHeaders = config.passthroughRequestHeaders;
    this._path = config.path;
    this._pluginVersion = config.pluginVersion;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._rotationPeriod = config.rotationPeriod;
    this._rotationSchedule = config.rotationSchedule;
    this._rotationWindow = config.rotationWindow;
    this._sealWrap = config.sealWrap;
    this._secretKey = config.secretKey;
    this._secretKeyWo = config.secretKeyWo;
    this._secretKeyWoVersion = config.secretKeyWoVersion;
    this._stsEndpoint = config.stsEndpoint;
    this._stsFallbackEndpoints = config.stsFallbackEndpoints;
    this._stsFallbackRegions = config.stsFallbackRegions;
    this._stsRegion = config.stsRegion;
    this._usernameTemplate = config.usernameTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // allowed_managed_keys - computed: false, optional: true, required: false
  private _allowedManagedKeys?: string[]; 
  public get allowedManagedKeys() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_managed_keys'));
  }
  public set allowedManagedKeys(value: string[]) {
    this._allowedManagedKeys = value;
  }
  public resetAllowedManagedKeys() {
    this._allowedManagedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedManagedKeysInput() {
    return this._allowedManagedKeys;
  }

  // allowed_response_headers - computed: false, optional: true, required: false
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

  // default_lease_ttl_seconds - computed: true, optional: true, required: false
  private _defaultLeaseTtlSeconds?: number; 
  public get defaultLeaseTtlSeconds() {
    return this.getNumberAttribute('default_lease_ttl_seconds');
  }
  public set defaultLeaseTtlSeconds(value: number) {
    this._defaultLeaseTtlSeconds = value;
  }
  public resetDefaultLeaseTtlSeconds() {
    this._defaultLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTtlSecondsInput() {
    return this._defaultLeaseTtlSeconds;
  }

  // delegated_auth_accessors - computed: false, optional: true, required: false
  private _delegatedAuthAccessors?: string[]; 
  public get delegatedAuthAccessors() {
    return this.getListAttribute('delegated_auth_accessors');
  }
  public set delegatedAuthAccessors(value: string[]) {
    this._delegatedAuthAccessors = value;
  }
  public resetDelegatedAuthAccessors() {
    this._delegatedAuthAccessors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedAuthAccessorsInput() {
    return this._delegatedAuthAccessors;
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

  // external_entropy_access - computed: false, optional: true, required: false
  private _externalEntropyAccess?: boolean | cdktn.IResolvable; 
  public get externalEntropyAccess() {
    return this.getBooleanAttribute('external_entropy_access');
  }
  public set externalEntropyAccess(value: boolean | cdktn.IResolvable) {
    this._externalEntropyAccess = value;
  }
  public resetExternalEntropyAccess() {
    this._externalEntropyAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEntropyAccessInput() {
    return this._externalEntropyAccess;
  }

  // force_no_cache - computed: true, optional: true, required: false
  private _forceNoCache?: boolean | cdktn.IResolvable; 
  public get forceNoCache() {
    return this.getBooleanAttribute('force_no_cache');
  }
  public set forceNoCache(value: boolean | cdktn.IResolvable) {
    this._forceNoCache = value;
  }
  public resetForceNoCache() {
    this._forceNoCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNoCacheInput() {
    return this._forceNoCache;
  }

  // iam_endpoint - computed: false, optional: true, required: false
  private _iamEndpoint?: string; 
  public get iamEndpoint() {
    return this.getStringAttribute('iam_endpoint');
  }
  public set iamEndpoint(value: string) {
    this._iamEndpoint = value;
  }
  public resetIamEndpoint() {
    this._iamEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamEndpointInput() {
    return this._iamEndpoint;
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

  // identity_token_audience - computed: false, optional: true, required: false
  private _identityTokenAudience?: string; 
  public get identityTokenAudience() {
    return this.getStringAttribute('identity_token_audience');
  }
  public set identityTokenAudience(value: string) {
    this._identityTokenAudience = value;
  }
  public resetIdentityTokenAudience() {
    this._identityTokenAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenAudienceInput() {
    return this._identityTokenAudience;
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

  // identity_token_ttl - computed: true, optional: true, required: false
  private _identityTokenTtl?: number; 
  public get identityTokenTtl() {
    return this.getNumberAttribute('identity_token_ttl');
  }
  public set identityTokenTtl(value: number) {
    this._identityTokenTtl = value;
  }
  public resetIdentityTokenTtl() {
    this._identityTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenTtlInput() {
    return this._identityTokenTtl;
  }

  // listing_visibility - computed: false, optional: true, required: false
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

  // max_lease_ttl_seconds - computed: true, optional: true, required: false
  private _maxLeaseTtlSeconds?: number; 
  public get maxLeaseTtlSeconds() {
    return this.getNumberAttribute('max_lease_ttl_seconds');
  }
  public set maxLeaseTtlSeconds(value: number) {
    this._maxLeaseTtlSeconds = value;
  }
  public resetMaxLeaseTtlSeconds() {
    this._maxLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlSecondsInput() {
    return this._maxLeaseTtlSeconds;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // passthrough_request_headers - computed: false, optional: true, required: false
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

  // plugin_version - computed: false, optional: true, required: false
  private _pluginVersion?: string; 
  public get pluginVersion() {
    return this.getStringAttribute('plugin_version');
  }
  public set pluginVersion(value: string) {
    this._pluginVersion = value;
  }
  public resetPluginVersion() {
    this._pluginVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginVersionInput() {
    return this._pluginVersion;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // seal_wrap - computed: true, optional: true, required: false
  private _sealWrap?: boolean | cdktn.IResolvable; 
  public get sealWrap() {
    return this.getBooleanAttribute('seal_wrap');
  }
  public set sealWrap(value: boolean | cdktn.IResolvable) {
    this._sealWrap = value;
  }
  public resetSealWrap() {
    this._sealWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sealWrapInput() {
    return this._sealWrap;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secret_key_wo - computed: false, optional: true, required: false
  private _secretKeyWo?: string; 
  public get secretKeyWo() {
    return this.getStringAttribute('secret_key_wo');
  }
  public set secretKeyWo(value: string) {
    this._secretKeyWo = value;
  }
  public resetSecretKeyWo() {
    this._secretKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyWoInput() {
    return this._secretKeyWo;
  }

  // secret_key_wo_version - computed: false, optional: true, required: false
  private _secretKeyWoVersion?: number; 
  public get secretKeyWoVersion() {
    return this.getNumberAttribute('secret_key_wo_version');
  }
  public set secretKeyWoVersion(value: number) {
    this._secretKeyWoVersion = value;
  }
  public resetSecretKeyWoVersion() {
    this._secretKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyWoVersionInput() {
    return this._secretKeyWoVersion;
  }

  // sts_endpoint - computed: false, optional: true, required: false
  private _stsEndpoint?: string; 
  public get stsEndpoint() {
    return this.getStringAttribute('sts_endpoint');
  }
  public set stsEndpoint(value: string) {
    this._stsEndpoint = value;
  }
  public resetStsEndpoint() {
    this._stsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsEndpointInput() {
    return this._stsEndpoint;
  }

  // sts_fallback_endpoints - computed: false, optional: true, required: false
  private _stsFallbackEndpoints?: string[]; 
  public get stsFallbackEndpoints() {
    return this.getListAttribute('sts_fallback_endpoints');
  }
  public set stsFallbackEndpoints(value: string[]) {
    this._stsFallbackEndpoints = value;
  }
  public resetStsFallbackEndpoints() {
    this._stsFallbackEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsFallbackEndpointsInput() {
    return this._stsFallbackEndpoints;
  }

  // sts_fallback_regions - computed: false, optional: true, required: false
  private _stsFallbackRegions?: string[]; 
  public get stsFallbackRegions() {
    return this.getListAttribute('sts_fallback_regions');
  }
  public set stsFallbackRegions(value: string[]) {
    this._stsFallbackRegions = value;
  }
  public resetStsFallbackRegions() {
    this._stsFallbackRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsFallbackRegionsInput() {
    return this._stsFallbackRegions;
  }

  // sts_region - computed: false, optional: true, required: false
  private _stsRegion?: string; 
  public get stsRegion() {
    return this.getStringAttribute('sts_region');
  }
  public set stsRegion(value: string) {
    this._stsRegion = value;
  }
  public resetStsRegion() {
    this._stsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsRegionInput() {
    return this._stsRegion;
  }

  // username_template - computed: true, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktn.stringToTerraform(this._accessKey),
      allowed_managed_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedManagedKeys),
      allowed_response_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedResponseHeaders),
      audit_non_hmac_request_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._auditNonHmacRequestKeys),
      audit_non_hmac_response_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._auditNonHmacResponseKeys),
      default_lease_ttl_seconds: cdktn.numberToTerraform(this._defaultLeaseTtlSeconds),
      delegated_auth_accessors: cdktn.listMapper(cdktn.stringToTerraform, false)(this._delegatedAuthAccessors),
      description: cdktn.stringToTerraform(this._description),
      disable_automated_rotation: cdktn.booleanToTerraform(this._disableAutomatedRotation),
      disable_remount: cdktn.booleanToTerraform(this._disableRemount),
      external_entropy_access: cdktn.booleanToTerraform(this._externalEntropyAccess),
      force_no_cache: cdktn.booleanToTerraform(this._forceNoCache),
      iam_endpoint: cdktn.stringToTerraform(this._iamEndpoint),
      id: cdktn.stringToTerraform(this._id),
      identity_token_audience: cdktn.stringToTerraform(this._identityTokenAudience),
      identity_token_key: cdktn.stringToTerraform(this._identityTokenKey),
      identity_token_ttl: cdktn.numberToTerraform(this._identityTokenTtl),
      listing_visibility: cdktn.stringToTerraform(this._listingVisibility),
      local: cdktn.booleanToTerraform(this._local),
      max_lease_ttl_seconds: cdktn.numberToTerraform(this._maxLeaseTtlSeconds),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      namespace: cdktn.stringToTerraform(this._namespace),
      options: cdktn.hashMapper(cdktn.stringToTerraform)(this._options),
      passthrough_request_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._passthroughRequestHeaders),
      path: cdktn.stringToTerraform(this._path),
      plugin_version: cdktn.stringToTerraform(this._pluginVersion),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      rotation_period: cdktn.numberToTerraform(this._rotationPeriod),
      rotation_schedule: cdktn.stringToTerraform(this._rotationSchedule),
      rotation_window: cdktn.numberToTerraform(this._rotationWindow),
      seal_wrap: cdktn.booleanToTerraform(this._sealWrap),
      secret_key: cdktn.stringToTerraform(this._secretKey),
      secret_key_wo: cdktn.stringToTerraform(this._secretKeyWo),
      secret_key_wo_version: cdktn.numberToTerraform(this._secretKeyWoVersion),
      sts_endpoint: cdktn.stringToTerraform(this._stsEndpoint),
      sts_fallback_endpoints: cdktn.listMapper(cdktn.stringToTerraform, false)(this._stsFallbackEndpoints),
      sts_fallback_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._stsFallbackRegions),
      sts_region: cdktn.stringToTerraform(this._stsRegion),
      username_template: cdktn.stringToTerraform(this._usernameTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktn.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_managed_keys: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedManagedKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_response_headers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedResponseHeaders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      audit_non_hmac_request_keys: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._auditNonHmacRequestKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      audit_non_hmac_response_keys: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._auditNonHmacResponseKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_lease_ttl_seconds: {
        value: cdktn.numberToHclTerraform(this._defaultLeaseTtlSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delegated_auth_accessors: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._delegatedAuthAccessors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      external_entropy_access: {
        value: cdktn.booleanToHclTerraform(this._externalEntropyAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_no_cache: {
        value: cdktn.booleanToHclTerraform(this._forceNoCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iam_endpoint: {
        value: cdktn.stringToHclTerraform(this._iamEndpoint),
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
      identity_token_audience: {
        value: cdktn.stringToHclTerraform(this._identityTokenAudience),
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
      identity_token_ttl: {
        value: cdktn.numberToHclTerraform(this._identityTokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listing_visibility: {
        value: cdktn.stringToHclTerraform(this._listingVisibility),
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
      max_lease_ttl_seconds: {
        value: cdktn.numberToHclTerraform(this._maxLeaseTtlSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktn.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      passthrough_request_headers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._passthroughRequestHeaders),
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
      plugin_version: {
        value: cdktn.stringToHclTerraform(this._pluginVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
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
      seal_wrap: {
        value: cdktn.booleanToHclTerraform(this._sealWrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_key: {
        value: cdktn.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key_wo: {
        value: cdktn.stringToHclTerraform(this._secretKeyWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key_wo_version: {
        value: cdktn.numberToHclTerraform(this._secretKeyWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sts_endpoint: {
        value: cdktn.stringToHclTerraform(this._stsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_fallback_endpoints: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._stsFallbackEndpoints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sts_fallback_regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._stsFallbackRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sts_region: {
        value: cdktn.stringToHclTerraform(this._stsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_template: {
        value: cdktn.stringToHclTerraform(this._usernameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
