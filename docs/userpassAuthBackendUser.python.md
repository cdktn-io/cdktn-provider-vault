# `userpassAuthBackendUser` Submodule <a name="`userpassAuthBackendUser` Submodule" id="@cdktn/provider-vault.userpassAuthBackendUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserpassAuthBackendUser <a name="UserpassAuthBackendUser" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user vault_userpass_auth_backend_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer"></a>

```python
from cdktn_provider_vault import userpass_auth_backend_user

userpassAuthBackendUser.UserpassAuthBackendUser(
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
  username: str,
  alias_metadata: typing.Mapping[str] = None,
  namespace: str = None,
  password_hash_wo: str = None,
  password_hash_wo_version: typing.Union[int, float] = None,
  password_wo: str = None,
  password_wo_version: typing.Union[int, float] = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: bool | IResolvable = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the Userpass auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.username">username</a></code> | <code>str</code> | Username for this Userpass user. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordHashWo">password_hash_wo</a></code> | <code>str</code> | Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordHashWoVersion">password_hash_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `password_hash_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordWo">password_wo</a></code> | <code>str</code> | Password for this user. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordWoVersion">password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `password_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the Userpass auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#mount UserpassAuthBackendUser#mount}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.username"></a>

- *Type:* str

Username for this Userpass user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#username UserpassAuthBackendUser#username}

---

##### `alias_metadata`<sup>Optional</sup> <a name="alias_metadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.aliasMetadata"></a>

- *Type:* typing.Mapping[str]

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#alias_metadata UserpassAuthBackendUser#alias_metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#namespace UserpassAuthBackendUser#namespace}

---

##### `password_hash_wo`<sup>Optional</sup> <a name="password_hash_wo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordHashWo"></a>

- *Type:* str

Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo UserpassAuthBackendUser#password_hash_wo}

---

##### `password_hash_wo_version`<sup>Optional</sup> <a name="password_hash_wo_version" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordHashWoVersion"></a>

- *Type:* typing.Union[int, float]

Version counter for the write-only `password_hash_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password hash changes. Increment this value whenever you update `password_hash_wo` to ensure the new password hash is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo_version UserpassAuthBackendUser#password_hash_wo_version}

---

##### `password_wo`<sup>Optional</sup> <a name="password_wo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordWo"></a>

- *Type:* str

Password for this user. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo UserpassAuthBackendUser#password_wo}

---

##### `password_wo_version`<sup>Optional</sup> <a name="password_wo_version" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.passwordWoVersion"></a>

- *Type:* typing.Union[int, float]

Version counter for the write-only `password_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password changes. Increment this value whenever you update `password_wo` to ensure the new password is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo_version UserpassAuthBackendUser#password_wo_version}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_bound_cidrs UserpassAuthBackendUser#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_explicit_max_ttl UserpassAuthBackendUser#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_max_ttl UserpassAuthBackendUser#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* bool | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_no_default_policy UserpassAuthBackendUser#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_num_uses UserpassAuthBackendUser#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_period UserpassAuthBackendUser#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_policies UserpassAuthBackendUser#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_ttl UserpassAuthBackendUser#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_type UserpassAuthBackendUser#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetAliasMetadata">reset_alias_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWo">reset_password_hash_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWoVersion">reset_password_hash_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWo">reset_password_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWoVersion">reset_password_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_alias_metadata` <a name="reset_alias_metadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetAliasMetadata"></a>

```python
def reset_alias_metadata() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_password_hash_wo` <a name="reset_password_hash_wo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWo"></a>

```python
def reset_password_hash_wo() -> None
```

##### `reset_password_hash_wo_version` <a name="reset_password_hash_wo_version" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWoVersion"></a>

```python
def reset_password_hash_wo_version() -> None
```

##### `reset_password_wo` <a name="reset_password_wo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWo"></a>

```python
def reset_password_wo() -> None
```

##### `reset_password_wo_version` <a name="reset_password_wo_version" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWoVersion"></a>

```python
def reset_password_wo_version() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenType"></a>

```python
def reset_token_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a UserpassAuthBackendUser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct"></a>

```python
from cdktn_provider_vault import userpass_auth_backend_user

userpassAuthBackendUser.UserpassAuthBackendUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement"></a>

```python
from cdktn_provider_vault import userpass_auth_backend_user

userpassAuthBackendUser.UserpassAuthBackendUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource"></a>

```python
from cdktn_provider_vault import userpass_auth_backend_user

userpassAuthBackendUser.UserpassAuthBackendUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport"></a>

```python
from cdktn_provider_vault import userpass_auth_backend_user

