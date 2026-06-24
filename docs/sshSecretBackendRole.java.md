# `sshSecretBackendRole` Submodule <a name="`sshSecretBackendRole` Submodule" id="@cdktn/provider-vault.sshSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SshSecretBackendRole <a name="SshSecretBackendRole" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role vault_ssh_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer"></a>

```java
import io.cdktn.providers.vault.ssh_secret_backend_role.SshSecretBackendRole;

SshSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .keyType(java.lang.String)
    .name(java.lang.String)
//  .algorithmSigner(java.lang.String)
//  .allowBareDomains(java.lang.Boolean|IResolvable)
//  .allowedCriticalOptions(java.lang.String)
//  .allowedDomains(java.lang.String)
//  .allowedDomainsTemplate(java.lang.Boolean|IResolvable)
//  .allowedExtensions(java.lang.String)
//  .allowedUserKeyConfig(IResolvable|java.util.List<SshSecretBackendRoleAllowedUserKeyConfig>)
//  .allowedUsers(java.lang.String)
//  .allowedUsersTemplate(java.lang.Boolean|IResolvable)
//  .allowEmptyPrincipals(java.lang.Boolean|IResolvable)
//  .allowHostCertificates(java.lang.Boolean|IResolvable)
//  .allowSubdomains(java.lang.Boolean|IResolvable)
//  .allowUserCertificates(java.lang.Boolean|IResolvable)
//  .allowUserKeyIds(java.lang.Boolean|IResolvable)
//  .cidrList(java.lang.String)
//  .defaultCriticalOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultExtensions(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultExtensionsTemplate(java.lang.Boolean|IResolvable)
//  .defaultUser(java.lang.String)
//  .defaultUserTemplate(java.lang.Boolean|IResolvable)
//  .excludeCidrList(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .keyIdFormat(java.lang.String)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .notBeforeDuration(java.lang.String)
//  .port(java.lang.Number)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.algorithmSigner">algorithmSigner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowBareDomains">allowBareDomains</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedCriticalOptions">allowedCriticalOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedDomains">allowedDomains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedDomainsTemplate">allowedDomainsTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_domains_template SshSecretBackendRole#allowed_domains_template}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedExtensions">allowedExtensions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUserKeyConfig">allowedUserKeyConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>></code> | allowed_user_key_config block. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUsers">allowedUsers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUsersTemplate">allowedUsersTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowEmptyPrincipals">allowEmptyPrincipals</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_empty_principals SshSecretBackendRole#allow_empty_principals}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowHostCertificates">allowHostCertificates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowSubdomains">allowSubdomains</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowUserCertificates">allowUserCertificates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowUserKeyIds">allowUserKeyIds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.cidrList">cidrList</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultCriticalOptions">defaultCriticalOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultExtensions">defaultExtensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Default extensions to include in SSH certificates. Only applicable for CA key type. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultExtensionsTemplate">defaultExtensionsTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if the default_extensions field supports templating. Only applicable for CA key type. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultUser">defaultUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultUserTemplate">defaultUserTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.excludeCidrList">excludeCidrList</a></code> | <code>java.util.List<java.lang.String></code> | List of CIDR blocks for which credentials cannot be created. Applicable for OTP and dynamic key types. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.keyIdFormat">keyIdFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.notBeforeDuration">notBeforeDuration</a></code> | <code>java.lang.String</code> | Specifies the duration by which to backdate the ValidAfter property. Uses duration format strings. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Specifies the port number for SSH connections (default 22). Applicable for OTP and dynamic key types. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}.

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#name SshSecretBackendRole#name}

---

##### `algorithmSigner`<sup>Optional</sup> <a name="algorithmSigner" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.algorithmSigner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}.

---

##### `allowBareDomains`<sup>Optional</sup> <a name="allowBareDomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowBareDomains"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}.

---

##### `allowedCriticalOptions`<sup>Optional</sup> <a name="allowedCriticalOptions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedCriticalOptions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}.

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedDomains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}.

---

##### `allowedDomainsTemplate`<sup>Optional</sup> <a name="allowedDomainsTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedDomainsTemplate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_domains_template SshSecretBackendRole#allowed_domains_template}.

---

##### `allowedExtensions`<sup>Optional</sup> <a name="allowedExtensions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedExtensions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}.

---

##### `allowedUserKeyConfig`<sup>Optional</sup> <a name="allowedUserKeyConfig" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUserKeyConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>>

allowed_user_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_user_key_config SshSecretBackendRole#allowed_user_key_config}

---

##### `allowedUsers`<sup>Optional</sup> <a name="allowedUsers" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUsers"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}.

---

##### `allowedUsersTemplate`<sup>Optional</sup> <a name="allowedUsersTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUsersTemplate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}.

---

##### `allowEmptyPrincipals`<sup>Optional</sup> <a name="allowEmptyPrincipals" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowEmptyPrincipals"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_empty_principals SshSecretBackendRole#allow_empty_principals}.

---

##### `allowHostCertificates`<sup>Optional</sup> <a name="allowHostCertificates" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowHostCertificates"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}.

---

##### `allowSubdomains`<sup>Optional</sup> <a name="allowSubdomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowSubdomains"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}.

---

##### `allowUserCertificates`<sup>Optional</sup> <a name="allowUserCertificates" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowUserCertificates"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}.

---

##### `allowUserKeyIds`<sup>Optional</sup> <a name="allowUserKeyIds" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowUserKeyIds"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}.

---

##### `cidrList`<sup>Optional</sup> <a name="cidrList" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.cidrList"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}.

---

##### `defaultCriticalOptions`<sup>Optional</sup> <a name="defaultCriticalOptions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultCriticalOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}.

---

##### `defaultExtensions`<sup>Optional</sup> <a name="defaultExtensions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultExtensions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Default extensions to include in SSH certificates. Only applicable for CA key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}

---

##### `defaultExtensionsTemplate`<sup>Optional</sup> <a name="defaultExtensionsTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultExtensionsTemplate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if the default_extensions field supports templating. Only applicable for CA key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_extensions_template SshSecretBackendRole#default_extensions_template}

---

##### `defaultUser`<sup>Optional</sup> <a name="defaultUser" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultUser"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}.

---

##### `defaultUserTemplate`<sup>Optional</sup> <a name="defaultUserTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultUserTemplate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}.

---

##### `excludeCidrList`<sup>Optional</sup> <a name="excludeCidrList" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.excludeCidrList"></a>

- *Type:* java.util.List<java.lang.String>

List of CIDR blocks for which credentials cannot be created. Applicable for OTP and dynamic key types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#exclude_cidr_list SshSecretBackendRole#exclude_cidr_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyIdFormat`<sup>Optional</sup> <a name="keyIdFormat" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.keyIdFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#namespace SshSecretBackendRole#namespace}

