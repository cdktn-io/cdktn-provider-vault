# `pluginRuntime` Submodule <a name="`pluginRuntime` Submodule" id="@cdktn/provider-vault.pluginRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PluginRuntime <a name="PluginRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime vault_plugin_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer"></a>

```python
from cdktn_provider_vault import plugin_runtime

pluginRuntime.PluginRuntime(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  type: str,
  cgroup_parent: str = None,
  cpu_nanos: typing.Union[int, float] = None,
  memory_bytes: typing.Union[int, float] = None,
  namespace: str = None,
  oci_runtime: str = None,
  rootless: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the plugin runtime. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.type">type</a></code> | <code>str</code> | Specifies the plugin runtime type. Currently only `container` is supported. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.cgroupParent">cgroup_parent</a></code> | <code>str</code> | Specifies the parent cgroup to set for each container. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.cpuNanos">cpu_nanos</a></code> | <code>typing.Union[int, float]</code> | Specifies CPU limit to set per container in billionths of a CPU. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.memoryBytes">memory_bytes</a></code> | <code>typing.Union[int, float]</code> | Specifies memory limit to set per container in bytes. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.ociRuntime">oci_runtime</a></code> | <code>str</code> | Specifies OCI-compliant container runtime to use. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.rootless">rootless</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the container runtime is running as a non-privileged user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.name"></a>

- *Type:* str

The name of the plugin runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#name PluginRuntime#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.type"></a>

- *Type:* str

Specifies the plugin runtime type. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#type PluginRuntime#type}

---

##### `cgroup_parent`<sup>Optional</sup> <a name="cgroup_parent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.cgroupParent"></a>

- *Type:* str

Specifies the parent cgroup to set for each container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#cgroup_parent PluginRuntime#cgroup_parent}

---

##### `cpu_nanos`<sup>Optional</sup> <a name="cpu_nanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.cpuNanos"></a>

- *Type:* typing.Union[int, float]

Specifies CPU limit to set per container in billionths of a CPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#cpu_nanos PluginRuntime#cpu_nanos}

---

##### `memory_bytes`<sup>Optional</sup> <a name="memory_bytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.memoryBytes"></a>

- *Type:* typing.Union[int, float]

Specifies memory limit to set per container in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#memory_bytes PluginRuntime#memory_bytes}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#namespace PluginRuntime#namespace}

---

##### `oci_runtime`<sup>Optional</sup> <a name="oci_runtime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.ociRuntime"></a>

- *Type:* str

Specifies OCI-compliant container runtime to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#oci_runtime PluginRuntime#oci_runtime}

---

##### `rootless`<sup>Optional</sup> <a name="rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.rootless"></a>

- *Type:* bool | cdktn.IResolvable

Whether the container runtime is running as a non-privileged user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#rootless PluginRuntime#rootless}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCgroupParent">reset_cgroup_parent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCpuNanos">reset_cpu_nanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetMemoryBytes">reset_memory_bytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOciRuntime">reset_oci_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetRootless">reset_rootless</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cgroup_parent` <a name="reset_cgroup_parent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCgroupParent"></a>

```python
def reset_cgroup_parent() -> None
```

##### `reset_cpu_nanos` <a name="reset_cpu_nanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCpuNanos"></a>

```python
def reset_cpu_nanos() -> None
```

##### `reset_memory_bytes` <a name="reset_memory_bytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetMemoryBytes"></a>

```python
def reset_memory_bytes() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_oci_runtime` <a name="reset_oci_runtime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOciRuntime"></a>

```python
def reset_oci_runtime() -> None
```

##### `reset_rootless` <a name="reset_rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetRootless"></a>

```python
def reset_rootless() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PluginRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct"></a>

```python
from cdktn_provider_vault import plugin_runtime

pluginRuntime.PluginRuntime.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement"></a>

```python
from cdktn_provider_vault import plugin_runtime

pluginRuntime.PluginRuntime.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource"></a>

```python
from cdktn_provider_vault import plugin_runtime

pluginRuntime.PluginRuntime.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport"></a>

