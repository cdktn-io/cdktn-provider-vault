# `osSecretBackend` Submodule <a name="`osSecretBackend` Submodule" id="@cdktn/provider-vault.osSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsSecretBackend <a name="OsSecretBackend" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend vault_os_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer"></a>

```python
from cdktn_provider_vault import os_secret_backend

osSecretBackend.OsSecretBackend(
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
  max_versions: typing.Union[int, float] = None,
  namespace: str = None,
  ssh_host_key_trust_on_first_use: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.maxVersions">max_versions</a></code> | <code>typing.Union[int, float]</code> | Maximum number of versions to keep for secrets. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.sshHostKeyTrustOnFirstUse">ssh_host_key_trust_on_first_use</a></code> | <code>bool \| cdktn.IResolvable</code> | Trust SSH host keys on first use. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.mount"></a>

- *Type:* str

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend#mount OsSecretBackend#mount}

---

##### `max_versions`<sup>Optional</sup> <a name="max_versions" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.maxVersions"></a>

- *Type:* typing.Union[int, float]

Maximum number of versions to keep for secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend#max_versions OsSecretBackend#max_versions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend#namespace OsSecretBackend#namespace}

---

##### `ssh_host_key_trust_on_first_use`<sup>Optional</sup> <a name="ssh_host_key_trust_on_first_use" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.Initializer.parameter.sshHostKeyTrustOnFirstUse"></a>

- *Type:* bool | cdktn.IResolvable

Trust SSH host keys on first use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend#ssh_host_key_trust_on_first_use OsSecretBackend#ssh_host_key_trust_on_first_use}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.resetMaxVersions">reset_max_versions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.resetSshHostKeyTrustOnFirstUse">reset_ssh_host_key_trust_on_first_use</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_max_versions` <a name="reset_max_versions" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.resetMaxVersions"></a>

```python
def reset_max_versions() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ssh_host_key_trust_on_first_use` <a name="reset_ssh_host_key_trust_on_first_use" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.resetSshHostKeyTrustOnFirstUse"></a>

```python
def reset_ssh_host_key_trust_on_first_use() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OsSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.isConstruct"></a>

```python
from cdktn_provider_vault import os_secret_backend

osSecretBackend.OsSecretBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.isTerraformElement"></a>

```python
from cdktn_provider_vault import os_secret_backend

osSecretBackend.OsSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.isTerraformResource"></a>

```python
from cdktn_provider_vault import os_secret_backend

osSecretBackend.OsSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.generateConfigForImport"></a>

```python
from cdktn_provider_vault import os_secret_backend

osSecretBackend.OsSecretBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OsSecretBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsSecretBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OsSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.maxVersionsInput">max_versions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.sshHostKeyTrustOnFirstUseInput">ssh_host_key_trust_on_first_use_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.maxVersions">max_versions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.sshHostKeyTrustOnFirstUse">ssh_host_key_trust_on_first_use</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `max_versions_input`<sup>Optional</sup> <a name="max_versions_input" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.maxVersionsInput"></a>

```python
max_versions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `ssh_host_key_trust_on_first_use_input`<sup>Optional</sup> <a name="ssh_host_key_trust_on_first_use_input" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.sshHostKeyTrustOnFirstUseInput"></a>

```python
ssh_host_key_trust_on_first_use_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_versions`<sup>Required</sup> <a name="max_versions" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.maxVersions"></a>

```python
max_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `ssh_host_key_trust_on_first_use`<sup>Required</sup> <a name="ssh_host_key_trust_on_first_use" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.sshHostKeyTrustOnFirstUse"></a>

```python
ssh_host_key_trust_on_first_use: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsSecretBackendConfig <a name="OsSecretBackendConfig" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.Initializer"></a>

```python
from cdktn_provider_vault import os_secret_backend

osSecretBackend.OsSecretBackendConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  max_versions: typing.Union[int, float] = None,
  namespace: str = None,
  ssh_host_key_trust_on_first_use: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.mount">mount</a></code> | <code>str</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.maxVersions">max_versions</a></code> | <code>typing.Union[int, float]</code> | Maximum number of versions to keep for secrets. |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.sshHostKeyTrustOnFirstUse">ssh_host_key_trust_on_first_use</a></code> | <code>bool \| cdktn.IResolvable</code> | Trust SSH host keys on first use. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend#mount OsSecretBackend#mount}

---

##### `max_versions`<sup>Optional</sup> <a name="max_versions" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.maxVersions"></a>

```python
max_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of versions to keep for secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend#max_versions OsSecretBackend#max_versions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend#namespace OsSecretBackend#namespace}

---

##### `ssh_host_key_trust_on_first_use`<sup>Optional</sup> <a name="ssh_host_key_trust_on_first_use" id="@cdktn/provider-vault.osSecretBackend.OsSecretBackendConfig.property.sshHostKeyTrustOnFirstUse"></a>

```python
ssh_host_key_trust_on_first_use: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Trust SSH host keys on first use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend#ssh_host_key_trust_on_first_use OsSecretBackend#ssh_host_key_trust_on_first_use}

---



