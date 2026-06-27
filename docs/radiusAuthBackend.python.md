# `radiusAuthBackend` Submodule <a name="`radiusAuthBackend` Submodule" id="@cdktn/provider-vault.radiusAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RadiusAuthBackend <a name="RadiusAuthBackend" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend vault_radius_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer"></a>

```python
from cdktn_provider_vault import radius_auth_backend

radiusAuthBackend.RadiusAuthBackend(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  host: str,
  mount: str,
  secret_wo: str,
  secret_wo_version: typing.Union[int, float],
  alias_metadata: typing.Mapping[str] = None,
  dial_timeout: typing.Union[int, float] = None,
  namespace: str = None,
  nas_port: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  read_timeout: typing.Union[int, float] = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: bool | IResolvable = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None,
  unregistered_user_policies: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.host">host</a></code> | <code>str</code> | The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path of the enabled RADIUS auth backend mount to configure. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.secretWo">secret_wo</a></code> | <code>str</code> | The RADIUS shared secret. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.secretWoVersion">secret_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `secret_wo` field. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.dialTimeout">dial_timeout</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait for a backend connection before timing out. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.nasPort">nas_port</a></code> | <code>typing.Union[int, float]</code> | The NAS-Port attribute of the RADIUS request. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The UDP port where the RADIUS server is listening on. Defaults to `1812`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.readTimeout">read_timeout</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait for a response from the RADIUS server. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.unregisteredUserPolicies">unregistered_user_policies</a></code> | <code>typing.List[str]</code> | A set of policies to be granted to unregistered users. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.host"></a>

- *Type:* str

The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#host RadiusAuthBackend#host}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.mount"></a>

- *Type:* str

Path of the enabled RADIUS auth backend mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#mount RadiusAuthBackend#mount}

---

##### `secret_wo`<sup>Required</sup> <a name="secret_wo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.secretWo"></a>

- *Type:* str

The RADIUS shared secret. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#secret_wo RadiusAuthBackend#secret_wo}

---

##### `secret_wo_version`<sup>Required</sup> <a name="secret_wo_version" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.secretWoVersion"></a>

- *Type:* typing.Union[int, float]

Version counter for the write-only `secret_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the secret changes. Increment this value whenever you update `secret_wo` so Terraform detects the change and applies an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#secret_wo_version RadiusAuthBackend#secret_wo_version}

---

##### `alias_metadata`<sup>Optional</sup> <a name="alias_metadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.aliasMetadata"></a>

- *Type:* typing.Mapping[str]

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#alias_metadata RadiusAuthBackend#alias_metadata}

---

##### `dial_timeout`<sup>Optional</sup> <a name="dial_timeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.dialTimeout"></a>

- *Type:* typing.Union[int, float]

Number of seconds to wait for a backend connection before timing out.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#dial_timeout RadiusAuthBackend#dial_timeout}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#namespace RadiusAuthBackend#namespace}

---

##### `nas_port`<sup>Optional</sup> <a name="nas_port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.nasPort"></a>

- *Type:* typing.Union[int, float]

The NAS-Port attribute of the RADIUS request.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#nas_port RadiusAuthBackend#nas_port}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The UDP port where the RADIUS server is listening on. Defaults to `1812`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#port RadiusAuthBackend#port}

---

##### `read_timeout`<sup>Optional</sup> <a name="read_timeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.readTimeout"></a>

- *Type:* typing.Union[int, float]

Number of seconds to wait for a response from the RADIUS server.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#read_timeout RadiusAuthBackend#read_timeout}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_bound_cidrs RadiusAuthBackend#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_explicit_max_ttl RadiusAuthBackend#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_max_ttl RadiusAuthBackend#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* bool | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_no_default_policy RadiusAuthBackend#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_num_uses RadiusAuthBackend#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_period RadiusAuthBackend#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_policies RadiusAuthBackend#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_ttl RadiusAuthBackend#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_type RadiusAuthBackend#token_type}

---

