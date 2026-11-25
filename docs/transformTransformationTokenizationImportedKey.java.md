# `transformTransformationTokenizationImportedKey` Submodule <a name="`transformTransformationTokenizationImportedKey` Submodule" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenizationImportedKey <a name="TransformTransformationTokenizationImportedKey" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key vault_transform_transformation_tokenization_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_imported_key.TransformTransformationTokenizationImportedKey;

TransformTransformationTokenizationImportedKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .allowRotation(java.lang.Boolean|IResolvable)
//  .autoRotatePeriod(java.lang.Number)
//  .ciphertextWo(java.lang.String)
//  .ciphertextWoVersion(java.lang.Number)
//  .deletionAllowed(java.lang.Boolean|IResolvable)
//  .hashFunction(java.lang.String)
//  .mappingMode(java.lang.String)
//  .maxTtl(java.lang.Number)
//  .minDecryptionVersion(java.lang.Number)
//  .namespace(java.lang.String)
//  .stores(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | The list of roles allowed to perform this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.allowRotation">allowRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to `true`, the imported key can be rotated within Vault. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | The period in seconds at which the key is rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.ciphertextWo">ciphertextWo</a></code> | <code>java.lang.String</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.ciphertextWoVersion">ciphertextWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.hashFunction">hashFunction</a></code> | <code>java.lang.String</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.mappingMode">mappingMode</a></code> | <code>java.lang.String</code> | The mapping mode for stored tokenization values (`default` or `exportable`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | The maximum TTL of a token, in seconds. `0` means tokens have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.stores">stores</a></code> | <code>java.util.List<java.lang.String></code> | The stores that contain tokenized state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mount TransformTransformationTokenizationImportedKey#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#name TransformTransformationTokenizationImportedKey#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.allowedRoles"></a>

- *Type:* java.util.List<java.lang.String>

The list of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allowed_roles TransformTransformationTokenizationImportedKey#allowed_roles}

---

##### `allowRotation`<sup>Optional</sup> <a name="allowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.allowRotation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to `true`, the imported key can be rotated within Vault.

Once the key is rotated in Vault, it no longer accepts imported key material. Vault only applies this when the key is imported, so changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allow_rotation TransformTransformationTokenizationImportedKey#allow_rotation}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.autoRotatePeriod"></a>

- *Type:* java.lang.Number

The period in seconds at which the key is rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#auto_rotate_period TransformTransformationTokenizationImportedKey#auto_rotate_period}

---

##### `ciphertextWo`<sup>Optional</sup> <a name="ciphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.ciphertextWo"></a>

- *Type:* java.lang.String

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only).

Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo TransformTransformationTokenizationImportedKey#ciphertext_wo}

---

##### `ciphertextWoVersion`<sup>Optional</sup> <a name="ciphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.ciphertextWoVersion"></a>

- *Type:* java.lang.Number

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo_version TransformTransformationTokenizationImportedKey#ciphertext_wo_version}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.deletionAllowed"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, this transformation can be deleted.

Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#deletion_allowed TransformTransformationTokenizationImportedKey#deletion_allowed}

---

##### `hashFunction`<sup>Optional</sup> <a name="hashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.hashFunction"></a>

- *Type:* java.lang.String

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#hash_function TransformTransformationTokenizationImportedKey#hash_function}

---

##### `mappingMode`<sup>Optional</sup> <a name="mappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.mappingMode"></a>

- *Type:* java.lang.String

The mapping mode for stored tokenization values (`default` or `exportable`).

Vault does not allow this field to be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mapping_mode TransformTransformationTokenizationImportedKey#mapping_mode}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.Number

The maximum TTL of a token, in seconds. `0` means tokens have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#max_ttl TransformTransformationTokenizationImportedKey#max_ttl}

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.minDecryptionVersion"></a>

- *Type:* java.lang.Number

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#min_decryption_version TransformTransformationTokenizationImportedKey#min_decryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#namespace TransformTransformationTokenizationImportedKey#namespace}

---

##### `stores`<sup>Optional</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.stores"></a>

- *Type:* java.util.List<java.lang.String>

The stores that contain tokenized state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#stores TransformTransformationTokenizationImportedKey#stores}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowRotation">resetAllowRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAutoRotatePeriod">resetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWo">resetCiphertextWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWoVersion">resetCiphertextWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetHashFunction">resetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMappingMode">resetMappingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMinDecryptionVersion">resetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetStores">resetStores</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowedRoles"></a>

```java
public void resetAllowedRoles()
```

##### `resetAllowRotation` <a name="resetAllowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowRotation"></a>

```java
public void resetAllowRotation()
```

