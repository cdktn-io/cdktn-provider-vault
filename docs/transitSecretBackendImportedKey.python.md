# `transitSecretBackendImportedKey` Submodule <a name="`transitSecretBackendImportedKey` Submodule" id="@cdktn/provider-vault.transitSecretBackendImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendImportedKey <a name="TransitSecretBackendImportedKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key vault_transit_secret_backend_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer"></a>

```python
from cdktn_provider_vault import transit_secret_backend_imported_key

transitSecretBackendImportedKey.TransitSecretBackendImportedKey(
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
  type: str,
  allow_plaintext_backup: bool | IResolvable = None,
  allow_rotation: bool | IResolvable = None,
  auto_rotate_period: typing.Union[int, float] = None,
  ciphertext_wo: str = None,
  ciphertext_wo_version: typing.Union[int, float] = None,
  context: str = None,
  deletion_allowed: bool | IResolvable = None,
  derived: bool | IResolvable = None,
  exportable: bool | IResolvable = None,
  hash_function: str = None,
  import_version_type: str = None,
  min_decryption_version: typing.Union[int, float] = None,
  min_encryption_version: typing.Union[int, float] = None,
  namespace: str = None,
  public_key: str = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the Transit secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the encryption key to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.type">type</a></code> | <code>str</code> | Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.allowPlaintextBackup">allow_plaintext_backup</a></code> | <code>bool \| cdktn.IResolvable</code> | If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.allowRotation">allow_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | If set, the imported key can be rotated within Vault by using the rotate endpoint. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.autoRotatePeriod">auto_rotate_period</a></code> | <code>typing.Union[int, float]</code> | The period in seconds at which this key should be rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.ciphertextWo">ciphertext_wo</a></code> | <code>str</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.ciphertextWoVersion">ciphertext_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.context">context</a></code> | <code>str</code> | A base64-encoded string providing a context for key derivation. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.derived">derived</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies if key derivation is to be used. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.exportable">exportable</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables keys to be exportable. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.hashFunction">hash_function</a></code> | <code>str</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.importVersionType">import_version_type</a></code> | <code>str</code> | Changes the key type of the new key version when importing key material into an existing key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.minDecryptionVersion">min_decryption_version</a></code> | <code>typing.Union[int, float]</code> | Minimum key version to use for decryption. Vault always sets this to at least 1. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.minEncryptionVersion">min_encryption_version</a></code> | <code>typing.Union[int, float]</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.publicKey">public_key</a></code> | <code>str</code> | A plaintext PEM public key to be imported. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Specifies the existing key version to update when importing key material to an already-imported key. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.mount"></a>

- *Type:* str

Path where the Transit secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#mount TransitSecretBackendImportedKey#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.name"></a>

- *Type:* str

Name of the encryption key to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#name TransitSecretBackendImportedKey#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.type"></a>

- *Type:* str

Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#type TransitSecretBackendImportedKey#type}

---

##### `allow_plaintext_backup`<sup>Optional</sup> <a name="allow_plaintext_backup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.allowPlaintextBackup"></a>

- *Type:* bool | cdktn.IResolvable

If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_plaintext_backup TransitSecretBackendImportedKey#allow_plaintext_backup}

---

##### `allow_rotation`<sup>Optional</sup> <a name="allow_rotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.allowRotation"></a>

- *Type:* bool | cdktn.IResolvable

If set, the imported key can be rotated within Vault by using the rotate endpoint.

Once the key is rotated in Vault, it no longer accepts imported key material. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_rotation TransitSecretBackendImportedKey#allow_rotation}

---

##### `auto_rotate_period`<sup>Optional</sup> <a name="auto_rotate_period" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.autoRotatePeriod"></a>

- *Type:* typing.Union[int, float]

The period in seconds at which this key should be rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#auto_rotate_period TransitSecretBackendImportedKey#auto_rotate_period}

---

##### `ciphertext_wo`<sup>Optional</sup> <a name="ciphertext_wo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.ciphertextWo"></a>

- *Type:* str

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only).

Required with `ciphertext_wo_version`. Vault requires either this or `public_key` for the initial import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo TransitSecretBackendImportedKey#ciphertext_wo}

---

##### `ciphertext_wo_version`<sup>Optional</sup> <a name="ciphertext_wo_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.ciphertextWoVersion"></a>

- *Type:* typing.Union[int, float]

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo_version TransitSecretBackendImportedKey#ciphertext_wo_version}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.context"></a>

- *Type:* str

A base64-encoded string providing a context for key derivation.

Required if `derived` is true. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#context TransitSecretBackendImportedKey#context}

---

##### `deletion_allowed`<sup>Optional</sup> <a name="deletion_allowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.deletionAllowed"></a>

- *Type:* bool | cdktn.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#deletion_allowed TransitSecretBackendImportedKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.derived"></a>

- *Type:* bool | cdktn.IResolvable

Specifies if key derivation is to be used. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#derived TransitSecretBackendImportedKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.exportable"></a>

- *Type:* bool | cdktn.IResolvable

Enables keys to be exportable. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#exportable TransitSecretBackendImportedKey#exportable}

---

##### `hash_function`<sup>Optional</sup> <a name="hash_function" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.hashFunction"></a>

- *Type:* str

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#hash_function TransitSecretBackendImportedKey#hash_function}

---

##### `import_version_type`<sup>Optional</sup> <a name="import_version_type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.importVersionType"></a>

- *Type:* str

Changes the key type of the new key version when importing key material into an existing key.

Sent as `type` to Vault's import key version endpoint, so it has no effect on the initial import. Reported by `latest_version_type`. Requires Vault Enterprise 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import_version_type TransitSecretBackendImportedKey#import_version_type}

---

##### `min_decryption_version`<sup>Optional</sup> <a name="min_decryption_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.minDecryptionVersion"></a>

- *Type:* typing.Union[int, float]

Minimum key version to use for decryption. Vault always sets this to at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_decryption_version TransitSecretBackendImportedKey#min_decryption_version}

---

##### `min_encryption_version`<sup>Optional</sup> <a name="min_encryption_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.minEncryptionVersion"></a>

- *Type:* typing.Union[int, float]

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_encryption_version TransitSecretBackendImportedKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#namespace TransitSecretBackendImportedKey#namespace}

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.publicKey"></a>

- *Type:* str

A plaintext PEM public key to be imported.

Vault requires either this or `ciphertext_wo` for the initial import. Changing it imports the new public key as a new key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#public_key TransitSecretBackendImportedKey#public_key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Specifies the existing key version to update when importing key material to an already-imported key.

If omitted, Vault creates a new version, except when the latest version contains only a public key and the request supplies its matching private key; in that case Vault adds the private key to the existing, latest version. Ignored when the key is first imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#version TransitSecretBackendImportedKey#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowPlaintextBackup">reset_allow_plaintext_backup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowRotation">reset_allow_rotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAutoRotatePeriod">reset_auto_rotate_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWo">reset_ciphertext_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWoVersion">reset_ciphertext_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDeletionAllowed">reset_deletion_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDerived">reset_derived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetExportable">reset_exportable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetHashFunction">reset_hash_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetImportVersionType">reset_import_version_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinDecryptionVersion">reset_min_decryption_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinEncryptionVersion">reset_min_encryption_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetPublicKey">reset_public_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allow_plaintext_backup` <a name="reset_allow_plaintext_backup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowPlaintextBackup"></a>

