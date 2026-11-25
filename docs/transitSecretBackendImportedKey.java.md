# `transitSecretBackendImportedKey` Submodule <a name="`transitSecretBackendImportedKey` Submodule" id="@cdktn/provider-vault.transitSecretBackendImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendImportedKey <a name="TransitSecretBackendImportedKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key vault_transit_secret_backend_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_imported_key.TransitSecretBackendImportedKey;

TransitSecretBackendImportedKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .allowPlaintextBackup(java.lang.Boolean|IResolvable)
//  .allowRotation(java.lang.Boolean|IResolvable)
//  .autoRotatePeriod(java.lang.Number)
//  .ciphertextWo(java.lang.String)
//  .ciphertextWoVersion(java.lang.Number)
//  .context(java.lang.String)
//  .deletionAllowed(java.lang.Boolean|IResolvable)
//  .derived(java.lang.Boolean|IResolvable)
//  .exportable(java.lang.Boolean|IResolvable)
//  .hashFunction(java.lang.String)
//  .importVersionType(java.lang.String)
//  .minDecryptionVersion(java.lang.Number)
//  .minEncryptionVersion(java.lang.Number)
//  .namespace(java.lang.String)
//  .publicKey(java.lang.String)
//  .version(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Transit secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the encryption key to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.allowRotation">allowRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the imported key can be rotated within Vault by using the rotate endpoint. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | The period in seconds at which this key should be rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.ciphertextWo">ciphertextWo</a></code> | <code>java.lang.String</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.ciphertextWoVersion">ciphertextWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.context">context</a></code> | <code>java.lang.String</code> | A base64-encoded string providing a context for key derivation. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.derived">derived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if key derivation is to be used. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.exportable">exportable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables keys to be exportable. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.hashFunction">hashFunction</a></code> | <code>java.lang.String</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.importVersionType">importVersionType</a></code> | <code>java.lang.String</code> | Changes the key type of the new key version when importing key material into an existing key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for decryption. Vault always sets this to at least 1. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.minEncryptionVersion">minEncryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.publicKey">publicKey</a></code> | <code>java.lang.String</code> | A plaintext PEM public key to be imported. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.version">version</a></code> | <code>java.lang.Number</code> | Specifies the existing key version to update when importing key material to an already-imported key. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the Transit secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#mount TransitSecretBackendImportedKey#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the encryption key to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#name TransitSecretBackendImportedKey#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#type TransitSecretBackendImportedKey#type}

---

##### `allowPlaintextBackup`<sup>Optional</sup> <a name="allowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.allowPlaintextBackup"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_plaintext_backup TransitSecretBackendImportedKey#allow_plaintext_backup}

---

##### `allowRotation`<sup>Optional</sup> <a name="allowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.allowRotation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the imported key can be rotated within Vault by using the rotate endpoint.

Once the key is rotated in Vault, it no longer accepts imported key material. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_rotation TransitSecretBackendImportedKey#allow_rotation}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.autoRotatePeriod"></a>

- *Type:* java.lang.Number

The period in seconds at which this key should be rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#auto_rotate_period TransitSecretBackendImportedKey#auto_rotate_period}

---

##### `ciphertextWo`<sup>Optional</sup> <a name="ciphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.ciphertextWo"></a>

- *Type:* java.lang.String

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only).

Required with `ciphertext_wo_version`. Vault requires either this or `public_key` for the initial import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo TransitSecretBackendImportedKey#ciphertext_wo}

---

##### `ciphertextWoVersion`<sup>Optional</sup> <a name="ciphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.ciphertextWoVersion"></a>

- *Type:* java.lang.Number

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo_version TransitSecretBackendImportedKey#ciphertext_wo_version}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.context"></a>

- *Type:* java.lang.String

A base64-encoded string providing a context for key derivation.

Required if `derived` is true. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#context TransitSecretBackendImportedKey#context}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.deletionAllowed"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#deletion_allowed TransitSecretBackendImportedKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.derived"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if key derivation is to be used. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#derived TransitSecretBackendImportedKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.exportable"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables keys to be exportable. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#exportable TransitSecretBackendImportedKey#exportable}

