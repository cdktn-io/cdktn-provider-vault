# `dataVaultPluginRuntimes` Submodule <a name="`dataVaultPluginRuntimes` Submodule" id="@cdktn/provider-vault.dataVaultPluginRuntimes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPluginRuntimes <a name="DataVaultPluginRuntimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes vault_plugin_runtimes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_plugin_runtimes

dataVaultPluginRuntimes.DataVaultPluginRuntimes(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  namespace: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.type">type</a></code> | <code>str</code> | Specifies the plugin runtime type to list. Currently only `container` is supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#namespace DataVaultPluginRuntimes#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.type"></a>

- *Type:* str

Specifies the plugin runtime type to list. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#type DataVaultPluginRuntimes#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct"></a>

```python
from cdktn_provider_vault import data_vault_plugin_runtimes

dataVaultPluginRuntimes.DataVaultPluginRuntimes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement"></a>

```python
from cdktn_provider_vault import data_vault_plugin_runtimes

dataVaultPluginRuntimes.DataVaultPluginRuntimes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource"></a>

```python
from cdktn_provider_vault import data_vault_plugin_runtimes

dataVaultPluginRuntimes.DataVaultPluginRuntimes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport"></a>

```python
from cdktn_provider_vault import data_vault_plugin_runtimes

dataVaultPluginRuntimes.DataVaultPluginRuntimes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultPluginRuntimes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultPluginRuntimes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPluginRuntimes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.runtimes">runtimes</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList">DataVaultPluginRuntimesRuntimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `runtimes`<sup>Required</sup> <a name="runtimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.runtimes"></a>

```python
runtimes: DataVaultPluginRuntimesRuntimesList
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList">DataVaultPluginRuntimesRuntimesList</a>

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPluginRuntimesConfig <a name="DataVaultPluginRuntimesConfig" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_plugin_runtimes

dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  namespace: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.type">type</a></code> | <code>str</code> | Specifies the plugin runtime type to list. Currently only `container` is supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#namespace DataVaultPluginRuntimes#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the plugin runtime type to list. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#type DataVaultPluginRuntimes#type}

---

### DataVaultPluginRuntimesRuntimes <a name="DataVaultPluginRuntimesRuntimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_plugin_runtimes

dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataVaultPluginRuntimesRuntimesList <a name="DataVaultPluginRuntimesRuntimesList" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_plugin_runtimes

dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVaultPluginRuntimesRuntimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataVaultPluginRuntimesRuntimesOutputReference <a name="DataVaultPluginRuntimesRuntimesOutputReference" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer"></a>

```python
from cdktn_provider_vault import data_vault_plugin_runtimes

dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cgroupParent">cgroup_parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cpuNanos">cpu_nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.memoryBytes">memory_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.ociRuntime">oci_runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.rootless">rootless</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes">DataVaultPluginRuntimesRuntimes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cgroup_parent`<sup>Required</sup> <a name="cgroup_parent" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cgroupParent"></a>

```python
cgroup_parent: str
```

- *Type:* str

---

##### `cpu_nanos`<sup>Required</sup> <a name="cpu_nanos" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cpuNanos"></a>

```python
cpu_nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_bytes`<sup>Required</sup> <a name="memory_bytes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.memoryBytes"></a>

```python
memory_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oci_runtime`<sup>Required</sup> <a name="oci_runtime" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.ociRuntime"></a>

```python
oci_runtime: str
```

- *Type:* str

---

##### `rootless`<sup>Required</sup> <a name="rootless" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.rootless"></a>

```python
rootless: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.internalValue"></a>

```python
internal_value: DataVaultPluginRuntimesRuntimes
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes">DataVaultPluginRuntimesRuntimes</a>

---



