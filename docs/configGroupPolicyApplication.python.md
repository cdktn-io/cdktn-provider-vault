# `configGroupPolicyApplication` Submodule <a name="`configGroupPolicyApplication` Submodule" id="@cdktn/provider-vault.configGroupPolicyApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigGroupPolicyApplication <a name="ConfigGroupPolicyApplication" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_group_policy_application vault_config_group_policy_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer"></a>

```python
from cdktn_provider_vault import config_group_policy_application

configGroupPolicyApplication.ConfigGroupPolicyApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_policy_application_mode: str,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.groupPolicyApplicationMode">group_policy_application_mode</a></code> | <code>str</code> | Mode for group policy application. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_policy_application_mode`<sup>Required</sup> <a name="group_policy_application_mode" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.groupPolicyApplicationMode"></a>

- *Type:* str

Mode for group policy application.

Must be either "within_namespace_hierarchy" or "any". "within_namespace_hierarchy" means policies only apply when the token authorizing a request was created in the same namespace as the group, or a descendant namespace. "any" means group policies apply to all members of a group, regardless of what namespace the request token came from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_group_policy_application#group_policy_application_mode ConfigGroupPolicyApplication#group_policy_application_mode}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_group_policy_application#namespace ConfigGroupPolicyApplication#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigGroupPolicyApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isConstruct"></a>

```python
from cdktn_provider_vault import config_group_policy_application

configGroupPolicyApplication.ConfigGroupPolicyApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformElement"></a>

```python
from cdktn_provider_vault import config_group_policy_application

configGroupPolicyApplication.ConfigGroupPolicyApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformResource"></a>

```python
from cdktn_provider_vault import config_group_policy_application

configGroupPolicyApplication.ConfigGroupPolicyApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport"></a>

```python
from cdktn_provider_vault import config_group_policy_application

configGroupPolicyApplication.ConfigGroupPolicyApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigGroupPolicyApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigGroupPolicyApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigGroupPolicyApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_group_policy_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigGroupPolicyApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationModeInput">group_policy_application_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationMode">group_policy_application_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `group_policy_application_mode_input`<sup>Optional</sup> <a name="group_policy_application_mode_input" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationModeInput"></a>

```python
group_policy_application_mode_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `group_policy_application_mode`<sup>Required</sup> <a name="group_policy_application_mode" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationMode"></a>

```python
group_policy_application_mode: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigGroupPolicyApplicationConfig <a name="ConfigGroupPolicyApplicationConfig" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.Initializer"></a>

```python
from cdktn_provider_vault import config_group_policy_application

configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_policy_application_mode: str,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.groupPolicyApplicationMode">group_policy_application_mode</a></code> | <code>str</code> | Mode for group policy application. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_policy_application_mode`<sup>Required</sup> <a name="group_policy_application_mode" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.groupPolicyApplicationMode"></a>

```python
group_policy_application_mode: str
```

- *Type:* str

Mode for group policy application.

Must be either "within_namespace_hierarchy" or "any". "within_namespace_hierarchy" means policies only apply when the token authorizing a request was created in the same namespace as the group, or a descendant namespace. "any" means group policies apply to all members of a group, regardless of what namespace the request token came from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_group_policy_application#group_policy_application_mode ConfigGroupPolicyApplication#group_policy_application_mode}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_group_policy_application#namespace ConfigGroupPolicyApplication#namespace}

---



