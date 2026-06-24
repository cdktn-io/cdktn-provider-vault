# `configUiDefaultAuth` Submodule <a name="`configUiDefaultAuth` Submodule" id="@cdktn/provider-vault.configUiDefaultAuth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigUiDefaultAuth <a name="ConfigUiDefaultAuth" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth vault_config_ui_default_auth}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer"></a>

```python
from cdktn_provider_vault import config_ui_default_auth

configUiDefaultAuth.ConfigUiDefaultAuth(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_auth_type: str,
  name: str,
  backup_auth_types: typing.List[str] = None,
  disable_inheritance: bool | IResolvable = None,
  namespace: str = None,
  namespace_path: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.defaultAuthType">default_auth_type</a></code> | <code>str</code> | The default authentication method. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique identifier for the configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.backupAuthTypes">backup_auth_types</a></code> | <code>typing.List[str]</code> | List of backup authentication methods. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.disableInheritance">disable_inheritance</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.namespacePath">namespace_path</a></code> | <code>str</code> | Target namespace for the configuration. Empty string or omitted applies to root namespace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_auth_type`<sup>Required</sup> <a name="default_auth_type" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.defaultAuthType"></a>

- *Type:* str

The default authentication method.

Uses `OneOf` validator to ensure only valid auth methods are accepted: github, jwt, ldap, oidc, okta, radius, saml, token, userpass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#default_auth_type ConfigUiDefaultAuth#default_auth_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.name"></a>

- *Type:* str

Unique identifier for the configuration.

Can contain letters, numbers, underscores, and dashes. Uses `RequiresReplace()` plan modifier - changing this forces resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#name ConfigUiDefaultAuth#name}

---

##### `backup_auth_types`<sup>Optional</sup> <a name="backup_auth_types" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.backupAuthTypes"></a>

- *Type:* typing.List[str]

List of backup authentication methods.

Uses `ListAttribute` with `ElementType: StringType` to preserve order of backup methods. Each must be a valid auth type. Vault presents these in the "Sign in with other methods" tab. **Note:** Removing this field from configuration will clear it in Vault by sending an empty array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#backup_auth_types ConfigUiDefaultAuth#backup_auth_types}

---

##### `disable_inheritance`<sup>Optional</sup> <a name="disable_inheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.disableInheritance"></a>

- *Type:* bool | cdktn.IResolvable

If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration.

**Note:** Removing this field from configuration will reset it to `false` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#disable_inheritance ConfigUiDefaultAuth#disable_inheritance}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#namespace ConfigUiDefaultAuth#namespace}

---

##### `namespace_path`<sup>Optional</sup> <a name="namespace_path" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.namespacePath"></a>

- *Type:* str

Target namespace for the configuration. Empty string or omitted applies to root namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#namespace_path ConfigUiDefaultAuth#namespace_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetBackupAuthTypes">reset_backup_auth_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetDisableInheritance">reset_disable_inheritance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespacePath">reset_namespace_path</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_backup_auth_types` <a name="reset_backup_auth_types" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetBackupAuthTypes"></a>

```python
def reset_backup_auth_types() -> None
```

##### `reset_disable_inheritance` <a name="reset_disable_inheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetDisableInheritance"></a>

```python
def reset_disable_inheritance() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_namespace_path` <a name="reset_namespace_path" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespacePath"></a>

```python
def reset_namespace_path() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct"></a>

```python
from cdktn_provider_vault import config_ui_default_auth

configUiDefaultAuth.ConfigUiDefaultAuth.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement"></a>

```python
from cdktn_provider_vault import config_ui_default_auth

configUiDefaultAuth.ConfigUiDefaultAuth.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource"></a>

```python
from cdktn_provider_vault import config_ui_default_auth

configUiDefaultAuth.ConfigUiDefaultAuth.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport"></a>

