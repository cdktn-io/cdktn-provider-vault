# `kerberosAuthBackendLdapConfig` Submodule <a name="`kerberosAuthBackendLdapConfig` Submodule" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KerberosAuthBackendLdapConfig <a name="KerberosAuthBackendLdapConfig" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config vault_kerberos_auth_backend_ldap_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_ldap_config

kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  alias_metadata: typing.Mapping[str] = None,
  anonymous_group_search: bool | IResolvable = None,
  binddn: str = None,
  bindpass_wo: str = None,
  bindpass_wo_version: typing.Union[int, float] = None,
  case_sensitive_names: bool | IResolvable = None,
  certificate: str = None,
  client_tls_cert_wo: str = None,
  client_tls_cert_wo_version: typing.Union[int, float] = None,
  client_tls_key_wo: str = None,
  client_tls_key_wo_version: typing.Union[int, float] = None,
  connection_timeout: typing.Union[int, float] = None,
  deny_null_bind: bool | IResolvable = None,
  dereference_aliases: str = None,
  discoverdn: bool | IResolvable = None,
  enable_samaccountname_login: bool | IResolvable = None,
  groupattr: str = None,
  groupdn: str = None,
  groupfilter: str = None,
  insecure_tls: bool | IResolvable = None,
  max_page_size: typing.Union[int, float] = None,
  namespace: str = None,
  request_timeout: typing.Union[int, float] = None,
  starttls: bool | IResolvable = None,
  tls_max_version: str = None,
  tls_min_version: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: bool | IResolvable = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None,
  upndomain: str = None,
  url: str = None,
  userattr: str = None,
  userdn: str = None,
  userfilter: str = None,
  username_as_alias: bool | IResolvable = None,
  use_token_groups: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.anonymousGroupSearch">anonymous_group_search</a></code> | <code>bool \| cdktn.IResolvable</code> | Use anonymous binds when performing LDAP group searches. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.binddn">binddn</a></code> | <code>str</code> | Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.bindpassWo">bindpass_wo</a></code> | <code>str</code> | LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.bindpassWoVersion">bindpass_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.caseSensitiveNames">case_sensitive_names</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, usernames and group names are case sensitive. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsCertWo">client_tls_cert_wo</a></code> | <code>str</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsCertWoVersion">client_tls_cert_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsKeyWo">client_tls_key_wo</a></code> | <code>str</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsKeyWoVersion">client_tls_key_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for client TLS key updates. Must be used together with client_tls_key_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.denyNullBind">deny_null_bind</a></code> | <code>bool \| cdktn.IResolvable</code> | Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.dereferenceAliases">dereference_aliases</a></code> | <code>str</code> | When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.discoverdn">discoverdn</a></code> | <code>bool \| cdktn.IResolvable</code> | Use anonymous bind to discover bind DN of a user. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.enableSamaccountnameLogin">enable_samaccountname_login</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupattr">groupattr</a></code> | <code>str</code> | LDAP attribute to follow for group membership. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupdn">groupdn</a></code> | <code>str</code> | LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupfilter">groupfilter</a></code> | <code>str</code> | Go template for querying group membership of user. Default: '(\|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.insecureTls">insecure_tls</a></code> | <code>bool \| cdktn.IResolvable</code> | Skip TLS certificate verification. Not recommended for production. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.maxPageSize">max_page_size</a></code> | <code>typing.Union[int, float]</code> | If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout, in seconds, for the connection when making requests against the server. Default: 90. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.starttls">starttls</a></code> | <code>bool \| cdktn.IResolvable</code> | Issue a StartTLS command after establishing an unencrypted connection. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tlsMaxVersion">tls_max_version</a></code> | <code>str</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.upndomain">upndomain</a></code> | <code>str</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.url">url</a></code> | <code>str</code> | LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userattr">userattr</a></code> | <code>str</code> | Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userdn">userdn</a></code> | <code>str</code> | LDAP domain to use for users (e.g., ou=People,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userfilter">userfilter</a></code> | <code>str</code> | Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.usernameAsAlias">username_as_alias</a></code> | <code>bool \| cdktn.IResolvable</code> | Use username as alias name. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.useTokenGroups">use_token_groups</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, use the Active Directory tokenGroups constructed attribute. Default: false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.mount"></a>

- *Type:* str

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#mount KerberosAuthBackendLdapConfig#mount}

---

##### `alias_metadata`<sup>Optional</sup> <a name="alias_metadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.aliasMetadata"></a>

- *Type:* typing.Mapping[str]

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#alias_metadata KerberosAuthBackendLdapConfig#alias_metadata}

---

##### `anonymous_group_search`<sup>Optional</sup> <a name="anonymous_group_search" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.anonymousGroupSearch"></a>

- *Type:* bool | cdktn.IResolvable

Use anonymous binds when performing LDAP group searches. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#anonymous_group_search KerberosAuthBackendLdapConfig#anonymous_group_search}

