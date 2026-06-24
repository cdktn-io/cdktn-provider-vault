# `transitSecretBackendKey` Submodule <a name="`transitSecretBackendKey` Submodule" id="@cdktn/provider-vault.transitSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendKey <a name="TransitSecretBackendKey" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key vault_transit_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_key.TransitSecretBackendKey;

TransitSecretBackendKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .name(java.lang.String)
//  .allowPlaintextBackup(java.lang.Boolean|IResolvable)
//  .autoRotatePeriod(java.lang.Number)
//  .context(java.lang.String)
//  .convergentEncryption(java.lang.Boolean|IResolvable)
//  .deletionAllowed(java.lang.Boolean|IResolvable)
//  .derived(java.lang.Boolean|IResolvable)
//  .exportable(java.lang.Boolean|IResolvable)
//  .hybridKeyTypeEc(java.lang.String)
//  .hybridKeyTypePqc(java.lang.String)
//  .id(java.lang.String)
//  .keySize(java.lang.Number)
//  .managedKeyId(java.lang.String)
//  .managedKeyName(java.lang.String)
//  .minDecryptionVersion(java.lang.Number)
//  .minEncryptionVersion(java.lang.Number)
//  .namespace(java.lang.String)
//  .parameterSet(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The Transit secret backend the resource belongs to. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the encryption key to create. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | Amount of seconds the key should live before being automatically rotated. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.context">context</a></code> | <code>java.lang.String</code> | Base64 encoded context for key derivation. Required if derived is set to true. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.convergentEncryption">convergentEncryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.derived">derived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if key derivation is to be used. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.exportable">exportable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables keys to be exportable. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.hybridKeyTypeEc">hybridKeyTypeEc</a></code> | <code>java.lang.String</code> | The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.hybridKeyTypePqc">hybridKeyTypePqc</a></code> | <code>java.lang.String</code> | The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.keySize">keySize</a></code> | <code>java.lang.Number</code> | The key size in bytes for algorithms that allow variable key sizes. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.managedKeyId">managedKeyId</a></code> | <code>java.lang.String</code> | The UUID of the managed key to use when the key type is managed_key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.managedKeyName">managedKeyName</a></code> | <code>java.lang.String</code> | The name of the managed key to use when the key type is managed_key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minEncryptionVersion">minEncryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.parameterSet">parameterSet</a></code> | <code>java.lang.String</code> | The parameter set to use for ML-DSA. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of key to create. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The Transit secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#backend TransitSecretBackendKey#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the encryption key to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#name TransitSecretBackendKey#name}

---

##### `allowPlaintextBackup`<sup>Optional</sup> <a name="allowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.allowPlaintextBackup"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.autoRotatePeriod"></a>

- *Type:* java.lang.Number

Amount of seconds the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.context"></a>

- *Type:* java.lang.String

Base64 encoded context for key derivation. Required if derived is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#context TransitSecretBackendKey#context}

---

##### `convergentEncryption`<sup>Optional</sup> <a name="convergentEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.convergentEncryption"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext.

This requires derived to be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.deletionAllowed"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.derived"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if key derivation is to be used.

If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#derived TransitSecretBackendKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.exportable"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables keys to be exportable.

This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}

---

##### `hybridKeyTypeEc`<sup>Optional</sup> <a name="hybridKeyTypeEc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.hybridKeyTypeEc"></a>

- *Type:* java.lang.String

The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#hybrid_key_type_ec TransitSecretBackendKey#hybrid_key_type_ec}

---

##### `hybridKeyTypePqc`<sup>Optional</sup> <a name="hybridKeyTypePqc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.hybridKeyTypePqc"></a>

- *Type:* java.lang.String

The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#hybrid_key_type_pqc TransitSecretBackendKey#hybrid_key_type_pqc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.keySize"></a>

- *Type:* java.lang.Number

The key size in bytes for algorithms that allow variable key sizes.

Currently only applicable to HMAC; this value must be between 32 and 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#key_size TransitSecretBackendKey#key_size}

---

##### `managedKeyId`<sup>Optional</sup> <a name="managedKeyId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.managedKeyId"></a>

- *Type:* java.lang.String

The UUID of the managed key to use when the key type is managed_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#managed_key_id TransitSecretBackendKey#managed_key_id}