##### `resetAutoRotatePeriod` <a name="resetAutoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAutoRotatePeriod"></a>

```java
public void resetAutoRotatePeriod()
```

##### `resetCiphertextWo` <a name="resetCiphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWo"></a>

```java
public void resetCiphertextWo()
```

##### `resetCiphertextWoVersion` <a name="resetCiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWoVersion"></a>

```java
public void resetCiphertextWoVersion()
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetDeletionAllowed"></a>

```java
public void resetDeletionAllowed()
```

##### `resetHashFunction` <a name="resetHashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetHashFunction"></a>

```java
public void resetHashFunction()
```

##### `resetMappingMode` <a name="resetMappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMappingMode"></a>

```java
public void resetMappingMode()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetMinDecryptionVersion` <a name="resetMinDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMinDecryptionVersion"></a>

```java
public void resetMinDecryptionVersion()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetStores` <a name="resetStores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetStores"></a>

```java
public void resetStores()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_imported_key.TransformTransformationTokenizationImportedKey;

TransformTransformationTokenizationImportedKey.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_imported_key.TransformTransformationTokenizationImportedKey;

TransformTransformationTokenizationImportedKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_imported_key.TransformTransformationTokenizationImportedKey;

TransformTransformationTokenizationImportedKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_imported_key.TransformTransformationTokenizationImportedKey;

TransformTransformationTokenizationImportedKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransformTransformationTokenizationImportedKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransformTransformationTokenizationImportedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransformTransformationTokenizationImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenizationImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.latestVersion">latestVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minAvailableVersion">minAvailableVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRolesInput">allowedRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotationInput">allowRotationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriodInput">autoRotatePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoInput">ciphertextWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersionInput">ciphertextWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunctionInput">hashFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingModeInput">mappingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersionInput">minDecryptionVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.storesInput">storesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotation">allowRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWo">ciphertextWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersion">ciphertextWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunction">hashFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingMode">mappingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.stores">stores</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.latestVersion"></a>

```java
public java.lang.Number getLatestVersion();
```

- *Type:* java.lang.Number

---

##### `minAvailableVersion`<sup>Required</sup> <a name="minAvailableVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minAvailableVersion"></a>

```java
public java.lang.Number getMinAvailableVersion();
```

- *Type:* java.lang.Number

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRolesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowRotationInput`<sup>Optional</sup> <a name="allowRotationInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotationInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowRotationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoRotatePeriodInput`<sup>Optional</sup> <a name="autoRotatePeriodInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriodInput"></a>

```java
public java.lang.Number getAutoRotatePeriodInput();
```

- *Type:* java.lang.Number

---

##### `ciphertextWoInput`<sup>Optional</sup> <a name="ciphertextWoInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoInput"></a>

```java
public java.lang.String getCiphertextWoInput();
```

- *Type:* java.lang.String

---

##### `ciphertextWoVersionInput`<sup>Optional</sup> <a name="ciphertextWoVersionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersionInput"></a>

```java
public java.lang.Number getCiphertextWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowedInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hashFunctionInput`<sup>Optional</sup> <a name="hashFunctionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunctionInput"></a>

```java
public java.lang.String getHashFunctionInput();
```

- *Type:* java.lang.String

---

##### `mappingModeInput`<sup>Optional</sup> <a name="mappingModeInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingModeInput"></a>

```java
public java.lang.String getMappingModeInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `minDecryptionVersionInput`<sup>Optional</sup> <a name="minDecryptionVersionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersionInput"></a>

```java
public java.lang.Number getMinDecryptionVersionInput();
```

- *Type:* java.lang.Number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `storesInput`<sup>Optional</sup> <a name="storesInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.storesInput"></a>

```java
public java.util.List<java.lang.String> getStoresInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowRotation`<sup>Required</sup> <a name="allowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotation"></a>

```java
public java.lang.Boolean|IResolvable getAllowRotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoRotatePeriod`<sup>Required</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriod"></a>

```java
public java.lang.Number getAutoRotatePeriod();
```

- *Type:* java.lang.Number

---

##### ~~`ciphertextWo`~~<sup>Required</sup> <a name="ciphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getCiphertextWo();
```

- *Type:* java.lang.String

---

##### `ciphertextWoVersion`<sup>Required</sup> <a name="ciphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersion"></a>

```java
public java.lang.Number getCiphertextWoVersion();
```

- *Type:* java.lang.Number

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowed"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hashFunction`<sup>Required</sup> <a name="hashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunction"></a>

```java
public java.lang.String getHashFunction();
```

- *Type:* java.lang.String

---