---

##### `hashFunction`<sup>Optional</sup> <a name="hashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.hashFunction"></a>

- *Type:* java.lang.String

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#hash_function TransitSecretBackendImportedKey#hash_function}

---

##### `importVersionType`<sup>Optional</sup> <a name="importVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.importVersionType"></a>

- *Type:* java.lang.String

Changes the key type of the new key version when importing key material into an existing key.

Sent as `type` to Vault's import key version endpoint, so it has no effect on the initial import. Reported by `latest_version_type`. Requires Vault Enterprise 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import_version_type TransitSecretBackendImportedKey#import_version_type}

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.minDecryptionVersion"></a>

- *Type:* java.lang.Number

Minimum key version to use for decryption. Vault always sets this to at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_decryption_version TransitSecretBackendImportedKey#min_decryption_version}

---

##### `minEncryptionVersion`<sup>Optional</sup> <a name="minEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.minEncryptionVersion"></a>

- *Type:* java.lang.Number

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_encryption_version TransitSecretBackendImportedKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#namespace TransitSecretBackendImportedKey#namespace}

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.publicKey"></a>

- *Type:* java.lang.String

A plaintext PEM public key to be imported.

Vault requires either this or `ciphertext_wo` for the initial import. Changing it imports the new public key as a new key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#public_key TransitSecretBackendImportedKey#public_key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.version"></a>

- *Type:* java.lang.Number

Specifies the existing key version to update when importing key material to an already-imported key.

If omitted, Vault creates a new version, except when the latest version contains only a public key and the request supplies its matching private key; in that case Vault adds the private key to the existing, latest version. Ignored when the key is first imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#version TransitSecretBackendImportedKey#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowPlaintextBackup">resetAllowPlaintextBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowRotation">resetAllowRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAutoRotatePeriod">resetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWo">resetCiphertextWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWoVersion">resetCiphertextWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDerived">resetDerived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetExportable">resetExportable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetHashFunction">resetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetImportVersionType">resetImportVersionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinDecryptionVersion">resetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinEncryptionVersion">resetMinEncryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowPlaintextBackup` <a name="resetAllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowPlaintextBackup"></a>

```java
public void resetAllowPlaintextBackup()
```

##### `resetAllowRotation` <a name="resetAllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowRotation"></a>

```java
public void resetAllowRotation()
```

##### `resetAutoRotatePeriod` <a name="resetAutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAutoRotatePeriod"></a>

```java
public void resetAutoRotatePeriod()
```

##### `resetCiphertextWo` <a name="resetCiphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWo"></a>

```java
public void resetCiphertextWo()
```

##### `resetCiphertextWoVersion` <a name="resetCiphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWoVersion"></a>

```java
public void resetCiphertextWoVersion()
```

##### `resetContext` <a name="resetContext" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetContext"></a>

```java
public void resetContext()
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDeletionAllowed"></a>

```java
public void resetDeletionAllowed()
```

##### `resetDerived` <a name="resetDerived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDerived"></a>

```java
public void resetDerived()
```

##### `resetExportable` <a name="resetExportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetExportable"></a>

```java
public void resetExportable()
```

##### `resetHashFunction` <a name="resetHashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetHashFunction"></a>

```java
public void resetHashFunction()
```

##### `resetImportVersionType` <a name="resetImportVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetImportVersionType"></a>

```java
public void resetImportVersionType()
```

##### `resetMinDecryptionVersion` <a name="resetMinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinDecryptionVersion"></a>

```java
public void resetMinDecryptionVersion()
```

##### `resetMinEncryptionVersion` <a name="resetMinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinEncryptionVersion"></a>

```java
public void resetMinEncryptionVersion()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetPublicKey"></a>