---

##### `managedKeyName`<sup>Optional</sup> <a name="managedKeyName" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.managedKeyName"></a>

- *Type:* java.lang.String

The name of the managed key to use when the key type is managed_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#managed_key_name TransitSecretBackendKey#managed_key_name}

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minDecryptionVersion"></a>

- *Type:* java.lang.Number

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}

---

##### `minEncryptionVersion`<sup>Optional</sup> <a name="minEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minEncryptionVersion"></a>

- *Type:* java.lang.Number

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}

---

##### `parameterSet`<sup>Optional</sup> <a name="parameterSet" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.parameterSet"></a>

- *Type:* java.lang.String

The parameter set to use for ML-DSA.

Required for ML-DSA and hybrid keys.  Valid values for ML-DSA are `44`, `65`, and `87`. Valid values for SLH-DSA are `slh-dsa-sha2-128s`, `slh-dsa-shake-128s`, `slh-dsa-sha2-128f`, `slh-dsa-shake-128`, `slh-dsa-sha2-192s`, `slh-dsa-shake-192s`, `slh-dsa-sha2-192f`, `slh-dsa-shake-192f`, `slh-dsa-sha2-256s`, `slh-dsa-shake-256s`, `slh-dsa-sha2-256f`, and `slh-dsa-shake-256f`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#parameter_set TransitSecretBackendKey#parameter_set}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Specifies the type of key to create.

The currently-supported types are: `aes128-gcm96`, `aes256-gcm96` (default), `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `hmac`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `managed_key`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`, `ml-dsa`, `hybrid`, and `slh-dsa`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#type TransitSecretBackendKey#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup">resetAllowPlaintextBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod">resetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption">resetConvergentEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived">resetDerived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable">resetExportable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypeEc">resetHybridKeyTypeEc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypePqc">resetHybridKeyTypePqc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyId">resetManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyName">resetManagedKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion">resetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion">resetMinEncryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetParameterSet">resetParameterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowPlaintextBackup` <a name="resetAllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup"></a>

```java
public void resetAllowPlaintextBackup()
```

##### `resetAutoRotatePeriod` <a name="resetAutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod"></a>

```java
public void resetAutoRotatePeriod()
```

##### `resetContext` <a name="resetContext" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetContext"></a>

```java
public void resetContext()
```

##### `resetConvergentEncryption` <a name="resetConvergentEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption"></a>

```java
public void resetConvergentEncryption()
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed"></a>

```java
public void resetDeletionAllowed()
```

##### `resetDerived` <a name="resetDerived" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived"></a>

```java
public void resetDerived()
```

##### `resetExportable` <a name="resetExportable" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable"></a>

```java
public void resetExportable()
```

##### `resetHybridKeyTypeEc` <a name="resetHybridKeyTypeEc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypeEc"></a>

```java
public void resetHybridKeyTypeEc()
```

##### `resetHybridKeyTypePqc` <a name="resetHybridKeyTypePqc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypePqc"></a>

```java
public void resetHybridKeyTypePqc()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId"></a>

```java
public void resetId()
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetKeySize"></a>

```java
public void resetKeySize()
```

##### `resetManagedKeyId` <a name="resetManagedKeyId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyId"></a>

```java
public void resetManagedKeyId()
```

##### `resetManagedKeyName` <a name="resetManagedKeyName" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyName"></a>

```java
public void resetManagedKeyName()
```

##### `resetMinDecryptionVersion` <a name="resetMinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion"></a>

```java
public void resetMinDecryptionVersion()
```

##### `resetMinEncryptionVersion` <a name="resetMinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion"></a>

```java
public void resetMinEncryptionVersion()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetParameterSet` <a name="resetParameterSet" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetParameterSet"></a>

```java
public void resetParameterSet()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransitSecretBackendKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_key.TransitSecretBackendKey;

TransitSecretBackendKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_key.TransitSecretBackendKey;

TransitSecretBackendKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_key.TransitSecretBackendKey;

TransitSecretBackendKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_key.TransitSecretBackendKey;

TransitSecretBackendKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransitSecretBackendKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TransitSecretBackendKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransitSecretBackendKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransitSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TransitSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys">keys</a></code> | <code>io.cdktn.cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion">latestVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion">minAvailableVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption">supportsDecryption</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation">supportsDerivation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption">supportsEncryption</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning">supportsSigning</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput">allowPlaintextBackupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput">autoRotatePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.contextInput">contextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput">convergentEncryptionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput">derivedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput">exportableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEcInput">hybridKeyTypeEcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqcInput">hybridKeyTypePqcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySizeInput">keySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyIdInput">managedKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyNameInput">managedKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput">minDecryptionVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput">minEncryptionVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSetInput">parameterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption">convergentEncryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived">derived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable">exportable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEc">hybridKeyTypeEc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqc">hybridKeyTypePqc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySize">keySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyId">managedKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyName">managedKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion">minEncryptionVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSet">parameterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys"></a>

```java
public StringMapList getKeys();
```

- *Type:* io.cdktn.cdktn.StringMapList

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion"></a>

```java
public java.lang.Number getLatestVersion();
```

- *Type:* java.lang.Number

---

##### `minAvailableVersion`<sup>Required</sup> <a name="minAvailableVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion"></a>

```java
public java.lang.Number getMinAvailableVersion();
```

- *Type:* java.lang.Number

---

##### `supportsDecryption`<sup>Required</sup> <a name="supportsDecryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption"></a>

```java
public IResolvable getSupportsDecryption();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `supportsDerivation`<sup>Required</sup> <a name="supportsDerivation" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation"></a>

```java
public IResolvable getSupportsDerivation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `supportsEncryption`<sup>Required</sup> <a name="supportsEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption"></a>

```java
public IResolvable getSupportsEncryption();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `supportsSigning`<sup>Required</sup> <a name="supportsSigning" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning"></a>

```java
public IResolvable getSupportsSigning();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `allowPlaintextBackupInput`<sup>Optional</sup> <a name="allowPlaintextBackupInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowPlaintextBackupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoRotatePeriodInput`<sup>Optional</sup> <a name="autoRotatePeriodInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput"></a>

```java
public java.lang.Number getAutoRotatePeriodInput();
```

- *Type:* java.lang.Number

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.contextInput"></a>

```java
public java.lang.String getContextInput();
```

- *Type:* java.lang.String

---

##### `convergentEncryptionInput`<sup>Optional</sup> <a name="convergentEncryptionInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput"></a>

```java
public java.lang.Boolean|IResolvable getConvergentEncryptionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `derivedInput`<sup>Optional</sup> <a name="derivedInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput"></a>

```java
public java.lang.Boolean|IResolvable getDerivedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exportableInput`<sup>Optional</sup> <a name="exportableInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput"></a>

```java
public java.lang.Boolean|IResolvable getExportableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hybridKeyTypeEcInput`<sup>Optional</sup> <a name="hybridKeyTypeEcInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEcInput"></a>

```java
public java.lang.String getHybridKeyTypeEcInput();
```

- *Type:* java.lang.String

---

##### `hybridKeyTypePqcInput`<sup>Optional</sup> <a name="hybridKeyTypePqcInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqcInput"></a>

```java
public java.lang.String getHybridKeyTypePqcInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySizeInput"></a>

```java
public java.lang.Number getKeySizeInput();
```

- *Type:* java.lang.Number

---

##### `managedKeyIdInput`<sup>Optional</sup> <a name="managedKeyIdInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyIdInput"></a>

```java
public java.lang.String getManagedKeyIdInput();
```

- *Type:* java.lang.String

---

##### `managedKeyNameInput`<sup>Optional</sup> <a name="managedKeyNameInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyNameInput"></a>

```java
public java.lang.String getManagedKeyNameInput();
```

- *Type:* java.lang.String

---

##### `minDecryptionVersionInput`<sup>Optional</sup> <a name="minDecryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput"></a>

```java
public java.lang.Number getMinDecryptionVersionInput();
```

- *Type:* java.lang.Number

---

##### `minEncryptionVersionInput`<sup>Optional</sup> <a name="minEncryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput"></a>

