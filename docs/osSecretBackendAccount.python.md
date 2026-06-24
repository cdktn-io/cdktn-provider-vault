# `osSecretBackendAccount` Submodule <a name="`osSecretBackendAccount` Submodule" id="@cdktn/provider-vault.osSecretBackendAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsSecretBackendAccount <a name="OsSecretBackendAccount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account vault_os_secret_backend_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer"></a>

```python
from cdktn_provider_vault import os_secret_backend_account

osSecretBackendAccount.OsSecretBackendAccount(
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
  name: str,
  password_wo: str,
  username: str,
  custom_metadata: typing.Mapping[str] = None,
  disable_automated_rotation: bool | IResolvable = None,
  namespace: str = None,
  parent_account_ref: str = None,
  password_policy: str = None,
  rotation_period: typing.Union[int, float] = None,
  rotation_schedule: str = None,
  rotation_window: typing.Union[int, float] = None,
  verify_connection: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.host">host</a></code> | <code>str</code> | Name of the host this account belongs to. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.passwordWo">password_wo</a></code> | <code>str</code> | Password for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.username">username</a></code> | <code>str</code> | Username for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.parentAccountRef">parent_account_ref</a></code> | <code>str</code> | Reference to a parent account for rotation management. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.passwordPolicy">password_policy</a></code> | <code>str</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.verifyConnection">verify_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | Verify the connection to the host with the provided credentials. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.host"></a>

- *Type:* str

Name of the host this account belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#host OsSecretBackendAccount#host}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.mount"></a>

- *Type:* str

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#mount OsSecretBackendAccount#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.name"></a>

- *Type:* str

Name of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#name OsSecretBackendAccount#name}

---

##### `password_wo`<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.passwordWo"></a>

- *Type:* str

Password for the account.

This is write-only, will not be read back from Vault,
and can only be set during resource creation. To update the password after creation, use the Vault CLI
or API to call the reset endpoint directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#password_wo OsSecretBackendAccount#password_wo}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.username"></a>

- *Type:* str

Username for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#username OsSecretBackendAccount#username}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.customMetadata"></a>

- *Type:* typing.Mapping[str]

Custom metadata for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#custom_metadata OsSecretBackendAccount#custom_metadata}

---

##### `disable_automated_rotation`<sup>Optional</sup> <a name="disable_automated_rotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.disableAutomatedRotation"></a>

- *Type:* bool | cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#disable_automated_rotation OsSecretBackendAccount#disable_automated_rotation}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#namespace OsSecretBackendAccount#namespace}

---

##### `parent_account_ref`<sup>Optional</sup> <a name="parent_account_ref" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.parentAccountRef"></a>

- *Type:* str

Reference to a parent account for rotation management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#parent_account_ref OsSecretBackendAccount#parent_account_ref}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.passwordPolicy"></a>

- *Type:* str

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#password_policy OsSecretBackendAccount#password_policy}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationPeriod"></a>

- *Type:* typing.Union[int, float]

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_period OsSecretBackendAccount#rotation_period}

---

##### `rotation_schedule`<sup>Optional</sup> <a name="rotation_schedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationSchedule"></a>

- *Type:* str

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_schedule OsSecretBackendAccount#rotation_schedule}

---

##### `rotation_window`<sup>Optional</sup> <a name="rotation_window" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.rotationWindow"></a>

- *Type:* typing.Union[int, float]

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_window OsSecretBackendAccount#rotation_window}

---

##### `verify_connection`<sup>Optional</sup> <a name="verify_connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.verifyConnection"></a>

- *Type:* bool | cdktn.IResolvable

Verify the connection to the host with the provided credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#verify_connection OsSecretBackendAccount#verify_connection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetCustomMetadata">reset_custom_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetDisableAutomatedRotation">reset_disable_automated_rotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetParentAccountRef">reset_parent_account_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetPasswordPolicy">reset_password_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationPeriod">reset_rotation_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationSchedule">reset_rotation_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationWindow">reset_rotation_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetVerifyConnection">reset_verify_connection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_custom_metadata` <a name="reset_custom_metadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetCustomMetadata"></a>