##### `unregistered_user_policies`<sup>Optional</sup> <a name="unregistered_user_policies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.unregisteredUserPolicies"></a>

- *Type:* typing.List[str]

A set of policies to be granted to unregistered users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#unregistered_user_policies RadiusAuthBackend#unregistered_user_policies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetAliasMetadata">reset_alias_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetDialTimeout">reset_dial_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNasPort">reset_nas_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetReadTimeout">reset_read_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenType">reset_token_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetUnregisteredUserPolicies">reset_unregistered_user_policies</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_alias_metadata` <a name="reset_alias_metadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetAliasMetadata"></a>

```python
def reset_alias_metadata() -> None
```

##### `reset_dial_timeout` <a name="reset_dial_timeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetDialTimeout"></a>

```python
def reset_dial_timeout() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_nas_port` <a name="reset_nas_port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNasPort"></a>

```python
def reset_nas_port() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_read_timeout` <a name="reset_read_timeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetReadTimeout"></a>

```python
def reset_read_timeout() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenType"></a>

```python
def reset_token_type() -> None
```

##### `reset_unregistered_user_policies` <a name="reset_unregistered_user_policies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetUnregisteredUserPolicies"></a>

```python
def reset_unregistered_user_policies() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct"></a>

```python
from cdktn_provider_vault import radius_auth_backend

radiusAuthBackend.RadiusAuthBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement"></a>

```python
from cdktn_provider_vault import radius_auth_backend

radiusAuthBackend.RadiusAuthBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource"></a>

```python
from cdktn_provider_vault import radius_auth_backend

radiusAuthBackend.RadiusAuthBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport"></a>

```python
from cdktn_provider_vault import radius_auth_backend

radiusAuthBackend.RadiusAuthBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RadiusAuthBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RadiusAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RadiusAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasIdentifier">nas_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadataInput">alias_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeoutInput">dial_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPortInput">nas_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeoutInput">read_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoInput">secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersionInput">secret_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPoliciesInput">unregistered_user_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeout">dial_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPort">nas_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeout">read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWo">secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersion">secret_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPolicies">unregistered_user_policies</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `nas_identifier`<sup>Required</sup> <a name="nas_identifier" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasIdentifier"></a>

```python
nas_identifier: str
```

- *Type:* str

---

##### `alias_metadata_input`<sup>Optional</sup> <a name="alias_metadata_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadataInput"></a>

```python
alias_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `dial_timeout_input`<sup>Optional</sup> <a name="dial_timeout_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeoutInput"></a>

```python
dial_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `nas_port_input`<sup>Optional</sup> <a name="nas_port_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPortInput"></a>

```python
nas_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_timeout_input`<sup>Optional</sup> <a name="read_timeout_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeoutInput"></a>

```python
read_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_wo_input`<sup>Optional</sup> <a name="secret_wo_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoInput"></a>

```python
secret_wo_input: str
```

- *Type:* str

---

##### `secret_wo_version_input`<sup>Optional</sup> <a name="secret_wo_version_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersionInput"></a>

```python
secret_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `unregistered_user_policies_input`<sup>Optional</sup> <a name="unregistered_user_policies_input" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPoliciesInput"></a>

```python
unregistered_user_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias_metadata`<sup>Required</sup> <a name="alias_metadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadata"></a>

```python
alias_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `dial_timeout`<sup>Required</sup> <a name="dial_timeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeout"></a>

```python
dial_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `nas_port`<sup>Required</sup> <a name="nas_port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPort"></a>

```python
nas_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_timeout`<sup>Required</sup> <a name="read_timeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeout"></a>

```python
read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_wo`<sup>Required</sup> <a name="secret_wo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWo"></a>

```python
secret_wo: str
```

- *Type:* str

---

##### `secret_wo_version`<sup>Required</sup> <a name="secret_wo_version" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersion"></a>

```python
secret_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `unregistered_user_policies`<sup>Required</sup> <a name="unregistered_user_policies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPolicies"></a>