---

##### `notBeforeDuration`<sup>Optional</sup> <a name="notBeforeDuration" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.notBeforeDuration"></a>

- *Type:* java.lang.String

Specifies the duration by which to backdate the ValidAfter property. Uses duration format strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#not_before_duration SshSecretBackendRole#not_before_duration}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Specifies the port number for SSH connections (default 22). Applicable for OTP and dynamic key types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#port SshSecretBackendRole#port}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig">putAllowedUserKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAlgorithmSigner">resetAlgorithmSigner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowBareDomains">resetAllowBareDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedCriticalOptions">resetAllowedCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomainsTemplate">resetAllowedDomainsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedExtensions">resetAllowedExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyConfig">resetAllowedUserKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsers">resetAllowedUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsersTemplate">resetAllowedUsersTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowEmptyPrincipals">resetAllowEmptyPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowHostCertificates">resetAllowHostCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowSubdomains">resetAllowSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserCertificates">resetAllowUserCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserKeyIds">resetAllowUserKeyIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetCidrList">resetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultCriticalOptions">resetDefaultCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensions">resetDefaultExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensionsTemplate">resetDefaultExtensionsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUser">resetDefaultUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUserTemplate">resetDefaultUserTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetExcludeCidrList">resetExcludeCidrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetKeyIdFormat">resetKeyIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNotBeforeDuration">resetNotBeforeDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedUserKeyConfig` <a name="putAllowedUserKeyConfig" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig"></a>