userpassAuthBackendUser.UserpassAuthBackendUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a UserpassAuthBackendUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UserpassAuthBackendUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UserpassAuthBackendUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the UserpassAuthBackendUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadataInput">alias_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoInput">password_hash_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersionInput">password_hash_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoInput">password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersionInput">password_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWo">password_hash_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersion">password_hash_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWo">password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersion">password_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias_metadata_input`<sup>Optional</sup> <a name="alias_metadata_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadataInput"></a>

```python
alias_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `password_hash_wo_input`<sup>Optional</sup> <a name="password_hash_wo_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoInput"></a>

```python
password_hash_wo_input: str
```

- *Type:* str

---

##### `password_hash_wo_version_input`<sup>Optional</sup> <a name="password_hash_wo_version_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersionInput"></a>

```python
password_hash_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_wo_input`<sup>Optional</sup> <a name="password_wo_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoInput"></a>

```python
password_wo_input: str
```

- *Type:* str

---

##### `password_wo_version_input`<sup>Optional</sup> <a name="password_wo_version_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersionInput"></a>

```python
password_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `alias_metadata`<sup>Required</sup> <a name="alias_metadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadata"></a>

```python
alias_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `password_hash_wo`<sup>Required</sup> <a name="password_hash_wo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWo"></a>

```python
password_hash_wo: str
```

- *Type:* str

---

##### `password_hash_wo_version`<sup>Required</sup> <a name="password_hash_wo_version" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersion"></a>

```python
password_hash_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_wo`<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWo"></a>

```python
password_wo: str
```

- *Type:* str

---

##### `password_wo_version`<sup>Required</sup> <a name="password_wo_version" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersion"></a>

```python
password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserpassAuthBackendUserConfig <a name="UserpassAuthBackendUserConfig" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.Initializer"></a>

```python
from cdktn_provider_vault import userpass_auth_backend_user

userpassAuthBackendUser.UserpassAuthBackendUserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  username: str,
  alias_metadata: typing.Mapping[str] = None,
  namespace: str = None,
  password_hash_wo: str = None,
  password_hash_wo_version: typing.Union[int, float] = None,
  password_wo: str = None,
  password_wo_version: typing.Union[int, float] = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: bool | IResolvable = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the Userpass auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.username">username</a></code> | <code>str</code> | Username for this Userpass user. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWo">password_hash_wo</a></code> | <code>str</code> | Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWoVersion">password_hash_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `password_hash_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWo">password_wo</a></code> | <code>str</code> | Password for this user. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWoVersion">password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `password_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the Userpass auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#mount UserpassAuthBackendUser#mount}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username for this Userpass user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#username UserpassAuthBackendUser#username}

---

##### `alias_metadata`<sup>Optional</sup> <a name="alias_metadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.aliasMetadata"></a>

```python
alias_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#alias_metadata UserpassAuthBackendUser#alias_metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#namespace UserpassAuthBackendUser#namespace}

---

##### `password_hash_wo`<sup>Optional</sup> <a name="password_hash_wo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWo"></a>

```python
password_hash_wo: str
```

- *Type:* str

Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo UserpassAuthBackendUser#password_hash_wo}

---

##### `password_hash_wo_version`<sup>Optional</sup> <a name="password_hash_wo_version" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWoVersion"></a>

```python
password_hash_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version counter for the write-only `password_hash_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password hash changes. Increment this value whenever you update `password_hash_wo` to ensure the new password hash is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo_version UserpassAuthBackendUser#password_hash_wo_version}

---

##### `password_wo`<sup>Optional</sup> <a name="password_wo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWo"></a>

```python
password_wo: str
```

- *Type:* str

Password for this user. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo UserpassAuthBackendUser#password_wo}

---

##### `password_wo_version`<sup>Optional</sup> <a name="password_wo_version" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWoVersion"></a>

```python
password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version counter for the write-only `password_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password changes. Increment this value whenever you update `password_wo` to ensure the new password is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo_version UserpassAuthBackendUser#password_wo_version}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_bound_cidrs UserpassAuthBackendUser#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_explicit_max_ttl UserpassAuthBackendUser#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_max_ttl UserpassAuthBackendUser#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_no_default_policy UserpassAuthBackendUser#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_num_uses UserpassAuthBackendUser#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_period UserpassAuthBackendUser#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_policies UserpassAuthBackendUser#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_ttl UserpassAuthBackendUser#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_type UserpassAuthBackendUser#token_type}

---



