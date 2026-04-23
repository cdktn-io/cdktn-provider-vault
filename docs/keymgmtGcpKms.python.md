# `keymgmtGcpKms` Submodule <a name="`keymgmtGcpKms` Submodule" id="@cdktn/provider-vault.keymgmtGcpKms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymgmtGcpKms <a name="KeymgmtGcpKms" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms vault_keymgmt_gcp_kms}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer"></a>

```python
from cdktn_provider_vault import keymgmt_gcp_kms

keymgmtGcpKms.KeymgmtGcpKms(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_collection: str,
  mount: str,
  name: str,
  credentials_wo: typing.Mapping[str] = None,
  credentials_wo_version: typing.Union[int, float] = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.keyCollection">key_collection</a></code> | <code>str</code> | Refers to the resource ID of an existing GCP Cloud KMS key ring. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the GCP Cloud KMS provider. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.credentialsWo">credentials_wo</a></code> | <code>typing.Mapping[str]</code> | The credentials to use for authentication with Google Cloud KMS. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.credentialsWoVersion">credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `credentials_wo` field. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_collection`<sup>Required</sup> <a name="key_collection" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.keyCollection"></a>

- *Type:* str

Refers to the resource ID of an existing GCP Cloud KMS key ring. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#key_collection KeymgmtGcpKms#key_collection}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.mount"></a>

- *Type:* str

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#mount KeymgmtGcpKms#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the GCP Cloud KMS provider. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#name KeymgmtGcpKms#name}

---

##### `credentials_wo`<sup>Optional</sup> <a name="credentials_wo" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.credentialsWo"></a>

- *Type:* typing.Mapping[str]

The credentials to use for authentication with Google Cloud KMS.

Supplying values for this parameter is optional, as credentials may also be specified through environment variables or Application Default Credentials. The order of precedence is environment variables, then the credentials provided to this parameter and Application Default Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#credentials_wo KeymgmtGcpKms#credentials_wo}

---

##### `credentials_wo_version`<sup>Optional</sup> <a name="credentials_wo_version" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.credentialsWoVersion"></a>

- *Type:* typing.Union[int, float]

Version counter for the write-only `credentials_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when credentials change. Increment this value whenever you update `credentials_wo` to ensure the new credentials are sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#credentials_wo_version KeymgmtGcpKms#credentials_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#namespace KeymgmtGcpKms#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetCredentialsWo">reset_credentials_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetCredentialsWoVersion">reset_credentials_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_credentials_wo` <a name="reset_credentials_wo" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetCredentialsWo"></a>

```python
def reset_credentials_wo() -> None
```

##### `reset_credentials_wo_version` <a name="reset_credentials_wo_version" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetCredentialsWoVersion"></a>

```python
def reset_credentials_wo_version() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KeymgmtGcpKms resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isConstruct"></a>

```python
from cdktn_provider_vault import keymgmt_gcp_kms

keymgmtGcpKms.KeymgmtGcpKms.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformElement"></a>

```python
from cdktn_provider_vault import keymgmt_gcp_kms

keymgmtGcpKms.KeymgmtGcpKms.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformResource"></a>

```python
from cdktn_provider_vault import keymgmt_gcp_kms

keymgmtGcpKms.KeymgmtGcpKms.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport"></a>

```python
from cdktn_provider_vault import keymgmt_gcp_kms

keymgmtGcpKms.KeymgmtGcpKms.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KeymgmtGcpKms resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KeymgmtGcpKms to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KeymgmtGcpKms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KeymgmtGcpKms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoInput">credentials_wo_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoVersionInput">credentials_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.keyCollectionInput">key_collection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWo">credentials_wo</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoVersion">credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.keyCollection">key_collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `credentials_wo_input`<sup>Optional</sup> <a name="credentials_wo_input" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoInput"></a>

```python
credentials_wo_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `credentials_wo_version_input`<sup>Optional</sup> <a name="credentials_wo_version_input" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoVersionInput"></a>

```python
credentials_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_collection_input`<sup>Optional</sup> <a name="key_collection_input" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.keyCollectionInput"></a>

```python
key_collection_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `credentials_wo`<sup>Required</sup> <a name="credentials_wo" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWo"></a>

```python
credentials_wo: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `credentials_wo_version`<sup>Required</sup> <a name="credentials_wo_version" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoVersion"></a>

```python
credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_collection`<sup>Required</sup> <a name="key_collection" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.keyCollection"></a>

```python
key_collection: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeymgmtGcpKmsConfig <a name="KeymgmtGcpKmsConfig" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.Initializer"></a>

```python
from cdktn_provider_vault import keymgmt_gcp_kms

keymgmtGcpKms.KeymgmtGcpKmsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_collection: str,
  mount: str,
  name: str,
  credentials_wo: typing.Mapping[str] = None,
  credentials_wo_version: typing.Union[int, float] = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.keyCollection">key_collection</a></code> | <code>str</code> | Refers to the resource ID of an existing GCP Cloud KMS key ring. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.mount">mount</a></code> | <code>str</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the GCP Cloud KMS provider. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.credentialsWo">credentials_wo</a></code> | <code>typing.Mapping[str]</code> | The credentials to use for authentication with Google Cloud KMS. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.credentialsWoVersion">credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `credentials_wo` field. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_collection`<sup>Required</sup> <a name="key_collection" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.keyCollection"></a>

```python
key_collection: str
```

- *Type:* str

Refers to the resource ID of an existing GCP Cloud KMS key ring. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#key_collection KeymgmtGcpKms#key_collection}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#mount KeymgmtGcpKms#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the GCP Cloud KMS provider. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#name KeymgmtGcpKms#name}

---

##### `credentials_wo`<sup>Optional</sup> <a name="credentials_wo" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.credentialsWo"></a>

```python
credentials_wo: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The credentials to use for authentication with Google Cloud KMS.

Supplying values for this parameter is optional, as credentials may also be specified through environment variables or Application Default Credentials. The order of precedence is environment variables, then the credentials provided to this parameter and Application Default Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#credentials_wo KeymgmtGcpKms#credentials_wo}

---

##### `credentials_wo_version`<sup>Optional</sup> <a name="credentials_wo_version" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.credentialsWoVersion"></a>

```python
credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version counter for the write-only `credentials_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when credentials change. Increment this value whenever you update `credentials_wo` to ensure the new credentials are sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#credentials_wo_version KeymgmtGcpKms#credentials_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/keymgmt_gcp_kms#namespace KeymgmtGcpKms#namespace}

---



