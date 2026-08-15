# `kerberosAuthBackendLdapConfig` Submodule <a name="`kerberosAuthBackendLdapConfig` Submodule" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KerberosAuthBackendLdapConfig <a name="KerberosAuthBackendLdapConfig" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config vault_kerberos_auth_backend_ldap_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_ldap_config.KerberosAuthBackendLdapConfig;

KerberosAuthBackendLdapConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
//  .aliasMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .anonymousGroupSearch(java.lang.Boolean|IResolvable)
//  .binddn(java.lang.String)
//  .bindpassWo(java.lang.String)
//  .bindpassWoVersion(java.lang.Number)
//  .caseSensitiveNames(java.lang.Boolean|IResolvable)
//  .certificate(java.lang.String)
//  .clientTlsCertWo(java.lang.String)
//  .clientTlsCertWoVersion(java.lang.Number)
//  .clientTlsKeyWo(java.lang.String)
//  .clientTlsKeyWoVersion(java.lang.Number)
//  .connectionTimeout(java.lang.Number)
//  .denyNullBind(java.lang.Boolean|IResolvable)
//  .dereferenceAliases(java.lang.String)
//  .discoverdn(java.lang.Boolean|IResolvable)
//  .enableSamaccountnameLogin(java.lang.Boolean|IResolvable)
//  .groupattr(java.lang.String)
//  .groupdn(java.lang.String)
//  .groupfilter(java.lang.String)
//  .insecureTls(java.lang.Boolean|IResolvable)
//  .maxPageSize(java.lang.Number)
//  .namespace(java.lang.String)
//  .requestTimeout(java.lang.Number)
//  .starttls(java.lang.Boolean|IResolvable)
//  .tlsMaxVersion(java.lang.String)
//  .tlsMinVersion(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
//  .upndomain(java.lang.String)
//  .url(java.lang.String)
//  .userattr(java.lang.String)
//  .userdn(java.lang.String)
//  .userfilter(java.lang.String)
//  .usernameAsAlias(java.lang.Boolean|IResolvable)
//  .useTokenGroups(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use anonymous binds when performing LDAP group searches. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.binddn">binddn</a></code> | <code>java.lang.String</code> | Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.bindpassWo">bindpassWo</a></code> | <code>java.lang.String</code> | LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.bindpassWoVersion">bindpassWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, usernames and group names are case sensitive. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsCertWo">clientTlsCertWo</a></code> | <code>java.lang.String</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsCertWoVersion">clientTlsCertWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsKeyWo">clientTlsKeyWo</a></code> | <code>java.lang.String</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsKeyWoVersion">clientTlsKeyWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for client TLS key updates. Must be used together with client_tls_key_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.denyNullBind">denyNullBind</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.dereferenceAliases">dereferenceAliases</a></code> | <code>java.lang.String</code> | When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.discoverdn">discoverdn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use anonymous bind to discover bind DN of a user. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.enableSamaccountnameLogin">enableSamaccountnameLogin</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupattr">groupattr</a></code> | <code>java.lang.String</code> | LDAP attribute to follow for group membership. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupdn">groupdn</a></code> | <code>java.lang.String</code> | LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupfilter">groupfilter</a></code> | <code>java.lang.String</code> | Go template for querying group membership of user. Default: '(\|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Skip TLS certificate verification. Not recommended for production. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.maxPageSize">maxPageSize</a></code> | <code>java.lang.Number</code> | If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, for the connection when making requests against the server. Default: 90. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.starttls">starttls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Issue a StartTLS command after establishing an unencrypted connection. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.upndomain">upndomain</a></code> | <code>java.lang.String</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userattr">userattr</a></code> | <code>java.lang.String</code> | Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userdn">userdn</a></code> | <code>java.lang.String</code> | LDAP domain to use for users (e.g., ou=People,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userfilter">userfilter</a></code> | <code>java.lang.String</code> | Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.usernameAsAlias">usernameAsAlias</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use username as alias name. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, use the Active Directory tokenGroups constructed attribute. Default: false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#mount KerberosAuthBackendLdapConfig#mount}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.aliasMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#alias_metadata KerberosAuthBackendLdapConfig#alias_metadata}

---

##### `anonymousGroupSearch`<sup>Optional</sup> <a name="anonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.anonymousGroupSearch"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use anonymous binds when performing LDAP group searches. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#anonymous_group_search KerberosAuthBackendLdapConfig#anonymous_group_search}

---

##### `binddn`<sup>Optional</sup> <a name="binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.binddn"></a>

- *Type:* java.lang.String

Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#binddn KerberosAuthBackendLdapConfig#binddn}

---

##### `bindpassWo`<sup>Optional</sup> <a name="bindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.bindpassWo"></a>

- *Type:* java.lang.String

LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo KerberosAuthBackendLdapConfig#bindpass_wo}

---

##### `bindpassWoVersion`<sup>Optional</sup> <a name="bindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.bindpassWoVersion"></a>

- *Type:* java.lang.Number

Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo_version KerberosAuthBackendLdapConfig#bindpass_wo_version}

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.caseSensitiveNames"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, usernames and group names are case sensitive. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#case_sensitive_names KerberosAuthBackendLdapConfig#case_sensitive_names}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#certificate KerberosAuthBackendLdapConfig#certificate}

---

##### `clientTlsCertWo`<sup>Optional</sup> <a name="clientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsCertWo"></a>

- *Type:* java.lang.String

Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_cert_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo KerberosAuthBackendLdapConfig#client_tls_cert_wo}

---

##### `clientTlsCertWoVersion`<sup>Optional</sup> <a name="clientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsCertWoVersion"></a>

- *Type:* java.lang.Number

Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo_version KerberosAuthBackendLdapConfig#client_tls_cert_wo_version}

---

##### `clientTlsKeyWo`<sup>Optional</sup> <a name="clientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsKeyWo"></a>

- *Type:* java.lang.String

Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_key_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo KerberosAuthBackendLdapConfig#client_tls_key_wo}

---

##### `clientTlsKeyWoVersion`<sup>Optional</sup> <a name="clientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.clientTlsKeyWoVersion"></a>

- *Type:* java.lang.Number

Version identifier for client TLS key updates. Must be used together with client_tls_key_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo_version KerberosAuthBackendLdapConfig#client_tls_key_wo_version}

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.connectionTimeout"></a>

- *Type:* java.lang.Number

Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#connection_timeout KerberosAuthBackendLdapConfig#connection_timeout}

---

##### `denyNullBind`<sup>Optional</sup> <a name="denyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.denyNullBind"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#deny_null_bind KerberosAuthBackendLdapConfig#deny_null_bind}

---

##### `dereferenceAliases`<sup>Optional</sup> <a name="dereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.dereferenceAliases"></a>

- *Type:* java.lang.String

When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#dereference_aliases KerberosAuthBackendLdapConfig#dereference_aliases}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.discoverdn"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use anonymous bind to discover bind DN of a user. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#discoverdn KerberosAuthBackendLdapConfig#discoverdn}

---

##### `enableSamaccountnameLogin`<sup>Optional</sup> <a name="enableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.enableSamaccountnameLogin"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined.

Default: false. **Note:** Requires Vault 1.19.0+

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#enable_samaccountname_login KerberosAuthBackendLdapConfig#enable_samaccountname_login}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupattr"></a>

- *Type:* java.lang.String

LDAP attribute to follow for group membership. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupattr KerberosAuthBackendLdapConfig#groupattr}

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupdn"></a>

- *Type:* java.lang.String

LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupdn KerberosAuthBackendLdapConfig#groupdn}

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.groupfilter"></a>

- *Type:* java.lang.String

Go template for querying group membership of user. Default: '(|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupfilter KerberosAuthBackendLdapConfig#groupfilter}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.insecureTls"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Skip TLS certificate verification. Not recommended for production. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#insecure_tls KerberosAuthBackendLdapConfig#insecure_tls}

---

##### `maxPageSize`<sup>Optional</sup> <a name="maxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.maxPageSize"></a>

- *Type:* java.lang.Number

If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control.

Default: 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#max_page_size KerberosAuthBackendLdapConfig#max_page_size}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#namespace KerberosAuthBackendLdapConfig#namespace}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.requestTimeout"></a>

- *Type:* java.lang.Number

Timeout, in seconds, for the connection when making requests against the server. Default: 90.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#request_timeout KerberosAuthBackendLdapConfig#request_timeout}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.starttls"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Issue a StartTLS command after establishing an unencrypted connection. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#starttls KerberosAuthBackendLdapConfig#starttls}

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tlsMaxVersion"></a>

- *Type:* java.lang.String

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_max_version KerberosAuthBackendLdapConfig#tls_max_version}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tlsMinVersion"></a>

- *Type:* java.lang.String

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_min_version KerberosAuthBackendLdapConfig#tls_min_version}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_bound_cidrs KerberosAuthBackendLdapConfig#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_explicit_max_ttl KerberosAuthBackendLdapConfig#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_max_ttl KerberosAuthBackendLdapConfig#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_no_default_policy KerberosAuthBackendLdapConfig#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_num_uses KerberosAuthBackendLdapConfig#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_period KerberosAuthBackendLdapConfig#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_policies KerberosAuthBackendLdapConfig#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_ttl KerberosAuthBackendLdapConfig#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_type KerberosAuthBackendLdapConfig#token_type}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.upndomain"></a>

- *Type:* java.lang.String

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#upndomain KerberosAuthBackendLdapConfig#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.url"></a>

