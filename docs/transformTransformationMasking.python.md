# `transformTransformationMasking` Submodule <a name="`transformTransformationMasking` Submodule" id="@cdktn/provider-vault.transformTransformationMasking"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationMasking <a name="TransformTransformationMasking" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking vault_transform_transformation_masking}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer"></a>

```python
from cdktn_provider_vault import transform_transformation_masking

transformTransformationMasking.TransformTransformationMasking(
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
  masking_character: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.template">template</a></code> | <code>str</code> | Specifies the template name to use for matching value on encode and decode operations when using this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | The list of roles allowed to perform this transformation. Defaults to an empty list when not set. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.maskingCharacter">masking_character</a></code> | <code>str</code> | Specifies the single character to use for masking. Defaults to `*` when not set. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.mount"></a>

- *Type:* str

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#mount TransformTransformationMasking#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.name"></a>

- *Type:* str

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#name TransformTransformationMasking#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.template"></a>

- *Type:* str

Specifies the template name to use for matching value on encode and decode operations when using this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#template TransformTransformationMasking#template}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.allowedRoles"></a>

- *Type:* typing.List[str]

The list of roles allowed to perform this transformation. Defaults to an empty list when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#allowed_roles TransformTransformationMasking#allowed_roles}

---

##### `masking_character`<sup>Optional</sup> <a name="masking_character" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.maskingCharacter"></a>

- *Type:* str

Specifies the single character to use for masking. Defaults to `*` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#masking_character TransformTransformationMasking#masking_character}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#namespace TransformTransformationMasking#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.resetAllowedRoles">reset_allowed_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.resetMaskingCharacter">reset_masking_character</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_roles` <a name="reset_allowed_roles" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.resetAllowedRoles"></a>

```python
def reset_allowed_roles() -> None
```

##### `reset_masking_character` <a name="reset_masking_character" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.resetMaskingCharacter"></a>

```python
def reset_masking_character() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TransformTransformationMasking resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.isConstruct"></a>

```python
from cdktn_provider_vault import transform_transformation_masking

transformTransformationMasking.TransformTransformationMasking.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.isTerraformElement"></a>

```python
from cdktn_provider_vault import transform_transformation_masking

transformTransformationMasking.TransformTransformationMasking.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.isTerraformResource"></a>

```python
from cdktn_provider_vault import transform_transformation_masking

transformTransformationMasking.TransformTransformationMasking.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.generateConfigForImport"></a>

```python
from cdktn_provider_vault import transform_transformation_masking

transformTransformationMasking.TransformTransformationMasking.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TransformTransformationMasking resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransformTransformationMasking to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransformTransformationMasking that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationMasking to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.allowedRolesInput">allowed_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.maskingCharacterInput">masking_character_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.templateInput">template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.maskingCharacter">masking_character</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.template">template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_roles_input`<sup>Optional</sup> <a name="allowed_roles_input" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.allowedRolesInput"></a>

```python
allowed_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `masking_character_input`<sup>Optional</sup> <a name="masking_character_input" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.maskingCharacterInput"></a>

```python
masking_character_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.templateInput"></a>

```python
template_input: str
```

- *Type:* str

---

##### `allowed_roles`<sup>Required</sup> <a name="allowed_roles" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `masking_character`<sup>Required</sup> <a name="masking_character" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.maskingCharacter"></a>

```python
masking_character: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.template"></a>

```python
template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMasking.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationMaskingConfig <a name="TransformTransformationMaskingConfig" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.Initializer"></a>

```python
from cdktn_provider_vault import transform_transformation_masking

transformTransformationMasking.TransformTransformationMaskingConfig(
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
  masking_character: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.mount">mount</a></code> | <code>str</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.name">name</a></code> | <code>str</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.template">template</a></code> | <code>str</code> | Specifies the template name to use for matching value on encode and decode operations when using this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | The list of roles allowed to perform this transformation. Defaults to an empty list when not set. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.maskingCharacter">masking_character</a></code> | <code>str</code> | Specifies the single character to use for masking. Defaults to `*` when not set. |
| <code><a href="#@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#mount TransformTransformationMasking#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#name TransformTransformationMasking#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.template"></a>

```python
template: str
```

- *Type:* str

Specifies the template name to use for matching value on encode and decode operations when using this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#template TransformTransformationMasking#template}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

The list of roles allowed to perform this transformation. Defaults to an empty list when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#allowed_roles TransformTransformationMasking#allowed_roles}

---

##### `masking_character`<sup>Optional</sup> <a name="masking_character" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.maskingCharacter"></a>

```python
masking_character: str
```

- *Type:* str

Specifies the single character to use for masking. Defaults to `*` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#masking_character TransformTransformationMasking#masking_character}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationMasking.TransformTransformationMaskingConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_masking#namespace TransformTransformationMasking#namespace}

---



