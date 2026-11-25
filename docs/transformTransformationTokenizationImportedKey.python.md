# `transformTransformationTokenizationImportedKey` Submodule <a name="`transformTransformationTokenizationImportedKey` Submodule" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenizationImportedKey <a name="TransformTransformationTokenizationImportedKey" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key vault_transform_transformation_tokenization_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_imported_key

transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey(
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
  name: str,
  allowed_roles: typing.List[str] = None,
  allow_rotation: bool | IResolvable = None,
  auto_rotate_period: typing.Union[int, float] = None,
  ciphertext_wo: str = None,
  ciphertext_wo_version: typing.Union[int, float] = None,
  deletion_allowed: bool | IResolvable = None,
  hash_function: str = None,
  mapping_mode: str = None,
  max_ttl: typing.Union[int, float] = None,
  min_decryption_version: typing.Union[int, float] = None,
  namespace: str = None,
  stores: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | The list of roles allowed to perform this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.allowRotation">allow_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to `true`, the imported key can be rotated within Vault. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.autoRotatePeriod">auto_rotate_period</a></code> | <code>typing.Union[int, float]</code> | The period in seconds at which the key is rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.ciphertextWo">ciphertext_wo</a></code> | <code>str</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.ciphertextWoVersion">ciphertext_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.hashFunction">hash_function</a></code> | <code>str</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.mappingMode">mapping_mode</a></code> | <code>str</code> | The mapping mode for stored tokenization values (`default` or `exportable`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum TTL of a token, in seconds. `0` means tokens have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.minDecryptionVersion">min_decryption_version</a></code> | <code>typing.Union[int, float]</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.stores">stores</a></code> | <code>typing.List[str]</code> | The stores that contain tokenized state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.mount"></a>

- *Type:* str

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mount TransformTransformationTokenizationImportedKey#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.name"></a>

- *Type:* str

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#name TransformTransformationTokenizationImportedKey#name}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.allowedRoles"></a>

- *Type:* typing.List[str]

The list of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allowed_roles TransformTransformationTokenizationImportedKey#allowed_roles}

---

##### `allow_rotation`<sup>Optional</sup> <a name="allow_rotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.allowRotation"></a>

- *Type:* bool | cdktn.IResolvable

If set to `true`, the imported key can be rotated within Vault.

Once the key is rotated in Vault, it no longer accepts imported key material. Vault only applies this when the key is imported, so changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allow_rotation TransformTransformationTokenizationImportedKey#allow_rotation}

---

##### `auto_rotate_period`<sup>Optional</sup> <a name="auto_rotate_period" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.autoRotatePeriod"></a>

- *Type:* typing.Union[int, float]

The period in seconds at which the key is rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#auto_rotate_period TransformTransformationTokenizationImportedKey#auto_rotate_period}

---

##### `ciphertext_wo`<sup>Optional</sup> <a name="ciphertext_wo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.ciphertextWo"></a>

- *Type:* str

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only).

Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo TransformTransformationTokenizationImportedKey#ciphertext_wo}

---

##### `ciphertext_wo_version`<sup>Optional</sup> <a name="ciphertext_wo_version" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.ciphertextWoVersion"></a>

- *Type:* typing.Union[int, float]

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo_version TransformTransformationTokenizationImportedKey#ciphertext_wo_version}

---

##### `deletion_allowed`<sup>Optional</sup> <a name="deletion_allowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.deletionAllowed"></a>

- *Type:* bool | cdktn.IResolvable

If true, this transformation can be deleted.

Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#deletion_allowed TransformTransformationTokenizationImportedKey#deletion_allowed}

---

##### `hash_function`<sup>Optional</sup> <a name="hash_function" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.hashFunction"></a>

- *Type:* str

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#hash_function TransformTransformationTokenizationImportedKey#hash_function}

---

##### `mapping_mode`<sup>Optional</sup> <a name="mapping_mode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.mappingMode"></a>

- *Type:* str

The mapping mode for stored tokenization values (`default` or `exportable`).

Vault does not allow this field to be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mapping_mode TransformTransformationTokenizationImportedKey#mapping_mode}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum TTL of a token, in seconds. `0` means tokens have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#max_ttl TransformTransformationTokenizationImportedKey#max_ttl}

---

##### `min_decryption_version`<sup>Optional</sup> <a name="min_decryption_version" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.minDecryptionVersion"></a>

- *Type:* typing.Union[int, float]

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#min_decryption_version TransformTransformationTokenizationImportedKey#min_decryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#namespace TransformTransformationTokenizationImportedKey#namespace}

---

##### `stores`<sup>Optional</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.stores"></a>

- *Type:* typing.List[str]

The stores that contain tokenized state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#stores TransformTransformationTokenizationImportedKey#stores}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowedRoles">reset_allowed_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowRotation">reset_allow_rotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAutoRotatePeriod">reset_auto_rotate_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWo">reset_ciphertext_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWoVersion">reset_ciphertext_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetDeletionAllowed">reset_deletion_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetHashFunction">reset_hash_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMappingMode">reset_mapping_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMinDecryptionVersion">reset_min_decryption_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetStores">reset_stores</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_roles` <a name="reset_allowed_roles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowedRoles"></a>

```python
def reset_allowed_roles() -> None
```

##### `reset_allow_rotation` <a name="reset_allow_rotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowRotation"></a>

```python
def reset_allow_rotation() -> None
```

##### `reset_auto_rotate_period` <a name="reset_auto_rotate_period" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAutoRotatePeriod"></a>

```python
def reset_auto_rotate_period() -> None
```

##### `reset_ciphertext_wo` <a name="reset_ciphertext_wo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWo"></a>

```python
def reset_ciphertext_wo() -> None
```

##### `reset_ciphertext_wo_version` <a name="reset_ciphertext_wo_version" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWoVersion"></a>

```python
def reset_ciphertext_wo_version() -> None
```

##### `reset_deletion_allowed` <a name="reset_deletion_allowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetDeletionAllowed"></a>

```python
def reset_deletion_allowed() -> None
```

##### `reset_hash_function` <a name="reset_hash_function" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetHashFunction"></a>

```python
def reset_hash_function() -> None
```

##### `reset_mapping_mode` <a name="reset_mapping_mode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMappingMode"></a>

```python
def reset_mapping_mode() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_min_decryption_version` <a name="reset_min_decryption_version" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMinDecryptionVersion"></a>

```python
def reset_min_decryption_version() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_stores` <a name="reset_stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetStores"></a>

```python
def reset_stores() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_imported_key

transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_imported_key

transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_imported_key

transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_imported_key

transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransformTransformationTokenizationImportedKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransformTransformationTokenizationImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenizationImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.latestVersion">latest_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minAvailableVersion">min_available_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRolesInput">allowed_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotationInput">allow_rotation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriodInput">auto_rotate_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoInput">ciphertext_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersionInput">ciphertext_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowedInput">deletion_allowed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunctionInput">hash_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingModeInput">mapping_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersionInput">min_decryption_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.storesInput">stores_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotation">allow_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriod">auto_rotate_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWo">ciphertext_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersion">ciphertext_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunction">hash_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingMode">mapping_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersion">min_decryption_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.stores">stores</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.latestVersion"></a>

```python
latest_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_available_version`<sup>Required</sup> <a name="min_available_version" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minAvailableVersion"></a>

```python
min_available_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_roles_input`<sup>Optional</sup> <a name="allowed_roles_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRolesInput"></a>

```python
allowed_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_rotation_input`<sup>Optional</sup> <a name="allow_rotation_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotationInput"></a>

```python
allow_rotation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_rotate_period_input`<sup>Optional</sup> <a name="auto_rotate_period_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriodInput"></a>

```python
auto_rotate_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ciphertext_wo_input`<sup>Optional</sup> <a name="ciphertext_wo_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoInput"></a>

```python
ciphertext_wo_input: str
```

- *Type:* str

---

##### `ciphertext_wo_version_input`<sup>Optional</sup> <a name="ciphertext_wo_version_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersionInput"></a>

```python
ciphertext_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deletion_allowed_input`<sup>Optional</sup> <a name="deletion_allowed_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowedInput"></a>

```python
deletion_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hash_function_input`<sup>Optional</sup> <a name="hash_function_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunctionInput"></a>

```python
hash_function_input: str
```

- *Type:* str

---

##### `mapping_mode_input`<sup>Optional</sup> <a name="mapping_mode_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingModeInput"></a>

```python
mapping_mode_input: str
```

- *Type:* str

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_decryption_version_input`<sup>Optional</sup> <a name="min_decryption_version_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersionInput"></a>

```python
min_decryption_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `stores_input`<sup>Optional</sup> <a name="stores_input" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.storesInput"></a>

```python
stores_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_roles`<sup>Required</sup> <a name="allowed_roles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_rotation`<sup>Required</sup> <a name="allow_rotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotation"></a>

```python
allow_rotation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_rotate_period`<sup>Required</sup> <a name="auto_rotate_period" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriod"></a>

```python
auto_rotate_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### ~~`ciphertext_wo`~~<sup>Required</sup> <a name="ciphertext_wo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
ciphertext_wo: str
```

- *Type:* str

---

##### `ciphertext_wo_version`<sup>Required</sup> <a name="ciphertext_wo_version" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersion"></a>

```python
ciphertext_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deletion_allowed`<sup>Required</sup> <a name="deletion_allowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowed"></a>

```python
deletion_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hash_function`<sup>Required</sup> <a name="hash_function" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunction"></a>

```python
hash_function: str
```

- *Type:* str

---

##### `mapping_mode`<sup>Required</sup> <a name="mapping_mode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingMode"></a>

```python
mapping_mode: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_decryption_version`<sup>Required</sup> <a name="min_decryption_version" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersion"></a>

```python
min_decryption_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `stores`<sup>Required</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.stores"></a>

```python
stores: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationImportedKeyConfig <a name="TransformTransformationTokenizationImportedKeyConfig" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.Initializer"></a>

```python
from cdktn_provider_vault import transform_transformation_tokenization_imported_key

transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  name: str,
  allowed_roles: typing.List[str] = None,
  allow_rotation: bool | IResolvable = None,
  auto_rotate_period: typing.Union[int, float] = None,
  ciphertext_wo: str = None,
  ciphertext_wo_version: typing.Union[int, float] = None,
  deletion_allowed: bool | IResolvable = None,
  hash_function: str = None,
  mapping_mode: str = None,
  max_ttl: typing.Union[int, float] = None,
  min_decryption_version: typing.Union[int, float] = None,
  namespace: str = None,
  stores: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mount">mount</a></code> | <code>str</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.name">name</a></code> | <code>str</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | The list of roles allowed to perform this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowRotation">allow_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to `true`, the imported key can be rotated within Vault. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.autoRotatePeriod">auto_rotate_period</a></code> | <code>typing.Union[int, float]</code> | The period in seconds at which the key is rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWo">ciphertext_wo</a></code> | <code>str</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWoVersion">ciphertext_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.hashFunction">hash_function</a></code> | <code>str</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mappingMode">mapping_mode</a></code> | <code>str</code> | The mapping mode for stored tokenization values (`default` or `exportable`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum TTL of a token, in seconds. `0` means tokens have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.minDecryptionVersion">min_decryption_version</a></code> | <code>typing.Union[int, float]</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.stores">stores</a></code> | <code>typing.List[str]</code> | The stores that contain tokenized state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mount TransformTransformationTokenizationImportedKey#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#name TransformTransformationTokenizationImportedKey#name}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

The list of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allowed_roles TransformTransformationTokenizationImportedKey#allowed_roles}

---

##### `allow_rotation`<sup>Optional</sup> <a name="allow_rotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowRotation"></a>

```python
allow_rotation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to `true`, the imported key can be rotated within Vault.

Once the key is rotated in Vault, it no longer accepts imported key material. Vault only applies this when the key is imported, so changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allow_rotation TransformTransformationTokenizationImportedKey#allow_rotation}

---

##### `auto_rotate_period`<sup>Optional</sup> <a name="auto_rotate_period" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.autoRotatePeriod"></a>

```python
auto_rotate_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period in seconds at which the key is rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#auto_rotate_period TransformTransformationTokenizationImportedKey#auto_rotate_period}

---

##### `ciphertext_wo`<sup>Optional</sup> <a name="ciphertext_wo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWo"></a>

```python
ciphertext_wo: str
```

- *Type:* str

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only).

Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo TransformTransformationTokenizationImportedKey#ciphertext_wo}

---

##### `ciphertext_wo_version`<sup>Optional</sup> <a name="ciphertext_wo_version" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWoVersion"></a>

```python
ciphertext_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo_version TransformTransformationTokenizationImportedKey#ciphertext_wo_version}

---

##### `deletion_allowed`<sup>Optional</sup> <a name="deletion_allowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.deletionAllowed"></a>

```python
deletion_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, this transformation can be deleted.

Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#deletion_allowed TransformTransformationTokenizationImportedKey#deletion_allowed}

---

##### `hash_function`<sup>Optional</sup> <a name="hash_function" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.hashFunction"></a>

```python
hash_function: str
```

- *Type:* str

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#hash_function TransformTransformationTokenizationImportedKey#hash_function}

---

##### `mapping_mode`<sup>Optional</sup> <a name="mapping_mode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mappingMode"></a>

```python
mapping_mode: str
```

- *Type:* str

The mapping mode for stored tokenization values (`default` or `exportable`).

Vault does not allow this field to be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mapping_mode TransformTransformationTokenizationImportedKey#mapping_mode}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum TTL of a token, in seconds. `0` means tokens have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#max_ttl TransformTransformationTokenizationImportedKey#max_ttl}

---

##### `min_decryption_version`<sup>Optional</sup> <a name="min_decryption_version" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.minDecryptionVersion"></a>

```python
min_decryption_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#min_decryption_version TransformTransformationTokenizationImportedKey#min_decryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#namespace TransformTransformationTokenizationImportedKey#namespace}

---

##### `stores`<sup>Optional</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.stores"></a>

```python
stores: typing.List[str]
```

- *Type:* typing.List[str]

The stores that contain tokenized state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#stores TransformTransformationTokenizationImportedKey#stores}

---



