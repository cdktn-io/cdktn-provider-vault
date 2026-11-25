# `transformTransformationFpe` Submodule <a name="`transformTransformationFpe` Submodule" id="@cdktn/provider-vault.transformTransformationFpe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationFpe <a name="TransformTransformationFpe" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe vault_transform_transformation_fpe}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer"></a>

```python
from cdktn_provider_vault import transform_transformation_fpe

transformTransformationFpe.TransformTransformationFpe(
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
  name: str,
  template: str,
  allowed_roles: typing.List[str] = None,
  deletion_allowed: bool | IResolvable = None,
  max_tweak_len: typing.Union[int, float] = None,
  namespace: str = None,
  tweak_source: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the Transform secrets engine is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the transformation. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.template">template</a></code> | <code>str</code> | Name of the template used to match values on encode and decode operations. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | Roles allowed to use this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | If `true`, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.maxTweakLen">max_tweak_len</a></code> | <code>typing.Union[int, float]</code> | Maximum tweak size, in bytes, allowed for this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.tweakSource">tweak_source</a></code> | <code>str</code> | Source of the tweak value. Valid values are `supplied`, `generated` and `internal`. Vault uses `supplied` if not set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.mount"></a>

- *Type:* str

Path where the Transform secrets engine is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#mount TransformTransformationFpe#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.name"></a>

- *Type:* str

Name of the transformation. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#name TransformTransformationFpe#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.template"></a>

- *Type:* str

Name of the template used to match values on encode and decode operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#template TransformTransformationFpe#template}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.allowedRoles"></a>

- *Type:* typing.List[str]

Roles allowed to use this transformation.

A role using this transformation must be in this list for encode and decode operations to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#allowed_roles TransformTransformationFpe#allowed_roles}

---

##### `deletion_allowed`<sup>Optional</sup> <a name="deletion_allowed" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.deletionAllowed"></a>

- *Type:* bool | cdktn.IResolvable

If `true`, this transformation can be deleted.

Otherwise deletion is blocked while this value is `false`. Deleting the transformation deletes the underlying key, making FPE-encoded values impossible to decode without restoring from a backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#deletion_allowed TransformTransformationFpe#deletion_allowed}

---

##### `max_tweak_len`<sup>Optional</sup> <a name="max_tweak_len" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.maxTweakLen"></a>

- *Type:* typing.Union[int, float]

Maximum tweak size, in bytes, allowed for this transformation.

Valid values are 0 to 32; 0 allows a tweak of any length. Vault does not allow this value to be changed after creation, so changing it fails at apply time. Requires Vault 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#max_tweak_len TransformTransformationFpe#max_tweak_len}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#namespace TransformTransformationFpe#namespace}

---

##### `tweak_source`<sup>Optional</sup> <a name="tweak_source" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.tweakSource"></a>

- *Type:* str

Source of the tweak value. Valid values are `supplied`, `generated` and `internal`. Vault uses `supplied` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#tweak_source TransformTransformationFpe#tweak_source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetAllowedRoles">reset_allowed_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetDeletionAllowed">reset_deletion_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetMaxTweakLen">reset_max_tweak_len</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetTweakSource">reset_tweak_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_roles` <a name="reset_allowed_roles" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetAllowedRoles"></a>

```python
def reset_allowed_roles() -> None
```

##### `reset_deletion_allowed` <a name="reset_deletion_allowed" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetDeletionAllowed"></a>

```python
def reset_deletion_allowed() -> None
```

##### `reset_max_tweak_len` <a name="reset_max_tweak_len" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetMaxTweakLen"></a>

```python
def reset_max_tweak_len() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_tweak_source` <a name="reset_tweak_source" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetTweakSource"></a>

```python
def reset_tweak_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TransformTransformationFpe resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isConstruct"></a>

```python
from cdktn_provider_vault import transform_transformation_fpe

transformTransformationFpe.TransformTransformationFpe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformElement"></a>

```python
from cdktn_provider_vault import transform_transformation_fpe

transformTransformationFpe.TransformTransformationFpe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformResource"></a>

```python
from cdktn_provider_vault import transform_transformation_fpe

transformTransformationFpe.TransformTransformationFpe.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport"></a>