```python
unregistered_user_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RadiusAuthBackendConfig <a name="RadiusAuthBackendConfig" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.Initializer"></a>

```python
from cdktn_provider_vault import radius_auth_backend

radiusAuthBackend.RadiusAuthBackendConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  host: str,
  mount: str,
  secret_wo: str,
  secret_wo_version: typing.Union[int, float],
  alias_metadata: typing.Mapping[str] = None,
  dial_timeout: typing.Union[int, float] = None,
  namespace: str = None,
  nas_port: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  read_timeout: typing.Union[int, float] = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: bool | IResolvable = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None,
  unregistered_user_policies: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.host">host</a></code> | <code>str</code> | The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.mount">mount</a></code> | <code>str</code> | Path of the enabled RADIUS auth backend mount to configure. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWo">secret_wo</a></code> | <code>str</code> | The RADIUS shared secret. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWoVersion">secret_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `secret_wo` field. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dialTimeout">dial_timeout</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait for a backend connection before timing out. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.nasPort">nas_port</a></code> | <code>typing.Union[int, float]</code> | The NAS-Port attribute of the RADIUS request. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The UDP port where the RADIUS server is listening on. Defaults to `1812`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.readTimeout">read_timeout</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait for a response from the RADIUS server. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.unregisteredUserPolicies">unregistered_user_policies</a></code> | <code>typing.List[str]</code> | A set of policies to be granted to unregistered users. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#host RadiusAuthBackend#host}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path of the enabled RADIUS auth backend mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#mount RadiusAuthBackend#mount}

---

##### `secret_wo`<sup>Required</sup> <a name="secret_wo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWo"></a>

```python
secret_wo: str
```

- *Type:* str

The RADIUS shared secret. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#secret_wo RadiusAuthBackend#secret_wo}

---

##### `secret_wo_version`<sup>Required</sup> <a name="secret_wo_version" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWoVersion"></a>

```python
secret_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version counter for the write-only `secret_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the secret changes. Increment this value whenever you update `secret_wo` so Terraform detects the change and applies an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#secret_wo_version RadiusAuthBackend#secret_wo_version}

---

##### `alias_metadata`<sup>Optional</sup> <a name="alias_metadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.aliasMetadata"></a>

```python
alias_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#alias_metadata RadiusAuthBackend#alias_metadata}

---

##### `dial_timeout`<sup>Optional</sup> <a name="dial_timeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dialTimeout"></a>

```python
dial_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds to wait for a backend connection before timing out.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#dial_timeout RadiusAuthBackend#dial_timeout}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#namespace RadiusAuthBackend#namespace}

---

##### `nas_port`<sup>Optional</sup> <a name="nas_port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.nasPort"></a>

```python
nas_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The NAS-Port attribute of the RADIUS request.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#nas_port RadiusAuthBackend#nas_port}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The UDP port where the RADIUS server is listening on. Defaults to `1812`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#port RadiusAuthBackend#port}

---

##### `read_timeout`<sup>Optional</sup> <a name="read_timeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.readTimeout"></a>

```python
read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds to wait for a response from the RADIUS server.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#read_timeout RadiusAuthBackend#read_timeout}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_bound_cidrs RadiusAuthBackend#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_explicit_max_ttl RadiusAuthBackend#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_max_ttl RadiusAuthBackend#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_no_default_policy RadiusAuthBackend#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_num_uses RadiusAuthBackend#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_period RadiusAuthBackend#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_policies RadiusAuthBackend#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_ttl RadiusAuthBackend#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_type RadiusAuthBackend#token_type}

---

##### `unregistered_user_policies`<sup>Optional</sup> <a name="unregistered_user_policies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.unregisteredUserPolicies"></a>

```python
unregistered_user_policies: typing.List[str]
```

- *Type:* typing.List[str]

A set of policies to be granted to unregistered users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#unregistered_user_policies RadiusAuthBackend#unregistered_user_policies}

---



