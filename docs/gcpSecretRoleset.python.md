# `gcpSecretRoleset` Submodule <a name="`gcpSecretRoleset` Submodule" id="@cdktn/provider-vault.gcpSecretRoleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretRoleset <a name="GcpSecretRoleset" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset vault_gcp_secret_roleset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer"></a>

```python
from cdktn_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRoleset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  binding: IResolvable | typing.List[GcpSecretRolesetBinding],
  project: str,
  roleset: str,
  id: str = None,
  namespace: str = None,
  secret_type: str = None,
  token_scopes: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.binding">binding</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]</code> | binding block. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.project">project</a></code> | <code>str</code> | Name of the GCP project that this roleset's service account will belong to. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.roleset">roleset</a></code> | <code>str</code> | Name of the RoleSet to create. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.secretType">secret_type</a></code> | <code>str</code> | Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.tokenScopes">token_scopes</a></code> | <code>typing.List[str]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.backend"></a>

- *Type:* str

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#backend GcpSecretRoleset#backend}

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.binding"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#binding GcpSecretRoleset#binding}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.project"></a>

- *Type:* str

Name of the GCP project that this roleset's service account will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#project GcpSecretRoleset#project}

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.roleset"></a>

- *Type:* str

Name of the RoleSet to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#roleset GcpSecretRoleset#roleset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#namespace GcpSecretRoleset#namespace}

---

##### `secret_type`<sup>Optional</sup> <a name="secret_type" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.secretType"></a>

- *Type:* str

Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#secret_type GcpSecretRoleset#secret_type}

---

##### `token_scopes`<sup>Optional</sup> <a name="token_scopes" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.tokenScopes"></a>

- *Type:* typing.List[str]

List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#token_scopes GcpSecretRoleset#token_scopes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding">put_binding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetSecretType">reset_secret_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetTokenScopes">reset_token_scopes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_binding` <a name="put_binding" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding"></a>

```python
def put_binding(
  value: IResolvable | typing.List[GcpSecretRolesetBinding]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_secret_type` <a name="reset_secret_type" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetSecretType"></a>

```python
def reset_secret_type() -> None
```

##### `reset_token_scopes` <a name="reset_token_scopes" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetTokenScopes"></a>

```python
def reset_token_scopes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GcpSecretRoleset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct"></a>

```python
from cdktn_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRoleset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement"></a>

```python
from cdktn_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRoleset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource"></a>

```python
from cdktn_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRoleset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport"></a>

```python
from cdktn_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRoleset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GcpSecretRoleset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GcpSecretRoleset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GcpSecretRoleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GcpSecretRoleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.binding">binding</a></code> | <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList">GcpSecretRolesetBindingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.bindingInput">binding_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.rolesetInput">roleset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretTypeInput">secret_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopesInput">token_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.roleset">roleset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopes">token_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.binding"></a>

```python
binding: GcpSecretRolesetBindingList
```

- *Type:* <a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList">GcpSecretRolesetBindingList</a>

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `binding_input`<sup>Optional</sup> <a name="binding_input" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.bindingInput"></a>

```python
binding_input: IResolvable | typing.List[GcpSecretRolesetBinding]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `roleset_input`<sup>Optional</sup> <a name="roleset_input" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.rolesetInput"></a>

```python
roleset_input: str
```

- *Type:* str

---

##### `secret_type_input`<sup>Optional</sup> <a name="secret_type_input" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretTypeInput"></a>

```python
secret_type_input: str
```

- *Type:* str

---

##### `token_scopes_input`<sup>Optional</sup> <a name="token_scopes_input" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopesInput"></a>

```python
token_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.roleset"></a>

```python
roleset: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `token_scopes`<sup>Required</sup> <a name="token_scopes" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopes"></a>

```python
token_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretRolesetBinding <a name="GcpSecretRolesetBinding" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.Initializer"></a>

```python
from cdktn_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRolesetBinding(
  resource: str,
  roles: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.resource">resource</a></code> | <code>str</code> | Resource name. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.roles">roles</a></code> | <code>typing.List[str]</code> | List of roles to apply to the resource. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.resource"></a>

```python
resource: str
```

- *Type:* str

Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#resource GcpSecretRoleset#resource}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

List of roles to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#roles GcpSecretRoleset#roles}

---

### GcpSecretRolesetConfig <a name="GcpSecretRolesetConfig" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.Initializer"></a>

```python
from cdktn_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRolesetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  binding: IResolvable | typing.List[GcpSecretRolesetBinding],
  project: str,
  roleset: str,
  id: str = None,
  namespace: str = None,
  secret_type: str = None,
  token_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.backend">backend</a></code> | <code>str</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.binding">binding</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]</code> | binding block. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.project">project</a></code> | <code>str</code> | Name of the GCP project that this roleset's service account will belong to. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.roleset">roleset</a></code> | <code>str</code> | Name of the RoleSet to create. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.secretType">secret_type</a></code> | <code>str</code> | Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.tokenScopes">token_scopes</a></code> | <code>typing.List[str]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#backend GcpSecretRoleset#backend}

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.binding"></a>

```python
binding: IResolvable | typing.List[GcpSecretRolesetBinding]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#binding GcpSecretRoleset#binding}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Name of the GCP project that this roleset's service account will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#project GcpSecretRoleset#project}

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.roleset"></a>

```python
roleset: str
```

- *Type:* str

Name of the RoleSet to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#roleset GcpSecretRoleset#roleset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#namespace GcpSecretRoleset#namespace}

---

##### `secret_type`<sup>Optional</sup> <a name="secret_type" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#secret_type GcpSecretRoleset#secret_type}

---

##### `token_scopes`<sup>Optional</sup> <a name="token_scopes" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.tokenScopes"></a>

```python
token_scopes: typing.List[str]
```

- *Type:* typing.List[str]

List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/gcp_secret_roleset#token_scopes GcpSecretRoleset#token_scopes}

---

## Classes <a name="Classes" id="Classes"></a>

### GcpSecretRolesetBindingList <a name="GcpSecretRolesetBindingList" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer"></a>

```python
from cdktn_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRolesetBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GcpSecretRolesetBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GcpSecretRolesetBinding]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]

---


### GcpSecretRolesetBindingOutputReference <a name="GcpSecretRolesetBindingOutputReference" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer"></a>

```python
from cdktn_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRolesetBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GcpSecretRolesetBinding
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>

---