```python
def reset_allow_plaintext_backup() -> None
```

##### `reset_allow_rotation` <a name="reset_allow_rotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowRotation"></a>

```python
def reset_allow_rotation() -> None
```

##### `reset_auto_rotate_period` <a name="reset_auto_rotate_period" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAutoRotatePeriod"></a>

```python
def reset_auto_rotate_period() -> None
```

##### `reset_ciphertext_wo` <a name="reset_ciphertext_wo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWo"></a>

```python
def reset_ciphertext_wo() -> None
```

##### `reset_ciphertext_wo_version` <a name="reset_ciphertext_wo_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWoVersion"></a>

```python
def reset_ciphertext_wo_version() -> None
```

##### `reset_context` <a name="reset_context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_deletion_allowed` <a name="reset_deletion_allowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDeletionAllowed"></a>

```python
def reset_deletion_allowed() -> None
```

##### `reset_derived` <a name="reset_derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDerived"></a>

```python
def reset_derived() -> None
```

##### `reset_exportable` <a name="reset_exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetExportable"></a>

```python
def reset_exportable() -> None
```

##### `reset_hash_function` <a name="reset_hash_function" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetHashFunction"></a>

```python
def reset_hash_function() -> None
```

##### `reset_import_version_type` <a name="reset_import_version_type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetImportVersionType"></a>