```java
public void resetPublicKey()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_imported_key.TransitSecretBackendImportedKey;

TransitSecretBackendImportedKey.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_imported_key.TransitSecretBackendImportedKey;

TransitSecretBackendImportedKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_imported_key.TransitSecretBackendImportedKey;

TransitSecretBackendImportedKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_imported_key.TransitSecretBackendImportedKey;

TransitSecretBackendImportedKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransitSecretBackendImportedKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransitSecretBackendImportedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransitSecretBackendImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TransitSecretBackendImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKey">importedKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKeyAllowRotation">importedKeyAllowRotation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.keys">keys</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersion">latestVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersionType">latestVersionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minAvailableVersion">minAvailableVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDecryption">supportsDecryption</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDerivation">supportsDerivation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsEncryption">supportsEncryption</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsSigning">supportsSigning</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackupInput">allowPlaintextBackupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotationInput">allowRotationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriodInput">autoRotatePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoInput">ciphertextWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersionInput">ciphertextWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.contextInput">contextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derivedInput">derivedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportableInput">exportableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunctionInput">hashFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionTypeInput">importVersionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersionInput">minDecryptionVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersionInput">minEncryptionVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotation">allowRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWo">ciphertextWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersion">ciphertextWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derived">derived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportable">exportable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunction">hashFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionType">importVersionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersion">minEncryptionVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `importedKey`<sup>Required</sup> <a name="importedKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKey"></a>

```java
public IResolvable getImportedKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `importedKeyAllowRotation`<sup>Required</sup> <a name="importedKeyAllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKeyAllowRotation"></a>

```java
public IResolvable getImportedKeyAllowRotation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.keys"></a>

```java
public StringMap getKeys();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersion"></a>

```java
public java.lang.Number getLatestVersion();
```

- *Type:* java.lang.Number

---

##### `latestVersionType`<sup>Required</sup> <a name="latestVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersionType"></a>

```java
public java.lang.String getLatestVersionType();
```

- *Type:* java.lang.String

---

##### `minAvailableVersion`<sup>Required</sup> <a name="minAvailableVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minAvailableVersion"></a>

```java
public java.lang.Number getMinAvailableVersion();
```

- *Type:* java.lang.Number

---

##### `supportsDecryption`<sup>Required</sup> <a name="supportsDecryption" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDecryption"></a>

```java
public IResolvable getSupportsDecryption();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `supportsDerivation`<sup>Required</sup> <a name="supportsDerivation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDerivation"></a>

```java
public IResolvable getSupportsDerivation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `supportsEncryption`<sup>Required</sup> <a name="supportsEncryption" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsEncryption"></a>

```java
public IResolvable getSupportsEncryption();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `supportsSigning`<sup>Required</sup> <a name="supportsSigning" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsSigning"></a>

```java
public IResolvable getSupportsSigning();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `allowPlaintextBackupInput`<sup>Optional</sup> <a name="allowPlaintextBackupInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackupInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowPlaintextBackupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowRotationInput`<sup>Optional</sup> <a name="allowRotationInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotationInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowRotationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoRotatePeriodInput`<sup>Optional</sup> <a name="autoRotatePeriodInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriodInput"></a>

```java
public java.lang.Number getAutoRotatePeriodInput();
```

- *Type:* java.lang.Number

---

##### `ciphertextWoInput`<sup>Optional</sup> <a name="ciphertextWoInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoInput"></a>

```java
public java.lang.String getCiphertextWoInput();
```

- *Type:* java.lang.String

---

##### `ciphertextWoVersionInput`<sup>Optional</sup> <a name="ciphertextWoVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersionInput"></a>

```java
public java.lang.Number getCiphertextWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.contextInput"></a>

```java
public java.lang.String getContextInput();
```

- *Type:* java.lang.String

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowedInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `derivedInput`<sup>Optional</sup> <a name="derivedInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derivedInput"></a>

```java
public java.lang.Boolean|IResolvable getDerivedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exportableInput`<sup>Optional</sup> <a name="exportableInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportableInput"></a>

```java
public java.lang.Boolean|IResolvable getExportableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hashFunctionInput`<sup>Optional</sup> <a name="hashFunctionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunctionInput"></a>

```java
public java.lang.String getHashFunctionInput();
```

- *Type:* java.lang.String

---

##### `importVersionTypeInput`<sup>Optional</sup> <a name="importVersionTypeInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionTypeInput"></a>