```java
public void putAllowedUserKeyConfig(IResolvable|java.util.List<SshSecretBackendRoleAllowedUserKeyConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>>

---

##### `resetAlgorithmSigner` <a name="resetAlgorithmSigner" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAlgorithmSigner"></a>

```java
public void resetAlgorithmSigner()
```

##### `resetAllowBareDomains` <a name="resetAllowBareDomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowBareDomains"></a>

```java
public void resetAllowBareDomains()
```

##### `resetAllowedCriticalOptions` <a name="resetAllowedCriticalOptions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedCriticalOptions"></a>

```java
public void resetAllowedCriticalOptions()
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomains"></a>

```java
public void resetAllowedDomains()
```

##### `resetAllowedDomainsTemplate` <a name="resetAllowedDomainsTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomainsTemplate"></a>

```java
public void resetAllowedDomainsTemplate()
```

##### `resetAllowedExtensions` <a name="resetAllowedExtensions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedExtensions"></a>

```java
public void resetAllowedExtensions()
```

##### `resetAllowedUserKeyConfig` <a name="resetAllowedUserKeyConfig" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyConfig"></a>

```java
public void resetAllowedUserKeyConfig()
```

##### `resetAllowedUsers` <a name="resetAllowedUsers" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsers"></a>

```java
public void resetAllowedUsers()
```

##### `resetAllowedUsersTemplate` <a name="resetAllowedUsersTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsersTemplate"></a>

```java
public void resetAllowedUsersTemplate()
```

##### `resetAllowEmptyPrincipals` <a name="resetAllowEmptyPrincipals" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowEmptyPrincipals"></a>

```java
public void resetAllowEmptyPrincipals()
```

##### `resetAllowHostCertificates` <a name="resetAllowHostCertificates" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowHostCertificates"></a>

```java
public void resetAllowHostCertificates()
```

##### `resetAllowSubdomains` <a name="resetAllowSubdomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowSubdomains"></a>

```java
public void resetAllowSubdomains()
```

##### `resetAllowUserCertificates` <a name="resetAllowUserCertificates" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserCertificates"></a>

```java
public void resetAllowUserCertificates()
```

##### `resetAllowUserKeyIds` <a name="resetAllowUserKeyIds" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserKeyIds"></a>

```java
public void resetAllowUserKeyIds()
```

##### `resetCidrList` <a name="resetCidrList" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetCidrList"></a>

```java
public void resetCidrList()
```

##### `resetDefaultCriticalOptions` <a name="resetDefaultCriticalOptions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultCriticalOptions"></a>

```java
public void resetDefaultCriticalOptions()
```

##### `resetDefaultExtensions` <a name="resetDefaultExtensions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensions"></a>

```java
public void resetDefaultExtensions()
```

##### `resetDefaultExtensionsTemplate` <a name="resetDefaultExtensionsTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensionsTemplate"></a>

```java
public void resetDefaultExtensionsTemplate()
```

##### `resetDefaultUser` <a name="resetDefaultUser" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUser"></a>

```java
public void resetDefaultUser()
```

##### `resetDefaultUserTemplate` <a name="resetDefaultUserTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUserTemplate"></a>

```java
public void resetDefaultUserTemplate()
```

##### `resetExcludeCidrList` <a name="resetExcludeCidrList" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetExcludeCidrList"></a>

```java
public void resetExcludeCidrList()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetKeyIdFormat` <a name="resetKeyIdFormat" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetKeyIdFormat"></a>

```java
public void resetKeyIdFormat()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNotBeforeDuration` <a name="resetNotBeforeDuration" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNotBeforeDuration"></a>

```java
public void resetNotBeforeDuration()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetPort"></a>

```java
public void resetPort()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SshSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct"></a>

