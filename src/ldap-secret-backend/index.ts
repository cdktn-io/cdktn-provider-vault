/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LdapSecretBackendConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of managed key registry entry names that the mount in question is allowed to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#allowed_managed_keys LdapSecretBackend#allowed_managed_keys}
  */
  readonly allowedManagedKeys?: string[];
  /**
  * List of headers to allow and pass from the request to the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#allowed_response_headers LdapSecretBackend#allowed_response_headers}
  */
  readonly allowedResponseHeaders?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#audit_non_hmac_request_keys LdapSecretBackend#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#audit_non_hmac_response_keys LdapSecretBackend#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Distinguished name of object to bind when performing user and group search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#binddn LdapSecretBackend#binddn}
  */
  readonly binddn: string;
  /**
  * LDAP password for searching for the user DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#bindpass LdapSecretBackend#bindpass}
  */
  readonly bindpass?: string;
  /**
  * Write-only LDAP password for searching for the user DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#bindpass_wo LdapSecretBackend#bindpass_wo}
  */
  readonly bindpassWo?: string;
  /**
  * Version counter for write-only bind password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#bindpass_wo_version LdapSecretBackend#bindpass_wo_version}
  */
  readonly bindpassWoVersion?: number;
  /**
  * CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#certificate LdapSecretBackend#certificate}
  */
  readonly certificate?: string;
  /**
  * Client certificate to provide to the LDAP server, must be x509 PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#client_tls_cert LdapSecretBackend#client_tls_cert}
  */
  readonly clientTlsCert?: string;
  /**
  * Client certificate key to provide to the LDAP server, must be x509 PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#client_tls_key LdapSecretBackend#client_tls_key}
  */
  readonly clientTlsKey?: string;
  /**
  * Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#connection_timeout LdapSecretBackend#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * The type of credential to manage. Options include: 'password', 'phrase'. Defaults to 'password'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#credential_type LdapSecretBackend#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Default lease duration for tokens and secrets in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#default_lease_ttl_seconds LdapSecretBackend#default_lease_ttl_seconds}
  */
  readonly defaultLeaseTtlSeconds?: number;
  /**
  * List of headers to allow and pass from the request to the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#delegated_auth_accessors LdapSecretBackend#delegated_auth_accessors}
  */
  readonly delegatedAuthAccessors?: string[];
  /**
  * Human-friendly description of the mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#description LdapSecretBackend#description}
  */
  readonly description?: string;
  /**
  * Stops rotation of the root credential until set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#disable_automated_rotation LdapSecretBackend#disable_automated_rotation}
  */
  readonly disableAutomatedRotation?: boolean | cdktn.IResolvable;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#disable_remount LdapSecretBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktn.IResolvable;
  /**
  * Enable the secrets engine to access Vault's external entropy source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#external_entropy_access LdapSecretBackend#external_entropy_access}
  */
  readonly externalEntropyAccess?: boolean | cdktn.IResolvable;
  /**
  * If set to true, disables caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#force_no_cache LdapSecretBackend#force_no_cache}
  */
  readonly forceNoCache?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key to use for signing plugin workload identity tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#identity_token_key LdapSecretBackend#identity_token_key}
  */
  readonly identityTokenKey?: string;
  /**
  * Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#insecure_tls LdapSecretBackend#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether to show this mount in the UI-specific listing endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#listing_visibility LdapSecretBackend#listing_visibility}
  */
  readonly listingVisibility?: string;
  /**
  * Local mount flag that can be explicitly set to true to enforce local mount in HA environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#local LdapSecretBackend#local}
  */
  readonly local?: boolean | cdktn.IResolvable;
  /**
  * Maximum possible lease duration for tokens and secrets in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#max_lease_ttl_seconds LdapSecretBackend#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#namespace LdapSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies mount type specific options that are passed to the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#options LdapSecretBackend#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * List of headers to allow and pass from the request to the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#passthrough_request_headers LdapSecretBackend#passthrough_request_headers}
  */
  readonly passthroughRequestHeaders?: string[];
  /**
  * Name of the password policy to use to generate passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#password_policy LdapSecretBackend#password_policy}
  */
  readonly passwordPolicy?: string;
  /**
  * The path where the LDAP secrets backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#path LdapSecretBackend#path}
  */
  readonly path?: string;
  /**
  * Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#plugin_version LdapSecretBackend#plugin_version}
  */
  readonly pluginVersion?: string;
  /**
  * Timeout, in seconds, for the connection when making requests against the server before returning back an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#request_timeout LdapSecretBackend#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#rotation_period LdapSecretBackend#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#rotation_schedule LdapSecretBackend#rotation_schedule}
  */
  readonly rotationSchedule?: string;
  /**
  * The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. Can only be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#rotation_window LdapSecretBackend#rotation_window}
  */
  readonly rotationWindow?: number;
  /**
  * The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#schema LdapSecretBackend#schema}
  */
  readonly schema?: string;
  /**
  * Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#seal_wrap LdapSecretBackend#seal_wrap}
  */
  readonly sealWrap?: boolean | cdktn.IResolvable;
  /**
  * Skip rotation of static role secrets on import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#skip_static_role_import_rotation LdapSecretBackend#skip_static_role_import_rotation}
  */
  readonly skipStaticRoleImportRotation?: boolean | cdktn.IResolvable;
  /**
  * Issue a StartTLS command after establishing unencrypted connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#starttls LdapSecretBackend#starttls}
  */
  readonly starttls?: boolean | cdktn.IResolvable;
  /**
  * Enables userPrincipalDomain login with [username]@UPNDomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#upndomain LdapSecretBackend#upndomain}
  */
  readonly upndomain?: string;
  /**
  * LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#url LdapSecretBackend#url}
  */
  readonly url?: string;
  /**
  * Attribute used for users (default: cn)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#userattr LdapSecretBackend#userattr}
  */
  readonly userattr?: string;
  /**
  * LDAP domain to use for users (eg: ou=People,dc=example,dc=org)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#userdn LdapSecretBackend#userdn}
  */
  readonly userdn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend vault_ldap_secret_backend}
