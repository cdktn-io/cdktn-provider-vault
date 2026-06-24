# `osSecretBackendHost` Submodule <a name="`osSecretBackendHost` Submodule" id="@cdktn/provider-vault.osSecretBackendHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsSecretBackendHost <a name="OsSecretBackendHost" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host vault_os_secret_backend_host}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer"></a>

```python
from cdktn_provider_vault import os_secret_backend_host

osSecretBackendHost.OsSecretBackendHost(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address: str,
  mount: str,
  name: str,
  custom_metadata: typing.Mapping[str] = None,
  disable_automated_rotation: bool | IResolvable = None,
  namespace: str = None,
  password_policy: str = None,
  port: typing.Union[int, float] = None,
  rotation_period: typing.Union[int, float] = None,
  rotation_schedule: str = None,
  rotation_window: typing.Union[int, float] = None,
  ssh_host_key: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.address">address</a></code> | <code>str</code> | Address of the host (hostname or IP). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata for the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.passwordPolicy">password_policy</a></code> | <code>str</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Port to connect to on the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.sshHostKey">ssh_host_key</a></code> | <code>str</code> | SSH host key for the host. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.address"></a>

- *Type:* str

Address of the host (hostname or IP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#address OsSecretBackendHost#address}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.mount"></a>

- *Type:* str

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#mount OsSecretBackendHost#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.name"></a>

- *Type:* str

Name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#name OsSecretBackendHost#name}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.customMetadata"></a>

- *Type:* typing.Mapping[str]

Custom metadata for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#custom_metadata OsSecretBackendHost#custom_metadata}

---

##### `disable_automated_rotation`<sup>Optional</sup> <a name="disable_automated_rotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.disableAutomatedRotation"></a>

- *Type:* bool | cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#disable_automated_rotation OsSecretBackendHost#disable_automated_rotation}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#namespace OsSecretBackendHost#namespace}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.passwordPolicy"></a>

- *Type:* str

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#password_policy OsSecretBackendHost#password_policy}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port to connect to on the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#port OsSecretBackendHost#port}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationPeriod"></a>

- *Type:* typing.Union[int, float]

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#rotation_period OsSecretBackendHost#rotation_period}

---

##### `rotation_schedule`<sup>Optional</sup> <a name="rotation_schedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationSchedule"></a>

- *Type:* str

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#rotation_schedule OsSecretBackendHost#rotation_schedule}

---

##### `rotation_window`<sup>Optional</sup> <a name="rotation_window" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.rotationWindow"></a>

- *Type:* typing.Union[int, float]

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#rotation_window OsSecretBackendHost#rotation_window}

---

##### `ssh_host_key`<sup>Optional</sup> <a name="ssh_host_key" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.sshHostKey"></a>

- *Type:* str

SSH host key for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#ssh_host_key OsSecretBackendHost#ssh_host_key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetCustomMetadata">reset_custom_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetDisableAutomatedRotation">reset_disable_automated_rotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPasswordPolicy">reset_password_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationPeriod">reset_rotation_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationSchedule">reset_rotation_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationWindow">reset_rotation_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetSshHostKey">reset_ssh_host_key</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_custom_metadata` <a name="reset_custom_metadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetCustomMetadata"></a>

```python
def reset_custom_metadata() -> None
```

##### `reset_disable_automated_rotation` <a name="reset_disable_automated_rotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetDisableAutomatedRotation"></a>

```python
def reset_disable_automated_rotation() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_password_policy` <a name="reset_password_policy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPasswordPolicy"></a>

```python
def reset_password_policy() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_rotation_period` <a name="reset_rotation_period" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationPeriod"></a>

```python
def reset_rotation_period() -> None
```

##### `reset_rotation_schedule` <a name="reset_rotation_schedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationSchedule"></a>

```python
def reset_rotation_schedule() -> None
```

##### `reset_rotation_window` <a name="reset_rotation_window" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationWindow"></a>

```python
def reset_rotation_window() -> None
```

##### `reset_ssh_host_key` <a name="reset_ssh_host_key" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetSshHostKey"></a>

```python
def reset_ssh_host_key() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OsSecretBackendHost resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct"></a>

```python
from cdktn_provider_vault import os_secret_backend_host

osSecretBackendHost.OsSecretBackendHost.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement"></a>

```python
from cdktn_provider_vault import os_secret_backend_host

osSecretBackendHost.OsSecretBackendHost.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource"></a>

```python
from cdktn_provider_vault import os_secret_backend_host