```java
public java.lang.Number getMinEncryptionVersionInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `parameterSetInput`<sup>Optional</sup> <a name="parameterSetInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSetInput"></a>

```java
public java.lang.String getParameterSetInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `allowPlaintextBackup`<sup>Required</sup> <a name="allowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup"></a>

```java
public java.lang.Boolean|IResolvable getAllowPlaintextBackup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoRotatePeriod`<sup>Required</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod"></a>

```java
public java.lang.Number getAutoRotatePeriod();
```

- *Type:* java.lang.Number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `convergentEncryption`<sup>Required</sup> <a name="convergentEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption"></a>

```java
public java.lang.Boolean|IResolvable getConvergentEncryption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `derived`<sup>Required</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived"></a>

```java
public java.lang.Boolean|IResolvable getDerived();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable"></a>

```java
public java.lang.Boolean|IResolvable getExportable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hybridKeyTypeEc`<sup>Required</sup> <a name="hybridKeyTypeEc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEc"></a>

```java
public java.lang.String getHybridKeyTypeEc();
```

- *Type:* java.lang.String

---

##### `hybridKeyTypePqc`<sup>Required</sup> <a name="hybridKeyTypePqc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqc"></a>

```java
public java.lang.String getHybridKeyTypePqc();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySize"></a>

```java
public java.lang.Number getKeySize();
```

- *Type:* java.lang.Number

---

##### `managedKeyId`<sup>Required</sup> <a name="managedKeyId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyId"></a>

```java
public java.lang.String getManagedKeyId();
```

- *Type:* java.lang.String

---

##### `managedKeyName`<sup>Required</sup> <a name="managedKeyName" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyName"></a>

```java
public java.lang.String getManagedKeyName();
```

- *Type:* java.lang.String

---

##### `minDecryptionVersion`<sup>Required</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion"></a>

```java
public java.lang.Number getMinDecryptionVersion();
```

- *Type:* java.lang.Number

---

##### `minEncryptionVersion`<sup>Required</sup> <a name="minEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion"></a>

```java
public java.lang.Number getMinEncryptionVersion();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `parameterSet`<sup>Required</sup> <a name="parameterSet" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSet"></a>

```java
public java.lang.String getParameterSet();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendKeyConfig <a name="TransitSecretBackendKeyConfig" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.transit_secret_backend_key.TransitSecretBackendKeyConfig;

TransitSecretBackendKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .name(java.lang.String)
//  .allowPlaintextBackup(java.lang.Boolean|IResolvable)
//  .autoRotatePeriod(java.lang.Number)
//  .context(java.lang.String)
//  .convergentEncryption(java.lang.Boolean|IResolvable)
//  .deletionAllowed(java.lang.Boolean|IResolvable)
//  .derived(java.lang.Boolean|IResolvable)
//  .exportable(java.lang.Boolean|IResolvable)
//  .hybridKeyTypeEc(java.lang.String)
//  .hybridKeyTypePqc(java.lang.String)
//  .id(java.lang.String)
//  .keySize(java.lang.Number)
//  .managedKeyId(java.lang.String)
//  .managedKeyName(java.lang.String)
//  .minDecryptionVersion(java.lang.Number)
//  .minEncryptionVersion(java.lang.Number)
//  .namespace(java.lang.String)
//  .parameterSet(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The Transit secret backend the resource belongs to. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the encryption key to create. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>java.lang.Number</code> | Amount of seconds the key should live before being automatically rotated. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.context">context</a></code> | <code>java.lang.String</code> | Base64 encoded context for key derivation. Required if derived is set to true. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption">convergentEncryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived">derived</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if key derivation is to be used. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable">exportable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables keys to be exportable. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypeEc">hybridKeyTypeEc</a></code> | <code>java.lang.String</code> | The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypePqc">hybridKeyTypePqc</a></code> | <code>java.lang.String</code> | The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.keySize">keySize</a></code> | <code>java.lang.Number</code> | The key size in bytes for algorithms that allow variable key sizes. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyId">managedKeyId</a></code> | <code>java.lang.String</code> | The UUID of the managed key to use when the key type is managed_key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyName">managedKeyName</a></code> | <code>java.lang.String</code> | The name of the managed key to use when the key type is managed_key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion">minEncryptionVersion</a></code> | <code>java.lang.Number</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.parameterSet">parameterSet</a></code> | <code>java.lang.String</code> | The parameter set to use for ML-DSA. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of key to create. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The Transit secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#backend TransitSecretBackendKey#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the encryption key to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#name TransitSecretBackendKey#name}

---

##### `allowPlaintextBackup`<sup>Optional</sup> <a name="allowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup"></a>

```java
public java.lang.Boolean|IResolvable getAllowPlaintextBackup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod"></a>