```python
from cdktn_provider_vault import plugin_runtime

pluginRuntime.PluginRuntime.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PluginRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PluginRuntime to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PluginRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PluginRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParentInput">cgroup_parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanosInput">cpu_nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytesInput">memory_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntimeInput">oci_runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootlessInput">rootless_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParent">cgroup_parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanos">cpu_nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytes">memory_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntime">oci_runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootless">rootless</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `cgroup_parent_input`<sup>Optional</sup> <a name="cgroup_parent_input" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParentInput"></a>

```python
cgroup_parent_input: str
```

- *Type:* str

---

##### `cpu_nanos_input`<sup>Optional</sup> <a name="cpu_nanos_input" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanosInput"></a>

```python
cpu_nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_bytes_input`<sup>Optional</sup> <a name="memory_bytes_input" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytesInput"></a>

```python
memory_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `oci_runtime_input`<sup>Optional</sup> <a name="oci_runtime_input" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntimeInput"></a>

```python
oci_runtime_input: str
```

- *Type:* str

---

##### `rootless_input`<sup>Optional</sup> <a name="rootless_input" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootlessInput"></a>

```python
rootless_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cgroup_parent`<sup>Required</sup> <a name="cgroup_parent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParent"></a>

```python
cgroup_parent: str
```

- *Type:* str

---

##### `cpu_nanos`<sup>Required</sup> <a name="cpu_nanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanos"></a>

```python
cpu_nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_bytes`<sup>Required</sup> <a name="memory_bytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytes"></a>

```python
memory_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `oci_runtime`<sup>Required</sup> <a name="oci_runtime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntime"></a>

```python
oci_runtime: str
```

- *Type:* str

---

##### `rootless`<sup>Required</sup> <a name="rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootless"></a>

```python
rootless: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PluginRuntimeConfig <a name="PluginRuntimeConfig" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.Initializer"></a>

```python
from cdktn_provider_vault import plugin_runtime

pluginRuntime.PluginRuntimeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  type: str,
  cgroup_parent: str = None,
  cpu_nanos: typing.Union[int, float] = None,
  memory_bytes: typing.Union[int, float] = None,
  namespace: str = None,
  oci_runtime: str = None,
  rootless: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.name">name</a></code> | <code>str</code> | The name of the plugin runtime. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.type">type</a></code> | <code>str</code> | Specifies the plugin runtime type. Currently only `container` is supported. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cgroupParent">cgroup_parent</a></code> | <code>str</code> | Specifies the parent cgroup to set for each container. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cpuNanos">cpu_nanos</a></code> | <code>typing.Union[int, float]</code> | Specifies CPU limit to set per container in billionths of a CPU. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.memoryBytes">memory_bytes</a></code> | <code>typing.Union[int, float]</code> | Specifies memory limit to set per container in bytes. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.ociRuntime">oci_runtime</a></code> | <code>str</code> | Specifies OCI-compliant container runtime to use. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.rootless">rootless</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the container runtime is running as a non-privileged user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the plugin runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#name PluginRuntime#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the plugin runtime type. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#type PluginRuntime#type}

---

##### `cgroup_parent`<sup>Optional</sup> <a name="cgroup_parent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cgroupParent"></a>

```python
cgroup_parent: str
```

- *Type:* str

Specifies the parent cgroup to set for each container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#cgroup_parent PluginRuntime#cgroup_parent}

---

##### `cpu_nanos`<sup>Optional</sup> <a name="cpu_nanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cpuNanos"></a>

```python
cpu_nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies CPU limit to set per container in billionths of a CPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#cpu_nanos PluginRuntime#cpu_nanos}

---

##### `memory_bytes`<sup>Optional</sup> <a name="memory_bytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.memoryBytes"></a>

```python
memory_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies memory limit to set per container in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#memory_bytes PluginRuntime#memory_bytes}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#namespace PluginRuntime#namespace}

---

##### `oci_runtime`<sup>Optional</sup> <a name="oci_runtime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.ociRuntime"></a>

```python
oci_runtime: str
```

- *Type:* str

Specifies OCI-compliant container runtime to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#oci_runtime PluginRuntime#oci_runtime}

---

##### `rootless`<sup>Optional</sup> <a name="rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.rootless"></a>

```python
rootless: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the container runtime is running as a non-privileged user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/plugin_runtime#rootless PluginRuntime#rootless}

---