*/
export class LdapSecretBackend extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ldap_secret_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LdapSecretBackend resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapSecretBackend to import
  * @param importFromId The id of the existing LdapSecretBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapSecretBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_ldap_secret_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_secret_backend vault_ldap_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapSecretBackendConfig
  */
  public constructor(scope: Construct, id: string, config: LdapSecretBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_ldap_secret_backend',
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
    this._binddn = config.binddn;
    this._bindpass = config.bindpass;
    this._bindpassWo = config.bindpassWo;
    this._bindpassWoVersion = config.bindpassWoVersion;
    this._certificate = config.certificate;
    this._clientTlsCert = config.clientTlsCert;
    this._clientTlsKey = config.clientTlsKey;
    this._connectionTimeout = config.connectionTimeout;
    this._credentialType = config.credentialType;
    this._defaultLeaseTtlSeconds = config.defaultLeaseTtlSeconds;
    this._delegatedAuthAccessors = config.delegatedAuthAccessors;
    this._description = config.description;
    this._disableAutomatedRotation = config.disableAutomatedRotation;
    this._disableRemount = config.disableRemount;
    this._externalEntropyAccess = config.externalEntropyAccess;
    this._forceNoCache = config.forceNoCache;
    this._id = config.id;
    this._identityTokenKey = config.identityTokenKey;
    this._insecureTls = config.insecureTls;
    this._listingVisibility = config.listingVisibility;
    this._local = config.local;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._namespace = config.namespace;
    this._options = config.options;
    this._passthroughRequestHeaders = config.passthroughRequestHeaders;
    this._passwordPolicy = config.passwordPolicy;
    this._path = config.path;
    this._pluginVersion = config.pluginVersion;
    this._requestTimeout = config.requestTimeout;
    this._rotationPeriod = config.rotationPeriod;
    this._rotationSchedule = config.rotationSchedule;
    this._rotationWindow = config.rotationWindow;
    this._schema = config.schema;
    this._sealWrap = config.sealWrap;
    this._skipStaticRoleImportRotation = config.skipStaticRoleImportRotation;
    this._starttls = config.starttls;
    this._upndomain = config.upndomain;
    this._url = config.url;
    this._userattr = config.userattr;
    this._userdn = config.userdn;
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

  // binddn - computed: false, optional: false, required: true
  private _binddn?: string; 
  public get binddn() {
    return this.getStringAttribute('binddn');
  }
  public set binddn(value: string) {
    this._binddn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binddnInput() {
    return this._binddn;
  }

  // bindpass - computed: false, optional: true, required: false
  private _bindpass?: string; 
  public get bindpass() {
    return this.getStringAttribute('bindpass');
  }
  public set bindpass(value: string) {
    this._bindpass = value;
  }
  public resetBindpass() {
    this._bindpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpassInput() {
    return this._bindpass;
  }

  // bindpass_wo - computed: false, optional: true, required: false
  private _bindpassWo?: string; 
  public get bindpassWo() {
    return this.getStringAttribute('bindpass_wo');
  }
  public set bindpassWo(value: string) {
    this._bindpassWo = value;
  }
  public resetBindpassWo() {
    this._bindpassWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpassWoInput() {
    return this._bindpassWo;
  }

  // bindpass_wo_version - computed: false, optional: true, required: false
  private _bindpassWoVersion?: number; 
  public get bindpassWoVersion() {
    return this.getNumberAttribute('bindpass_wo_version');
  }
  public set bindpassWoVersion(value: number) {
    this._bindpassWoVersion = value;
  }
  public resetBindpassWoVersion() {
    this._bindpassWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpassWoVersionInput() {
    return this._bindpassWoVersion;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // client_tls_cert - computed: false, optional: true, required: false
  private _clientTlsCert?: string; 
  public get clientTlsCert() {
    return this.getStringAttribute('client_tls_cert');
  }
  public set clientTlsCert(value: string) {
    this._clientTlsCert = value;
  }
  public resetClientTlsCert() {
    this._clientTlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsCertInput() {
    return this._clientTlsCert;
  }

  // client_tls_key - computed: false, optional: true, required: false
  private _clientTlsKey?: string; 
  public get clientTlsKey() {
    return this.getStringAttribute('client_tls_key');
  }
  public set clientTlsKey(value: string) {
    this._clientTlsKey = value;
  }
  public resetClientTlsKey() {
    this._clientTlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsKeyInput() {
    return this._clientTlsKey;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // credential_type - computed: true, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
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

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktn.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktn.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
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

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy?: string; 
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }
  public set passwordPolicy(value: string) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy;
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

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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

  // skip_static_role_import_rotation - computed: false, optional: true, required: false
  private _skipStaticRoleImportRotation?: boolean | cdktn.IResolvable; 
  public get skipStaticRoleImportRotation() {
    return this.getBooleanAttribute('skip_static_role_import_rotation');
  }
  public set skipStaticRoleImportRotation(value: boolean | cdktn.IResolvable) {
    this._skipStaticRoleImportRotation = value;
  }
  public resetSkipStaticRoleImportRotation() {
    this._skipStaticRoleImportRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipStaticRoleImportRotationInput() {
    return this._skipStaticRoleImportRotation;
  }

  // starttls - computed: true, optional: true, required: false
  private _starttls?: boolean | cdktn.IResolvable; 
  public get starttls() {
    return this.getBooleanAttribute('starttls');
  }
  public set starttls(value: boolean | cdktn.IResolvable) {
    this._starttls = value;
  }
  public resetStarttls() {
    this._starttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttlsInput() {
    return this._starttls;
  }

  // upndomain - computed: true, optional: true, required: false
  private _upndomain?: string; 
  public get upndomain() {
    return this.getStringAttribute('upndomain');
  }
  public set upndomain(value: string) {
    this._upndomain = value;
  }
  public resetUpndomain() {
    this._upndomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upndomainInput() {
    return this._upndomain;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // userattr - computed: true, optional: true, required: false
  private _userattr?: string; 
  public get userattr() {
    return this.getStringAttribute('userattr');
  }
  public set userattr(value: string) {
    this._userattr = value;
  }
  public resetUserattr() {
    this._userattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userattrInput() {
    return this._userattr;
  }

  // userdn - computed: false, optional: true, required: false
  private _userdn?: string; 
  public get userdn() {
    return this.getStringAttribute('userdn');
  }
  public set userdn(value: string) {
    this._userdn = value;
  }
  public resetUserdn() {
    this._userdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdnInput() {
    return this._userdn;
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
      binddn: cdktn.stringToTerraform(this._binddn),
      bindpass: cdktn.stringToTerraform(this._bindpass),
      bindpass_wo: cdktn.stringToTerraform(this._bindpassWo),
      bindpass_wo_version: cdktn.numberToTerraform(this._bindpassWoVersion),
      certificate: cdktn.stringToTerraform(this._certificate),
      client_tls_cert: cdktn.stringToTerraform(this._clientTlsCert),
      client_tls_key: cdktn.stringToTerraform(this._clientTlsKey),
      connection_timeout: cdktn.numberToTerraform(this._connectionTimeout),
      credential_type: cdktn.stringToTerraform(this._credentialType),
      default_lease_ttl_seconds: cdktn.numberToTerraform(this._defaultLeaseTtlSeconds),
      delegated_auth_accessors: cdktn.listMapper(cdktn.stringToTerraform, false)(this._delegatedAuthAccessors),
      description: cdktn.stringToTerraform(this._description),
      disable_automated_rotation: cdktn.booleanToTerraform(this._disableAutomatedRotation),
      disable_remount: cdktn.booleanToTerraform(this._disableRemount),
      external_entropy_access: cdktn.booleanToTerraform(this._externalEntropyAccess),
      force_no_cache: cdktn.booleanToTerraform(this._forceNoCache),
      id: cdktn.stringToTerraform(this._id),
      identity_token_key: cdktn.stringToTerraform(this._identityTokenKey),
      insecure_tls: cdktn.booleanToTerraform(this._insecureTls),
      listing_visibility: cdktn.stringToTerraform(this._listingVisibility),
      local: cdktn.booleanToTerraform(this._local),
      max_lease_ttl_seconds: cdktn.numberToTerraform(this._maxLeaseTtlSeconds),
      namespace: cdktn.stringToTerraform(this._namespace),
      options: cdktn.hashMapper(cdktn.stringToTerraform)(this._options),
      passthrough_request_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._passthroughRequestHeaders),
      password_policy: cdktn.stringToTerraform(this._passwordPolicy),
      path: cdktn.stringToTerraform(this._path),
      plugin_version: cdktn.stringToTerraform(this._pluginVersion),
      request_timeout: cdktn.numberToTerraform(this._requestTimeout),
      rotation_period: cdktn.numberToTerraform(this._rotationPeriod),
      rotation_schedule: cdktn.stringToTerraform(this._rotationSchedule),
      rotation_window: cdktn.numberToTerraform(this._rotationWindow),
      schema: cdktn.stringToTerraform(this._schema),
      seal_wrap: cdktn.booleanToTerraform(this._sealWrap),
      skip_static_role_import_rotation: cdktn.booleanToTerraform(this._skipStaticRoleImportRotation),
      starttls: cdktn.booleanToTerraform(this._starttls),
      upndomain: cdktn.stringToTerraform(this._upndomain),
      url: cdktn.stringToTerraform(this._url),
      userattr: cdktn.stringToTerraform(this._userattr),
      userdn: cdktn.stringToTerraform(this._userdn),
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
      binddn: {
        value: cdktn.stringToHclTerraform(this._binddn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindpass: {
        value: cdktn.stringToHclTerraform(this._bindpass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindpass_wo: {
        value: cdktn.stringToHclTerraform(this._bindpassWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindpass_wo_version: {
        value: cdktn.numberToHclTerraform(this._bindpassWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate: {
        value: cdktn.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_cert: {
        value: cdktn.stringToHclTerraform(this._clientTlsCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_key: {
        value: cdktn.stringToHclTerraform(this._clientTlsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_timeout: {
        value: cdktn.numberToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      credential_type: {
        value: cdktn.stringToHclTerraform(this._credentialType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      insecure_tls: {
        value: cdktn.booleanToHclTerraform(this._insecureTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      password_policy: {
        value: cdktn.stringToHclTerraform(this._passwordPolicy),
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
      plugin_version: {
        value: cdktn.stringToHclTerraform(this._pluginVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout: {
        value: cdktn.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
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
      skip_static_role_import_rotation: {
        value: cdktn.booleanToHclTerraform(this._skipStaticRoleImportRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      starttls: {
        value: cdktn.booleanToHclTerraform(this._starttls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upndomain: {
        value: cdktn.stringToHclTerraform(this._upndomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktn.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userattr: {
        value: cdktn.stringToHclTerraform(this._userattr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userdn: {
        value: cdktn.stringToHclTerraform(this._userdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