##### `mappingMode`<sup>Required</sup> <a name="mappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingMode"></a>

```java
public java.lang.String getMappingMode();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `minDecryptionVersion`<sup>Required</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersion"></a>

```java
public java.lang.Number getMinDecryptionVersion();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `stores`<sup>Required</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.stores"></a>

```java
public java.util.List<java.lang.String> getStores();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationImportedKeyConfig <a name="TransformTransformationTokenizationImportedKeyConfig" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.transform_transformation_tokenization_imported_key.TransformTransformationTokenizationImportedKeyConfig;

TransformTransformationTokenizationImportedKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .allowRotation(java.lang.Boolean|IResolvable)
//  .autoRotatePeriod(java.lang.Number)
//  .ciphertextWo(java.lang.String)
//  .ciphertextWoVersion(java.lang.Number)
//  .deletionAllowed(java.lang.Boolean|IResolvable)
//  .hashFunction(java.lang.String)
//  .mappingMode(java.lang.String)
//  .maxTtl(java.lang.Number)
//  .minDecryptionVersion(java.lang.Number)
//  .namespace(java.lang.String)
//  .stores(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | The list of roles allowed to perform this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowRotation">allowRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to `true`, the imported key can be rotated within Vault. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | The period in seconds at which the key is rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWo">ciphertextWo</a></code> | <code>java.lang.String</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWoVersion">ciphertextWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.hashFunction">hashFunction</a></code> | <code>java.lang.String</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mappingMode">mappingMode</a></code> | <code>java.lang.String</code> | The mapping mode for stored tokenization values (`default` or `exportable`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | The maximum TTL of a token, in seconds. `0` means tokens have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.stores">stores</a></code> | <code>java.util.List<java.lang.String></code> | The stores that contain tokenized state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mount TransformTransformationTokenizationImportedKey#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#name TransformTransformationTokenizationImportedKey#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

The list of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allowed_roles TransformTransformationTokenizationImportedKey#allowed_roles}

---

##### `allowRotation`<sup>Optional</sup> <a name="allowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowRotation"></a>

```java
public java.lang.Boolean|IResolvable getAllowRotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to `true`, the imported key can be rotated within Vault.

Once the key is rotated in Vault, it no longer accepts imported key material. Vault only applies this when the key is imported, so changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allow_rotation TransformTransformationTokenizationImportedKey#allow_rotation}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.autoRotatePeriod"></a>

```java
public java.lang.Number getAutoRotatePeriod();
```

- *Type:* java.lang.Number

The period in seconds at which the key is rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#auto_rotate_period TransformTransformationTokenizationImportedKey#auto_rotate_period}

---

##### `ciphertextWo`<sup>Optional</sup> <a name="ciphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWo"></a>

```java
public java.lang.String getCiphertextWo();
```

- *Type:* java.lang.String

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only).

Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo TransformTransformationTokenizationImportedKey#ciphertext_wo}

---

##### `ciphertextWoVersion`<sup>Optional</sup> <a name="ciphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWoVersion"></a>

```java
public java.lang.Number getCiphertextWoVersion();
```

- *Type:* java.lang.Number

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo_version TransformTransformationTokenizationImportedKey#ciphertext_wo_version}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.deletionAllowed"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, this transformation can be deleted.

Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#deletion_allowed TransformTransformationTokenizationImportedKey#deletion_allowed}

---

##### `hashFunction`<sup>Optional</sup> <a name="hashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.hashFunction"></a>

```java
public java.lang.String getHashFunction();
```

- *Type:* java.lang.String

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#hash_function TransformTransformationTokenizationImportedKey#hash_function}

---

##### `mappingMode`<sup>Optional</sup> <a name="mappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mappingMode"></a>

```java
public java.lang.String getMappingMode();
```

- *Type:* java.lang.String

The mapping mode for stored tokenization values (`default` or `exportable`).

Vault does not allow this field to be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mapping_mode TransformTransformationTokenizationImportedKey#mapping_mode}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

The maximum TTL of a token, in seconds. `0` means tokens have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#max_ttl TransformTransformationTokenizationImportedKey#max_ttl}

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.minDecryptionVersion"></a>

```java
public java.lang.Number getMinDecryptionVersion();
```

- *Type:* java.lang.Number

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#min_decryption_version TransformTransformationTokenizationImportedKey#min_decryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#namespace TransformTransformationTokenizationImportedKey#namespace}

---

##### `stores`<sup>Optional</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.stores"></a>

```java
public java.util.List<java.lang.String> getStores();
```

- *Type:* java.util.List<java.lang.String>

The stores that contain tokenized state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#stores TransformTransformationTokenizationImportedKey#stores}

---



