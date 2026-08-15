# `ephemeralVaultToken` Submodule <a name="`ephemeralVaultToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultToken <a name="EphemeralVaultToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token vault_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_token

ephemeralVaultToken.EphemeralVaultToken(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  display_name: str = None,
  entity_alias: str = None,
  explicit_max_ttl: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  mount_id: str = None,
  namespace: str = None,
  no_default_policy: bool | IResolvable = None,
  no_parent: bool | IResolvable = None,
  num_uses: typing.Union[int, float] = None,
  period: str = None,
  policies: typing.List[str] = None,
  renewable: bool | IResolvable = None,
  role_name: str = None,
  ttl: str = None,
  type: str = None,
  wrapping_ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.entityAlias">entity_alias</a></code> | <code>str</code> | Name of the entity alias to associate with during token creation. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.explicitMaxTtl">explicit_max_ttl</a></code> | <code>str</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the client token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata to be associated with the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.noDefaultPolicy">no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to disable the default policy. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.noParent">no_parent</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to create a token without parent. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.numUses">num_uses</a></code> | <code>typing.Union[int, float]</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.period">period</a></code> | <code>str</code> | The period of the token for periodic tokens. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | List of policies to attach to the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.renewable">renewable</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | The token role name. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The TTL period of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.type">type</a></code> | <code>str</code> | The token type. Can be 'batch' or 'service'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.wrappingTtl">wrapping_ttl</a></code> | <code>str</code> | The TTL period of the wrapped token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#display_name EphemeralVaultToken#display_name}

---

##### `entity_alias`<sup>Optional</sup> <a name="entity_alias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.entityAlias"></a>

- *Type:* str

Name of the entity alias to associate with during token creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#entity_alias EphemeralVaultToken#entity_alias}

---

##### `explicit_max_ttl`<sup>Optional</sup> <a name="explicit_max_ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.explicitMaxTtl"></a>

- *Type:* str

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#explicit_max_ttl EphemeralVaultToken#explicit_max_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id"></a>

- *Type:* str

The ID of the client token.

This is an input field, not a resource identifier. Can only be specified by a root token. The ID provided may not contain a '.' character and should not start with the 's.' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#id EphemeralVaultToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#metadata EphemeralVaultToken#metadata}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#mount_id EphemeralVaultToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#namespace EphemeralVaultToken#namespace}

---

##### `no_default_policy`<sup>Optional</sup> <a name="no_default_policy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.noDefaultPolicy"></a>

- *Type:* bool | cdktn.IResolvable

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#no_default_policy EphemeralVaultToken#no_default_policy}

---

##### `no_parent`<sup>Optional</sup> <a name="no_parent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.noParent"></a>

- *Type:* bool | cdktn.IResolvable

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#no_parent EphemeralVaultToken#no_parent}

---

##### `num_uses`<sup>Optional</sup> <a name="num_uses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.numUses"></a>

- *Type:* typing.Union[int, float]

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#num_uses EphemeralVaultToken#num_uses}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.period"></a>

- *Type:* str

The period of the token for periodic tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#period EphemeralVaultToken#period}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

List of policies to attach to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#policies EphemeralVaultToken#policies}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.renewable"></a>

- *Type:* bool | cdktn.IResolvable

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#renewable EphemeralVaultToken#renewable}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.roleName"></a>

- *Type:* str

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#role_name EphemeralVaultToken#role_name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.ttl"></a>

- *Type:* str

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#ttl EphemeralVaultToken#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.type"></a>

- *Type:* str

The token type. Can be 'batch' or 'service'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#type EphemeralVaultToken#type}

---

##### `wrapping_ttl`<sup>Optional</sup> <a name="wrapping_ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.wrappingTtl"></a>

- *Type:* str

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#wrapping_ttl EphemeralVaultToken#wrapping_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetEntityAlias">reset_entity_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetExplicitMaxTtl">reset_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoDefaultPolicy">reset_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoParent">reset_no_parent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNumUses">reset_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRenewable">reset_renewable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRoleName">reset_role_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetWrappingTtl">reset_wrapping_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_entity_alias` <a name="reset_entity_alias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetEntityAlias"></a>

```python
def reset_entity_alias() -> None
```

##### `reset_explicit_max_ttl` <a name="reset_explicit_max_ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetExplicitMaxTtl"></a>

```python
def reset_explicit_max_ttl() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_no_default_policy` <a name="reset_no_default_policy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoDefaultPolicy"></a>

```python
def reset_no_default_policy() -> None
```

##### `reset_no_parent` <a name="reset_no_parent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoParent"></a>

```python
def reset_no_parent() -> None
```

##### `reset_num_uses` <a name="reset_num_uses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNumUses"></a>

```python
def reset_num_uses() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_renewable` <a name="reset_renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRenewable"></a>

```python
def reset_renewable() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRoleName"></a>

```python
def reset_role_name() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_wrapping_ttl` <a name="reset_wrapping_ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetWrappingTtl"></a>

```python
def reset_wrapping_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_token

ephemeralVaultToken.EphemeralVaultToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_token

ephemeralVaultToken.EphemeralVaultToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_token

ephemeralVaultToken.EphemeralVaultToken.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.orphan">orphan</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappedToken">wrapped_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingAccessor">wrapping_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAliasInput">entity_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtlInput">explicit_max_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicyInput">no_default_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParentInput">no_parent_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUsesInput">num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewableInput">renewable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtlInput">wrapping_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAlias">entity_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtl">explicit_max_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicy">no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParent">no_parent</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUses">num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewable">renewable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtl">wrapping_ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `orphan`<sup>Required</sup> <a name="orphan" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.orphan"></a>

```python
orphan: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wrapped_token`<sup>Required</sup> <a name="wrapped_token" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappedToken"></a>

```python
wrapped_token: str
```

- *Type:* str

---

##### `wrapping_accessor`<sup>Required</sup> <a name="wrapping_accessor" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingAccessor"></a>

```python
wrapping_accessor: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `entity_alias_input`<sup>Optional</sup> <a name="entity_alias_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAliasInput"></a>

```python
entity_alias_input: str
```

- *Type:* str

---

##### `explicit_max_ttl_input`<sup>Optional</sup> <a name="explicit_max_ttl_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtlInput"></a>

```python
explicit_max_ttl_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `no_default_policy_input`<sup>Optional</sup> <a name="no_default_policy_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicyInput"></a>

```python
no_default_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `no_parent_input`<sup>Optional</sup> <a name="no_parent_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParentInput"></a>

```python
no_parent_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `num_uses_input`<sup>Optional</sup> <a name="num_uses_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUsesInput"></a>

```python
num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renewable_input`<sup>Optional</sup> <a name="renewable_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewableInput"></a>

```python
renewable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `wrapping_ttl_input`<sup>Optional</sup> <a name="wrapping_ttl_input" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtlInput"></a>

```python
wrapping_ttl_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_alias`<sup>Required</sup> <a name="entity_alias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAlias"></a>

```python
entity_alias: str
```

- *Type:* str

---

##### `explicit_max_ttl`<sup>Required</sup> <a name="explicit_max_ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtl"></a>

```python
explicit_max_ttl: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `no_default_policy`<sup>Required</sup> <a name="no_default_policy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicy"></a>

```python
no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `no_parent`<sup>Required</sup> <a name="no_parent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParent"></a>

```python
no_parent: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `num_uses`<sup>Required</sup> <a name="num_uses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUses"></a>

```python
num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewable"></a>

```python
renewable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `wrapping_ttl`<sup>Required</sup> <a name="wrapping_ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtl"></a>

```python
wrapping_ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultTokenConfig <a name="EphemeralVaultTokenConfig" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_token

ephemeralVaultToken.EphemeralVaultTokenConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  display_name: str = None,
  entity_alias: str = None,
  explicit_max_ttl: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  mount_id: str = None,
  namespace: str = None,
  no_default_policy: bool | IResolvable = None,
  no_parent: bool | IResolvable = None,
  num_uses: typing.Union[int, float] = None,
  period: str = None,
  policies: typing.List[str] = None,
  renewable: bool | IResolvable = None,
  role_name: str = None,
  ttl: str = None,
  type: str = None,
  wrapping_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.entityAlias">entity_alias</a></code> | <code>str</code> | Name of the entity alias to associate with during token creation. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.explicitMaxTtl">explicit_max_ttl</a></code> | <code>str</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.id">id</a></code> | <code>str</code> | The ID of the client token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata to be associated with the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noDefaultPolicy">no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to disable the default policy. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noParent">no_parent</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to create a token without parent. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.numUses">num_uses</a></code> | <code>typing.Union[int, float]</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.period">period</a></code> | <code>str</code> | The period of the token for periodic tokens. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | List of policies to attach to the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.renewable">renewable</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.roleName">role_name</a></code> | <code>str</code> | The token role name. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.ttl">ttl</a></code> | <code>str</code> | The TTL period of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.type">type</a></code> | <code>str</code> | The token type. Can be 'batch' or 'service'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.wrappingTtl">wrapping_ttl</a></code> | <code>str</code> | The TTL period of the wrapped token. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#display_name EphemeralVaultToken#display_name}

---

##### `entity_alias`<sup>Optional</sup> <a name="entity_alias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.entityAlias"></a>

```python
entity_alias: str
```

- *Type:* str

Name of the entity alias to associate with during token creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#entity_alias EphemeralVaultToken#entity_alias}

---

##### `explicit_max_ttl`<sup>Optional</sup> <a name="explicit_max_ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.explicitMaxTtl"></a>

```python
explicit_max_ttl: str
```

- *Type:* str

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#explicit_max_ttl EphemeralVaultToken#explicit_max_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the client token.

This is an input field, not a resource identifier. Can only be specified by a root token. The ID provided may not contain a '.' character and should not start with the 's.' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#id EphemeralVaultToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#metadata EphemeralVaultToken#metadata}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#mount_id EphemeralVaultToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#namespace EphemeralVaultToken#namespace}

---

##### `no_default_policy`<sup>Optional</sup> <a name="no_default_policy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noDefaultPolicy"></a>

```python
no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#no_default_policy EphemeralVaultToken#no_default_policy}

---

##### `no_parent`<sup>Optional</sup> <a name="no_parent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noParent"></a>

```python
no_parent: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#no_parent EphemeralVaultToken#no_parent}

---

##### `num_uses`<sup>Optional</sup> <a name="num_uses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.numUses"></a>

```python
num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#num_uses EphemeralVaultToken#num_uses}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.period"></a>

```python
period: str
```

- *Type:* str

The period of the token for periodic tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#period EphemeralVaultToken#period}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

List of policies to attach to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#policies EphemeralVaultToken#policies}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.renewable"></a>

```python
renewable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#renewable EphemeralVaultToken#renewable}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#role_name EphemeralVaultToken#role_name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#ttl EphemeralVaultToken#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The token type. Can be 'batch' or 'service'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#type EphemeralVaultToken#type}

---

##### `wrapping_ttl`<sup>Optional</sup> <a name="wrapping_ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.wrappingTtl"></a>

```python
wrapping_ttl: str
```

- *Type:* str

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/token#wrapping_ttl EphemeralVaultToken#wrapping_ttl}

---