```python
def reset_custom_metadata() -> None
```

##### `reset_disable_automated_rotation` <a name="reset_disable_automated_rotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetDisableAutomatedRotation"></a>

```python
def reset_disable_automated_rotation() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_parent_account_ref` <a name="reset_parent_account_ref" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetParentAccountRef"></a>

```python
def reset_parent_account_ref() -> None
```

##### `reset_password_policy` <a name="reset_password_policy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetPasswordPolicy"></a>

```python
def reset_password_policy() -> None
```

##### `reset_rotation_period` <a name="reset_rotation_period" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationPeriod"></a>

```python
def reset_rotation_period() -> None
```

##### `reset_rotation_schedule` <a name="reset_rotation_schedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationSchedule"></a>

```python
def reset_rotation_schedule() -> None
```

##### `reset_rotation_window` <a name="reset_rotation_window" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationWindow"></a>

```python
def reset_rotation_window() -> None
```

##### `reset_verify_connection` <a name="reset_verify_connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetVerifyConnection"></a>

```python
def reset_verify_connection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct"></a>

```python
from cdktn_provider_vault import os_secret_backend_account

osSecretBackendAccount.OsSecretBackendAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement"></a>

```python
from cdktn_provider_vault import os_secret_backend_account

osSecretBackendAccount.OsSecretBackendAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource"></a>

```python
from cdktn_provider_vault import os_secret_backend_account

osSecretBackendAccount.OsSecretBackendAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport"></a>

```python
from cdktn_provider_vault import os_secret_backend_account

osSecretBackendAccount.OsSecretBackendAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsSecretBackendAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsSecretBackendAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OsSecretBackendAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lastVaultRotation">last_vault_rotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nextVaultRotation">next_vault_rotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadataInput">custom_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotationInput">disable_automated_rotation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRefInput">parent_account_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicyInput">password_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWoInput">password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriodInput">rotation_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationScheduleInput">rotation_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindowInput">rotation_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnectionInput">verify_connection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRef">parent_account_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicy">password_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWo">password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnection">verify_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `last_vault_rotation`<sup>Required</sup> <a name="last_vault_rotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lastVaultRotation"></a>

```python
last_vault_rotation: str
```

- *Type:* str

---

##### `next_vault_rotation`<sup>Required</sup> <a name="next_vault_rotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nextVaultRotation"></a>

```python
next_vault_rotation: str
```

- *Type:* str

---

##### `custom_metadata_input`<sup>Optional</sup> <a name="custom_metadata_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadataInput"></a>

```python
custom_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disable_automated_rotation_input`<sup>Optional</sup> <a name="disable_automated_rotation_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotationInput"></a>

```python
disable_automated_rotation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `parent_account_ref_input`<sup>Optional</sup> <a name="parent_account_ref_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRefInput"></a>

```python
parent_account_ref_input: str
```

- *Type:* str

---

##### `password_policy_input`<sup>Optional</sup> <a name="password_policy_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicyInput"></a>

```python
password_policy_input: str
```

- *Type:* str

---

##### `password_wo_input`<sup>Optional</sup> <a name="password_wo_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWoInput"></a>

```python
password_wo_input: str
```

- *Type:* str

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriodInput"></a>

```python
rotation_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule_input`<sup>Optional</sup> <a name="rotation_schedule_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationScheduleInput"></a>

```python
rotation_schedule_input: str
```

- *Type:* str

---

##### `rotation_window_input`<sup>Optional</sup> <a name="rotation_window_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindowInput"></a>

```python
rotation_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `verify_connection_input`<sup>Optional</sup> <a name="verify_connection_input" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnectionInput"></a>

```python
verify_connection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadata"></a>

```python
custom_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disable_automated_rotation`<sup>Required</sup> <a name="disable_automated_rotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotation"></a>

