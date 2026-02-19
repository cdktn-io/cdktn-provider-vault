# `approleAuthBackendLogin` Submodule <a name="`approleAuthBackendLogin` Submodule" id="@cdktn/provider-vault.approleAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendLogin <a name="ApproleAuthBackendLogin" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login vault_approle_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer"></a>

```python
from cdktn_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLogin(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_id: str,
  backend: str = None,
  id: str = None,
  namespace: str = None,
  secret_id: str = None,
  secret_id_wo: str = None,
  secret_id_wo_version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The RoleID to log in with. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | The SecretID to log in with. Required unless `bind_secret_id` is set to false on the role. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretIdWo">secret_id_wo</a></code> | <code>str</code> | The SecretID to log in with. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretIdWoVersion">secret_id_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only secret_id field. Increment this to trigger re-authentication with a new SecretID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.roleId"></a>

- *Type:* str

The RoleID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#role_id ApproleAuthBackendLogin#role_id}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#backend ApproleAuthBackendLogin#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#namespace ApproleAuthBackendLogin#namespace}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretId"></a>

- *Type:* str

The SecretID to log in with. Required unless `bind_secret_id` is set to false on the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#secret_id ApproleAuthBackendLogin#secret_id}

---

##### `secret_id_wo`<sup>Optional</sup> <a name="secret_id_wo" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretIdWo"></a>

- *Type:* str

The SecretID to log in with.

Write-only attribute that can accept ephemeral values. Required unless `bind_secret_id` is set to false on the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#secret_id_wo ApproleAuthBackendLogin#secret_id_wo}

---

##### `secret_id_wo_version`<sup>Optional</sup> <a name="secret_id_wo_version" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.secretIdWoVersion"></a>

- *Type:* typing.Union[int, float]

Version counter for the write-only secret_id field. Increment this to trigger re-authentication with a new SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#secret_id_wo_version ApproleAuthBackendLogin#secret_id_wo_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretIdWo">reset_secret_id_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretIdWoVersion">reset_secret_id_wo_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_backend` <a name="reset_backend" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_secret_id_wo` <a name="reset_secret_id_wo" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretIdWo"></a>

```python
def reset_secret_id_wo() -> None
```

##### `reset_secret_id_wo_version` <a name="reset_secret_id_wo_version" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretIdWoVersion"></a>

```python
def reset_secret_id_wo_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApproleAuthBackendLogin resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct"></a>

```python
from cdktn_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLogin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement"></a>

```python
from cdktn_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLogin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource"></a>

```python
from cdktn_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLogin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport"></a>

```python
from cdktn_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLogin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApproleAuthBackendLogin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApproleAuthBackendLogin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApproleAuthBackendLogin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApproleAuthBackendLogin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseStarted">lease_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.renewable">renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoInput">secret_id_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoVersionInput">secret_id_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWo">secret_id_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoVersion">secret_id_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_started`<sup>Required</sup> <a name="lease_started" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseStarted"></a>

```python
lease_started: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.renewable"></a>

```python
renewable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_id_wo_input`<sup>Optional</sup> <a name="secret_id_wo_input" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoInput"></a>

```python
secret_id_wo_input: str
```

- *Type:* str

---

##### `secret_id_wo_version_input`<sup>Optional</sup> <a name="secret_id_wo_version_input" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoVersionInput"></a>

```python
secret_id_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_id_wo`<sup>Required</sup> <a name="secret_id_wo" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWo"></a>

```python
secret_id_wo: str
```

- *Type:* str

---

##### `secret_id_wo_version`<sup>Required</sup> <a name="secret_id_wo_version" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdWoVersion"></a>

```python
secret_id_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendLoginConfig <a name="ApproleAuthBackendLoginConfig" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.Initializer"></a>

```python
from cdktn_provider_vault import approle_auth_backend_login

approleAuthBackendLogin.ApproleAuthBackendLoginConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_id: str,
  backend: str = None,
  id: str = None,
  namespace: str = None,
  secret_id: str = None,
  secret_id_wo: str = None,
  secret_id_wo_version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.roleId">role_id</a></code> | <code>str</code> | The RoleID to log in with. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretId">secret_id</a></code> | <code>str</code> | The SecretID to log in with. Required unless `bind_secret_id` is set to false on the role. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretIdWo">secret_id_wo</a></code> | <code>str</code> | The SecretID to log in with. |
| <code><a href="#@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretIdWoVersion">secret_id_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only secret_id field. Increment this to trigger re-authentication with a new SecretID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The RoleID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#role_id ApproleAuthBackendLogin#role_id}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#backend ApproleAuthBackendLogin#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#namespace ApproleAuthBackendLogin#namespace}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

The SecretID to log in with. Required unless `bind_secret_id` is set to false on the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#secret_id ApproleAuthBackendLogin#secret_id}

---

##### `secret_id_wo`<sup>Optional</sup> <a name="secret_id_wo" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretIdWo"></a>

```python
secret_id_wo: str
```

- *Type:* str

The SecretID to log in with.

Write-only attribute that can accept ephemeral values. Required unless `bind_secret_id` is set to false on the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#secret_id_wo ApproleAuthBackendLogin#secret_id_wo}

---

##### `secret_id_wo_version`<sup>Optional</sup> <a name="secret_id_wo_version" id="@cdktn/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretIdWoVersion"></a>

```python
secret_id_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version counter for the write-only secret_id field. Increment this to trigger re-authentication with a new SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/approle_auth_backend_login#secret_id_wo_version ApproleAuthBackendLogin#secret_id_wo_version}

---