```java
public java.lang.String getImportVersionTypeInput();
```

- *Type:* java.lang.String

---

##### `minDecryptionVersionInput`<sup>Optional</sup> <a name="minDecryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersionInput"></a>

```java
public java.lang.Number getMinDecryptionVersionInput();
```

- *Type:* java.lang.Number

---

##### `minEncryptionVersionInput`<sup>Optional</sup> <a name="minEncryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersionInput"></a>

```java
public java.lang.Number getMinEncryptionVersionInput();
```

- *Type:* java.lang.Number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `allowPlaintextBackup`<sup>Required</sup> <a name="allowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackup"></a>

```java
public java.lang.Boolean|IResolvable getAllowPlaintextBackup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowRotation`<sup>Required</sup> <a name="allowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotation"></a>

```java
public java.lang.Boolean|IResolvable getAllowRotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoRotatePeriod`<sup>Required</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriod"></a>

```java
public java.lang.Number getAutoRotatePeriod();
```

- *Type:* java.lang.Number

---

##### ~~`ciphertextWo`~~<sup>Required</sup> <a name="ciphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getCiphertextWo();
```

- *Type:* java.lang.String

---

##### `ciphertextWoVersion`<sup>Required</sup> <a name="ciphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersion"></a>

```java
public java.lang.Number getCiphertextWoVersion();
```

- *Type:* java.lang.Number

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowed"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `derived`<sup>Required</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derived"></a>

```java
public java.lang.Boolean|IResolvable getDerived();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportable"></a>

```java
public java.lang.Boolean|IResolvable getExportable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hashFunction`<sup>Required</sup> <a name="hashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunction"></a>

```java
public java.lang.String getHashFunction();
```

- *Type:* java.lang.String

---

##### `importVersionType`<sup>Required</sup> <a name="importVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionType"></a>

```java
public java.lang.String getImportVersionType();
```

- *Type:* java.lang.String

---

##### `minDecryptionVersion`<sup>Required</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersion"></a>

```java
public java.lang.Number getMinDecryptionVersion();
```

- *Type:* java.lang.Number

---

##### `minEncryptionVersion`<sup>Required</sup> <a name="minEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersion"></a>

```java
public java.lang.Number getMinEncryptionVersion();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendImportedKeyConfig <a name="TransitSecretBackendImportedKeyConfig" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_imported_key.TransitSecretBackendImportedKeyConfig;

TransitSecretBackendImportedKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .allowPlaintextBackup(java.lang.Boolean|IResolvable)
//  .allowRotation(java.lang.Boolean|IResolvable)
//  .autoRotatePeriod(java.lang.Number)
//  .ciphertextWo(java.lang.String)
//  .ciphertextWoVersion(java.lang.Number)
//  .context(java.lang.String)
//  .deletionAllowed(java.lang.Boolean|IResolvable)
//  .derived(java.lang.Boolean|IResolvable)
//  .exportable(java.lang.Boolean|IResolvable)
//  .hashFunction(java.lang.String)
//  .importVersionType(java.lang.String)
//  .minDecryptionVersion(java.lang.Number)
//  .minEncryptionVersion(java.lang.Number)
//  .namespace(java.lang.String)
//  .publicKey(java.lang.String)
//  .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Transit secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the encryption key to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowRotation">allowRotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, the imported key can be rotated within Vault by using the rotate endpoint. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | The period in seconds at which this key should be rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWo">ciphertextWo</a></code> | <code>java.lang.String</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWoVersion">ciphertextWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.context">context</a></code> | <code>java.lang.String</code> | A base64-encoded string providing a context for key derivation. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.derived">derived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if key derivation is to be used. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.exportable">exportable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables keys to be exportable. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.hashFunction">hashFunction</a></code> | <code>java.lang.String</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.importVersionType">importVersionType</a></code> | <code>java.lang.String</code> | Changes the key type of the new key version when importing key material into an existing key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for decryption. Vault always sets this to at least 1. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minEncryptionVersion">minEncryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | A plaintext PEM public key to be imported. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.version">version</a></code> | <code>java.lang.Number</code> | Specifies the existing key version to update when importing key material to an already-imported key. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the Transit secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#mount TransitSecretBackendImportedKey#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the encryption key to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#name TransitSecretBackendImportedKey#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#type TransitSecretBackendImportedKey#type}

---

##### `allowPlaintextBackup`<sup>Optional</sup> <a name="allowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowPlaintextBackup"></a>

```java
public java.lang.Boolean|IResolvable getAllowPlaintextBackup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_plaintext_backup TransitSecretBackendImportedKey#allow_plaintext_backup}

