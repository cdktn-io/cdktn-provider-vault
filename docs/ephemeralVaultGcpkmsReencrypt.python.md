# `ephemeralVaultGcpkmsReencrypt` Submodule <a name="`ephemeralVaultGcpkmsReencrypt` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpkmsReencrypt <a name="EphemeralVaultGcpkmsReencrypt" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt vault_gcpkms_reencrypt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcpkms_reencrypt

ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  ciphertext: str,
  key_name: str,
  mount: str,
  additional_authenticated_data: str = None,
  key_version: typing.Union[int, float] = None,
  mount_id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.ciphertext">ciphertext</a></code> | <code>str</code> | Base64-encoded ciphertext to re-encrypt. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Name of the Vault key to use for re-encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.additionalAuthenticatedData">additional_authenticated_data</a></code> | <code>str</code> | Base64-encoded additional authenticated data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.keyVersion">key_version</a></code> | <code>typing.Union[int, float]</code> | Version of the key to use for re-encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.ciphertext"></a>

- *Type:* str

Base64-encoded ciphertext to re-encrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#ciphertext EphemeralVaultGcpkmsReencrypt#ciphertext}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.keyName"></a>

- *Type:* str

Name of the Vault key to use for re-encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#key_name EphemeralVaultGcpkmsReencrypt#key_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.mount"></a>

- *Type:* str

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#mount EphemeralVaultGcpkmsReencrypt#mount}

---

##### `additional_authenticated_data`<sup>Optional</sup> <a name="additional_authenticated_data" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.additionalAuthenticatedData"></a>

- *Type:* str

Base64-encoded additional authenticated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#additional_authenticated_data EphemeralVaultGcpkmsReencrypt#additional_authenticated_data}

---

##### `key_version`<sup>Optional</sup> <a name="key_version" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.keyVersion"></a>

- *Type:* typing.Union[int, float]

Version of the key to use for re-encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#key_version EphemeralVaultGcpkmsReencrypt#key_version}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#mount_id EphemeralVaultGcpkmsReencrypt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#namespace EphemeralVaultGcpkmsReencrypt#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.resetAdditionalAuthenticatedData">reset_additional_authenticated_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.resetKeyVersion">reset_key_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_additional_authenticated_data` <a name="reset_additional_authenticated_data" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.resetAdditionalAuthenticatedData"></a>

```python
def reset_additional_authenticated_data() -> None
```

##### `reset_key_version` <a name="reset_key_version" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.resetKeyVersion"></a>

```python
def reset_key_version() -> None
```

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcpkms_reencrypt

ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcpkms_reencrypt

ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcpkms_reencrypt

ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.keyVersionReturned">key_version_returned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.newCiphertext">new_ciphertext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.additionalAuthenticatedDataInput">additional_authenticated_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.ciphertextInput">ciphertext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.keyVersionInput">key_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.additionalAuthenticatedData">additional_authenticated_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.ciphertext">ciphertext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.keyVersion">key_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `key_version_returned`<sup>Required</sup> <a name="key_version_returned" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.keyVersionReturned"></a>

```python
key_version_returned: str
```

- *Type:* str

---

##### `new_ciphertext`<sup>Required</sup> <a name="new_ciphertext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.newCiphertext"></a>

```python
new_ciphertext: str
```

- *Type:* str

---

##### `additional_authenticated_data_input`<sup>Optional</sup> <a name="additional_authenticated_data_input" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.additionalAuthenticatedDataInput"></a>

```python
additional_authenticated_data_input: str
```

- *Type:* str

---

##### `ciphertext_input`<sup>Optional</sup> <a name="ciphertext_input" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.ciphertextInput"></a>

```python
ciphertext_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `key_version_input`<sup>Optional</sup> <a name="key_version_input" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.keyVersionInput"></a>

```python
key_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `additional_authenticated_data`<sup>Required</sup> <a name="additional_authenticated_data" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.additionalAuthenticatedData"></a>

```python
additional_authenticated_data: str
```

- *Type:* str

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.ciphertext"></a>

```python
ciphertext: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.keyVersion"></a>

```python
key_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencrypt.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpkmsReencryptConfig <a name="EphemeralVaultGcpkmsReencryptConfig" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_gcpkms_reencrypt

ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  ciphertext: str,
  key_name: str,
  mount: str,
  additional_authenticated_data: str = None,
  key_version: typing.Union[int, float] = None,
  mount_id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.ciphertext">ciphertext</a></code> | <code>str</code> | Base64-encoded ciphertext to re-encrypt. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.keyName">key_name</a></code> | <code>str</code> | Name of the Vault key to use for re-encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.mount">mount</a></code> | <code>str</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.additionalAuthenticatedData">additional_authenticated_data</a></code> | <code>str</code> | Base64-encoded additional authenticated data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.keyVersion">key_version</a></code> | <code>typing.Union[int, float]</code> | Version of the key to use for re-encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.ciphertext"></a>

```python
ciphertext: str
```

- *Type:* str

Base64-encoded ciphertext to re-encrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#ciphertext EphemeralVaultGcpkmsReencrypt#ciphertext}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Name of the Vault key to use for re-encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#key_name EphemeralVaultGcpkmsReencrypt#key_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#mount EphemeralVaultGcpkmsReencrypt#mount}

---

##### `additional_authenticated_data`<sup>Optional</sup> <a name="additional_authenticated_data" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.additionalAuthenticatedData"></a>

```python
additional_authenticated_data: str
```

- *Type:* str

Base64-encoded additional authenticated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#additional_authenticated_data EphemeralVaultGcpkmsReencrypt#additional_authenticated_data}

---

##### `key_version`<sup>Optional</sup> <a name="key_version" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.keyVersion"></a>

```python
key_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version of the key to use for re-encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#key_version EphemeralVaultGcpkmsReencrypt#key_version}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#mount_id EphemeralVaultGcpkmsReencrypt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsReencrypt.EphemeralVaultGcpkmsReencryptConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#namespace EphemeralVaultGcpkmsReencrypt#namespace}

---



