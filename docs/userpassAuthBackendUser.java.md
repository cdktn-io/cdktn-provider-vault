# `userpassAuthBackendUser` Submodule <a name="`userpassAuthBackendUser` Submodule" id="@cdktn/provider-vault.userpassAuthBackendUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserpassAuthBackendUser <a name="UserpassAuthBackendUser" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user vault_userpass_auth_backend_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer"></a>

```java
import io.cdktn.providers.vault.userpass_auth_backend_user.UserpassAuthBackendUser;

UserpassAuthBackendUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .username(java.lang.String)
//  .aliasMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .passwordHashWo(java.lang.String)
//  .passwordHashWoVersion(java.lang.Number)
//  .passwordWo(java.lang.String)
//  .passwordWoVersion(java.lang.Number)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the Userpass auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username for this Userpass user. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordHashWo">passwordHashWo</a></code> | <code>java.lang.String</code> | Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordHashWoVersion">passwordHashWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `password_hash_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordWo">passwordWo</a></code> | <code>java.lang.String</code> | Password for this user. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordWoVersion">passwordWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `password_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Mount path for the Userpass auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#mount UserpassAuthBackendUser#mount}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username for this Userpass user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#username UserpassAuthBackendUser#username}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.aliasMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#alias_metadata UserpassAuthBackendUser#alias_metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#namespace UserpassAuthBackendUser#namespace}

---

##### `passwordHashWo`<sup>Optional</sup> <a name="passwordHashWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordHashWo"></a>

- *Type:* java.lang.String

Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo UserpassAuthBackendUser#password_hash_wo}

---

##### `passwordHashWoVersion`<sup>Optional</sup> <a name="passwordHashWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordHashWoVersion"></a>

- *Type:* java.lang.Number

Version counter for the write-only `password_hash_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password hash changes. Increment this value whenever you update `password_hash_wo` to ensure the new password hash is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo_version UserpassAuthBackendUser#password_hash_wo_version}

---

##### `passwordWo`<sup>Optional</sup> <a name="passwordWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordWo"></a>

- *Type:* java.lang.String

Password for this user. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo UserpassAuthBackendUser#password_wo}

---

##### `passwordWoVersion`<sup>Optional</sup> <a name="passwordWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordWoVersion"></a>

- *Type:* java.lang.Number

Version counter for the write-only `password_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password changes. Increment this value whenever you update `password_wo` to ensure the new password is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo_version UserpassAuthBackendUser#password_wo_version}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_bound_cidrs UserpassAuthBackendUser#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_explicit_max_ttl UserpassAuthBackendUser#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_max_ttl UserpassAuthBackendUser#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_no_default_policy UserpassAuthBackendUser#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_num_uses UserpassAuthBackendUser#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_period UserpassAuthBackendUser#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_policies UserpassAuthBackendUser#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_ttl UserpassAuthBackendUser#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_type UserpassAuthBackendUser#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWo">resetPasswordHashWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWoVersion">resetPasswordHashWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWo">resetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWoVersion">resetPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetAliasMetadata"></a>

```java
public void resetAliasMetadata()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPasswordHashWo` <a name="resetPasswordHashWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWo"></a>

```java
public void resetPasswordHashWo()
```

##### `resetPasswordHashWoVersion` <a name="resetPasswordHashWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWoVersion"></a>

```java
public void resetPasswordHashWoVersion()
```

##### `resetPasswordWo` <a name="resetPasswordWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWo"></a>

```java
public void resetPasswordWo()
```

##### `resetPasswordWoVersion` <a name="resetPasswordWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWoVersion"></a>

```java
public void resetPasswordWoVersion()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenType"></a>

```java
public void resetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a UserpassAuthBackendUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct"></a>

```java
import io.cdktn.providers.vault.userpass_auth_backend_user.UserpassAuthBackendUser;

UserpassAuthBackendUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.userpass_auth_backend_user.UserpassAuthBackendUser;

UserpassAuthBackendUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.userpass_auth_backend_user.UserpassAuthBackendUser;

UserpassAuthBackendUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.userpass_auth_backend_user.UserpassAuthBackendUser;

UserpassAuthBackendUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),UserpassAuthBackendUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a UserpassAuthBackendUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the UserpassAuthBackendUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing UserpassAuthBackendUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the UserpassAuthBackendUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoInput">passwordHashWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersionInput">passwordHashWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoInput">passwordWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersionInput">passwordWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWo">passwordHashWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersion">passwordHashWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWo">passwordWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersion">passwordWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `passwordHashWoInput`<sup>Optional</sup> <a name="passwordHashWoInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoInput"></a>

```java
public java.lang.String getPasswordHashWoInput();
```

- *Type:* java.lang.String

---

##### `passwordHashWoVersionInput`<sup>Optional</sup> <a name="passwordHashWoVersionInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersionInput"></a>

```java
public java.lang.Number getPasswordHashWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `passwordWoInput`<sup>Optional</sup> <a name="passwordWoInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoInput"></a>

```java
public java.lang.String getPasswordWoInput();
```

- *Type:* java.lang.String

---

##### `passwordWoVersionInput`<sup>Optional</sup> <a name="passwordWoVersionInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersionInput"></a>

```java
public java.lang.Number getPasswordWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `passwordHashWo`<sup>Required</sup> <a name="passwordHashWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWo"></a>

```java
public java.lang.String getPasswordHashWo();
```

- *Type:* java.lang.String

---

##### `passwordHashWoVersion`<sup>Required</sup> <a name="passwordHashWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersion"></a>

```java
public java.lang.Number getPasswordHashWoVersion();
```

- *Type:* java.lang.Number

---

##### `passwordWo`<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWo"></a>

```java
public java.lang.String getPasswordWo();
```

- *Type:* java.lang.String

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersion"></a>

```java
public java.lang.Number getPasswordWoVersion();
```

- *Type:* java.lang.Number

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserpassAuthBackendUserConfig <a name="UserpassAuthBackendUserConfig" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.userpass_auth_backend_user.UserpassAuthBackendUserConfig;

UserpassAuthBackendUserConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .username(java.lang.String)
//  .aliasMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .passwordHashWo(java.lang.String)
//  .passwordHashWoVersion(java.lang.Number)
//  .passwordWo(java.lang.String)
//  .passwordWoVersion(java.lang.Number)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the Userpass auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username for this Userpass user. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWo">passwordHashWo</a></code> | <code>java.lang.String</code> | Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWoVersion">passwordHashWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `password_hash_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWo">passwordWo</a></code> | <code>java.lang.String</code> | Password for this user. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWoVersion">passwordWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `password_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Mount path for the Userpass auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#mount UserpassAuthBackendUser#mount}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for this Userpass user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#username UserpassAuthBackendUser#username}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.aliasMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#alias_metadata UserpassAuthBackendUser#alias_metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#namespace UserpassAuthBackendUser#namespace}

---

##### `passwordHashWo`<sup>Optional</sup> <a name="passwordHashWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWo"></a>

```java
public java.lang.String getPasswordHashWo();
```

- *Type:* java.lang.String

Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo UserpassAuthBackendUser#password_hash_wo}

---

##### `passwordHashWoVersion`<sup>Optional</sup> <a name="passwordHashWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWoVersion"></a>

```java
public java.lang.Number getPasswordHashWoVersion();
```

- *Type:* java.lang.Number

Version counter for the write-only `password_hash_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password hash changes. Increment this value whenever you update `password_hash_wo` to ensure the new password hash is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo_version UserpassAuthBackendUser#password_hash_wo_version}

---

##### `passwordWo`<sup>Optional</sup> <a name="passwordWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWo"></a>

```java
public java.lang.String getPasswordWo();
```

- *Type:* java.lang.String

Password for this user. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo UserpassAuthBackendUser#password_wo}

---

##### `passwordWoVersion`<sup>Optional</sup> <a name="passwordWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWoVersion"></a>

```java
public java.lang.Number getPasswordWoVersion();
```

- *Type:* java.lang.Number

Version counter for the write-only `password_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password changes. Increment this value whenever you update `password_wo` to ensure the new password is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo_version UserpassAuthBackendUser#password_wo_version}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_bound_cidrs UserpassAuthBackendUser#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_explicit_max_ttl UserpassAuthBackendUser#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_max_ttl UserpassAuthBackendUser#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_no_default_policy UserpassAuthBackendUser#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_num_uses UserpassAuthBackendUser#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_period UserpassAuthBackendUser#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_policies UserpassAuthBackendUser#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_ttl UserpassAuthBackendUser#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_type UserpassAuthBackendUser#token_type}

---



