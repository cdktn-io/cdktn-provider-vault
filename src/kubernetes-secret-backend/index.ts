/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KubernetesSecretBackendConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of managed key registry entry names that the mount in question is allowed to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#allowed_managed_keys KubernetesSecretBackend#allowed_managed_keys}
  */
  readonly allowedManagedKeys?: string[];
  /**
  * List of headers to allow and pass from the request to the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#allowed_response_headers KubernetesSecretBackend#allowed_response_headers}
  */
  readonly allowedResponseHeaders?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_request_keys KubernetesSecretBackend#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_response_keys KubernetesSecretBackend#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Default lease duration for tokens and secrets in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#default_lease_ttl_seconds KubernetesSecretBackend#default_lease_ttl_seconds}
  */
  readonly defaultLeaseTtlSeconds?: number;
  /**
  * List of headers to allow and pass from the request to the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#delegated_auth_accessors KubernetesSecretBackend#delegated_auth_accessors}
  */
  readonly delegatedAuthAccessors?: string[];
  /**
  * Human-friendly description of the mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#description KubernetesSecretBackend#description}
  */
  readonly description?: string;
  /**
  * Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#disable_local_ca_jwt KubernetesSecretBackend#disable_local_ca_jwt}
  */
  readonly disableLocalCaJwt?: boolean | cdktn.IResolvable;
  /**
  * Enable the secrets engine to access Vault's external entropy source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#external_entropy_access KubernetesSecretBackend#external_entropy_access}
  */
  readonly externalEntropyAccess?: boolean | cdktn.IResolvable;
  /**
  * If set to true, disables caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#force_no_cache KubernetesSecretBackend#force_no_cache}
  */
  readonly forceNoCache?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key to use for signing plugin workload identity tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#identity_token_key KubernetesSecretBackend#identity_token_key}
  */
  readonly identityTokenKey?: string;
  /**
  * A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate. Defaults to the local pod’s CA if found, or otherwise the host's root CA set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#kubernetes_ca_cert KubernetesSecretBackend#kubernetes_ca_cert}
  */
  readonly kubernetesCaCert?: string;
  /**
  * The Kubernetes API URL to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#kubernetes_host KubernetesSecretBackend#kubernetes_host}
  */
  readonly kubernetesHost?: string;
  /**
  * Specifies whether to show this mount in the UI-specific listing endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#listing_visibility KubernetesSecretBackend#listing_visibility}
  */
  readonly listingVisibility?: string;
  /**
  * Local mount flag that can be explicitly set to true to enforce local mount in HA environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#local KubernetesSecretBackend#local}
  */
  readonly local?: boolean | cdktn.IResolvable;
  /**
  * Maximum possible lease duration for tokens and secrets in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#max_lease_ttl_seconds KubernetesSecretBackend#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#namespace KubernetesSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies mount type specific options that are passed to the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#options KubernetesSecretBackend#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * List of headers to allow and pass from the request to the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#passthrough_request_headers KubernetesSecretBackend#passthrough_request_headers}
  */
  readonly passthroughRequestHeaders?: string[];
  /**
  * Where the secret backend will be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#path KubernetesSecretBackend#path}
  */
  readonly path: string;
  /**
  * Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#plugin_version KubernetesSecretBackend#plugin_version}
  */
  readonly pluginVersion?: string;
  /**
  * Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#seal_wrap KubernetesSecretBackend#seal_wrap}
  */
  readonly sealWrap?: boolean | cdktn.IResolvable;
  /**
  * The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. Defaults to the local pod’s JWT if found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#service_account_jwt KubernetesSecretBackend#service_account_jwt}
  */
  readonly serviceAccountJwt?: string;
  /**
  * Write-only JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. This value will not be stored in state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#service_account_jwt_wo KubernetesSecretBackend#service_account_jwt_wo}
  */
  readonly serviceAccountJwtWo?: string;
  /**
  * Version counter for write-only service account JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#service_account_jwt_wo_version KubernetesSecretBackend#service_account_jwt_wo_version}
  */
  readonly serviceAccountJwtWoVersion?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend vault_kubernetes_secret_backend}