- *Type:* java.lang.String

LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#url KerberosAuthBackendLdapConfig#url}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userattr"></a>

- *Type:* java.lang.String

Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userattr KerberosAuthBackendLdapConfig#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userdn"></a>

- *Type:* java.lang.String

LDAP domain to use for users (e.g., ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userdn KerberosAuthBackendLdapConfig#userdn}

---

##### `userfilter`<sup>Optional</sup> <a name="userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.userfilter"></a>

- *Type:* java.lang.String

Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userfilter KerberosAuthBackendLdapConfig#userfilter}

---

##### `usernameAsAlias`<sup>Optional</sup> <a name="usernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.usernameAsAlias"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use username as alias name. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#username_as_alias KerberosAuthBackendLdapConfig#username_as_alias}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.useTokenGroups"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, use the Active Directory tokenGroups constructed attribute. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#use_token_groups KerberosAuthBackendLdapConfig#use_token_groups}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAnonymousGroupSearch">resetAnonymousGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBinddn">resetBinddn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWo">resetBindpassWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWoVersion">resetBindpassWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCaseSensitiveNames">resetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWo">resetClientTlsCertWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWoVersion">resetClientTlsCertWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWo">resetClientTlsKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWoVersion">resetClientTlsKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetConnectionTimeout">resetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDenyNullBind">resetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDereferenceAliases">resetDereferenceAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDiscoverdn">resetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetEnableSamaccountnameLogin">resetEnableSamaccountnameLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupattr">resetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupdn">resetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupfilter">resetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetMaxPageSize">resetMaxPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetStarttls">resetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMaxVersion">resetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUpndomain">resetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserattr">resetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserdn">resetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserfilter">resetUserfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUsernameAsAlias">resetUsernameAsAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUseTokenGroups">resetUseTokenGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAliasMetadata"></a>

```java
public void resetAliasMetadata()
```

##### `resetAnonymousGroupSearch` <a name="resetAnonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAnonymousGroupSearch"></a>

```java
public void resetAnonymousGroupSearch()
```

##### `resetBinddn` <a name="resetBinddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBinddn"></a>

```java
public void resetBinddn()
```

##### `resetBindpassWo` <a name="resetBindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWo"></a>

```java
public void resetBindpassWo()
```

##### `resetBindpassWoVersion` <a name="resetBindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWoVersion"></a>

```java
public void resetBindpassWoVersion()
```

##### `resetCaseSensitiveNames` <a name="resetCaseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCaseSensitiveNames"></a>

```java
public void resetCaseSensitiveNames()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetClientTlsCertWo` <a name="resetClientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWo"></a>

```java
public void resetClientTlsCertWo()
```

##### `resetClientTlsCertWoVersion` <a name="resetClientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWoVersion"></a>

```java
public void resetClientTlsCertWoVersion()
```

##### `resetClientTlsKeyWo` <a name="resetClientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWo"></a>

```java
public void resetClientTlsKeyWo()
```

##### `resetClientTlsKeyWoVersion` <a name="resetClientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWoVersion"></a>

```java
public void resetClientTlsKeyWoVersion()
```

##### `resetConnectionTimeout` <a name="resetConnectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetConnectionTimeout"></a>

```java
public void resetConnectionTimeout()
```

##### `resetDenyNullBind` <a name="resetDenyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDenyNullBind"></a>

```java
public void resetDenyNullBind()
```

##### `resetDereferenceAliases` <a name="resetDereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDereferenceAliases"></a>

```java
public void resetDereferenceAliases()
```

##### `resetDiscoverdn` <a name="resetDiscoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDiscoverdn"></a>

```java
public void resetDiscoverdn()
```

##### `resetEnableSamaccountnameLogin` <a name="resetEnableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetEnableSamaccountnameLogin"></a>

```java
public void resetEnableSamaccountnameLogin()
```

##### `resetGroupattr` <a name="resetGroupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupattr"></a>

```java
public void resetGroupattr()
```

##### `resetGroupdn` <a name="resetGroupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupdn"></a>

```java
public void resetGroupdn()
```

##### `resetGroupfilter` <a name="resetGroupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupfilter"></a>

```java
public void resetGroupfilter()
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetInsecureTls"></a>

```java
public void resetInsecureTls()
```

##### `resetMaxPageSize` <a name="resetMaxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetMaxPageSize"></a>

```java
public void resetMaxPageSize()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetRequestTimeout"></a>

```java
public void resetRequestTimeout()
```

##### `resetStarttls` <a name="resetStarttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetStarttls"></a>

```java
public void resetStarttls()
```

##### `resetTlsMaxVersion` <a name="resetTlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMaxVersion"></a>

```java
public void resetTlsMaxVersion()
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMinVersion"></a>

```java
public void resetTlsMinVersion()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenType"></a>

```java
public void resetTokenType()
```

##### `resetUpndomain` <a name="resetUpndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUpndomain"></a>

```java
public void resetUpndomain()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUserattr` <a name="resetUserattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserattr"></a>

```java
public void resetUserattr()
```

##### `resetUserdn` <a name="resetUserdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserdn"></a>

```java
public void resetUserdn()
```

##### `resetUserfilter` <a name="resetUserfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserfilter"></a>

```java
public void resetUserfilter()
```

##### `resetUsernameAsAlias` <a name="resetUsernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUsernameAsAlias"></a>

```java
public void resetUsernameAsAlias()
```

##### `resetUseTokenGroups` <a name="resetUseTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUseTokenGroups"></a>

```java
public void resetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_ldap_config.KerberosAuthBackendLdapConfig;

KerberosAuthBackendLdapConfig.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_ldap_config.KerberosAuthBackendLdapConfig;

KerberosAuthBackendLdapConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_ldap_config.KerberosAuthBackendLdapConfig;

KerberosAuthBackendLdapConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_ldap_config.KerberosAuthBackendLdapConfig;

KerberosAuthBackendLdapConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KerberosAuthBackendLdapConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KerberosAuthBackendLdapConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KerberosAuthBackendLdapConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KerberosAuthBackendLdapConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearchInput">anonymousGroupSearchInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddnInput">binddnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoInput">bindpassWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersionInput">bindpassWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNamesInput">caseSensitiveNamesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoInput">clientTlsCertWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersionInput">clientTlsCertWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoInput">clientTlsKeyWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersionInput">clientTlsKeyWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeoutInput">connectionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBindInput">denyNullBindInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliasesInput">dereferenceAliasesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdnInput">discoverdnInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLoginInput">enableSamaccountnameLoginInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattrInput">groupattrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdnInput">groupdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilterInput">groupfilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTlsInput">insecureTlsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSizeInput">maxPageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttlsInput">starttlsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersionInput">tlsMaxVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomainInput">upndomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattrInput">userattrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdnInput">userdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilterInput">userfilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAliasInput">usernameAsAliasInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroupsInput">useTokenGroupsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddn">binddn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWo">bindpassWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersion">bindpassWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWo">clientTlsCertWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersion">clientTlsCertWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWo">clientTlsKeyWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersion">clientTlsKeyWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBind">denyNullBind</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliases">dereferenceAliases</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdn">discoverdn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLogin">enableSamaccountnameLogin</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattr">groupattr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdn">groupdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilter">groupfilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSize">maxPageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttls">starttls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomain">upndomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattr">userattr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdn">userdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilter">userfilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAlias">usernameAsAlias</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `anonymousGroupSearchInput`<sup>Optional</sup> <a name="anonymousGroupSearchInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearchInput"></a>

```java
public java.lang.Boolean|IResolvable getAnonymousGroupSearchInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `binddnInput`<sup>Optional</sup> <a name="binddnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddnInput"></a>

```java
public java.lang.String getBinddnInput();
```

- *Type:* java.lang.String

---

##### `bindpassWoInput`<sup>Optional</sup> <a name="bindpassWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoInput"></a>

```java
public java.lang.String getBindpassWoInput();
```

- *Type:* java.lang.String

---

##### `bindpassWoVersionInput`<sup>Optional</sup> <a name="bindpassWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersionInput"></a>

```java
public java.lang.Number getBindpassWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `caseSensitiveNamesInput`<sup>Optional</sup> <a name="caseSensitiveNamesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNamesInput"></a>

```java
public java.lang.Boolean|IResolvable getCaseSensitiveNamesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientTlsCertWoInput`<sup>Optional</sup> <a name="clientTlsCertWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoInput"></a>

```java
public java.lang.String getClientTlsCertWoInput();
```

- *Type:* java.lang.String

---

##### `clientTlsCertWoVersionInput`<sup>Optional</sup> <a name="clientTlsCertWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersionInput"></a>

```java
public java.lang.Number getClientTlsCertWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `clientTlsKeyWoInput`<sup>Optional</sup> <a name="clientTlsKeyWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoInput"></a>

```java
public java.lang.String getClientTlsKeyWoInput();
```

- *Type:* java.lang.String

---

##### `clientTlsKeyWoVersionInput`<sup>Optional</sup> <a name="clientTlsKeyWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersionInput"></a>

```java
public java.lang.Number getClientTlsKeyWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `connectionTimeoutInput`<sup>Optional</sup> <a name="connectionTimeoutInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeoutInput"></a>

```java
public java.lang.Number getConnectionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `denyNullBindInput`<sup>Optional</sup> <a name="denyNullBindInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBindInput"></a>

```java
public java.lang.Boolean|IResolvable getDenyNullBindInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dereferenceAliasesInput`<sup>Optional</sup> <a name="dereferenceAliasesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliasesInput"></a>

```java
public java.lang.String getDereferenceAliasesInput();
```

- *Type:* java.lang.String

---

##### `discoverdnInput`<sup>Optional</sup> <a name="discoverdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdnInput"></a>

```java
public java.lang.Boolean|IResolvable getDiscoverdnInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSamaccountnameLoginInput`<sup>Optional</sup> <a name="enableSamaccountnameLoginInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLoginInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSamaccountnameLoginInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupattrInput`<sup>Optional</sup> <a name="groupattrInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattrInput"></a>

```java
public java.lang.String getGroupattrInput();
```

- *Type:* java.lang.String

---

##### `groupdnInput`<sup>Optional</sup> <a name="groupdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdnInput"></a>

```java
public java.lang.String getGroupdnInput();
```

- *Type:* java.lang.String

---

##### `groupfilterInput`<sup>Optional</sup> <a name="groupfilterInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilterInput"></a>

```java
public java.lang.String getGroupfilterInput();
```

- *Type:* java.lang.String

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTlsInput"></a>

```java
public java.lang.Boolean|IResolvable getInsecureTlsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxPageSizeInput`<sup>Optional</sup> <a name="maxPageSizeInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSizeInput"></a>

```java
public java.lang.Number getMaxPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeoutInput"></a>

```java
public java.lang.Number getRequestTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `starttlsInput`<sup>Optional</sup> <a name="starttlsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttlsInput"></a>

```java
public java.lang.Boolean|IResolvable getStarttlsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tlsMaxVersionInput`<sup>Optional</sup> <a name="tlsMaxVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersionInput"></a>

```java
public java.lang.String getTlsMaxVersionInput();
```

- *Type:* java.lang.String

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersionInput"></a>

```java
public java.lang.String getTlsMinVersionInput();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `upndomainInput`<sup>Optional</sup> <a name="upndomainInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomainInput"></a>

```java
public java.lang.String getUpndomainInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `userattrInput`<sup>Optional</sup> <a name="userattrInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattrInput"></a>

```java
public java.lang.String getUserattrInput();
```

- *Type:* java.lang.String

---

##### `userdnInput`<sup>Optional</sup> <a name="userdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdnInput"></a>

```java
public java.lang.String getUserdnInput();
```

- *Type:* java.lang.String

---

##### `userfilterInput`<sup>Optional</sup> <a name="userfilterInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilterInput"></a>

```java
public java.lang.String getUserfilterInput();
```

- *Type:* java.lang.String

---

##### `usernameAsAliasInput`<sup>Optional</sup> <a name="usernameAsAliasInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAliasInput"></a>

```java
public java.lang.Boolean|IResolvable getUsernameAsAliasInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTokenGroupsInput`<sup>Optional</sup> <a name="useTokenGroupsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroupsInput"></a>

```java
public java.lang.Boolean|IResolvable getUseTokenGroupsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `anonymousGroupSearch`<sup>Required</sup> <a name="anonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearch"></a>

```java
public java.lang.Boolean|IResolvable getAnonymousGroupSearch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddn"></a>

```java
public java.lang.String getBinddn();
```

- *Type:* java.lang.String

---

##### ~~`bindpassWo`~~<sup>Required</sup> <a name="bindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getBindpassWo();
```

- *Type:* java.lang.String

---

##### `bindpassWoVersion`<sup>Required</sup> <a name="bindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersion"></a>

```java
public java.lang.Number getBindpassWoVersion();
```

- *Type:* java.lang.Number

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="caseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNames"></a>

```java
public java.lang.Boolean|IResolvable getCaseSensitiveNames();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### ~~`clientTlsCertWo`~~<sup>Required</sup> <a name="clientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getClientTlsCertWo();
```

- *Type:* java.lang.String

---

##### `clientTlsCertWoVersion`<sup>Required</sup> <a name="clientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersion"></a>

```java
public java.lang.Number getClientTlsCertWoVersion();
```

- *Type:* java.lang.Number

---

##### ~~`clientTlsKeyWo`~~<sup>Required</sup> <a name="clientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getClientTlsKeyWo();
```

- *Type:* java.lang.String

---

##### `clientTlsKeyWoVersion`<sup>Required</sup> <a name="clientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersion"></a>

```java
public java.lang.Number getClientTlsKeyWoVersion();
```

- *Type:* java.lang.Number

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeout"></a>

```java
public java.lang.Number getConnectionTimeout();
```

- *Type:* java.lang.Number

---

##### `denyNullBind`<sup>Required</sup> <a name="denyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBind"></a>

```java
public java.lang.Boolean|IResolvable getDenyNullBind();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dereferenceAliases`<sup>Required</sup> <a name="dereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliases"></a>

```java
public java.lang.String getDereferenceAliases();
```

- *Type:* java.lang.String

---

##### `discoverdn`<sup>Required</sup> <a name="discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdn"></a>

```java
public java.lang.Boolean|IResolvable getDiscoverdn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSamaccountnameLogin`<sup>Required</sup> <a name="enableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLogin"></a>

```java
public java.lang.Boolean|IResolvable getEnableSamaccountnameLogin();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupattr`<sup>Required</sup> <a name="groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattr"></a>

```java
public java.lang.String getGroupattr();
```

- *Type:* java.lang.String

---

##### `groupdn`<sup>Required</sup> <a name="groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdn"></a>

```java
public java.lang.String getGroupdn();
```

- *Type:* java.lang.String

---

##### `groupfilter`<sup>Required</sup> <a name="groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilter"></a>

```java
public java.lang.String getGroupfilter();
```

- *Type:* java.lang.String

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTls"></a>

```java
public java.lang.Boolean|IResolvable getInsecureTls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxPageSize`<sup>Required</sup> <a name="maxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSize"></a>

```java
public java.lang.Number getMaxPageSize();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeout"></a>

```java
public java.lang.Number getRequestTimeout();
```

- *Type:* java.lang.Number

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttls"></a>

```java
public java.lang.Boolean|IResolvable getStarttls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tlsMaxVersion`<sup>Required</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersion"></a>

```java
public java.lang.String getTlsMaxVersion();
```

- *Type:* java.lang.String

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomain"></a>

```java
public java.lang.String getUpndomain();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattr"></a>

```java
public java.lang.String getUserattr();
```

- *Type:* java.lang.String

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdn"></a>

```java
public java.lang.String getUserdn();
```

- *Type:* java.lang.String

---

##### `userfilter`<sup>Required</sup> <a name="userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilter"></a>

```java
public java.lang.String getUserfilter();
```

- *Type:* java.lang.String

---

##### `usernameAsAlias`<sup>Required</sup> <a name="usernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAlias"></a>

```java
public java.lang.Boolean|IResolvable getUsernameAsAlias();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTokenGroups`<sup>Required</sup> <a name="useTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroups"></a>

```java
public java.lang.Boolean|IResolvable getUseTokenGroups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KerberosAuthBackendLdapConfigConfig <a name="KerberosAuthBackendLdapConfigConfig" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_ldap_config.KerberosAuthBackendLdapConfigConfig;

KerberosAuthBackendLdapConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
//  .aliasMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .anonymousGroupSearch(java.lang.Boolean|IResolvable)
//  .binddn(java.lang.String)
//  .bindpassWo(java.lang.String)
//  .bindpassWoVersion(java.lang.Number)
//  .caseSensitiveNames(java.lang.Boolean|IResolvable)
//  .certificate(java.lang.String)
//  .clientTlsCertWo(java.lang.String)
//  .clientTlsCertWoVersion(java.lang.Number)
//  .clientTlsKeyWo(java.lang.String)
//  .clientTlsKeyWoVersion(java.lang.Number)
//  .connectionTimeout(java.lang.Number)
//  .denyNullBind(java.lang.Boolean|IResolvable)
//  .dereferenceAliases(java.lang.String)
//  .discoverdn(java.lang.Boolean|IResolvable)
//  .enableSamaccountnameLogin(java.lang.Boolean|IResolvable)
//  .groupattr(java.lang.String)
//  .groupdn(java.lang.String)
//  .groupfilter(java.lang.String)
//  .insecureTls(java.lang.Boolean|IResolvable)
//  .maxPageSize(java.lang.Number)
//  .namespace(java.lang.String)
//  .requestTimeout(java.lang.Number)
//  .starttls(java.lang.Boolean|IResolvable)
//  .tlsMaxVersion(java.lang.String)
//  .tlsMinVersion(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
//  .upndomain(java.lang.String)
//  .url(java.lang.String)
//  .userattr(java.lang.String)
//  .userdn(java.lang.String)
//  .userfilter(java.lang.String)
//  .usernameAsAlias(java.lang.Boolean|IResolvable)
//  .useTokenGroups(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use anonymous binds when performing LDAP group searches. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.binddn">binddn</a></code> | <code>java.lang.String</code> | Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWo">bindpassWo</a></code> | <code>java.lang.String</code> | LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWoVersion">bindpassWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, usernames and group names are case sensitive. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWo">clientTlsCertWo</a></code> | <code>java.lang.String</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWoVersion">clientTlsCertWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWo">clientTlsKeyWo</a></code> | <code>java.lang.String</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWoVersion">clientTlsKeyWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for client TLS key updates. Must be used together with client_tls_key_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.denyNullBind">denyNullBind</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dereferenceAliases">dereferenceAliases</a></code> | <code>java.lang.String</code> | When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.discoverdn">discoverdn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use anonymous bind to discover bind DN of a user. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.enableSamaccountnameLogin">enableSamaccountnameLogin</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupattr">groupattr</a></code> | <code>java.lang.String</code> | LDAP attribute to follow for group membership. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupdn">groupdn</a></code> | <code>java.lang.String</code> | LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupfilter">groupfilter</a></code> | <code>java.lang.String</code> | Go template for querying group membership of user. Default: '(\|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Skip TLS certificate verification. Not recommended for production. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.maxPageSize">maxPageSize</a></code> | <code>java.lang.Number</code> | If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, for the connection when making requests against the server. Default: 90. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.starttls">starttls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Issue a StartTLS command after establishing an unencrypted connection. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.upndomain">upndomain</a></code> | <code>java.lang.String</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.url">url</a></code> | <code>java.lang.String</code> | LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userattr">userattr</a></code> | <code>java.lang.String</code> | Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userdn">userdn</a></code> | <code>java.lang.String</code> | LDAP domain to use for users (e.g., ou=People,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userfilter">userfilter</a></code> | <code>java.lang.String</code> | Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.usernameAsAlias">usernameAsAlias</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use username as alias name. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, use the Active Directory tokenGroups constructed attribute. Default: false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#mount KerberosAuthBackendLdapConfig#mount}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.aliasMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#alias_metadata KerberosAuthBackendLdapConfig#alias_metadata}

---

##### `anonymousGroupSearch`<sup>Optional</sup> <a name="anonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.anonymousGroupSearch"></a>

```java
public java.lang.Boolean|IResolvable getAnonymousGroupSearch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use anonymous binds when performing LDAP group searches. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#anonymous_group_search KerberosAuthBackendLdapConfig#anonymous_group_search}

---

##### `binddn`<sup>Optional</sup> <a name="binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.binddn"></a>

```java
public java.lang.String getBinddn();
```

- *Type:* java.lang.String

Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#binddn KerberosAuthBackendLdapConfig#binddn}

---

##### `bindpassWo`<sup>Optional</sup> <a name="bindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWo"></a>

```java
public java.lang.String getBindpassWo();
```

- *Type:* java.lang.String

LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo KerberosAuthBackendLdapConfig#bindpass_wo}

---

##### `bindpassWoVersion`<sup>Optional</sup> <a name="bindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWoVersion"></a>

```java
public java.lang.Number getBindpassWoVersion();
```

- *Type:* java.lang.Number

Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo_version KerberosAuthBackendLdapConfig#bindpass_wo_version}

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.caseSensitiveNames"></a>

```java
public java.lang.Boolean|IResolvable getCaseSensitiveNames();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, usernames and group names are case sensitive. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#case_sensitive_names KerberosAuthBackendLdapConfig#case_sensitive_names}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#certificate KerberosAuthBackendLdapConfig#certificate}

---

##### `clientTlsCertWo`<sup>Optional</sup> <a name="clientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWo"></a>

```java
public java.lang.String getClientTlsCertWo();
```

- *Type:* java.lang.String

Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_cert_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo KerberosAuthBackendLdapConfig#client_tls_cert_wo}

---

##### `clientTlsCertWoVersion`<sup>Optional</sup> <a name="clientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWoVersion"></a>

```java
public java.lang.Number getClientTlsCertWoVersion();
```

- *Type:* java.lang.Number

Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo_version KerberosAuthBackendLdapConfig#client_tls_cert_wo_version}

---

##### `clientTlsKeyWo`<sup>Optional</sup> <a name="clientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWo"></a>

```java
public java.lang.String getClientTlsKeyWo();
```

- *Type:* java.lang.String

Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_key_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo KerberosAuthBackendLdapConfig#client_tls_key_wo}

---

##### `clientTlsKeyWoVersion`<sup>Optional</sup> <a name="clientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWoVersion"></a>

```java
public java.lang.Number getClientTlsKeyWoVersion();
```

- *Type:* java.lang.Number

Version identifier for client TLS key updates. Must be used together with client_tls_key_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo_version KerberosAuthBackendLdapConfig#client_tls_key_wo_version}

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connectionTimeout"></a>

```java
public java.lang.Number getConnectionTimeout();
```

- *Type:* java.lang.Number

Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#connection_timeout KerberosAuthBackendLdapConfig#connection_timeout}

---

##### `denyNullBind`<sup>Optional</sup> <a name="denyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.denyNullBind"></a>

```java
public java.lang.Boolean|IResolvable getDenyNullBind();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#deny_null_bind KerberosAuthBackendLdapConfig#deny_null_bind}

---

##### `dereferenceAliases`<sup>Optional</sup> <a name="dereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dereferenceAliases"></a>

```java
public java.lang.String getDereferenceAliases();
```

- *Type:* java.lang.String

When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#dereference_aliases KerberosAuthBackendLdapConfig#dereference_aliases}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.discoverdn"></a>

```java
public java.lang.Boolean|IResolvable getDiscoverdn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use anonymous bind to discover bind DN of a user. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#discoverdn KerberosAuthBackendLdapConfig#discoverdn}

---

##### `enableSamaccountnameLogin`<sup>Optional</sup> <a name="enableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.enableSamaccountnameLogin"></a>

```java
public java.lang.Boolean|IResolvable getEnableSamaccountnameLogin();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined.

Default: false. **Note:** Requires Vault 1.19.0+

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#enable_samaccountname_login KerberosAuthBackendLdapConfig#enable_samaccountname_login}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupattr"></a>

```java
public java.lang.String getGroupattr();
```

- *Type:* java.lang.String

LDAP attribute to follow for group membership. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupattr KerberosAuthBackendLdapConfig#groupattr}

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupdn"></a>

```java
public java.lang.String getGroupdn();
```

- *Type:* java.lang.String

LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupdn KerberosAuthBackendLdapConfig#groupdn}

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupfilter"></a>

```java
public java.lang.String getGroupfilter();
```

- *Type:* java.lang.String

Go template for querying group membership of user. Default: '(|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupfilter KerberosAuthBackendLdapConfig#groupfilter}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.insecureTls"></a>

```java
public java.lang.Boolean|IResolvable getInsecureTls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Skip TLS certificate verification. Not recommended for production. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#insecure_tls KerberosAuthBackendLdapConfig#insecure_tls}

---

##### `maxPageSize`<sup>Optional</sup> <a name="maxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.maxPageSize"></a>

```java
public java.lang.Number getMaxPageSize();
```

- *Type:* java.lang.Number

If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control.

Default: 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#max_page_size KerberosAuthBackendLdapConfig#max_page_size}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#namespace KerberosAuthBackendLdapConfig#namespace}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.requestTimeout"></a>

```java
public java.lang.Number getRequestTimeout();
```

- *Type:* java.lang.Number

Timeout, in seconds, for the connection when making requests against the server. Default: 90.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#request_timeout KerberosAuthBackendLdapConfig#request_timeout}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.starttls"></a>

```java
public java.lang.Boolean|IResolvable getStarttls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Issue a StartTLS command after establishing an unencrypted connection. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#starttls KerberosAuthBackendLdapConfig#starttls}

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMaxVersion"></a>

```java
public java.lang.String getTlsMaxVersion();
```

- *Type:* java.lang.String

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_max_version KerberosAuthBackendLdapConfig#tls_max_version}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_min_version KerberosAuthBackendLdapConfig#tls_min_version}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_bound_cidrs KerberosAuthBackendLdapConfig#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_explicit_max_ttl KerberosAuthBackendLdapConfig#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_max_ttl KerberosAuthBackendLdapConfig#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_no_default_policy KerberosAuthBackendLdapConfig#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_num_uses KerberosAuthBackendLdapConfig#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_period KerberosAuthBackendLdapConfig#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_policies KerberosAuthBackendLdapConfig#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_ttl KerberosAuthBackendLdapConfig#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_type KerberosAuthBackendLdapConfig#token_type}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.upndomain"></a>

```java
public java.lang.String getUpndomain();
```

- *Type:* java.lang.String

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#upndomain KerberosAuthBackendLdapConfig#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#url KerberosAuthBackendLdapConfig#url}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userattr"></a>

```java
public java.lang.String getUserattr();
```

- *Type:* java.lang.String

Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userattr KerberosAuthBackendLdapConfig#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userdn"></a>

```java
public java.lang.String getUserdn();
```

- *Type:* java.lang.String

LDAP domain to use for users (e.g., ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userdn KerberosAuthBackendLdapConfig#userdn}

---

##### `userfilter`<sup>Optional</sup> <a name="userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userfilter"></a>

```java
public java.lang.String getUserfilter();
```

- *Type:* java.lang.String

Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userfilter KerberosAuthBackendLdapConfig#userfilter}

---

##### `usernameAsAlias`<sup>Optional</sup> <a name="usernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.usernameAsAlias"></a>

```java
public java.lang.Boolean|IResolvable getUsernameAsAlias();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use username as alias name. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#username_as_alias KerberosAuthBackendLdapConfig#username_as_alias}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.useTokenGroups"></a>

```java
public java.lang.Boolean|IResolvable getUseTokenGroups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, use the Active Directory tokenGroups constructed attribute. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#use_token_groups KerberosAuthBackendLdapConfig#use_token_groups}

---