```java
import io.cdktn.providers.vault.ssh_secret_backend_role.SshSecretBackendRole;

SshSecretBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ssh_secret_backend_role.SshSecretBackendRole;

SshSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.ssh_secret_backend_role.SshSecretBackendRole;

SshSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.ssh_secret_backend_role.SshSecretBackendRole;

SshSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SshSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SshSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SshSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SshSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SshSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfig">allowedUserKeyConfig</a></code> | <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList">SshSecretBackendRoleAllowedUserKeyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSignerInput">algorithmSignerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomainsInput">allowBareDomainsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptionsInput">allowedCriticalOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplateInput">allowedDomainsTemplateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensionsInput">allowedExtensionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfigInput">allowedUserKeyConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersInput">allowedUsersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplateInput">allowedUsersTemplateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowEmptyPrincipalsInput">allowEmptyPrincipalsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificatesInput">allowHostCertificatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomainsInput">allowSubdomainsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificatesInput">allowUserCertificatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIdsInput">allowUserKeyIdsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrListInput">cidrListInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptionsInput">defaultCriticalOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsInput">defaultExtensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsTemplateInput">defaultExtensionsTemplateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserInput">defaultUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplateInput">defaultUserTemplateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.excludeCidrListInput">excludeCidrListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormatInput">keyIdFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.notBeforeDurationInput">notBeforeDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSigner">algorithmSigner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomains">allowBareDomains</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptions">allowedCriticalOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomains">allowedDomains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplate">allowedDomainsTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensions">allowedExtensions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsers">allowedUsers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplate">allowedUsersTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowEmptyPrincipals">allowEmptyPrincipals</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificates">allowHostCertificates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomains">allowSubdomains</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificates">allowUserCertificates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIds">allowUserKeyIds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrList">cidrList</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptions">defaultCriticalOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensions">defaultExtensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsTemplate">defaultExtensionsTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUser">defaultUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplate">defaultUserTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.excludeCidrList">excludeCidrList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormat">keyIdFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.notBeforeDuration">notBeforeDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedUserKeyConfig`<sup>Required</sup> <a name="allowedUserKeyConfig" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfig"></a>

```java
public SshSecretBackendRoleAllowedUserKeyConfigList getAllowedUserKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList">SshSecretBackendRoleAllowedUserKeyConfigList</a>

---

##### `algorithmSignerInput`<sup>Optional</sup> <a name="algorithmSignerInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSignerInput"></a>

```java
public java.lang.String getAlgorithmSignerInput();
```

- *Type:* java.lang.String

---

##### `allowBareDomainsInput`<sup>Optional</sup> <a name="allowBareDomainsInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomainsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowBareDomainsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowedCriticalOptionsInput`<sup>Optional</sup> <a name="allowedCriticalOptionsInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptionsInput"></a>

```java
public java.lang.String getAllowedCriticalOptionsInput();
```

- *Type:* java.lang.String

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsInput"></a>

```java
public java.lang.String getAllowedDomainsInput();
```

- *Type:* java.lang.String

---

##### `allowedDomainsTemplateInput`<sup>Optional</sup> <a name="allowedDomainsTemplateInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplateInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowedDomainsTemplateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowedExtensionsInput`<sup>Optional</sup> <a name="allowedExtensionsInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensionsInput"></a>

```java
public java.lang.String getAllowedExtensionsInput();
```

- *Type:* java.lang.String

---

##### `allowedUserKeyConfigInput`<sup>Optional</sup> <a name="allowedUserKeyConfigInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfigInput"></a>

```java
public IResolvable|java.util.List<SshSecretBackendRoleAllowedUserKeyConfig> getAllowedUserKeyConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>>

---

##### `allowedUsersInput`<sup>Optional</sup> <a name="allowedUsersInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersInput"></a>

```java
public java.lang.String getAllowedUsersInput();
```

- *Type:* java.lang.String

---

##### `allowedUsersTemplateInput`<sup>Optional</sup> <a name="allowedUsersTemplateInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplateInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowedUsersTemplateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowEmptyPrincipalsInput`<sup>Optional</sup> <a name="allowEmptyPrincipalsInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowEmptyPrincipalsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowEmptyPrincipalsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowHostCertificatesInput`<sup>Optional</sup> <a name="allowHostCertificatesInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificatesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowHostCertificatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowSubdomainsInput`<sup>Optional</sup> <a name="allowSubdomainsInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomainsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowSubdomainsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowUserCertificatesInput`<sup>Optional</sup> <a name="allowUserCertificatesInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificatesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowUserCertificatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowUserKeyIdsInput`<sup>Optional</sup> <a name="allowUserKeyIdsInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIdsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowUserKeyIdsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `cidrListInput`<sup>Optional</sup> <a name="cidrListInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrListInput"></a>