```python
def reset_import_version_type() -> None
```

##### `reset_min_decryption_version` <a name="reset_min_decryption_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinDecryptionVersion"></a>

```python
def reset_min_decryption_version() -> None
```

##### `reset_min_encryption_version` <a name="reset_min_encryption_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinEncryptionVersion"></a>

```python
def reset_min_encryption_version() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetPublicKey"></a>

```python
def reset_public_key() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct"></a>

```python
from cdktn_provider_vault import transit_secret_backend_imported_key

transitSecretBackendImportedKey.TransitSecretBackendImportedKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement"></a>

```python
from cdktn_provider_vault import transit_secret_backend_imported_key

transitSecretBackendImportedKey.TransitSecretBackendImportedKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource"></a>

```python
from cdktn_provider_vault import transit_secret_backend_imported_key

transitSecretBackendImportedKey.TransitSecretBackendImportedKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport"></a>

```python
from cdktn_provider_vault import transit_secret_backend_imported_key

transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransitSecretBackendImportedKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransitSecretBackendImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransitSecretBackendImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKey">imported_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKeyAllowRotation">imported_key_allow_rotation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.keys">keys</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersion">latest_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersionType">latest_version_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minAvailableVersion">min_available_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDecryption">supports_decryption</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDerivation">supports_derivation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsEncryption">supports_encryption</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsSigning">supports_signing</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackupInput">allow_plaintext_backup_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotationInput">allow_rotation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriodInput">auto_rotate_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoInput">ciphertext_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersionInput">ciphertext_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.contextInput">context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowedInput">deletion_allowed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derivedInput">derived_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportableInput">exportable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunctionInput">hash_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionTypeInput">import_version_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersionInput">min_decryption_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersionInput">min_encryption_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackup">allow_plaintext_backup</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotation">allow_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriod">auto_rotate_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWo">ciphertext_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersion">ciphertext_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.context">context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derived">derived</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportable">exportable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunction">hash_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionType">import_version_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersion">min_decryption_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersion">min_encryption_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `imported_key`<sup>Required</sup> <a name="imported_key" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKey"></a>

```python
imported_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `imported_key_allow_rotation`<sup>Required</sup> <a name="imported_key_allow_rotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKeyAllowRotation"></a>

```python
imported_key_allow_rotation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.keys"></a>

```python
keys: StringMap
```

- *Type:* cdktn.StringMap

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersion"></a>

```python
latest_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_type`<sup>Required</sup> <a name="latest_version_type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersionType"></a>

```python
latest_version_type: str
```

- *Type:* str

---

##### `min_available_version`<sup>Required</sup> <a name="min_available_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minAvailableVersion"></a>

```python
min_available_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `supports_decryption`<sup>Required</sup> <a name="supports_decryption" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDecryption"></a>

```python
supports_decryption: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `supports_derivation`<sup>Required</sup> <a name="supports_derivation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDerivation"></a>

```python
supports_derivation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `supports_encryption`<sup>Required</sup> <a name="supports_encryption" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsEncryption"></a>

```python
supports_encryption: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `supports_signing`<sup>Required</sup> <a name="supports_signing" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsSigning"></a>

```python
supports_signing: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `allow_plaintext_backup_input`<sup>Optional</sup> <a name="allow_plaintext_backup_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackupInput"></a>

```python
allow_plaintext_backup_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_rotation_input`<sup>Optional</sup> <a name="allow_rotation_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotationInput"></a>

```python
allow_rotation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_rotate_period_input`<sup>Optional</sup> <a name="auto_rotate_period_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriodInput"></a>

```python
auto_rotate_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ciphertext_wo_input`<sup>Optional</sup> <a name="ciphertext_wo_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoInput"></a>

```python
ciphertext_wo_input: str
```

- *Type:* str

---

##### `ciphertext_wo_version_input`<sup>Optional</sup> <a name="ciphertext_wo_version_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersionInput"></a>

```python
ciphertext_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.contextInput"></a>

```python
context_input: str
```

- *Type:* str

---

##### `deletion_allowed_input`<sup>Optional</sup> <a name="deletion_allowed_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowedInput"></a>

