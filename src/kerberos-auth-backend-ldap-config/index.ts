/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KerberosAuthBackendLdapConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * A map of string to string that will be set as metadata on the identity alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#alias_metadata KerberosAuthBackendLdapConfig#alias_metadata}
  */
  readonly aliasMetadata?: { [key: string]: string };
  /**
  * Use anonymous binds when performing LDAP group searches. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#anonymous_group_search KerberosAuthBackendLdapConfig#anonymous_group_search}
  */
  readonly anonymousGroupSearch?: boolean | cdktn.IResolvable;
  /**
  * Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#binddn KerberosAuthBackendLdapConfig#binddn}
  */
  readonly binddn?: string;
  /**
  * LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo KerberosAuthBackendLdapConfig#bindpass_wo}
  */
  readonly bindpassWo?: string;
  /**
  * Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo_version KerberosAuthBackendLdapConfig#bindpass_wo_version}
  */
  readonly bindpassWoVersion?: number;
  /**
  * If true, usernames and group names are case sensitive. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#case_sensitive_names KerberosAuthBackendLdapConfig#case_sensitive_names}
  */
  readonly caseSensitiveNames?: boolean | cdktn.IResolvable;
  /**
  * CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#certificate KerberosAuthBackendLdapConfig#certificate}
  */
  readonly certificate?: string;
  /**
  * Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only). Must be used together with client_tls_cert_wo_version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo KerberosAuthBackendLdapConfig#client_tls_cert_wo}
  */
  readonly clientTlsCertWo?: string;
  /**
  * Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo_version KerberosAuthBackendLdapConfig#client_tls_cert_wo_version}
  */
  readonly clientTlsCertWoVersion?: number;
  /**
  * Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only). Must be used together with client_tls_key_wo_version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo KerberosAuthBackendLdapConfig#client_tls_key_wo}
  */
  readonly clientTlsKeyWo?: string;
  /**
  * Version identifier for client TLS key updates. Must be used together with client_tls_key_wo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo_version KerberosAuthBackendLdapConfig#client_tls_key_wo_version}
  */
  readonly clientTlsKeyWoVersion?: number;
  /**
  * Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#connection_timeout KerberosAuthBackendLdapConfig#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#deny_null_bind KerberosAuthBackendLdapConfig#deny_null_bind}
  */
  readonly denyNullBind?: boolean | cdktn.IResolvable;
  /**
  * When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#dereference_aliases KerberosAuthBackendLdapConfig#dereference_aliases}
  */
  readonly dereferenceAliases?: string;
  /**
  * Use anonymous bind to discover bind DN of a user. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#discoverdn KerberosAuthBackendLdapConfig#discoverdn}
  */
  readonly discoverdn?: boolean | cdktn.IResolvable;
  /**
  * If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined. Default: false. **Note:** Requires Vault 1.19.0+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#enable_samaccountname_login KerberosAuthBackendLdapConfig#enable_samaccountname_login}
  */
  readonly enableSamaccountnameLogin?: boolean | cdktn.IResolvable;
  /**
  * LDAP attribute to follow for group membership. Default: 'cn'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupattr KerberosAuthBackendLdapConfig#groupattr}
  */
  readonly groupattr?: string;
  /**
  * LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupdn KerberosAuthBackendLdapConfig#groupdn}
  */
  readonly groupdn?: string;
  /**
  * Go template for querying group membership of user. Default: '(|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupfilter KerberosAuthBackendLdapConfig#groupfilter}
  */
  readonly groupfilter?: string;
  /**
  * Skip TLS certificate verification. Not recommended for production. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#insecure_tls KerberosAuthBackendLdapConfig#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktn.IResolvable;
  /**
  * If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control. Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#max_page_size KerberosAuthBackendLdapConfig#max_page_size}
  */
  readonly maxPageSize?: number;
  /**
  * Path where the Kerberos auth method is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#mount KerberosAuthBackendLdapConfig#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#namespace KerberosAuthBackendLdapConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Timeout, in seconds, for the connection when making requests against the server. Default: 90.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#request_timeout KerberosAuthBackendLdapConfig#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Issue a StartTLS command after establishing an unencrypted connection. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#starttls KerberosAuthBackendLdapConfig#starttls}
  */
  readonly starttls?: boolean | cdktn.IResolvable;
  /**
  * Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_max_version KerberosAuthBackendLdapConfig#tls_max_version}
  */
  readonly tlsMaxVersion?: string;
  /**
  * Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_min_version KerberosAuthBackendLdapConfig#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_bound_cidrs KerberosAuthBackendLdapConfig#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_explicit_max_ttl KerberosAuthBackendLdapConfig#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_max_ttl KerberosAuthBackendLdapConfig#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_no_default_policy KerberosAuthBackendLdapConfig#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktn.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_num_uses KerberosAuthBackendLdapConfig#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_period KerberosAuthBackendLdapConfig#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_policies KerberosAuthBackendLdapConfig#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_ttl KerberosAuthBackendLdapConfig#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_type KerberosAuthBackendLdapConfig#token_type}
  */
  readonly tokenType?: string;
  /**
  * Enables userPrincipalDomain login with [username]@UPNDomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#upndomain KerberosAuthBackendLdapConfig#upndomain}
  */
  readonly upndomain?: string;
  /**
  * LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#url KerberosAuthBackendLdapConfig#url}
  */
  readonly url?: string;
  /**
  * If true, use the Active Directory tokenGroups constructed attribute. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#use_token_groups KerberosAuthBackendLdapConfig#use_token_groups}
  */
  readonly useTokenGroups?: boolean | cdktn.IResolvable;
  /**
  * Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userattr KerberosAuthBackendLdapConfig#userattr}
  */
  readonly userattr?: string;
  /**
  * LDAP domain to use for users (e.g., ou=People,dc=example,dc=org).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userdn KerberosAuthBackendLdapConfig#userdn}
  */
  readonly userdn?: string;
  /**
  * Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userfilter KerberosAuthBackendLdapConfig#userfilter}
  */
  readonly userfilter?: string;
  /**
  * Use username as alias name. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#username_as_alias KerberosAuthBackendLdapConfig#username_as_alias}
  */
  readonly usernameAsAlias?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config vault_kerberos_auth_backend_ldap_config}