```java
public java.lang.String getCidrListInput();
```

- *Type:* java.lang.String

---

##### `defaultCriticalOptionsInput`<sup>Optional</sup> <a name="defaultCriticalOptionsInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultCriticalOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultExtensionsInput`<sup>Optional</sup> <a name="defaultExtensionsInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultExtensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultExtensionsTemplateInput`<sup>Optional</sup> <a name="defaultExtensionsTemplateInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsTemplateInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultExtensionsTemplateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultUserInput`<sup>Optional</sup> <a name="defaultUserInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserInput"></a>

```java
public java.lang.String getDefaultUserInput();
```

- *Type:* java.lang.String

---

##### `defaultUserTemplateInput`<sup>Optional</sup> <a name="defaultUserTemplateInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplateInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultUserTemplateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeCidrListInput`<sup>Optional</sup> <a name="excludeCidrListInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.excludeCidrListInput"></a>

```java
public java.util.List<java.lang.String> getExcludeCidrListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyIdFormatInput`<sup>Optional</sup> <a name="keyIdFormatInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormatInput"></a>

```java
public java.lang.String getKeyIdFormatInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtlInput"></a>

```java
public java.lang.String getMaxTtlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `notBeforeDurationInput`<sup>Optional</sup> <a name="notBeforeDurationInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.notBeforeDurationInput"></a>

```java
public java.lang.String getNotBeforeDurationInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `algorithmSigner`<sup>Required</sup> <a name="algorithmSigner" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSigner"></a>

```java
public java.lang.String getAlgorithmSigner();
```

- *Type:* java.lang.String

---

##### `allowBareDomains`<sup>Required</sup> <a name="allowBareDomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomains"></a>

```java
public java.lang.Boolean|IResolvable getAllowBareDomains();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowedCriticalOptions`<sup>Required</sup> <a name="allowedCriticalOptions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptions"></a>

```java
public java.lang.String getAllowedCriticalOptions();
```

- *Type:* java.lang.String

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomains"></a>

```java
public java.lang.String getAllowedDomains();
```

- *Type:* java.lang.String

---

##### `allowedDomainsTemplate`<sup>Required</sup> <a name="allowedDomainsTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplate"></a>

```java
public java.lang.Boolean|IResolvable getAllowedDomainsTemplate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowedExtensions`<sup>Required</sup> <a name="allowedExtensions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensions"></a>

```java
public java.lang.String getAllowedExtensions();
```

- *Type:* java.lang.String

---

##### `allowedUsers`<sup>Required</sup> <a name="allowedUsers" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsers"></a>

```java
public java.lang.String getAllowedUsers();
```

- *Type:* java.lang.String

---

##### `allowedUsersTemplate`<sup>Required</sup> <a name="allowedUsersTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplate"></a>

```java
public java.lang.Boolean|IResolvable getAllowedUsersTemplate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowEmptyPrincipals`<sup>Required</sup> <a name="allowEmptyPrincipals" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowEmptyPrincipals"></a>

```java
public java.lang.Boolean|IResolvable getAllowEmptyPrincipals();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowHostCertificates`<sup>Required</sup> <a name="allowHostCertificates" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificates"></a>

```java
public java.lang.Boolean|IResolvable getAllowHostCertificates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowSubdomains`<sup>Required</sup> <a name="allowSubdomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomains"></a>

```java
public java.lang.Boolean|IResolvable getAllowSubdomains();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowUserCertificates`<sup>Required</sup> <a name="allowUserCertificates" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificates"></a>

```java
public java.lang.Boolean|IResolvable getAllowUserCertificates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowUserKeyIds`<sup>Required</sup> <a name="allowUserKeyIds" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIds"></a>

```java
public java.lang.Boolean|IResolvable getAllowUserKeyIds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `cidrList`<sup>Required</sup> <a name="cidrList" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrList"></a>