```python
deletion_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `derived_input`<sup>Optional</sup> <a name="derived_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derivedInput"></a>

```python
derived_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exportable_input`<sup>Optional</sup> <a name="exportable_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportableInput"></a>

```python
exportable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hash_function_input`<sup>Optional</sup> <a name="hash_function_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunctionInput"></a>

```python
hash_function_input: str
```

- *Type:* str

---

##### `import_version_type_input`<sup>Optional</sup> <a name="import_version_type_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionTypeInput"></a>

```python
import_version_type_input: str
```

- *Type:* str

---

##### `min_decryption_version_input`<sup>Optional</sup> <a name="min_decryption_version_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersionInput"></a>

```python
min_decryption_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_encryption_version_input`<sup>Optional</sup> <a name="min_encryption_version_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersionInput"></a>

```python
min_encryption_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_plaintext_backup`<sup>Required</sup> <a name="allow_plaintext_backup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackup"></a>

```python
allow_plaintext_backup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_rotation`<sup>Required</sup> <a name="allow_rotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotation"></a>

```python
allow_rotation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_rotate_period`<sup>Required</sup> <a name="auto_rotate_period" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriod"></a>

```python
auto_rotate_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### ~~`ciphertext_wo`~~<sup>Required</sup> <a name="ciphertext_wo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
ciphertext_wo: str
```

- *Type:* str

---

##### `ciphertext_wo_version`<sup>Required</sup> <a name="ciphertext_wo_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersion"></a>

```python
ciphertext_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.context"></a>

```python
context: str
```

- *Type:* str

---

##### `deletion_allowed`<sup>Required</sup> <a name="deletion_allowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowed"></a>

```python
deletion_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `derived`<sup>Required</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derived"></a>

```python
derived: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportable"></a>

```python
exportable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hash_function`<sup>Required</sup> <a name="hash_function" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunction"></a>

```python
hash_function: str
```

- *Type:* str

---

##### `import_version_type`<sup>Required</sup> <a name="import_version_type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionType"></a>

```python
import_version_type: str
```

- *Type:* str

---

##### `min_decryption_version`<sup>Required</sup> <a name="min_decryption_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersion"></a>

```python
min_decryption_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_encryption_version`<sup>Required</sup> <a name="min_encryption_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersion"></a>

```python
min_encryption_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendImportedKeyConfig <a name="TransitSecretBackendImportedKeyConfig" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.Initializer"></a>

```python
from cdktn_provider_vault import transit_secret_backend_imported_key

transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  name: str,
  type: str,
  allow_plaintext_backup: bool | IResolvable = None,
  allow_rotation: bool | IResolvable = None,
  auto_rotate_period: typing.Union[int, float] = None,
  ciphertext_wo: str = None,
  ciphertext_wo_version: typing.Union[int, float] = None,
  context: str = None,
  deletion_allowed: bool | IResolvable = None,
  derived: bool | IResolvable = None,
  exportable: bool | IResolvable = None,
  hash_function: str = None,
  import_version_type: str = None,
  min_decryption_version: typing.Union[int, float] = None,
  min_encryption_version: typing.Union[int, float] = None,
  namespace: str = None,
  public_key: str = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.mount">mount</a></code> | <code>str</code> | Path where the Transit secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.name">name</a></code> | <code>str</code> | Name of the encryption key to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.type">type</a></code> | <code>str</code> | Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowPlaintextBackup">allow_plaintext_backup</a></code> | <code>bool \| cdktn.IResolvable</code> | If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowRotation">allow_rotation</a></code> | <code>bool \| cdktn.IResolvable</code> | If set, the imported key can be rotated within Vault by using the rotate endpoint. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.autoRotatePeriod">auto_rotate_period</a></code> | <code>typing.Union[int, float]</code> | The period in seconds at which this key should be rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWo">ciphertext_wo</a></code> | <code>str</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWoVersion">ciphertext_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.context">context</a></code> | <code>str</code> | A base64-encoded string providing a context for key derivation. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.derived">derived</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies if key derivation is to be used. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.exportable">exportable</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables keys to be exportable. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.hashFunction">hash_function</a></code> | <code>str</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.importVersionType">import_version_type</a></code> | <code>str</code> | Changes the key type of the new key version when importing key material into an existing key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minDecryptionVersion">min_decryption_version</a></code> | <code>typing.Union[int, float]</code> | Minimum key version to use for decryption. Vault always sets this to at least 1. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minEncryptionVersion">min_encryption_version</a></code> | <code>typing.Union[int, float]</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.publicKey">public_key</a></code> | <code>str</code> | A plaintext PEM public key to be imported. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Specifies the existing key version to update when importing key material to an already-imported key. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the Transit secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#mount TransitSecretBackendImportedKey#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the encryption key to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#name TransitSecretBackendImportedKey#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#type TransitSecretBackendImportedKey#type}