---

##### `binddn`<sup>Optional</sup> <a name="binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.binddn"></a>

- *Type:* str

Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#binddn KerberosAuthBackendLdapConfig#binddn}

---

##### `bindpass_wo`<sup>Optional</sup> <a name="bindpass_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.bindpassWo"></a>

- *Type:* str

LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo KerberosAuthBackendLdapConfig#bindpass_wo}

---

##### `bindpass_wo_version`<sup>Optional</sup> <a name="bindpass_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.bindpassWoVersion"></a>

- *Type:* typing.Union[int, float]

Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo_version KerberosAuthBackendLdapConfig#bindpass_wo_version}

---

##### `case_sensitive_names`<sup>Optional</sup> <a name="case_sensitive_names" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.caseSensitiveNames"></a>

- *Type:* bool | cdktn.IResolvable

If true, usernames and group names are case sensitive. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#case_sensitive_names KerberosAuthBackendLdapConfig#case_sensitive_names}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.certificate"></a>

- *Type:* str

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#certificate KerberosAuthBackendLdapConfig#certificate}

---

##### `client_tls_cert_wo`<sup>Optional</sup> <a name="client_tls_cert_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsCertWo"></a>

- *Type:* str

Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_cert_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo KerberosAuthBackendLdapConfig#client_tls_cert_wo}

---

##### `client_tls_cert_wo_version`<sup>Optional</sup> <a name="client_tls_cert_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsCertWoVersion"></a>

- *Type:* typing.Union[int, float]

Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo_version KerberosAuthBackendLdapConfig#client_tls_cert_wo_version}

---

##### `client_tls_key_wo`<sup>Optional</sup> <a name="client_tls_key_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsKeyWo"></a>

- *Type:* str

Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_key_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo KerberosAuthBackendLdapConfig#client_tls_key_wo}

---

##### `client_tls_key_wo_version`<sup>Optional</sup> <a name="client_tls_key_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsKeyWoVersion"></a>

- *Type:* typing.Union[int, float]

Version identifier for client TLS key updates. Must be used together with client_tls_key_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo_version KerberosAuthBackendLdapConfig#client_tls_key_wo_version}

---

##### `connection_timeout`<sup>Optional</sup> <a name="connection_timeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.connectionTimeout"></a>

- *Type:* typing.Union[int, float]

Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#connection_timeout KerberosAuthBackendLdapConfig#connection_timeout}

---

##### `deny_null_bind`<sup>Optional</sup> <a name="deny_null_bind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.denyNullBind"></a>

- *Type:* bool | cdktn.IResolvable

Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#deny_null_bind KerberosAuthBackendLdapConfig#deny_null_bind}

---

##### `dereference_aliases`<sup>Optional</sup> <a name="dereference_aliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.dereferenceAliases"></a>

- *Type:* str

When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#dereference_aliases KerberosAuthBackendLdapConfig#dereference_aliases}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.discoverdn"></a>

- *Type:* bool | cdktn.IResolvable

Use anonymous bind to discover bind DN of a user. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#discoverdn KerberosAuthBackendLdapConfig#discoverdn}

---

##### `enable_samaccountname_login`<sup>Optional</sup> <a name="enable_samaccountname_login" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.enableSamaccountnameLogin"></a>

- *Type:* bool | cdktn.IResolvable

If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined.

Default: false. **Note:** Requires Vault 1.19.0+

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#enable_samaccountname_login KerberosAuthBackendLdapConfig#enable_samaccountname_login}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupattr"></a>

- *Type:* str

LDAP attribute to follow for group membership. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupattr KerberosAuthBackendLdapConfig#groupattr}

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupdn"></a>

- *Type:* str

LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupdn KerberosAuthBackendLdapConfig#groupdn}

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupfilter"></a>

- *Type:* str

Go template for querying group membership of user. Default: '(|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupfilter KerberosAuthBackendLdapConfig#groupfilter}

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.insecureTls"></a>

- *Type:* bool | cdktn.IResolvable

Skip TLS certificate verification. Not recommended for production. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#insecure_tls KerberosAuthBackendLdapConfig#insecure_tls}

---

##### `max_page_size`<sup>Optional</sup> <a name="max_page_size" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.maxPageSize"></a>

- *Type:* typing.Union[int, float]

If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control.

Default: 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#max_page_size KerberosAuthBackendLdapConfig#max_page_size}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#namespace KerberosAuthBackendLdapConfig#namespace}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.requestTimeout"></a>

- *Type:* typing.Union[int, float]

Timeout, in seconds, for the connection when making requests against the server. Default: 90.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#request_timeout KerberosAuthBackendLdapConfig#request_timeout}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.starttls"></a>

- *Type:* bool | cdktn.IResolvable

Issue a StartTLS command after establishing an unencrypted connection. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#starttls KerberosAuthBackendLdapConfig#starttls}