```python
from cdktn_provider_vault import config_ui_default_auth

configUiDefaultAuth.ConfigUiDefaultAuth.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigUiDefaultAuth to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigUiDefaultAuth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigUiDefaultAuth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypesInput">backup_auth_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthTypeInput">default_auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritanceInput">disable_inheritance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePathInput">namespace_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypes">backup_auth_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthType">default_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritance">disable_inheritance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePath">namespace_path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `backup_auth_types_input`<sup>Optional</sup> <a name="backup_auth_types_input" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypesInput"></a>

```python
backup_auth_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_auth_type_input`<sup>Optional</sup> <a name="default_auth_type_input" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthTypeInput"></a>

```python
default_auth_type_input: str
```

- *Type:* str

---

##### `disable_inheritance_input`<sup>Optional</sup> <a name="disable_inheritance_input" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritanceInput"></a>

```python
disable_inheritance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `namespace_path_input`<sup>Optional</sup> <a name="namespace_path_input" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePathInput"></a>

```python
namespace_path_input: str
```

- *Type:* str

---

##### `backup_auth_types`<sup>Required</sup> <a name="backup_auth_types" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypes"></a>

```python
backup_auth_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_auth_type`<sup>Required</sup> <a name="default_auth_type" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthType"></a>

```python
default_auth_type: str
```

- *Type:* str

---

##### `disable_inheritance`<sup>Required</sup> <a name="disable_inheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritance"></a>

```python
disable_inheritance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `namespace_path`<sup>Required</sup> <a name="namespace_path" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePath"></a>

```python
namespace_path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigUiDefaultAuthConfig <a name="ConfigUiDefaultAuthConfig" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.Initializer"></a>

```python
from cdktn_provider_vault import config_ui_default_auth

configUiDefaultAuth.ConfigUiDefaultAuthConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_auth_type: str,
  name: str,
  backup_auth_types: typing.List[str] = None,
  disable_inheritance: bool | IResolvable = None,
  namespace: str = None,
  namespace_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.defaultAuthType">default_auth_type</a></code> | <code>str</code> | The default authentication method. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.name">name</a></code> | <code>str</code> | Unique identifier for the configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.backupAuthTypes">backup_auth_types</a></code> | <code>typing.List[str]</code> | List of backup authentication methods. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.disableInheritance">disable_inheritance</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespacePath">namespace_path</a></code> | <code>str</code> | Target namespace for the configuration. Empty string or omitted applies to root namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_auth_type`<sup>Required</sup> <a name="default_auth_type" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.defaultAuthType"></a>

```python
default_auth_type: str
```

- *Type:* str

The default authentication method.

Uses `OneOf` validator to ensure only valid auth methods are accepted: github, jwt, ldap, oidc, okta, radius, saml, token, userpass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#default_auth_type ConfigUiDefaultAuth#default_auth_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique identifier for the configuration.

Can contain letters, numbers, underscores, and dashes. Uses `RequiresReplace()` plan modifier - changing this forces resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#name ConfigUiDefaultAuth#name}

---

##### `backup_auth_types`<sup>Optional</sup> <a name="backup_auth_types" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.backupAuthTypes"></a>

```python
backup_auth_types: typing.List[str]
```

- *Type:* typing.List[str]

List of backup authentication methods.

Uses `ListAttribute` with `ElementType: StringType` to preserve order of backup methods. Each must be a valid auth type. Vault presents these in the "Sign in with other methods" tab. **Note:** Removing this field from configuration will clear it in Vault by sending an empty array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#backup_auth_types ConfigUiDefaultAuth#backup_auth_types}

---

##### `disable_inheritance`<sup>Optional</sup> <a name="disable_inheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.disableInheritance"></a>

```python
disable_inheritance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration.

**Note:** Removing this field from configuration will reset it to `false` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#disable_inheritance ConfigUiDefaultAuth#disable_inheritance}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#namespace ConfigUiDefaultAuth#namespace}

---

##### `namespace_path`<sup>Optional</sup> <a name="namespace_path" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespacePath"></a>

```python
namespace_path: str
```

- *Type:* str

Target namespace for the configuration. Empty string or omitted applies to root namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#namespace_path ConfigUiDefaultAuth#namespace_path}

---