```java
public java.lang.String getCidrList();
```

- *Type:* java.lang.String

---

##### `defaultCriticalOptions`<sup>Required</sup> <a name="defaultCriticalOptions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultCriticalOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultExtensions`<sup>Required</sup> <a name="defaultExtensions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultExtensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultExtensionsTemplate`<sup>Required</sup> <a name="defaultExtensionsTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsTemplate"></a>

```java
public java.lang.Boolean|IResolvable getDefaultExtensionsTemplate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultUser`<sup>Required</sup> <a name="defaultUser" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUser"></a>

```java
public java.lang.String getDefaultUser();
```

- *Type:* java.lang.String

---

##### `defaultUserTemplate`<sup>Required</sup> <a name="defaultUserTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplate"></a>

```java
public java.lang.Boolean|IResolvable getDefaultUserTemplate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeCidrList`<sup>Required</sup> <a name="excludeCidrList" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.excludeCidrList"></a>

```java
public java.util.List<java.lang.String> getExcludeCidrList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyIdFormat`<sup>Required</sup> <a name="keyIdFormat" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormat"></a>

```java
public java.lang.String getKeyIdFormat();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `notBeforeDuration`<sup>Required</sup> <a name="notBeforeDuration" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.notBeforeDuration"></a>

```java
public java.lang.String getNotBeforeDuration();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SshSecretBackendRoleAllowedUserKeyConfig <a name="SshSecretBackendRoleAllowedUserKeyConfig" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ssh_secret_backend_role.SshSecretBackendRoleAllowedUserKeyConfig;

SshSecretBackendRoleAllowedUserKeyConfig.builder()
    .lengths(java.util.List<java.lang.Number>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.lengths">lengths</a></code> | <code>java.util.List<java.lang.Number></code> | List of allowed key lengths, vault-1.10 and above. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.type">type</a></code> | <code>java.lang.String</code> | Key type, choices: rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521. |

---

##### `lengths`<sup>Required</sup> <a name="lengths" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.lengths"></a>

```java
public java.util.List<java.lang.Number> getLengths();
```

- *Type:* java.util.List<java.lang.Number>

List of allowed key lengths, vault-1.10 and above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#lengths SshSecretBackendRole#lengths}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Key type, choices: rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#type SshSecretBackendRole#type}

---

### SshSecretBackendRoleConfig <a name="SshSecretBackendRoleConfig" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ssh_secret_backend_role.SshSecretBackendRoleConfig;

SshSecretBackendRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .keyType(java.lang.String)
    .name(java.lang.String)
//  .algorithmSigner(java.lang.String)
//  .allowBareDomains(java.lang.Boolean|IResolvable)
//  .allowedCriticalOptions(java.lang.String)
//  .allowedDomains(java.lang.String)
//  .allowedDomainsTemplate(java.lang.Boolean|IResolvable)
//  .allowedExtensions(java.lang.String)
//  .allowedUserKeyConfig(IResolvable|java.util.List<SshSecretBackendRoleAllowedUserKeyConfig>)
//  .allowedUsers(java.lang.String)
//  .allowedUsersTemplate(java.lang.Boolean|IResolvable)
//  .allowEmptyPrincipals(java.lang.Boolean|IResolvable)
//  .allowHostCertificates(java.lang.Boolean|IResolvable)
//  .allowSubdomains(java.lang.Boolean|IResolvable)
//  .allowUserCertificates(java.lang.Boolean|IResolvable)
//  .allowUserKeyIds(java.lang.Boolean|IResolvable)
//  .cidrList(java.lang.String)
//  .defaultCriticalOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultExtensions(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultExtensionsTemplate(java.lang.Boolean|IResolvable)
//  .defaultUser(java.lang.String)
//  .defaultUserTemplate(java.lang.Boolean|IResolvable)
//  .excludeCidrList(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .keyIdFormat(java.lang.String)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .notBeforeDuration(java.lang.String)
//  .port(java.lang.Number)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.algorithmSigner">algorithmSigner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowBareDomains">allowBareDomains</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedCriticalOptions">allowedCriticalOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomains">allowedDomains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomainsTemplate">allowedDomainsTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_domains_template SshSecretBackendRole#allowed_domains_template}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedExtensions">allowedExtensions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyConfig">allowedUserKeyConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>></code> | allowed_user_key_config block. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsers">allowedUsers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsersTemplate">allowedUsersTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowEmptyPrincipals">allowEmptyPrincipals</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_empty_principals SshSecretBackendRole#allow_empty_principals}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowHostCertificates">allowHostCertificates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowSubdomains">allowSubdomains</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserCertificates">allowUserCertificates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserKeyIds">allowUserKeyIds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.cidrList">cidrList</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultCriticalOptions">defaultCriticalOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensions">defaultExtensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Default extensions to include in SSH certificates. Only applicable for CA key type. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensionsTemplate">defaultExtensionsTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if the default_extensions field supports templating. Only applicable for CA key type. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUser">defaultUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUserTemplate">defaultUserTemplate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.excludeCidrList">excludeCidrList</a></code> | <code>java.util.List<java.lang.String></code> | List of CIDR blocks for which credentials cannot be created. Applicable for OTP and dynamic key types. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyIdFormat">keyIdFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.notBeforeDuration">notBeforeDuration</a></code> | <code>java.lang.String</code> | Specifies the duration by which to backdate the ValidAfter property. Uses duration format strings. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Specifies the port number for SSH connections (default 22). Applicable for OTP and dynamic key types. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}.

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#name SshSecretBackendRole#name}

---

##### `algorithmSigner`<sup>Optional</sup> <a name="algorithmSigner" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.algorithmSigner"></a>

```java
public java.lang.String getAlgorithmSigner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}.

---

##### `allowBareDomains`<sup>Optional</sup> <a name="allowBareDomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowBareDomains"></a>

```java
public java.lang.Boolean|IResolvable getAllowBareDomains();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}.