---

##### `tls_max_version`<sup>Optional</sup> <a name="tls_max_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tlsMaxVersion"></a>

- *Type:* str

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_max_version KerberosAuthBackendLdapConfig#tls_max_version}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tlsMinVersion"></a>

- *Type:* str

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_min_version KerberosAuthBackendLdapConfig#tls_min_version}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_bound_cidrs KerberosAuthBackendLdapConfig#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_explicit_max_ttl KerberosAuthBackendLdapConfig#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_max_ttl KerberosAuthBackendLdapConfig#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* bool | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_no_default_policy KerberosAuthBackendLdapConfig#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_num_uses KerberosAuthBackendLdapConfig#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_period KerberosAuthBackendLdapConfig#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_policies KerberosAuthBackendLdapConfig#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_ttl KerberosAuthBackendLdapConfig#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_type KerberosAuthBackendLdapConfig#token_type}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.upndomain"></a>

- *Type:* str

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#upndomain KerberosAuthBackendLdapConfig#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.url"></a>

- *Type:* str

LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#url KerberosAuthBackendLdapConfig#url}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userattr"></a>

- *Type:* str

Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userattr KerberosAuthBackendLdapConfig#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userdn"></a>

- *Type:* str

LDAP domain to use for users (e.g., ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userdn KerberosAuthBackendLdapConfig#userdn}

---

##### `userfilter`<sup>Optional</sup> <a name="userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userfilter"></a>

- *Type:* str

Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userfilter KerberosAuthBackendLdapConfig#userfilter}

---

##### `username_as_alias`<sup>Optional</sup> <a name="username_as_alias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.usernameAsAlias"></a>

- *Type:* bool | cdktn.IResolvable

Use username as alias name. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#username_as_alias KerberosAuthBackendLdapConfig#username_as_alias}

---

##### `use_token_groups`<sup>Optional</sup> <a name="use_token_groups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.useTokenGroups"></a>

- *Type:* bool | cdktn.IResolvable

If true, use the Active Directory tokenGroups constructed attribute. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#use_token_groups KerberosAuthBackendLdapConfig#use_token_groups}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAliasMetadata">reset_alias_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAnonymousGroupSearch">reset_anonymous_group_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBinddn">reset_binddn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWo">reset_bindpass_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWoVersion">reset_bindpass_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCaseSensitiveNames">reset_case_sensitive_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWo">reset_client_tls_cert_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWoVersion">reset_client_tls_cert_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWo">reset_client_tls_key_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWoVersion">reset_client_tls_key_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetConnectionTimeout">reset_connection_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDenyNullBind">reset_deny_null_bind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDereferenceAliases">reset_dereference_aliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDiscoverdn">reset_discoverdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetEnableSamaccountnameLogin">reset_enable_samaccountname_login</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupattr">reset_groupattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupdn">reset_groupdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupfilter">reset_groupfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetInsecureTls">reset_insecure_tls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetMaxPageSize">reset_max_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetRequestTimeout">reset_request_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetStarttls">reset_starttls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMaxVersion">reset_tls_max_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMinVersion">reset_tls_min_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenType">reset_token_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUpndomain">reset_upndomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserattr">reset_userattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserdn">reset_userdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserfilter">reset_userfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUsernameAsAlias">reset_username_as_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUseTokenGroups">reset_use_token_groups</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_alias_metadata` <a name="reset_alias_metadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAliasMetadata"></a>

```python
def reset_alias_metadata() -> None
```

##### `reset_anonymous_group_search` <a name="reset_anonymous_group_search" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAnonymousGroupSearch"></a>

```python
def reset_anonymous_group_search() -> None
```

##### `reset_binddn` <a name="reset_binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBinddn"></a>

```python
def reset_binddn() -> None
```

##### `reset_bindpass_wo` <a name="reset_bindpass_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWo"></a>

```python
def reset_bindpass_wo() -> None
```

##### `reset_bindpass_wo_version` <a name="reset_bindpass_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWoVersion"></a>

```python
def reset_bindpass_wo_version() -> None
```

##### `reset_case_sensitive_names` <a name="reset_case_sensitive_names" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCaseSensitiveNames"></a>

```python
def reset_case_sensitive_names() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_client_tls_cert_wo` <a name="reset_client_tls_cert_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWo"></a>

```python
def reset_client_tls_cert_wo() -> None
```

##### `reset_client_tls_cert_wo_version` <a name="reset_client_tls_cert_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWoVersion"></a>

```python
def reset_client_tls_cert_wo_version() -> None
```

##### `reset_client_tls_key_wo` <a name="reset_client_tls_key_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWo"></a>

```python
def reset_client_tls_key_wo() -> None
```

##### `reset_client_tls_key_wo_version` <a name="reset_client_tls_key_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWoVersion"></a>

```python
def reset_client_tls_key_wo_version() -> None
```

##### `reset_connection_timeout` <a name="reset_connection_timeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetConnectionTimeout"></a>

```python
def reset_connection_timeout() -> None
```

##### `reset_deny_null_bind` <a name="reset_deny_null_bind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDenyNullBind"></a>

```python
def reset_deny_null_bind() -> None
```

##### `reset_dereference_aliases` <a name="reset_dereference_aliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDereferenceAliases"></a>

```python
def reset_dereference_aliases() -> None
```

##### `reset_discoverdn` <a name="reset_discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDiscoverdn"></a>

```python
def reset_discoverdn() -> None
```

##### `reset_enable_samaccountname_login` <a name="reset_enable_samaccountname_login" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetEnableSamaccountnameLogin"></a>

```python
def reset_enable_samaccountname_login() -> None
```

##### `reset_groupattr` <a name="reset_groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupattr"></a>

```python
def reset_groupattr() -> None
```

##### `reset_groupdn` <a name="reset_groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupdn"></a>

```python
def reset_groupdn() -> None
```

##### `reset_groupfilter` <a name="reset_groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupfilter"></a>

```python
def reset_groupfilter() -> None
```

##### `reset_insecure_tls` <a name="reset_insecure_tls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetInsecureTls"></a>

```python
def reset_insecure_tls() -> None
```

##### `reset_max_page_size` <a name="reset_max_page_size" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetMaxPageSize"></a>

```python
def reset_max_page_size() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_request_timeout` <a name="reset_request_timeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetRequestTimeout"></a>

```python
def reset_request_timeout() -> None
```

##### `reset_starttls` <a name="reset_starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetStarttls"></a>

```python
def reset_starttls() -> None
```

##### `reset_tls_max_version` <a name="reset_tls_max_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMaxVersion"></a>

```python
def reset_tls_max_version() -> None
```

##### `reset_tls_min_version` <a name="reset_tls_min_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMinVersion"></a>

```python
def reset_tls_min_version() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenType"></a>

```python
def reset_token_type() -> None
```

##### `reset_upndomain` <a name="reset_upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUpndomain"></a>

```python
def reset_upndomain() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_userattr` <a name="reset_userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserattr"></a>

```python
def reset_userattr() -> None
```

##### `reset_userdn` <a name="reset_userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserdn"></a>

```python
def reset_userdn() -> None
```

##### `reset_userfilter` <a name="reset_userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserfilter"></a>

```python
def reset_userfilter() -> None
```

##### `reset_username_as_alias` <a name="reset_username_as_alias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUsernameAsAlias"></a>

```python
def reset_username_as_alias() -> None
```

##### `reset_use_token_groups` <a name="reset_use_token_groups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUseTokenGroups"></a>

```python
def reset_use_token_groups() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_ldap_config

kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_ldap_config

kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_ldap_config

kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_ldap_config

kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KerberosAuthBackendLdapConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KerberosAuthBackendLdapConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KerberosAuthBackendLdapConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadataInput">alias_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearchInput">anonymous_group_search_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddnInput">binddn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoInput">bindpass_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersionInput">bindpass_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNamesInput">case_sensitive_names_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoInput">client_tls_cert_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersionInput">client_tls_cert_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoInput">client_tls_key_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersionInput">client_tls_key_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeoutInput">connection_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBindInput">deny_null_bind_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliasesInput">dereference_aliases_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdnInput">discoverdn_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLoginInput">enable_samaccountname_login_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattrInput">groupattr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdnInput">groupdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilterInput">groupfilter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTlsInput">insecure_tls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSizeInput">max_page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeoutInput">request_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttlsInput">starttls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersionInput">tls_max_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersionInput">tls_min_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomainInput">upndomain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattrInput">userattr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdnInput">userdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilterInput">userfilter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAliasInput">username_as_alias_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroupsInput">use_token_groups_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearch">anonymous_group_search</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddn">binddn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWo">bindpass_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersion">bindpass_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNames">case_sensitive_names</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWo">client_tls_cert_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersion">client_tls_cert_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWo">client_tls_key_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersion">client_tls_key_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBind">deny_null_bind</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliases">dereference_aliases</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdn">discoverdn</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLogin">enable_samaccountname_login</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattr">groupattr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdn">groupdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilter">groupfilter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTls">insecure_tls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSize">max_page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttls">starttls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersion">tls_max_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomain">upndomain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattr">userattr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdn">userdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilter">userfilter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAlias">username_as_alias</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroups">use_token_groups</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias_metadata_input`<sup>Optional</sup> <a name="alias_metadata_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadataInput"></a>

```python
alias_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `anonymous_group_search_input`<sup>Optional</sup> <a name="anonymous_group_search_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearchInput"></a>

```python
anonymous_group_search_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `binddn_input`<sup>Optional</sup> <a name="binddn_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddnInput"></a>

```python
binddn_input: str
```

- *Type:* str

---

##### `bindpass_wo_input`<sup>Optional</sup> <a name="bindpass_wo_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoInput"></a>

```python
bindpass_wo_input: str
```

- *Type:* str

---

##### `bindpass_wo_version_input`<sup>Optional</sup> <a name="bindpass_wo_version_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersionInput"></a>

```python
bindpass_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `case_sensitive_names_input`<sup>Optional</sup> <a name="case_sensitive_names_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNamesInput"></a>

```python
case_sensitive_names_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `client_tls_cert_wo_input`<sup>Optional</sup> <a name="client_tls_cert_wo_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoInput"></a>

```python
client_tls_cert_wo_input: str
```

- *Type:* str

---

##### `client_tls_cert_wo_version_input`<sup>Optional</sup> <a name="client_tls_cert_wo_version_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersionInput"></a>

```python
client_tls_cert_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_tls_key_wo_input`<sup>Optional</sup> <a name="client_tls_key_wo_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoInput"></a>

```python
client_tls_key_wo_input: str
```

- *Type:* str

---

##### `client_tls_key_wo_version_input`<sup>Optional</sup> <a name="client_tls_key_wo_version_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersionInput"></a>

```python
client_tls_key_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_timeout_input`<sup>Optional</sup> <a name="connection_timeout_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeoutInput"></a>

```python
connection_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deny_null_bind_input`<sup>Optional</sup> <a name="deny_null_bind_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBindInput"></a>

```python
deny_null_bind_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dereference_aliases_input`<sup>Optional</sup> <a name="dereference_aliases_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliasesInput"></a>

```python
dereference_aliases_input: str
```

- *Type:* str

---

##### `discoverdn_input`<sup>Optional</sup> <a name="discoverdn_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdnInput"></a>

```python
discoverdn_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_samaccountname_login_input`<sup>Optional</sup> <a name="enable_samaccountname_login_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLoginInput"></a>

```python
enable_samaccountname_login_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `groupattr_input`<sup>Optional</sup> <a name="groupattr_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattrInput"></a>

```python
groupattr_input: str
```

- *Type:* str

---

##### `groupdn_input`<sup>Optional</sup> <a name="groupdn_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdnInput"></a>

```python
groupdn_input: str
```

- *Type:* str

---

##### `groupfilter_input`<sup>Optional</sup> <a name="groupfilter_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilterInput"></a>

```python
groupfilter_input: str
```

- *Type:* str

---

##### `insecure_tls_input`<sup>Optional</sup> <a name="insecure_tls_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTlsInput"></a>

```python
insecure_tls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_page_size_input`<sup>Optional</sup> <a name="max_page_size_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSizeInput"></a>

```python
max_page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `request_timeout_input`<sup>Optional</sup> <a name="request_timeout_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeoutInput"></a>

```python
request_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `starttls_input`<sup>Optional</sup> <a name="starttls_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttlsInput"></a>

```python
starttls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tls_max_version_input`<sup>Optional</sup> <a name="tls_max_version_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersionInput"></a>

```python
tls_max_version_input: str
```

- *Type:* str

---

##### `tls_min_version_input`<sup>Optional</sup> <a name="tls_min_version_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersionInput"></a>

```python
tls_min_version_input: str
```

- *Type:* str

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `upndomain_input`<sup>Optional</sup> <a name="upndomain_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomainInput"></a>

```python
upndomain_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `userattr_input`<sup>Optional</sup> <a name="userattr_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattrInput"></a>

```python
userattr_input: str
```

- *Type:* str

---

##### `userdn_input`<sup>Optional</sup> <a name="userdn_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdnInput"></a>

```python
userdn_input: str
```

- *Type:* str

---

##### `userfilter_input`<sup>Optional</sup> <a name="userfilter_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilterInput"></a>

```python
userfilter_input: str
```

- *Type:* str

---

##### `username_as_alias_input`<sup>Optional</sup> <a name="username_as_alias_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAliasInput"></a>

```python
username_as_alias_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_token_groups_input`<sup>Optional</sup> <a name="use_token_groups_input" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroupsInput"></a>

```python
use_token_groups_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `alias_metadata`<sup>Required</sup> <a name="alias_metadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadata"></a>

```python
alias_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `anonymous_group_search`<sup>Required</sup> <a name="anonymous_group_search" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearch"></a>

```python
anonymous_group_search: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddn"></a>

```python
binddn: str
```

- *Type:* str

---

##### ~~`bindpass_wo`~~<sup>Required</sup> <a name="bindpass_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
bindpass_wo: str
```

- *Type:* str

---

##### `bindpass_wo_version`<sup>Required</sup> <a name="bindpass_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersion"></a>

```python
bindpass_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `case_sensitive_names`<sup>Required</sup> <a name="case_sensitive_names" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNames"></a>

```python
case_sensitive_names: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### ~~`client_tls_cert_wo`~~<sup>Required</sup> <a name="client_tls_cert_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
client_tls_cert_wo: str
```

- *Type:* str

---

##### `client_tls_cert_wo_version`<sup>Required</sup> <a name="client_tls_cert_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersion"></a>

```python
client_tls_cert_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### ~~`client_tls_key_wo`~~<sup>Required</sup> <a name="client_tls_key_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
client_tls_key_wo: str
```

- *Type:* str

---

##### `client_tls_key_wo_version`<sup>Required</sup> <a name="client_tls_key_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersion"></a>

```python
client_tls_key_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_timeout`<sup>Required</sup> <a name="connection_timeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deny_null_bind`<sup>Required</sup> <a name="deny_null_bind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBind"></a>

```python
deny_null_bind: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dereference_aliases`<sup>Required</sup> <a name="dereference_aliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliases"></a>

```python
dereference_aliases: str
```

- *Type:* str

---

##### `discoverdn`<sup>Required</sup> <a name="discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdn"></a>

```python
discoverdn: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_samaccountname_login`<sup>Required</sup> <a name="enable_samaccountname_login" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLogin"></a>

```python
enable_samaccountname_login: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `groupattr`<sup>Required</sup> <a name="groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattr"></a>

```python
groupattr: str
```

- *Type:* str

---

##### `groupdn`<sup>Required</sup> <a name="groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdn"></a>

```python
groupdn: str
```

- *Type:* str

---

##### `groupfilter`<sup>Required</sup> <a name="groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilter"></a>

```python
groupfilter: str
```

- *Type:* str

---

##### `insecure_tls`<sup>Required</sup> <a name="insecure_tls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTls"></a>

```python
insecure_tls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_page_size`<sup>Required</sup> <a name="max_page_size" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSize"></a>

```python
max_page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `request_timeout`<sup>Required</sup> <a name="request_timeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeout"></a>

```python
request_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttls"></a>

```python
starttls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tls_max_version`<sup>Required</sup> <a name="tls_max_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersion"></a>

```python
tls_max_version: str
```

- *Type:* str

---

##### `tls_min_version`<sup>Required</sup> <a name="tls_min_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomain"></a>

```python
upndomain: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattr"></a>

```python
userattr: str
```

- *Type:* str

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdn"></a>

```python
userdn: str
```

- *Type:* str

---

##### `userfilter`<sup>Required</sup> <a name="userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilter"></a>

```python
userfilter: str
```

- *Type:* str

---

##### `username_as_alias`<sup>Required</sup> <a name="username_as_alias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAlias"></a>

```python
username_as_alias: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_token_groups`<sup>Required</sup> <a name="use_token_groups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroups"></a>

```python
use_token_groups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KerberosAuthBackendLdapConfigConfig <a name="KerberosAuthBackendLdapConfigConfig" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.Initializer"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_ldap_config

kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  alias_metadata: typing.Mapping[str] = None,
  anonymous_group_search: bool | IResolvable = None,
  binddn: str = None,
  bindpass_wo: str = None,
  bindpass_wo_version: typing.Union[int, float] = None,
  case_sensitive_names: bool | IResolvable = None,
  certificate: str = None,
  client_tls_cert_wo: str = None,
  client_tls_cert_wo_version: typing.Union[int, float] = None,
  client_tls_key_wo: str = None,
  client_tls_key_wo_version: typing.Union[int, float] = None,
  connection_timeout: typing.Union[int, float] = None,
  deny_null_bind: bool | IResolvable = None,
  dereference_aliases: str = None,
  discoverdn: bool | IResolvable = None,
  enable_samaccountname_login: bool | IResolvable = None,
  groupattr: str = None,
  groupdn: str = None,
  groupfilter: str = None,
  insecure_tls: bool | IResolvable = None,
  max_page_size: typing.Union[int, float] = None,
  namespace: str = None,
  request_timeout: typing.Union[int, float] = None,
  starttls: bool | IResolvable = None,
  tls_max_version: str = None,
  tls_min_version: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: bool | IResolvable = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None,
  upndomain: str = None,
  url: str = None,
  userattr: str = None,
  userdn: str = None,
  userfilter: str = None,
  username_as_alias: bool | IResolvable = None,
  use_token_groups: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.mount">mount</a></code> | <code>str</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.anonymousGroupSearch">anonymous_group_search</a></code> | <code>bool \| cdktn.IResolvable</code> | Use anonymous binds when performing LDAP group searches. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.binddn">binddn</a></code> | <code>str</code> | Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWo">bindpass_wo</a></code> | <code>str</code> | LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWoVersion">bindpass_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.caseSensitiveNames">case_sensitive_names</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, usernames and group names are case sensitive. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.certificate">certificate</a></code> | <code>str</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWo">client_tls_cert_wo</a></code> | <code>str</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWoVersion">client_tls_cert_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWo">client_tls_key_wo</a></code> | <code>str</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWoVersion">client_tls_key_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for client TLS key updates. Must be used together with client_tls_key_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.denyNullBind">deny_null_bind</a></code> | <code>bool \| cdktn.IResolvable</code> | Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dereferenceAliases">dereference_aliases</a></code> | <code>str</code> | When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.discoverdn">discoverdn</a></code> | <code>bool \| cdktn.IResolvable</code> | Use anonymous bind to discover bind DN of a user. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.enableSamaccountnameLogin">enable_samaccountname_login</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupattr">groupattr</a></code> | <code>str</code> | LDAP attribute to follow for group membership. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupdn">groupdn</a></code> | <code>str</code> | LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupfilter">groupfilter</a></code> | <code>str</code> | Go template for querying group membership of user. Default: '(\|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.insecureTls">insecure_tls</a></code> | <code>bool \| cdktn.IResolvable</code> | Skip TLS certificate verification. Not recommended for production. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.maxPageSize">max_page_size</a></code> | <code>typing.Union[int, float]</code> | If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout, in seconds, for the connection when making requests against the server. Default: 90. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.starttls">starttls</a></code> | <code>bool \| cdktn.IResolvable</code> | Issue a StartTLS command after establishing an unencrypted connection. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMaxVersion">tls_max_version</a></code> | <code>str</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.upndomain">upndomain</a></code> | <code>str</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.url">url</a></code> | <code>str</code> | LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userattr">userattr</a></code> | <code>str</code> | Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userdn">userdn</a></code> | <code>str</code> | LDAP domain to use for users (e.g., ou=People,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userfilter">userfilter</a></code> | <code>str</code> | Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.usernameAsAlias">username_as_alias</a></code> | <code>bool \| cdktn.IResolvable</code> | Use username as alias name. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.useTokenGroups">use_token_groups</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, use the Active Directory tokenGroups constructed attribute. Default: false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#mount KerberosAuthBackendLdapConfig#mount}

---

##### `alias_metadata`<sup>Optional</sup> <a name="alias_metadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.aliasMetadata"></a>

```python
alias_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#alias_metadata KerberosAuthBackendLdapConfig#alias_metadata}

---

##### `anonymous_group_search`<sup>Optional</sup> <a name="anonymous_group_search" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.anonymousGroupSearch"></a>

```python
anonymous_group_search: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Use anonymous binds when performing LDAP group searches. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#anonymous_group_search KerberosAuthBackendLdapConfig#anonymous_group_search}

---

##### `binddn`<sup>Optional</sup> <a name="binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.binddn"></a>

```python
binddn: str
```

- *Type:* str

Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#binddn KerberosAuthBackendLdapConfig#binddn}

---

##### `bindpass_wo`<sup>Optional</sup> <a name="bindpass_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWo"></a>

```python
bindpass_wo: str
```

- *Type:* str

LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo KerberosAuthBackendLdapConfig#bindpass_wo}

---

##### `bindpass_wo_version`<sup>Optional</sup> <a name="bindpass_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWoVersion"></a>

```python
bindpass_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo_version KerberosAuthBackendLdapConfig#bindpass_wo_version}

---

##### `case_sensitive_names`<sup>Optional</sup> <a name="case_sensitive_names" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.caseSensitiveNames"></a>

```python
case_sensitive_names: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, usernames and group names are case sensitive. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#case_sensitive_names KerberosAuthBackendLdapConfig#case_sensitive_names}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#certificate KerberosAuthBackendLdapConfig#certificate}

---

##### `client_tls_cert_wo`<sup>Optional</sup> <a name="client_tls_cert_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWo"></a>

```python
client_tls_cert_wo: str
```

- *Type:* str

Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_cert_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo KerberosAuthBackendLdapConfig#client_tls_cert_wo}

---

##### `client_tls_cert_wo_version`<sup>Optional</sup> <a name="client_tls_cert_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWoVersion"></a>

```python
client_tls_cert_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo_version KerberosAuthBackendLdapConfig#client_tls_cert_wo_version}

---

##### `client_tls_key_wo`<sup>Optional</sup> <a name="client_tls_key_wo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWo"></a>

```python
client_tls_key_wo: str
```

- *Type:* str

Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_key_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo KerberosAuthBackendLdapConfig#client_tls_key_wo}

---

##### `client_tls_key_wo_version`<sup>Optional</sup> <a name="client_tls_key_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWoVersion"></a>

```python
client_tls_key_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version identifier for client TLS key updates. Must be used together with client_tls_key_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo_version KerberosAuthBackendLdapConfig#client_tls_key_wo_version}

---

##### `connection_timeout`<sup>Optional</sup> <a name="connection_timeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#connection_timeout KerberosAuthBackendLdapConfig#connection_timeout}

---

##### `deny_null_bind`<sup>Optional</sup> <a name="deny_null_bind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.denyNullBind"></a>

```python
deny_null_bind: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#deny_null_bind KerberosAuthBackendLdapConfig#deny_null_bind}

---

##### `dereference_aliases`<sup>Optional</sup> <a name="dereference_aliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dereferenceAliases"></a>

```python
dereference_aliases: str
```

- *Type:* str

When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#dereference_aliases KerberosAuthBackendLdapConfig#dereference_aliases}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.discoverdn"></a>

```python
discoverdn: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Use anonymous bind to discover bind DN of a user. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#discoverdn KerberosAuthBackendLdapConfig#discoverdn}

---

##### `enable_samaccountname_login`<sup>Optional</sup> <a name="enable_samaccountname_login" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.enableSamaccountnameLogin"></a>

```python
enable_samaccountname_login: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined.

Default: false. **Note:** Requires Vault 1.19.0+

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#enable_samaccountname_login KerberosAuthBackendLdapConfig#enable_samaccountname_login}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupattr"></a>

```python
groupattr: str
```

- *Type:* str

LDAP attribute to follow for group membership. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupattr KerberosAuthBackendLdapConfig#groupattr}

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupdn"></a>

```python
groupdn: str
```

- *Type:* str

LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupdn KerberosAuthBackendLdapConfig#groupdn}

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupfilter"></a>

```python
groupfilter: str
```

- *Type:* str

Go template for querying group membership of user. Default: '(|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupfilter KerberosAuthBackendLdapConfig#groupfilter}

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.insecureTls"></a>

```python
insecure_tls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Skip TLS certificate verification. Not recommended for production. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#insecure_tls KerberosAuthBackendLdapConfig#insecure_tls}

---

##### `max_page_size`<sup>Optional</sup> <a name="max_page_size" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.maxPageSize"></a>

```python
max_page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control.

Default: 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#max_page_size KerberosAuthBackendLdapConfig#max_page_size}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#namespace KerberosAuthBackendLdapConfig#namespace}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.requestTimeout"></a>

```python
request_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout, in seconds, for the connection when making requests against the server. Default: 90.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#request_timeout KerberosAuthBackendLdapConfig#request_timeout}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.starttls"></a>

```python
starttls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Issue a StartTLS command after establishing an unencrypted connection. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#starttls KerberosAuthBackendLdapConfig#starttls}

---

##### `tls_max_version`<sup>Optional</sup> <a name="tls_max_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMaxVersion"></a>

```python
tls_max_version: str
```

- *Type:* str

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_max_version KerberosAuthBackendLdapConfig#tls_max_version}

---

##### `tls_min_version`<sup>Optional</sup> <a name="tls_min_version" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_min_version KerberosAuthBackendLdapConfig#tls_min_version}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_bound_cidrs KerberosAuthBackendLdapConfig#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_explicit_max_ttl KerberosAuthBackendLdapConfig#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_max_ttl KerberosAuthBackendLdapConfig#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_no_default_policy KerberosAuthBackendLdapConfig#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_num_uses KerberosAuthBackendLdapConfig#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_period KerberosAuthBackendLdapConfig#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_policies KerberosAuthBackendLdapConfig#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_ttl KerberosAuthBackendLdapConfig#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_type KerberosAuthBackendLdapConfig#token_type}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.upndomain"></a>

```python
upndomain: str
```

- *Type:* str

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#upndomain KerberosAuthBackendLdapConfig#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.url"></a>

```python
url: str
```

- *Type:* str

LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#url KerberosAuthBackendLdapConfig#url}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userattr"></a>

```python
userattr: str
```

- *Type:* str

Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userattr KerberosAuthBackendLdapConfig#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userdn"></a>

```python
userdn: str
```

- *Type:* str

LDAP domain to use for users (e.g., ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userdn KerberosAuthBackendLdapConfig#userdn}

---

##### `userfilter`<sup>Optional</sup> <a name="userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userfilter"></a>

```python
userfilter: str
```

- *Type:* str

Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userfilter KerberosAuthBackendLdapConfig#userfilter}

---

##### `username_as_alias`<sup>Optional</sup> <a name="username_as_alias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.usernameAsAlias"></a>

```python
username_as_alias: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Use username as alias name. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#username_as_alias KerberosAuthBackendLdapConfig#username_as_alias}

---

##### `use_token_groups`<sup>Optional</sup> <a name="use_token_groups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.useTokenGroups"></a>

```python
use_token_groups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, use the Active Directory tokenGroups constructed attribute. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#use_token_groups KerberosAuthBackendLdapConfig#use_token_groups}

---