*/
export class KubernetesSecretBackend extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kubernetes_secret_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KubernetesSecretBackend resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesSecretBackend to import
  * @param importFromId The id of the existing KubernetesSecretBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesSecretBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_kubernetes_secret_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend vault_kubernetes_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesSecretBackendConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesSecretBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kubernetes_secret_backend',
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
    this._allowedManagedKeys = config.allowedManagedKeys;
    this._allowedResponseHeaders = config.allowedResponseHeaders;
    this._auditNonHmacRequestKeys = config.auditNonHmacRequestKeys;
    this._auditNonHmacResponseKeys = config.auditNonHmacResponseKeys;
    this._defaultLeaseTtlSeconds = config.defaultLeaseTtlSeconds;
    this._delegatedAuthAccessors = config.delegatedAuthAccessors;
    this._description = config.description;
    this._disableLocalCaJwt = config.disableLocalCaJwt;
    this._externalEntropyAccess = config.externalEntropyAccess;
    this._forceNoCache = config.forceNoCache;
    this._id = config.id;
    this._identityTokenKey = config.identityTokenKey;
    this._kubernetesCaCert = config.kubernetesCaCert;
    this._kubernetesHost = config.kubernetesHost;
    this._listingVisibility = config.listingVisibility;
    this._local = config.local;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._namespace = config.namespace;
    this._options = config.options;
    this._passthroughRequestHeaders = config.passthroughRequestHeaders;
    this._path = config.path;
    this._pluginVersion = config.pluginVersion;
    this._sealWrap = config.sealWrap;
    this._serviceAccountJwt = config.serviceAccountJwt;
    this._serviceAccountJwtWo = config.serviceAccountJwtWo;
    this._serviceAccountJwtWoVersion = config.serviceAccountJwtWoVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disable_local_ca_jwt - computed: false, optional: true, required: false
  private _disableLocalCaJwt?: boolean | cdktn.IResolvable; 
  public get disableLocalCaJwt() {
    return this.getBooleanAttribute('disable_local_ca_jwt');
  }
  public set disableLocalCaJwt(value: boolean | cdktn.IResolvable) {
    this._disableLocalCaJwt = value;
  }
  public resetDisableLocalCaJwt() {
    this._disableLocalCaJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalCaJwtInput() {
    return this._disableLocalCaJwt;
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

  // kubernetes_ca_cert - computed: false, optional: true, required: false
  private _kubernetesCaCert?: string; 
  public get kubernetesCaCert() {
    return this.getStringAttribute('kubernetes_ca_cert');
  }
  public set kubernetesCaCert(value: string) {
    this._kubernetesCaCert = value;
  }
  public resetKubernetesCaCert() {
    this._kubernetesCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesCaCertInput() {
    return this._kubernetesCaCert;
  }

  // kubernetes_host - computed: false, optional: true, required: false
  private _kubernetesHost?: string; 
  public get kubernetesHost() {
    return this.getStringAttribute('kubernetes_host');
  }
  public set kubernetesHost(value: string) {
    this._kubernetesHost = value;
  }
  public resetKubernetesHost() {
    this._kubernetesHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesHostInput() {
    return this._kubernetesHost;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
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

  // service_account_jwt - computed: false, optional: true, required: false
  private _serviceAccountJwt?: string; 
  public get serviceAccountJwt() {
    return this.getStringAttribute('service_account_jwt');
  }
  public set serviceAccountJwt(value: string) {
    this._serviceAccountJwt = value;
  }
  public resetServiceAccountJwt() {
    this._serviceAccountJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJwtInput() {
    return this._serviceAccountJwt;
  }

  // service_account_jwt_wo - computed: false, optional: true, required: false
  private _serviceAccountJwtWo?: string; 
  public get serviceAccountJwtWo() {
    return this.getStringAttribute('service_account_jwt_wo');
  }
  public set serviceAccountJwtWo(value: string) {
    this._serviceAccountJwtWo = value;
  }
  public resetServiceAccountJwtWo() {
    this._serviceAccountJwtWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJwtWoInput() {
    return this._serviceAccountJwtWo;
  }

  // service_account_jwt_wo_version - computed: false, optional: true, required: false
  private _serviceAccountJwtWoVersion?: number; 
  public get serviceAccountJwtWoVersion() {
    return this.getNumberAttribute('service_account_jwt_wo_version');
  }
  public set serviceAccountJwtWoVersion(value: number) {
    this._serviceAccountJwtWoVersion = value;
  }
  public resetServiceAccountJwtWoVersion() {
    this._serviceAccountJwtWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJwtWoVersionInput() {
    return this._serviceAccountJwtWoVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_managed_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedManagedKeys),
      allowed_response_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedResponseHeaders),
      audit_non_hmac_request_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._auditNonHmacRequestKeys),
      audit_non_hmac_response_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._auditNonHmacResponseKeys),
      default_lease_ttl_seconds: cdktn.numberToTerraform(this._defaultLeaseTtlSeconds),
      delegated_auth_accessors: cdktn.listMapper(cdktn.stringToTerraform, false)(this._delegatedAuthAccessors),
      description: cdktn.stringToTerraform(this._description),
      disable_local_ca_jwt: cdktn.booleanToTerraform(this._disableLocalCaJwt),
      external_entropy_access: cdktn.booleanToTerraform(this._externalEntropyAccess),
      force_no_cache: cdktn.booleanToTerraform(this._forceNoCache),
      id: cdktn.stringToTerraform(this._id),
      identity_token_key: cdktn.stringToTerraform(this._identityTokenKey),
      kubernetes_ca_cert: cdktn.stringToTerraform(this._kubernetesCaCert),
      kubernetes_host: cdktn.stringToTerraform(this._kubernetesHost),
      listing_visibility: cdktn.stringToTerraform(this._listingVisibility),
      local: cdktn.booleanToTerraform(this._local),
      max_lease_ttl_seconds: cdktn.numberToTerraform(this._maxLeaseTtlSeconds),
      namespace: cdktn.stringToTerraform(this._namespace),
      options: cdktn.hashMapper(cdktn.stringToTerraform)(this._options),
      passthrough_request_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._passthroughRequestHeaders),
      path: cdktn.stringToTerraform(this._path),
      plugin_version: cdktn.stringToTerraform(this._pluginVersion),
      seal_wrap: cdktn.booleanToTerraform(this._sealWrap),
      service_account_jwt: cdktn.stringToTerraform(this._serviceAccountJwt),
      service_account_jwt_wo: cdktn.stringToTerraform(this._serviceAccountJwtWo),
      service_account_jwt_wo_version: cdktn.numberToTerraform(this._serviceAccountJwtWoVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      disable_local_ca_jwt: {
        value: cdktn.booleanToHclTerraform(this._disableLocalCaJwt),
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
      kubernetes_ca_cert: {
        value: cdktn.stringToHclTerraform(this._kubernetesCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_host: {
        value: cdktn.stringToHclTerraform(this._kubernetesHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      seal_wrap: {
        value: cdktn.booleanToHclTerraform(this._sealWrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_account_jwt: {
        value: cdktn.stringToHclTerraform(this._serviceAccountJwt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_jwt_wo: {
        value: cdktn.stringToHclTerraform(this._serviceAccountJwtWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_jwt_wo_version: {
        value: cdktn.numberToHclTerraform(this._serviceAccountJwtWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