```java
public java.lang.Number getAutoRotatePeriod();
```

- *Type:* java.lang.Number

Amount of seconds the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

Base64 encoded context for key derivation. Required if derived is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#context TransitSecretBackendKey#context}

---

##### `convergentEncryption`<sup>Optional</sup> <a name="convergentEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption"></a>

```java
public java.lang.Boolean|IResolvable getConvergentEncryption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext.

This requires derived to be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived"></a>

```java
public java.lang.Boolean|IResolvable getDerived();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if key derivation is to be used.

If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#derived TransitSecretBackendKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable"></a>

```java
public java.lang.Boolean|IResolvable getExportable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables keys to be exportable.

This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}

---

##### `hybridKeyTypeEc`<sup>Optional</sup> <a name="hybridKeyTypeEc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypeEc"></a>

```java
public java.lang.String getHybridKeyTypeEc();
```

- *Type:* java.lang.String

The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#hybrid_key_type_ec TransitSecretBackendKey#hybrid_key_type_ec}

---

##### `hybridKeyTypePqc`<sup>Optional</sup> <a name="hybridKeyTypePqc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypePqc"></a>

```java
public java.lang.String getHybridKeyTypePqc();
```

- *Type:* java.lang.String

The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#hybrid_key_type_pqc TransitSecretBackendKey#hybrid_key_type_pqc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.keySize"></a>

```java
public java.lang.Number getKeySize();
```

- *Type:* java.lang.Number

The key size in bytes for algorithms that allow variable key sizes.

Currently only applicable to HMAC; this value must be between 32 and 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#key_size TransitSecretBackendKey#key_size}

---

##### `managedKeyId`<sup>Optional</sup> <a name="managedKeyId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyId"></a>

```java
public java.lang.String getManagedKeyId();
```

- *Type:* java.lang.String

The UUID of the managed key to use when the key type is managed_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#managed_key_id TransitSecretBackendKey#managed_key_id}

---

##### `managedKeyName`<sup>Optional</sup> <a name="managedKeyName" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyName"></a>

```java
public java.lang.String getManagedKeyName();
```

- *Type:* java.lang.String

The name of the managed key to use when the key type is managed_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#managed_key_name TransitSecretBackendKey#managed_key_name}

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion"></a>

```java
public java.lang.Number getMinDecryptionVersion();
```

- *Type:* java.lang.Number

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}

---

##### `minEncryptionVersion`<sup>Optional</sup> <a name="minEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion"></a>

```java
public java.lang.Number getMinEncryptionVersion();
```

- *Type:* java.lang.Number

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}

---

##### `parameterSet`<sup>Optional</sup> <a name="parameterSet" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.parameterSet"></a>

```java
public java.lang.String getParameterSet();
```

- *Type:* java.lang.String

The parameter set to use for ML-DSA.

Required for ML-DSA and hybrid keys.  Valid values for ML-DSA are `44`, `65`, and `87`. Valid values for SLH-DSA are `slh-dsa-sha2-128s`, `slh-dsa-shake-128s`, `slh-dsa-sha2-128f`, `slh-dsa-shake-128`, `slh-dsa-sha2-192s`, `slh-dsa-shake-192s`, `slh-dsa-sha2-192f`, `slh-dsa-shake-192f`, `slh-dsa-sha2-256s`, `slh-dsa-shake-256s`, `slh-dsa-sha2-256f`, and `slh-dsa-shake-256f`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#parameter_set TransitSecretBackendKey#parameter_set}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the type of key to create.

The currently-supported types are: `aes128-gcm96`, `aes256-gcm96` (default), `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `hmac`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `managed_key`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`, `ml-dsa`, `hybrid`, and `slh-dsa`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/transit_secret_backend_key#type TransitSecretBackendKey#type}

---



