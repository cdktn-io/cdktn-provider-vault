# `pkiSecretBackendWrappedKeyImport` Submodule <a name="`pkiSecretBackendWrappedKeyImport` Submodule" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendWrappedKeyImport <a name="PkiSecretBackendWrappedKeyImport" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import vault_pki_secret_backend_wrapped_key_import}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer"></a>

```python
from cdktn_provider_vault import pki_secret_backend_wrapped_key_import

pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  export_key_hmac: str,
  mount: str,
  wrapped_key: str,
  key_name: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.exportKeyHmac">export_key_hmac</a></code> | <code>str</code> | HMAC fingerprint of the wrapping key used to encrypt the blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path of the destination PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.wrappedKey">wrapped_key</a></code> | <code>str</code> | Base64-encoded wrapped CA private key blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Human-readable name for the imported key in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `export_key_hmac`<sup>Required</sup> <a name="export_key_hmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.exportKeyHmac"></a>

- *Type:* str

HMAC fingerprint of the wrapping key used to encrypt the blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#export_key_hmac PkiSecretBackendWrappedKeyImport#export_key_hmac}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.mount"></a>

- *Type:* str

Path of the destination PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#mount PkiSecretBackendWrappedKeyImport#mount}

---

##### `wrapped_key`<sup>Required</sup> <a name="wrapped_key" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.wrappedKey"></a>

- *Type:* str

Base64-encoded wrapped CA private key blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#wrapped_key PkiSecretBackendWrappedKeyImport#wrapped_key}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.keyName"></a>

- *Type:* str

Human-readable name for the imported key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#key_name PkiSecretBackendWrappedKeyImport#key_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#namespace PkiSecretBackendWrappedKeyImport#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_key_name` <a name="reset_key_name" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct"></a>

```python
from cdktn_provider_vault import pki_secret_backend_wrapped_key_import

pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement"></a>

```python
from cdktn_provider_vault import pki_secret_backend_wrapped_key_import

pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource"></a>

```python
from cdktn_provider_vault import pki_secret_backend_wrapped_key_import

pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport"></a>

```python
from cdktn_provider_vault import pki_secret_backend_wrapped_key_import

pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendWrappedKeyImport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendWrappedKeyImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendWrappedKeyImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmacInput">export_key_hmac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKeyInput">wrapped_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmac">export_key_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKey">wrapped_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `export_key_hmac_input`<sup>Optional</sup> <a name="export_key_hmac_input" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmacInput"></a>

```python
export_key_hmac_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `wrapped_key_input`<sup>Optional</sup> <a name="wrapped_key_input" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKeyInput"></a>

```python
wrapped_key_input: str
```

- *Type:* str

---

##### ~~`export_key_hmac`~~<sup>Required</sup> <a name="export_key_hmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmac"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
export_key_hmac: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### ~~`wrapped_key`~~<sup>Required</sup> <a name="wrapped_key" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
wrapped_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendWrappedKeyImportConfig <a name="PkiSecretBackendWrappedKeyImportConfig" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.Initializer"></a>

```python
from cdktn_provider_vault import pki_secret_backend_wrapped_key_import

pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  export_key_hmac: str,
  mount: str,
  wrapped_key: str,
  key_name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.exportKeyHmac">export_key_hmac</a></code> | <code>str</code> | HMAC fingerprint of the wrapping key used to encrypt the blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.mount">mount</a></code> | <code>str</code> | Path of the destination PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.wrappedKey">wrapped_key</a></code> | <code>str</code> | Base64-encoded wrapped CA private key blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.keyName">key_name</a></code> | <code>str</code> | Human-readable name for the imported key in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `export_key_hmac`<sup>Required</sup> <a name="export_key_hmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.exportKeyHmac"></a>

```python
export_key_hmac: str
```

- *Type:* str

HMAC fingerprint of the wrapping key used to encrypt the blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#export_key_hmac PkiSecretBackendWrappedKeyImport#export_key_hmac}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path of the destination PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#mount PkiSecretBackendWrappedKeyImport#mount}

---

##### `wrapped_key`<sup>Required</sup> <a name="wrapped_key" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.wrappedKey"></a>

```python
wrapped_key: str
```

- *Type:* str

Base64-encoded wrapped CA private key blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#wrapped_key PkiSecretBackendWrappedKeyImport#wrapped_key}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Human-readable name for the imported key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#key_name PkiSecretBackendWrappedKeyImport#key_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#namespace PkiSecretBackendWrappedKeyImport#namespace}

---