```python
disable_automated_rotation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `parent_account_ref`<sup>Required</sup> <a name="parent_account_ref" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRef"></a>

```python
parent_account_ref: str
```

- *Type:* str

---

##### `password_policy`<sup>Required</sup> <a name="password_policy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

---

##### `password_wo`<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWo"></a>

```python
password_wo: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_schedule`<sup>Required</sup> <a name="rotation_schedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationSchedule"></a>

```python
rotation_schedule: str
```

- *Type:* str

---

##### `rotation_window`<sup>Required</sup> <a name="rotation_window" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindow"></a>

```python
rotation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `verify_connection`<sup>Required</sup> <a name="verify_connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnection"></a>

```python
verify_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsSecretBackendAccountConfig <a name="OsSecretBackendAccountConfig" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.Initializer"></a>

```python
from cdktn_provider_vault import os_secret_backend_account

osSecretBackendAccount.OsSecretBackendAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  host: str,
  mount: str,
  name: str,
  password_wo: str,
  username: str,
  custom_metadata: typing.Mapping[str] = None,
  disable_automated_rotation: bool | IResolvable = None,
  namespace: str = None,
  parent_account_ref: str = None,
  password_policy: str = None,
  rotation_period: typing.Union[int, float] = None,
  rotation_schedule: str = None,
  rotation_window: typing.Union[int, float] = None,
  verify_connection: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.host">host</a></code> | <code>str</code> | Name of the host this account belongs to. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.mount">mount</a></code> | <code>str</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.name">name</a></code> | <code>str</code> | Name of the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordWo">password_wo</a></code> | <code>str</code> | Password for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.username">username</a></code> | <code>str</code> | Username for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.disableAutomatedRotation">disable_automated_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.parentAccountRef">parent_account_ref</a></code> | <code>str</code> | Reference to a parent account for rotation management. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordPolicy">password_policy</a></code> | <code>str</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationSchedule">rotation_schedule</a></code> | <code>str</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationWindow">rotation_window</a></code> | <code>typing.Union[int, float]</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.verifyConnection">verify_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | Verify the connection to the host with the provided credentials. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Name of the host this account belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#host OsSecretBackendAccount#host}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#mount OsSecretBackendAccount#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#name OsSecretBackendAccount#name}

---

##### `password_wo`<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordWo"></a>

```python
password_wo: str
```

- *Type:* str

Password for the account.

This is write-only, will not be read back from Vault,
and can only be set during resource creation. To update the password after creation, use the Vault CLI
or API to call the reset endpoint directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#password_wo OsSecretBackendAccount#password_wo}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#username OsSecretBackendAccount#username}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.customMetadata"></a>

```python
custom_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom metadata for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#custom_metadata OsSecretBackendAccount#custom_metadata}

---

##### `disable_automated_rotation`<sup>Optional</sup> <a name="disable_automated_rotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.disableAutomatedRotation"></a>

```python
disable_automated_rotation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#disable_automated_rotation OsSecretBackendAccount#disable_automated_rotation}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#namespace OsSecretBackendAccount#namespace}

---

##### `parent_account_ref`<sup>Optional</sup> <a name="parent_account_ref" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.parentAccountRef"></a>

```python
parent_account_ref: str
```

- *Type:* str

Reference to a parent account for rotation management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#parent_account_ref OsSecretBackendAccount#parent_account_ref}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#password_policy OsSecretBackendAccount#password_policy}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_period OsSecretBackendAccount#rotation_period}

---

##### `rotation_schedule`<sup>Optional</sup> <a name="rotation_schedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationSchedule"></a>

```python
rotation_schedule: str
```

- *Type:* str

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_schedule OsSecretBackendAccount#rotation_schedule}

---

##### `rotation_window`<sup>Optional</sup> <a name="rotation_window" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationWindow"></a>

```python
rotation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_window OsSecretBackendAccount#rotation_window}

---

##### `verify_connection`<sup>Optional</sup> <a name="verify_connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.verifyConnection"></a>

```python
verify_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Verify the connection to the host with the provided credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#verify_connection OsSecretBackendAccount#verify_connection}

---