```python
from cdktn_provider_vault import transform_transformation_fpe

transformTransformationFpe.TransformTransformationFpe.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TransformTransformationFpe resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransformTransformationFpe to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransformTransformationFpe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationFpe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.fpeAlgorithm">fpe_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.allowedRolesInput">allowed_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.deletionAllowedInput">deletion_allowed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.maxTweakLenInput">max_tweak_len_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.templateInput">template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tweakSourceInput">tweak_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.maxTweakLen">max_tweak_len</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.template">template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tweakSource">tweak_source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fpe_algorithm`<sup>Required</sup> <a name="fpe_algorithm" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.fpeAlgorithm"></a>

```python
fpe_algorithm: str
```

- *Type:* str

---

##### `allowed_roles_input`<sup>Optional</sup> <a name="allowed_roles_input" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.allowedRolesInput"></a>

```python
allowed_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_allowed_input`<sup>Optional</sup> <a name="deletion_allowed_input" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.deletionAllowedInput"></a>

```python
deletion_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_tweak_len_input`<sup>Optional</sup> <a name="max_tweak_len_input" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.maxTweakLenInput"></a>

```python
max_tweak_len_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.templateInput"></a>

```python
template_input: str
```

- *Type:* str

---

##### `tweak_source_input`<sup>Optional</sup> <a name="tweak_source_input" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tweakSourceInput"></a>

```python
tweak_source_input: str
```

- *Type:* str

---

##### `allowed_roles`<sup>Required</sup> <a name="allowed_roles" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_allowed`<sup>Required</sup> <a name="deletion_allowed" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.deletionAllowed"></a>

```python
deletion_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_tweak_len`<sup>Required</sup> <a name="max_tweak_len" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.maxTweakLen"></a>

```python
max_tweak_len: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.template"></a>

```python
template: str
```

- *Type:* str

---

##### `tweak_source`<sup>Required</sup> <a name="tweak_source" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tweakSource"></a>

```python
tweak_source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationFpeConfig <a name="TransformTransformationFpeConfig" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.Initializer"></a>

```python
from cdktn_provider_vault import transform_transformation_fpe

transformTransformationFpe.TransformTransformationFpeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  name: str,
  template: str,
  allowed_roles: typing.List[str] = None,
  deletion_allowed: bool | IResolvable = None,
  max_tweak_len: typing.Union[int, float] = None,
  namespace: str = None,
  tweak_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.mount">mount</a></code> | <code>str</code> | Path where the Transform secrets engine is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.name">name</a></code> | <code>str</code> | Name of the transformation. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.template">template</a></code> | <code>str</code> | Name of the template used to match values on encode and decode operations. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | Roles allowed to use this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | If `true`, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.maxTweakLen">max_tweak_len</a></code> | <code>typing.Union[int, float]</code> | Maximum tweak size, in bytes, allowed for this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.tweakSource">tweak_source</a></code> | <code>str</code> | Source of the tweak value. Valid values are `supplied`, `generated` and `internal`. Vault uses `supplied` if not set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the Transform secrets engine is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#mount TransformTransformationFpe#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the transformation. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#name TransformTransformationFpe#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.template"></a>

```python
template: str
```

- *Type:* str

Name of the template used to match values on encode and decode operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#template TransformTransformationFpe#template}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

Roles allowed to use this transformation.

A role using this transformation must be in this list for encode and decode operations to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#allowed_roles TransformTransformationFpe#allowed_roles}

---

##### `deletion_allowed`<sup>Optional</sup> <a name="deletion_allowed" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.deletionAllowed"></a>

```python
deletion_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If `true`, this transformation can be deleted.

Otherwise deletion is blocked while this value is `false`. Deleting the transformation deletes the underlying key, making FPE-encoded values impossible to decode without restoring from a backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#deletion_allowed TransformTransformationFpe#deletion_allowed}

---

##### `max_tweak_len`<sup>Optional</sup> <a name="max_tweak_len" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.maxTweakLen"></a>

```python
max_tweak_len: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum tweak size, in bytes, allowed for this transformation.

Valid values are 0 to 32; 0 allows a tweak of any length. Vault does not allow this value to be changed after creation, so changing it fails at apply time. Requires Vault 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#max_tweak_len TransformTransformationFpe#max_tweak_len}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#namespace TransformTransformationFpe#namespace}

---

##### `tweak_source`<sup>Optional</sup> <a name="tweak_source" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.tweakSource"></a>

```python
tweak_source: str
```

- *Type:* str

Source of the tweak value. Valid values are `supplied`, `generated` and `internal`. Vault uses `supplied` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#tweak_source TransformTransformationFpe#tweak_source}

---