---

##### `allow_plaintext_backup`<sup>Optional</sup> <a name="allow_plaintext_backup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowPlaintextBackup"></a>

```python
allow_plaintext_backup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_plaintext_backup TransitSecretBackendImportedKey#allow_plaintext_backup}

---

##### `allow_rotation`<sup>Optional</sup> <a name="allow_rotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowRotation"></a>

```python
allow_rotation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set, the imported key can be rotated within Vault by using the rotate endpoint.

Once the key is rotated in Vault, it no longer accepts imported key material. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_rotation TransitSecretBackendImportedKey#allow_rotation}

---

##### `auto_rotate_period`<sup>Optional</sup> <a name="auto_rotate_period" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.autoRotatePeriod"></a>

```python
auto_rotate_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period in seconds at which this key should be rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#auto_rotate_period TransitSecretBackendImportedKey#auto_rotate_period}

---

##### `ciphertext_wo`<sup>Optional</sup> <a name="ciphertext_wo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWo"></a>

```python
ciphertext_wo: str
```

- *Type:* str

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only).

Required with `ciphertext_wo_version`. Vault requires either this or `public_key` for the initial import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo TransitSecretBackendImportedKey#ciphertext_wo}

---

##### `ciphertext_wo_version`<sup>Optional</sup> <a name="ciphertext_wo_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWoVersion"></a>

```python
ciphertext_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo_version TransitSecretBackendImportedKey#ciphertext_wo_version}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.context"></a>

```python
context: str
```

- *Type:* str

A base64-encoded string providing a context for key derivation.

Required if `derived` is true. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#context TransitSecretBackendImportedKey#context}

---

##### `deletion_allowed`<sup>Optional</sup> <a name="deletion_allowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.deletionAllowed"></a>

```python
deletion_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#deletion_allowed TransitSecretBackendImportedKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.derived"></a>

```python
derived: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies if key derivation is to be used. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#derived TransitSecretBackendImportedKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.exportable"></a>

```python
exportable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables keys to be exportable. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#exportable TransitSecretBackendImportedKey#exportable}

---

##### `hash_function`<sup>Optional</sup> <a name="hash_function" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.hashFunction"></a>

```python
hash_function: str
```

- *Type:* str

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#hash_function TransitSecretBackendImportedKey#hash_function}

---

##### `import_version_type`<sup>Optional</sup> <a name="import_version_type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.importVersionType"></a>

```python
import_version_type: str
```

- *Type:* str

Changes the key type of the new key version when importing key material into an existing key.

Sent as `type` to Vault's import key version endpoint, so it has no effect on the initial import. Reported by `latest_version_type`. Requires Vault Enterprise 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import_version_type TransitSecretBackendImportedKey#import_version_type}

---

##### `min_decryption_version`<sup>Optional</sup> <a name="min_decryption_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minDecryptionVersion"></a>

```python
min_decryption_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum key version to use for decryption. Vault always sets this to at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_decryption_version TransitSecretBackendImportedKey#min_decryption_version}

---

##### `min_encryption_version`<sup>Optional</sup> <a name="min_encryption_version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minEncryptionVersion"></a>

```python
min_encryption_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_encryption_version TransitSecretBackendImportedKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#namespace TransitSecretBackendImportedKey#namespace}

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

A plaintext PEM public key to be imported.

Vault requires either this or `ciphertext_wo` for the initial import. Changing it imports the new public key as a new key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#public_key TransitSecretBackendImportedKey#public_key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the existing key version to update when importing key material to an already-imported key.

If omitted, Vault creates a new version, except when the latest version contains only a public key and the request supplies its matching private key; in that case Vault adds the private key to the existing, latest version. Ignored when the key is first imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#version TransitSecretBackendImportedKey#version}

---