---

##### `allowRotation`<sup>Optional</sup> <a name="allowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowRotation"></a>

```java
public java.lang.Boolean|IResolvable getAllowRotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, the imported key can be rotated within Vault by using the rotate endpoint.

Once the key is rotated in Vault, it no longer accepts imported key material. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_rotation TransitSecretBackendImportedKey#allow_rotation}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.autoRotatePeriod"></a>

```java
public java.lang.Number getAutoRotatePeriod();
```

- *Type:* java.lang.Number

The period in seconds at which this key should be rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#auto_rotate_period TransitSecretBackendImportedKey#auto_rotate_period}

---

##### `ciphertextWo`<sup>Optional</sup> <a name="ciphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWo"></a>

```java
public java.lang.String getCiphertextWo();
```

- *Type:* java.lang.String

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only).

Required with `ciphertext_wo_version`. Vault requires either this or `public_key` for the initial import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo TransitSecretBackendImportedKey#ciphertext_wo}

---

##### `ciphertextWoVersion`<sup>Optional</sup> <a name="ciphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWoVersion"></a>

```java
public java.lang.Number getCiphertextWoVersion();
```

- *Type:* java.lang.Number

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo_version TransitSecretBackendImportedKey#ciphertext_wo_version}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

A base64-encoded string providing a context for key derivation.

Required if `derived` is true. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#context TransitSecretBackendImportedKey#context}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.deletionAllowed"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#deletion_allowed TransitSecretBackendImportedKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.derived"></a>

```java
public java.lang.Boolean|IResolvable getDerived();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if key derivation is to be used. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#derived TransitSecretBackendImportedKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.exportable"></a>

```java
public java.lang.Boolean|IResolvable getExportable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables keys to be exportable. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#exportable TransitSecretBackendImportedKey#exportable}

---

##### `hashFunction`<sup>Optional</sup> <a name="hashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.hashFunction"></a>

```java
public java.lang.String getHashFunction();
```

- *Type:* java.lang.String

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#hash_function TransitSecretBackendImportedKey#hash_function}

---

##### `importVersionType`<sup>Optional</sup> <a name="importVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.importVersionType"></a>

```java
public java.lang.String getImportVersionType();
```

- *Type:* java.lang.String

Changes the key type of the new key version when importing key material into an existing key.

Sent as `type` to Vault's import key version endpoint, so it has no effect on the initial import. Reported by `latest_version_type`. Requires Vault Enterprise 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import_version_type TransitSecretBackendImportedKey#import_version_type}

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minDecryptionVersion"></a>

```java
public java.lang.Number getMinDecryptionVersion();
```

- *Type:* java.lang.Number

Minimum key version to use for decryption. Vault always sets this to at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_decryption_version TransitSecretBackendImportedKey#min_decryption_version}

---

##### `minEncryptionVersion`<sup>Optional</sup> <a name="minEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minEncryptionVersion"></a>

```java
public java.lang.Number getMinEncryptionVersion();
```

- *Type:* java.lang.Number

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_encryption_version TransitSecretBackendImportedKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#namespace TransitSecretBackendImportedKey#namespace}

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

A plaintext PEM public key to be imported.

Vault requires either this or `ciphertext_wo` for the initial import. Changing it imports the new public key as a new key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#public_key TransitSecretBackendImportedKey#public_key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

Specifies the existing key version to update when importing key material to an already-imported key.

If omitted, Vault creates a new version, except when the latest version contains only a public key and the request supplies its matching private key; in that case Vault adds the private key to the existing, latest version. Ignored when the key is first imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#version TransitSecretBackendImportedKey#version}

---