*/
export class KerberosAuthBackendLdapConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kerberos_auth_backend_ldap_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KerberosAuthBackendLdapConfig to import
  * @param importFromId The id of the existing KerberosAuthBackendLdapConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KerberosAuthBackendLdapConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_kerberos_auth_backend_ldap_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config vault_kerberos_auth_backend_ldap_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KerberosAuthBackendLdapConfigConfig
  */
  public constructor(scope: Construct, id: string, config: KerberosAuthBackendLdapConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kerberos_auth_backend_ldap_config',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.11.0',
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
    this._aliasMetadata = config.aliasMetadata;
    this._anonymousGroupSearch = config.anonymousGroupSearch;
    this._binddn = config.binddn;
    this._bindpassWo = config.bindpassWo;
    this._bindpassWoVersion = config.bindpassWoVersion;
    this._caseSensitiveNames = config.caseSensitiveNames;
    this._certificate = config.certificate;
    this._clientTlsCertWo = config.clientTlsCertWo;
    this._clientTlsCertWoVersion = config.clientTlsCertWoVersion;
    this._clientTlsKeyWo = config.clientTlsKeyWo;
    this._clientTlsKeyWoVersion = config.clientTlsKeyWoVersion;
    this._connectionTimeout = config.connectionTimeout;
    this._denyNullBind = config.denyNullBind;
    this._dereferenceAliases = config.dereferenceAliases;
    this._discoverdn = config.discoverdn;
    this._enableSamaccountnameLogin = config.enableSamaccountnameLogin;
    this._groupattr = config.groupattr;
    this._groupdn = config.groupdn;
    this._groupfilter = config.groupfilter;
    this._insecureTls = config.insecureTls;
    this._maxPageSize = config.maxPageSize;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._requestTimeout = config.requestTimeout;
    this._starttls = config.starttls;
    this._tlsMaxVersion = config.tlsMaxVersion;
    this._tlsMinVersion = config.tlsMinVersion;
    this._tokenBoundCidrs = config.tokenBoundCidrs;
    this._tokenExplicitMaxTtl = config.tokenExplicitMaxTtl;
    this._tokenMaxTtl = config.tokenMaxTtl;
    this._tokenNoDefaultPolicy = config.tokenNoDefaultPolicy;
    this._tokenNumUses = config.tokenNumUses;
    this._tokenPeriod = config.tokenPeriod;
    this._tokenPolicies = config.tokenPolicies;
    this._tokenTtl = config.tokenTtl;
    this._tokenType = config.tokenType;
    this._upndomain = config.upndomain;
    this._url = config.url;
    this._useTokenGroups = config.useTokenGroups;
    this._userattr = config.userattr;
    this._userdn = config.userdn;
    this._userfilter = config.userfilter;
    this._usernameAsAlias = config.usernameAsAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_metadata - computed: false, optional: true, required: false
  private _aliasMetadata?: { [key: string]: string }; 
  public get aliasMetadata() {
    return this.getStringMapAttribute('alias_metadata');
  }
  public set aliasMetadata(value: { [key: string]: string }) {
    this._aliasMetadata = value;
  }
  public resetAliasMetadata() {
    this._aliasMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasMetadataInput() {
    return this._aliasMetadata;
  }

  // anonymous_group_search - computed: false, optional: true, required: false
  private _anonymousGroupSearch?: boolean | cdktn.IResolvable; 
  public get anonymousGroupSearch() {
    return this.getBooleanAttribute('anonymous_group_search');
  }
  public set anonymousGroupSearch(value: boolean | cdktn.IResolvable) {
    this._anonymousGroupSearch = value;
  }
  public resetAnonymousGroupSearch() {
    this._anonymousGroupSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousGroupSearchInput() {
    return this._anonymousGroupSearch;
  }

  // binddn - computed: false, optional: true, required: false
  private _binddn?: string; 
  public get binddn() {
    return this.getStringAttribute('binddn');
  }
  public set binddn(value: string) {
    this._binddn = value;
  }
  public resetBinddn() {
    this._binddn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binddnInput() {
    return this._binddn;
  }

  // bindpass_wo - computed: false, optional: true, required: false
  private _bindpassWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
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

  // case_sensitive_names - computed: false, optional: true, required: false
  private _caseSensitiveNames?: boolean | cdktn.IResolvable; 
  public get caseSensitiveNames() {
    return this.getBooleanAttribute('case_sensitive_names');
  }
  public set caseSensitiveNames(value: boolean | cdktn.IResolvable) {
    this._caseSensitiveNames = value;
  }
  public resetCaseSensitiveNames() {
    this._caseSensitiveNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveNamesInput() {
    return this._caseSensitiveNames;
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

  // client_tls_cert_wo - computed: false, optional: true, required: false
  private _clientTlsCertWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientTlsCertWo() {
    return this.getStringAttribute('client_tls_cert_wo');
  }
  public set clientTlsCertWo(value: string) {
    this._clientTlsCertWo = value;
  }
  public resetClientTlsCertWo() {
    this._clientTlsCertWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsCertWoInput() {
    return this._clientTlsCertWo;
  }

  // client_tls_cert_wo_version - computed: false, optional: true, required: false
  private _clientTlsCertWoVersion?: number; 
  public get clientTlsCertWoVersion() {
    return this.getNumberAttribute('client_tls_cert_wo_version');
  }
  public set clientTlsCertWoVersion(value: number) {
    this._clientTlsCertWoVersion = value;
  }
  public resetClientTlsCertWoVersion() {
    this._clientTlsCertWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsCertWoVersionInput() {
    return this._clientTlsCertWoVersion;
  }

  // client_tls_key_wo - computed: false, optional: true, required: false
  private _clientTlsKeyWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientTlsKeyWo() {
    return this.getStringAttribute('client_tls_key_wo');
  }
  public set clientTlsKeyWo(value: string) {
    this._clientTlsKeyWo = value;
  }
  public resetClientTlsKeyWo() {
    this._clientTlsKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsKeyWoInput() {
    return this._clientTlsKeyWo;
  }

  // client_tls_key_wo_version - computed: false, optional: true, required: false
  private _clientTlsKeyWoVersion?: number; 
  public get clientTlsKeyWoVersion() {
    return this.getNumberAttribute('client_tls_key_wo_version');
  }
  public set clientTlsKeyWoVersion(value: number) {
    this._clientTlsKeyWoVersion = value;
  }
  public resetClientTlsKeyWoVersion() {
    this._clientTlsKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsKeyWoVersionInput() {
    return this._clientTlsKeyWoVersion;
  }

  // connection_timeout - computed: true, optional: true, required: false
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

  // deny_null_bind - computed: true, optional: true, required: false
  private _denyNullBind?: boolean | cdktn.IResolvable; 
  public get denyNullBind() {
    return this.getBooleanAttribute('deny_null_bind');
  }
  public set denyNullBind(value: boolean | cdktn.IResolvable) {
    this._denyNullBind = value;
  }
  public resetDenyNullBind() {
    this._denyNullBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNullBindInput() {
    return this._denyNullBind;
  }

  // dereference_aliases - computed: true, optional: true, required: false
  private _dereferenceAliases?: string; 
  public get dereferenceAliases() {
    return this.getStringAttribute('dereference_aliases');
  }
  public set dereferenceAliases(value: string) {
    this._dereferenceAliases = value;
  }
  public resetDereferenceAliases() {
    this._dereferenceAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dereferenceAliasesInput() {
    return this._dereferenceAliases;
  }

  // discoverdn - computed: false, optional: true, required: false
  private _discoverdn?: boolean | cdktn.IResolvable; 
  public get discoverdn() {
    return this.getBooleanAttribute('discoverdn');
  }
  public set discoverdn(value: boolean | cdktn.IResolvable) {
    this._discoverdn = value;
  }
  public resetDiscoverdn() {
    this._discoverdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverdnInput() {
    return this._discoverdn;
  }

  // enable_samaccountname_login - computed: false, optional: true, required: false
  private _enableSamaccountnameLogin?: boolean | cdktn.IResolvable; 
  public get enableSamaccountnameLogin() {
    return this.getBooleanAttribute('enable_samaccountname_login');
  }
  public set enableSamaccountnameLogin(value: boolean | cdktn.IResolvable) {
    this._enableSamaccountnameLogin = value;
  }
  public resetEnableSamaccountnameLogin() {
    this._enableSamaccountnameLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSamaccountnameLoginInput() {
    return this._enableSamaccountnameLogin;
  }

  // groupattr - computed: true, optional: true, required: false
  private _groupattr?: string; 
  public get groupattr() {
    return this.getStringAttribute('groupattr');
  }
  public set groupattr(value: string) {
    this._groupattr = value;
  }
  public resetGroupattr() {
    this._groupattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupattrInput() {
    return this._groupattr;
  }

  // groupdn - computed: false, optional: true, required: false
  private _groupdn?: string; 
  public get groupdn() {
    return this.getStringAttribute('groupdn');
  }
  public set groupdn(value: string) {
    this._groupdn = value;
  }
  public resetGroupdn() {
    this._groupdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupdnInput() {
    return this._groupdn;
  }

  // groupfilter - computed: true, optional: true, required: false
  private _groupfilter?: string; 
  public get groupfilter() {
    return this.getStringAttribute('groupfilter');
  }
  public set groupfilter(value: string) {
    this._groupfilter = value;
  }
  public resetGroupfilter() {
    this._groupfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupfilterInput() {
    return this._groupfilter;
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

  // max_page_size - computed: false, optional: true, required: false
  private _maxPageSize?: number; 
  public get maxPageSize() {
    return this.getNumberAttribute('max_page_size');
  }
  public set maxPageSize(value: number) {
    this._maxPageSize = value;
  }
  public resetMaxPageSize() {
    this._maxPageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPageSizeInput() {
    return this._maxPageSize;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // starttls - computed: false, optional: true, required: false
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

  // tls_max_version - computed: true, optional: true, required: false
  private _tlsMaxVersion?: string; 
  public get tlsMaxVersion() {
    return this.getStringAttribute('tls_max_version');
  }
  public set tlsMaxVersion(value: string) {
    this._tlsMaxVersion = value;
  }
  public resetTlsMaxVersion() {
    this._tlsMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMaxVersionInput() {
    return this._tlsMaxVersion;
  }

  // tls_min_version - computed: true, optional: true, required: false
  private _tlsMinVersion?: string; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion;
  }

  // token_bound_cidrs - computed: false, optional: true, required: false
  private _tokenBoundCidrs?: string[]; 
  public get tokenBoundCidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('token_bound_cidrs'));
  }
  public set tokenBoundCidrs(value: string[]) {
    this._tokenBoundCidrs = value;
  }
  public resetTokenBoundCidrs() {
    this._tokenBoundCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBoundCidrsInput() {
    return this._tokenBoundCidrs;
  }

  // token_explicit_max_ttl - computed: false, optional: true, required: false
  private _tokenExplicitMaxTtl?: number; 
  public get tokenExplicitMaxTtl() {
    return this.getNumberAttribute('token_explicit_max_ttl');
  }
  public set tokenExplicitMaxTtl(value: number) {
    this._tokenExplicitMaxTtl = value;
  }
  public resetTokenExplicitMaxTtl() {
    this._tokenExplicitMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExplicitMaxTtlInput() {
    return this._tokenExplicitMaxTtl;
  }

  // token_max_ttl - computed: false, optional: true, required: false
  private _tokenMaxTtl?: number; 
  public get tokenMaxTtl() {
    return this.getNumberAttribute('token_max_ttl');
  }
  public set tokenMaxTtl(value: number) {
    this._tokenMaxTtl = value;
  }
  public resetTokenMaxTtl() {
    this._tokenMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenMaxTtlInput() {
    return this._tokenMaxTtl;
  }

  // token_no_default_policy - computed: false, optional: true, required: false
  private _tokenNoDefaultPolicy?: boolean | cdktn.IResolvable; 
  public get tokenNoDefaultPolicy() {
    return this.getBooleanAttribute('token_no_default_policy');
  }
  public set tokenNoDefaultPolicy(value: boolean | cdktn.IResolvable) {
    this._tokenNoDefaultPolicy = value;
  }
  public resetTokenNoDefaultPolicy() {
    this._tokenNoDefaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNoDefaultPolicyInput() {
    return this._tokenNoDefaultPolicy;
  }

  // token_num_uses - computed: false, optional: true, required: false
  private _tokenNumUses?: number; 
  public get tokenNumUses() {
    return this.getNumberAttribute('token_num_uses');
  }
  public set tokenNumUses(value: number) {
    this._tokenNumUses = value;
  }
  public resetTokenNumUses() {
    this._tokenNumUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNumUsesInput() {
    return this._tokenNumUses;
  }

  // token_period - computed: false, optional: true, required: false
  private _tokenPeriod?: number; 
  public get tokenPeriod() {
    return this.getNumberAttribute('token_period');
  }
  public set tokenPeriod(value: number) {
    this._tokenPeriod = value;
  }
  public resetTokenPeriod() {
    this._tokenPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPeriodInput() {
    return this._tokenPeriod;
  }

  // token_policies - computed: false, optional: true, required: false
  private _tokenPolicies?: string[]; 
  public get tokenPolicies() {
    return cdktn.Fn.tolist(this.getListAttribute('token_policies'));
  }
  public set tokenPolicies(value: string[]) {
    this._tokenPolicies = value;
  }
  public resetTokenPolicies() {
    this._tokenPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPoliciesInput() {
    return this._tokenPolicies;
  }

  // token_ttl - computed: false, optional: true, required: false
  private _tokenTtl?: number; 
  public get tokenTtl() {
    return this.getNumberAttribute('token_ttl');
  }
  public set tokenTtl(value: number) {
    this._tokenTtl = value;
  }
  public resetTokenTtl() {
    this._tokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTtlInput() {
    return this._tokenTtl;
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

  // upndomain - computed: false, optional: true, required: false
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

  // use_token_groups - computed: false, optional: true, required: false
  private _useTokenGroups?: boolean | cdktn.IResolvable; 
  public get useTokenGroups() {
    return this.getBooleanAttribute('use_token_groups');
  }
  public set useTokenGroups(value: boolean | cdktn.IResolvable) {
    this._useTokenGroups = value;
  }
  public resetUseTokenGroups() {
    this._useTokenGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTokenGroupsInput() {
    return this._useTokenGroups;
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

  // userfilter - computed: true, optional: true, required: false
  private _userfilter?: string; 
  public get userfilter() {
    return this.getStringAttribute('userfilter');
  }
  public set userfilter(value: string) {
    this._userfilter = value;
  }
  public resetUserfilter() {
    this._userfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userfilterInput() {
    return this._userfilter;
  }

  // username_as_alias - computed: false, optional: true, required: false
  private _usernameAsAlias?: boolean | cdktn.IResolvable; 
  public get usernameAsAlias() {
    return this.getBooleanAttribute('username_as_alias');
  }
  public set usernameAsAlias(value: boolean | cdktn.IResolvable) {
    this._usernameAsAlias = value;
  }
  public resetUsernameAsAlias() {
    this._usernameAsAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAsAliasInput() {
    return this._usernameAsAlias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._aliasMetadata),
      anonymous_group_search: cdktn.booleanToTerraform(this._anonymousGroupSearch),
      binddn: cdktn.stringToTerraform(this._binddn),
      bindpass_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._bindpassWo)),
      bindpass_wo_version: cdktn.numberToTerraform(this._bindpassWoVersion),
      case_sensitive_names: cdktn.booleanToTerraform(this._caseSensitiveNames),
      certificate: cdktn.stringToTerraform(this._certificate),
      client_tls_cert_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._clientTlsCertWo)),
      client_tls_cert_wo_version: cdktn.numberToTerraform(this._clientTlsCertWoVersion),
      client_tls_key_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._clientTlsKeyWo)),
      client_tls_key_wo_version: cdktn.numberToTerraform(this._clientTlsKeyWoVersion),
      connection_timeout: cdktn.numberToTerraform(this._connectionTimeout),
      deny_null_bind: cdktn.booleanToTerraform(this._denyNullBind),
      dereference_aliases: cdktn.stringToTerraform(this._dereferenceAliases),
      discoverdn: cdktn.booleanToTerraform(this._discoverdn),
      enable_samaccountname_login: cdktn.booleanToTerraform(this._enableSamaccountnameLogin),
      groupattr: cdktn.stringToTerraform(this._groupattr),
      groupdn: cdktn.stringToTerraform(this._groupdn),
      groupfilter: cdktn.stringToTerraform(this._groupfilter),
      insecure_tls: cdktn.booleanToTerraform(this._insecureTls),
      max_page_size: cdktn.numberToTerraform(this._maxPageSize),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      request_timeout: cdktn.numberToTerraform(this._requestTimeout),
      starttls: cdktn.booleanToTerraform(this._starttls),
      tls_max_version: cdktn.stringToTerraform(this._tlsMaxVersion),
      tls_min_version: cdktn.stringToTerraform(this._tlsMinVersion),
      token_bound_cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenBoundCidrs),
      token_explicit_max_ttl: cdktn.numberToTerraform(this._tokenExplicitMaxTtl),
      token_max_ttl: cdktn.numberToTerraform(this._tokenMaxTtl),
      token_no_default_policy: cdktn.booleanToTerraform(this._tokenNoDefaultPolicy),
      token_num_uses: cdktn.numberToTerraform(this._tokenNumUses),
      token_period: cdktn.numberToTerraform(this._tokenPeriod),
      token_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenPolicies),
      token_ttl: cdktn.numberToTerraform(this._tokenTtl),
      token_type: cdktn.stringToTerraform(this._tokenType),
      upndomain: cdktn.stringToTerraform(this._upndomain),
      url: cdktn.stringToTerraform(this._url),
      use_token_groups: cdktn.booleanToTerraform(this._useTokenGroups),
      userattr: cdktn.stringToTerraform(this._userattr),
      userdn: cdktn.stringToTerraform(this._userdn),
      userfilter: cdktn.stringToTerraform(this._userfilter),
      username_as_alias: cdktn.booleanToTerraform(this._usernameAsAlias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._aliasMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      anonymous_group_search: {
        value: cdktn.booleanToHclTerraform(this._anonymousGroupSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      binddn: {
        value: cdktn.stringToHclTerraform(this._binddn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindpass_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._bindpassWo)),
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
      case_sensitive_names: {
        value: cdktn.booleanToHclTerraform(this._caseSensitiveNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate: {
        value: cdktn.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_cert_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._clientTlsCertWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_cert_wo_version: {
        value: cdktn.numberToHclTerraform(this._clientTlsCertWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_tls_key_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._clientTlsKeyWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_key_wo_version: {
        value: cdktn.numberToHclTerraform(this._clientTlsKeyWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_timeout: {
        value: cdktn.numberToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deny_null_bind: {
        value: cdktn.booleanToHclTerraform(this._denyNullBind),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dereference_aliases: {
        value: cdktn.stringToHclTerraform(this._dereferenceAliases),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discoverdn: {
        value: cdktn.booleanToHclTerraform(this._discoverdn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_samaccountname_login: {
        value: cdktn.booleanToHclTerraform(this._enableSamaccountnameLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groupattr: {
        value: cdktn.stringToHclTerraform(this._groupattr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupdn: {
        value: cdktn.stringToHclTerraform(this._groupdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupfilter: {
        value: cdktn.stringToHclTerraform(this._groupfilter),
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
      max_page_size: {
        value: cdktn.numberToHclTerraform(this._maxPageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
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
      request_timeout: {
        value: cdktn.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      starttls: {
        value: cdktn.booleanToHclTerraform(this._starttls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_max_version: {
        value: cdktn.stringToHclTerraform(this._tlsMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_min_version: {
        value: cdktn.stringToHclTerraform(this._tlsMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_bound_cidrs: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tokenBoundCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_explicit_max_ttl: {
        value: cdktn.numberToHclTerraform(this._tokenExplicitMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_max_ttl: {
        value: cdktn.numberToHclTerraform(this._tokenMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_no_default_policy: {
        value: cdktn.booleanToHclTerraform(this._tokenNoDefaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_num_uses: {
        value: cdktn.numberToHclTerraform(this._tokenNumUses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_period: {
        value: cdktn.numberToHclTerraform(this._tokenPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tokenPolicies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_ttl: {
        value: cdktn.numberToHclTerraform(this._tokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_type: {
        value: cdktn.stringToHclTerraform(this._tokenType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      use_token_groups: {
        value: cdktn.booleanToHclTerraform(this._useTokenGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      userfilter: {
        value: cdktn.stringToHclTerraform(this._userfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_as_alias: {
        value: cdktn.booleanToHclTerraform(this._usernameAsAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
