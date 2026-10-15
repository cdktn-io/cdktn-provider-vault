# `ephemeralVaultPkiSecretBackendCaKeyExport` Submodule <a name="`ephemeralVaultPkiSecretBackendCaKeyExport` Submodule" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultPkiSecretBackendCaKeyExport <a name="EphemeralVaultPkiSecretBackendCaKeyExport" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export vault_pki_secret_backend_ca_key_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_pki_secret_backend_ca_key_export

ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  ca_key_uuid: str,
  mount: str,
  public_key: str,
  mount_id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.caKeyUuid">ca_key_uuid</a></code> | <code>str</code> | UUID of the CA key to export from the source mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path of the source PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.publicKey">public_key</a></code> | <code>str</code> | PEM-encoded public key of the destination wrapping keypair. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `ca_key_uuid`<sup>Required</sup> <a name="ca_key_uuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.caKeyUuid"></a>

- *Type:* str

UUID of the CA key to export from the source mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#ca_key_uuid EphemeralVaultPkiSecretBackendCaKeyExport#ca_key_uuid}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.mount"></a>

- *Type:* str

Path of the source PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount EphemeralVaultPkiSecretBackendCaKeyExport#mount}

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.publicKey"></a>

- *Type:* str

PEM-encoded public key of the destination wrapping keypair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#public_key EphemeralVaultPkiSecretBackendCaKeyExport#public_key}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount_id EphemeralVaultPkiSecretBackendCaKeyExport#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#namespace EphemeralVaultPkiSecretBackendCaKeyExport#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_pki_secret_backend_ca_key_export

ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_pki_secret_backend_ca_key_export

ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_pki_secret_backend_ca_key_export

ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportedAt">exported_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportKeyHmac">export_key_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.wrappedKey">wrapped_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuidInput">ca_key_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuid">ca_key_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `exported_at`<sup>Required</sup> <a name="exported_at" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportedAt"></a>

```python
exported_at: str
```

- *Type:* str

---

##### `export_key_hmac`<sup>Required</sup> <a name="export_key_hmac" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportKeyHmac"></a>

```python
export_key_hmac: str
```

- *Type:* str

---

##### `wrapped_key`<sup>Required</sup> <a name="wrapped_key" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.wrappedKey"></a>

```python
wrapped_key: str
```

- *Type:* str

---

##### `ca_key_uuid_input`<sup>Optional</sup> <a name="ca_key_uuid_input" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuidInput"></a>

```python
ca_key_uuid_input: str
```

- *Type:* str

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `ca_key_uuid`<sup>Required</sup> <a name="ca_key_uuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuid"></a>

```python
ca_key_uuid: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultPkiSecretBackendCaKeyExportConfig <a name="EphemeralVaultPkiSecretBackendCaKeyExportConfig" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_pki_secret_backend_ca_key_export

ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  ca_key_uuid: str,
  mount: str,
  public_key: str,
  mount_id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.caKeyUuid">ca_key_uuid</a></code> | <code>str</code> | UUID of the CA key to export from the source mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mount">mount</a></code> | <code>str</code> | Path of the source PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.publicKey">public_key</a></code> | <code>str</code> | PEM-encoded public key of the destination wrapping keypair. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `ca_key_uuid`<sup>Required</sup> <a name="ca_key_uuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.caKeyUuid"></a>

```python
ca_key_uuid: str
```

- *Type:* str

UUID of the CA key to export from the source mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#ca_key_uuid EphemeralVaultPkiSecretBackendCaKeyExport#ca_key_uuid}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path of the source PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount EphemeralVaultPkiSecretBackendCaKeyExport#mount}

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

PEM-encoded public key of the destination wrapping keypair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#public_key EphemeralVaultPkiSecretBackendCaKeyExport#public_key}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount_id EphemeralVaultPkiSecretBackendCaKeyExport#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#namespace EphemeralVaultPkiSecretBackendCaKeyExport#namespace}

---