---

##### `allowedCriticalOptions`<sup>Optional</sup> <a name="allowedCriticalOptions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedCriticalOptions"></a>

```java
public java.lang.String getAllowedCriticalOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}.

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomains"></a>

```java
public java.lang.String getAllowedDomains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}.

---

##### `allowedDomainsTemplate`<sup>Optional</sup> <a name="allowedDomainsTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomainsTemplate"></a>

```java
public java.lang.Boolean|IResolvable getAllowedDomainsTemplate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_domains_template SshSecretBackendRole#allowed_domains_template}.

---

##### `allowedExtensions`<sup>Optional</sup> <a name="allowedExtensions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedExtensions"></a>

```java
public java.lang.String getAllowedExtensions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}.

---

##### `allowedUserKeyConfig`<sup>Optional</sup> <a name="allowedUserKeyConfig" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyConfig"></a>

```java
public IResolvable|java.util.List<SshSecretBackendRoleAllowedUserKeyConfig> getAllowedUserKeyConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>>

allowed_user_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_user_key_config SshSecretBackendRole#allowed_user_key_config}

---

##### `allowedUsers`<sup>Optional</sup> <a name="allowedUsers" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsers"></a>

```java
public java.lang.String getAllowedUsers();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}.

---

##### `allowedUsersTemplate`<sup>Optional</sup> <a name="allowedUsersTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsersTemplate"></a>

```java
public java.lang.Boolean|IResolvable getAllowedUsersTemplate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}.

---

##### `allowEmptyPrincipals`<sup>Optional</sup> <a name="allowEmptyPrincipals" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowEmptyPrincipals"></a>

```java
public java.lang.Boolean|IResolvable getAllowEmptyPrincipals();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_empty_principals SshSecretBackendRole#allow_empty_principals}.

---

##### `allowHostCertificates`<sup>Optional</sup> <a name="allowHostCertificates" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowHostCertificates"></a>

```java
public java.lang.Boolean|IResolvable getAllowHostCertificates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}.

---

##### `allowSubdomains`<sup>Optional</sup> <a name="allowSubdomains" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowSubdomains"></a>

```java
public java.lang.Boolean|IResolvable getAllowSubdomains();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}.