osSecretBackendHost.OsSecretBackendHost.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport"></a>

```python
from cdktn_provider_vault import os_secret_backend_host

osSecretBackendHost.OsSecretBackendHost.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OsSecretBackendHost resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsSecretBackendHost to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsSecretBackendHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OsSecretBackendHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadataInput">custom_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotationInput">disable_automated_rotation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicyInput">password_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriodInput">rotation_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationScheduleInput">rotation_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindowInput">rotation_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKeyInput">ssh_host_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicy">password_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKey">ssh_host_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `custom_metadata_input`<sup>Optional</sup> <a name="custom_metadata_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadataInput"></a>

```python
custom_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disable_automated_rotation_input`<sup>Optional</sup> <a name="disable_automated_rotation_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotationInput"></a>

```python
disable_automated_rotation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `password_policy_input`<sup>Optional</sup> <a name="password_policy_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicyInput"></a>

```python
password_policy_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriodInput"></a>

```python
rotation_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule_input`<sup>Optional</sup> <a name="rotation_schedule_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationScheduleInput"></a>

```python
rotation_schedule_input: str
```

- *Type:* str

---

##### `rotation_window_input`<sup>Optional</sup> <a name="rotation_window_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindowInput"></a>

```python
rotation_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_host_key_input`<sup>Optional</sup> <a name="ssh_host_key_input" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKeyInput"></a>

```python
ssh_host_key_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadata"></a>

```python
custom_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disable_automated_rotation`<sup>Required</sup> <a name="disable_automated_rotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotation"></a>

```python
disable_automated_rotation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `password_policy`<sup>Required</sup> <a name="password_policy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule`<sup>Required</sup> <a name="rotation_schedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationSchedule"></a>

```python
rotation_schedule: str
```

- *Type:* str

---

##### `rotation_window`<sup>Required</sup> <a name="rotation_window" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindow"></a>

```python
rotation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_host_key`<sup>Required</sup> <a name="ssh_host_key" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKey"></a>

```python
ssh_host_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsSecretBackendHostConfig <a name="OsSecretBackendHostConfig" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.Initializer"></a>

```python
from cdktn_provider_vault import os_secret_backend_host

osSecretBackendHost.OsSecretBackendHostConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address: str,
  mount: str,
  name: str,
  custom_metadata: typing.Mapping[str] = None,
  disable_automated_rotation: bool | IResolvable = None,
  namespace: str = None,
  password_policy: str = None,
  port: typing.Union[int, float] = None,
  rotation_period: typing.Union[int, float] = None,
  rotation_schedule: str = None,
  rotation_window: typing.Union[int, float] = None,
  ssh_host_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.address">address</a></code> | <code>str</code> | Address of the host (hostname or IP). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.mount">mount</a></code> | <code>str</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.name">name</a></code> | <code>str</code> | Name of the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata for the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.passwordPolicy">password_policy</a></code> | <code>str</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port to connect to on the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.sshHostKey">ssh_host_key</a></code> | <code>str</code> | SSH host key for the host. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.address"></a>

```python
address: str
```

- *Type:* str

Address of the host (hostname or IP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#address OsSecretBackendHost#address}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#mount OsSecretBackendHost#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#name OsSecretBackendHost#name}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.customMetadata"></a>

```python
custom_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom metadata for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#custom_metadata OsSecretBackendHost#custom_metadata}

---

##### `disable_automated_rotation`<sup>Optional</sup> <a name="disable_automated_rotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.disableAutomatedRotation"></a>

```python
disable_automated_rotation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#disable_automated_rotation OsSecretBackendHost#disable_automated_rotation}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#namespace OsSecretBackendHost#namespace}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#password_policy OsSecretBackendHost#password_policy}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port to connect to on the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#port OsSecretBackendHost#port}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#rotation_period OsSecretBackendHost#rotation_period}

---

##### `rotation_schedule`<sup>Optional</sup> <a name="rotation_schedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationSchedule"></a>

```python
rotation_schedule: str
```

- *Type:* str

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#rotation_schedule OsSecretBackendHost#rotation_schedule}

---

##### `rotation_window`<sup>Optional</sup> <a name="rotation_window" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationWindow"></a>

```python
rotation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#rotation_window OsSecretBackendHost#rotation_window}

---

##### `ssh_host_key`<sup>Optional</sup> <a name="ssh_host_key" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.sshHostKey"></a>

```python
ssh_host_key: str
```

- *Type:* str

SSH host key for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_host#ssh_host_key OsSecretBackendHost#ssh_host_key}

---