---

##### `allowUserCertificates`<sup>Optional</sup> <a name="allowUserCertificates" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserCertificates"></a>

```java
public java.lang.Boolean|IResolvable getAllowUserCertificates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}.

---

##### `allowUserKeyIds`<sup>Optional</sup> <a name="allowUserKeyIds" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserKeyIds"></a>

```java
public java.lang.Boolean|IResolvable getAllowUserKeyIds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}.

---

##### `cidrList`<sup>Optional</sup> <a name="cidrList" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.cidrList"></a>

```java
public java.lang.String getCidrList();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}.

---

##### `defaultCriticalOptions`<sup>Optional</sup> <a name="defaultCriticalOptions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultCriticalOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultCriticalOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}.

---

##### `defaultExtensions`<sup>Optional</sup> <a name="defaultExtensions" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultExtensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Default extensions to include in SSH certificates. Only applicable for CA key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}

---

##### `defaultExtensionsTemplate`<sup>Optional</sup> <a name="defaultExtensionsTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensionsTemplate"></a>

```java
public java.lang.Boolean|IResolvable getDefaultExtensionsTemplate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if the default_extensions field supports templating. Only applicable for CA key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_extensions_template SshSecretBackendRole#default_extensions_template}

---

##### `defaultUser`<sup>Optional</sup> <a name="defaultUser" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUser"></a>

```java
public java.lang.String getDefaultUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}.

---

##### `defaultUserTemplate`<sup>Optional</sup> <a name="defaultUserTemplate" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUserTemplate"></a>

```java
public java.lang.Boolean|IResolvable getDefaultUserTemplate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}.

---

##### `excludeCidrList`<sup>Optional</sup> <a name="excludeCidrList" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.excludeCidrList"></a>

```java
public java.util.List<java.lang.String> getExcludeCidrList();
```

- *Type:* java.util.List<java.lang.String>

List of CIDR blocks for which credentials cannot be created. Applicable for OTP and dynamic key types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#exclude_cidr_list SshSecretBackendRole#exclude_cidr_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyIdFormat`<sup>Optional</sup> <a name="keyIdFormat" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyIdFormat"></a>

```java
public java.lang.String getKeyIdFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#namespace SshSecretBackendRole#namespace}

---

##### `notBeforeDuration`<sup>Optional</sup> <a name="notBeforeDuration" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.notBeforeDuration"></a>

```java
public java.lang.String getNotBeforeDuration();
```

- *Type:* java.lang.String

Specifies the duration by which to backdate the ValidAfter property. Uses duration format strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#not_before_duration SshSecretBackendRole#not_before_duration}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Specifies the port number for SSH connections (default 22). Applicable for OTP and dynamic key types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#port SshSecretBackendRole#port}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}.

---

## Classes <a name="Classes" id="Classes"></a>

### SshSecretBackendRoleAllowedUserKeyConfigList <a name="SshSecretBackendRoleAllowedUserKeyConfigList" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer"></a>

```java
import io.cdktn.providers.vault.ssh_secret_backend_role.SshSecretBackendRoleAllowedUserKeyConfigList;

new SshSecretBackendRoleAllowedUserKeyConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get"></a>

```java
public SshSecretBackendRoleAllowedUserKeyConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SshSecretBackendRoleAllowedUserKeyConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>>

---


### SshSecretBackendRoleAllowedUserKeyConfigOutputReference <a name="SshSecretBackendRoleAllowedUserKeyConfigOutputReference" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.vault.ssh_secret_backend_role.SshSecretBackendRoleAllowedUserKeyConfigOutputReference;

new SshSecretBackendRoleAllowedUserKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengthsInput">lengthsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengths">lengths</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lengthsInput`<sup>Optional</sup> <a name="lengthsInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengthsInput"></a>

```java
public java.util.List<java.lang.Number> getLengthsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `lengths`<sup>Required</sup> <a name="lengths" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengths"></a>

```java
public java.util.List<java.lang.Number> getLengths();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SshSecretBackendRoleAllowedUserKeyConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>

---



